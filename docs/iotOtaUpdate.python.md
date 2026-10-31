# `iotOtaUpdate` Submodule <a name="`iotOtaUpdate` Submodule" id="@cdktn/provider-awscc.iotOtaUpdate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotOtaUpdate <a name="IotOtaUpdate" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update awscc_iot_ota_update}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  files: IResolvable | typing.List[IotOtaUpdateFiles],
  ota_update_id: str,
  targets: typing.List[str],
  additional_parameters: typing.Mapping[str] = None,
  aws_job_abort_config: IotOtaUpdateAwsJobAbortConfig = None,
  aws_job_executions_rollout_config: IotOtaUpdateAwsJobExecutionsRolloutConfig = None,
  aws_job_presigned_url_config: IotOtaUpdateAwsJobPresignedUrlConfig = None,
  aws_job_timeout_config: IotOtaUpdateAwsJobTimeoutConfig = None,
  description: str = None,
  protocols: typing.List[str] = None,
  role_arn: str = None,
  tags: IResolvable | typing.List[IotOtaUpdateTags] = None,
  target_selection: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.files">files</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles">IotOtaUpdateFiles</a>]</code> | The files to be streamed by the OTA update. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.otaUpdateId">ota_update_id</a></code> | <code>str</code> | The ID of the OTA update to be created. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.targets">targets</a></code> | <code>typing.List[str]</code> | The devices targeted to receive OTA updates. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.additionalParameters">additional_parameters</a></code> | <code>typing.Mapping[str]</code> | A list of additional OTA update parameters, which are name-value pairs. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.awsJobAbortConfig">aws_job_abort_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig">IotOtaUpdateAwsJobAbortConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_abort_config IotOtaUpdate#aws_job_abort_config}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.awsJobExecutionsRolloutConfig">aws_job_executions_rollout_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig">IotOtaUpdateAwsJobExecutionsRolloutConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_executions_rollout_config IotOtaUpdate#aws_job_executions_rollout_config}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.awsJobPresignedUrlConfig">aws_job_presigned_url_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig">IotOtaUpdateAwsJobPresignedUrlConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_presigned_url_config IotOtaUpdate#aws_job_presigned_url_config}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.awsJobTimeoutConfig">aws_job_timeout_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig">IotOtaUpdateAwsJobTimeoutConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_timeout_config IotOtaUpdate#aws_job_timeout_config}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the OTA update. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.protocols">protocols</a></code> | <code>typing.List[str]</code> | The protocol used to transfer the OTA update image. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | The IAM role that grants AWS IoT Core access to the Amazon S3, IoT jobs and AWS Code Signing resources to create an OTA update job. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags">IotOtaUpdateTags</a>]</code> | Metadata which can be used to manage updates. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.targetSelection">target_selection</a></code> | <code>str</code> | Specifies whether the update will continue to run (CONTINUOUS), or will be complete after all things specified as targets have completed the update (SNAPSHOT). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.files"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles">IotOtaUpdateFiles</a>]

The files to be streamed by the OTA update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#files IotOtaUpdate#files}

---

##### `ota_update_id`<sup>Required</sup> <a name="ota_update_id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.otaUpdateId"></a>

- *Type:* str

The ID of the OTA update to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#ota_update_id IotOtaUpdate#ota_update_id}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.targets"></a>

- *Type:* typing.List[str]

The devices targeted to receive OTA updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#targets IotOtaUpdate#targets}

---

##### `additional_parameters`<sup>Optional</sup> <a name="additional_parameters" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.additionalParameters"></a>

- *Type:* typing.Mapping[str]

A list of additional OTA update parameters, which are name-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#additional_parameters IotOtaUpdate#additional_parameters}

---

##### `aws_job_abort_config`<sup>Optional</sup> <a name="aws_job_abort_config" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.awsJobAbortConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig">IotOtaUpdateAwsJobAbortConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_abort_config IotOtaUpdate#aws_job_abort_config}.

---

##### `aws_job_executions_rollout_config`<sup>Optional</sup> <a name="aws_job_executions_rollout_config" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.awsJobExecutionsRolloutConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig">IotOtaUpdateAwsJobExecutionsRolloutConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_executions_rollout_config IotOtaUpdate#aws_job_executions_rollout_config}.

---

##### `aws_job_presigned_url_config`<sup>Optional</sup> <a name="aws_job_presigned_url_config" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.awsJobPresignedUrlConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig">IotOtaUpdateAwsJobPresignedUrlConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_presigned_url_config IotOtaUpdate#aws_job_presigned_url_config}.

---

##### `aws_job_timeout_config`<sup>Optional</sup> <a name="aws_job_timeout_config" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.awsJobTimeoutConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig">IotOtaUpdateAwsJobTimeoutConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_timeout_config IotOtaUpdate#aws_job_timeout_config}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.description"></a>

- *Type:* str

The description of the OTA update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#description IotOtaUpdate#description}

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.protocols"></a>

- *Type:* typing.List[str]

The protocol used to transfer the OTA update image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#protocols IotOtaUpdate#protocols}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.roleArn"></a>

- *Type:* str

The IAM role that grants AWS IoT Core access to the Amazon S3, IoT jobs and AWS Code Signing resources to create an OTA update job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#role_arn IotOtaUpdate#role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags">IotOtaUpdateTags</a>]

Metadata which can be used to manage updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#tags IotOtaUpdate#tags}

---

##### `target_selection`<sup>Optional</sup> <a name="target_selection" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.targetSelection"></a>

- *Type:* str

Specifies whether the update will continue to run (CONTINUOUS), or will be complete after all things specified as targets have completed the update (SNAPSHOT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#target_selection IotOtaUpdate#target_selection}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobAbortConfig">put_aws_job_abort_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobExecutionsRolloutConfig">put_aws_job_executions_rollout_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobPresignedUrlConfig">put_aws_job_presigned_url_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobTimeoutConfig">put_aws_job_timeout_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putFiles">put_files</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAdditionalParameters">reset_additional_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobAbortConfig">reset_aws_job_abort_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobExecutionsRolloutConfig">reset_aws_job_executions_rollout_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobPresignedUrlConfig">reset_aws_job_presigned_url_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobTimeoutConfig">reset_aws_job_timeout_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetProtocols">reset_protocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetTargetSelection">reset_target_selection</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_aws_job_abort_config` <a name="put_aws_job_abort_config" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobAbortConfig"></a>

```python
def put_aws_job_abort_config(
  abort_criteria_list: IResolvable | typing.List[IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct] = None
) -> None
```

###### `abort_criteria_list`<sup>Optional</sup> <a name="abort_criteria_list" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobAbortConfig.parameter.abortCriteriaList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct</a>]

The list of criteria that determine when and how to abort the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#abort_criteria_list IotOtaUpdate#abort_criteria_list}

---

##### `put_aws_job_executions_rollout_config` <a name="put_aws_job_executions_rollout_config" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobExecutionsRolloutConfig"></a>

```python
def put_aws_job_executions_rollout_config(
  exponential_rate: IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate = None,
  maximum_per_minute: typing.Union[int, float] = None
) -> None
```

###### `exponential_rate`<sup>Optional</sup> <a name="exponential_rate" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobExecutionsRolloutConfig.parameter.exponentialRate"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#exponential_rate IotOtaUpdate#exponential_rate}.

---

###### `maximum_per_minute`<sup>Optional</sup> <a name="maximum_per_minute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobExecutionsRolloutConfig.parameter.maximumPerMinute"></a>

- *Type:* typing.Union[int, float]

The maximum number of OTA update job executions started per minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#maximum_per_minute IotOtaUpdate#maximum_per_minute}

---

##### `put_aws_job_presigned_url_config` <a name="put_aws_job_presigned_url_config" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobPresignedUrlConfig"></a>

```python
def put_aws_job_presigned_url_config(
  expires_in_sec: typing.Union[int, float] = None
) -> None
```

###### `expires_in_sec`<sup>Optional</sup> <a name="expires_in_sec" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobPresignedUrlConfig.parameter.expiresInSec"></a>

- *Type:* typing.Union[int, float]

How long (in seconds) pre-signed URLs are valid.

Valid values are 60 - 3600, the default value is 1800 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#expires_in_sec IotOtaUpdate#expires_in_sec}

---

##### `put_aws_job_timeout_config` <a name="put_aws_job_timeout_config" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobTimeoutConfig"></a>

```python
def put_aws_job_timeout_config(
  in_progress_timeout_in_minutes: typing.Union[int, float] = None
) -> None
```

###### `in_progress_timeout_in_minutes`<sup>Optional</sup> <a name="in_progress_timeout_in_minutes" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobTimeoutConfig.parameter.inProgressTimeoutInMinutes"></a>

- *Type:* typing.Union[int, float]

Specifies the amount of time, in minutes, this device has to finish execution of this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#in_progress_timeout_in_minutes IotOtaUpdate#in_progress_timeout_in_minutes}

---

##### `put_files` <a name="put_files" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putFiles"></a>

```python
def put_files(
  value: IResolvable | typing.List[IotOtaUpdateFiles]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putFiles.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles">IotOtaUpdateFiles</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IotOtaUpdateTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags">IotOtaUpdateTags</a>]

---

##### `reset_additional_parameters` <a name="reset_additional_parameters" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAdditionalParameters"></a>

```python
def reset_additional_parameters() -> None
```

##### `reset_aws_job_abort_config` <a name="reset_aws_job_abort_config" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobAbortConfig"></a>

```python
def reset_aws_job_abort_config() -> None
```

##### `reset_aws_job_executions_rollout_config` <a name="reset_aws_job_executions_rollout_config" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobExecutionsRolloutConfig"></a>

```python
def reset_aws_job_executions_rollout_config() -> None
```

##### `reset_aws_job_presigned_url_config` <a name="reset_aws_job_presigned_url_config" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobPresignedUrlConfig"></a>

```python
def reset_aws_job_presigned_url_config() -> None
```

##### `reset_aws_job_timeout_config` <a name="reset_aws_job_timeout_config" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobTimeoutConfig"></a>

```python
def reset_aws_job_timeout_config() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_protocols` <a name="reset_protocols" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetProtocols"></a>

```python
def reset_protocols() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_target_selection` <a name="reset_target_selection" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetTargetSelection"></a>

```python
def reset_target_selection() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotOtaUpdate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isConstruct"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotOtaUpdate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotOtaUpdate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotOtaUpdate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotOtaUpdate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobAbortConfig">aws_job_abort_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference">IotOtaUpdateAwsJobAbortConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobExecutionsRolloutConfig">aws_job_executions_rollout_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference">IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobPresignedUrlConfig">aws_job_presigned_url_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference">IotOtaUpdateAwsJobPresignedUrlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobTimeoutConfig">aws_job_timeout_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference">IotOtaUpdateAwsJobTimeoutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.files">files</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList">IotOtaUpdateFilesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.lastModifiedDate">last_modified_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateArn">ota_update_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateStatus">ota_update_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList">IotOtaUpdateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.additionalParametersInput">additional_parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobAbortConfigInput">aws_job_abort_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig">IotOtaUpdateAwsJobAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobExecutionsRolloutConfigInput">aws_job_executions_rollout_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig">IotOtaUpdateAwsJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobPresignedUrlConfigInput">aws_job_presigned_url_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig">IotOtaUpdateAwsJobPresignedUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobTimeoutConfigInput">aws_job_timeout_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig">IotOtaUpdateAwsJobTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.filesInput">files_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles">IotOtaUpdateFiles</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateIdInput">ota_update_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.protocolsInput">protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags">IotOtaUpdateTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targetSelectionInput">target_selection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targetsInput">targets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.additionalParameters">additional_parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateId">ota_update_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targets">targets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targetSelection">target_selection</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `aws_job_abort_config`<sup>Required</sup> <a name="aws_job_abort_config" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobAbortConfig"></a>

```python
aws_job_abort_config: IotOtaUpdateAwsJobAbortConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference">IotOtaUpdateAwsJobAbortConfigOutputReference</a>

---

##### `aws_job_executions_rollout_config`<sup>Required</sup> <a name="aws_job_executions_rollout_config" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobExecutionsRolloutConfig"></a>

```python
aws_job_executions_rollout_config: IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference">IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference</a>

---

##### `aws_job_presigned_url_config`<sup>Required</sup> <a name="aws_job_presigned_url_config" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobPresignedUrlConfig"></a>

```python
aws_job_presigned_url_config: IotOtaUpdateAwsJobPresignedUrlConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference">IotOtaUpdateAwsJobPresignedUrlConfigOutputReference</a>

---

##### `aws_job_timeout_config`<sup>Required</sup> <a name="aws_job_timeout_config" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobTimeoutConfig"></a>

```python
aws_job_timeout_config: IotOtaUpdateAwsJobTimeoutConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference">IotOtaUpdateAwsJobTimeoutConfigOutputReference</a>

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.files"></a>

```python
files: IotOtaUpdateFilesList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList">IotOtaUpdateFilesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_date`<sup>Required</sup> <a name="last_modified_date" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.lastModifiedDate"></a>

```python
last_modified_date: str
```

- *Type:* str

---

##### `ota_update_arn`<sup>Required</sup> <a name="ota_update_arn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateArn"></a>

```python
ota_update_arn: str
```

- *Type:* str

---

##### `ota_update_status`<sup>Required</sup> <a name="ota_update_status" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateStatus"></a>

```python
ota_update_status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.tags"></a>

```python
tags: IotOtaUpdateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList">IotOtaUpdateTagsList</a>

---

##### `additional_parameters_input`<sup>Optional</sup> <a name="additional_parameters_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.additionalParametersInput"></a>

```python
additional_parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `aws_job_abort_config_input`<sup>Optional</sup> <a name="aws_job_abort_config_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobAbortConfigInput"></a>

```python
aws_job_abort_config_input: IResolvable | IotOtaUpdateAwsJobAbortConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig">IotOtaUpdateAwsJobAbortConfig</a>

---

##### `aws_job_executions_rollout_config_input`<sup>Optional</sup> <a name="aws_job_executions_rollout_config_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobExecutionsRolloutConfigInput"></a>

```python
aws_job_executions_rollout_config_input: IResolvable | IotOtaUpdateAwsJobExecutionsRolloutConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig">IotOtaUpdateAwsJobExecutionsRolloutConfig</a>

---

##### `aws_job_presigned_url_config_input`<sup>Optional</sup> <a name="aws_job_presigned_url_config_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobPresignedUrlConfigInput"></a>

```python
aws_job_presigned_url_config_input: IResolvable | IotOtaUpdateAwsJobPresignedUrlConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig">IotOtaUpdateAwsJobPresignedUrlConfig</a>

---

##### `aws_job_timeout_config_input`<sup>Optional</sup> <a name="aws_job_timeout_config_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobTimeoutConfigInput"></a>

```python
aws_job_timeout_config_input: IResolvable | IotOtaUpdateAwsJobTimeoutConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig">IotOtaUpdateAwsJobTimeoutConfig</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `files_input`<sup>Optional</sup> <a name="files_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.filesInput"></a>

```python
files_input: IResolvable | typing.List[IotOtaUpdateFiles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles">IotOtaUpdateFiles</a>]

---

##### `ota_update_id_input`<sup>Optional</sup> <a name="ota_update_id_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateIdInput"></a>

```python
ota_update_id_input: str
```

- *Type:* str

---

##### `protocols_input`<sup>Optional</sup> <a name="protocols_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.protocolsInput"></a>

```python
protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IotOtaUpdateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags">IotOtaUpdateTags</a>]

---

##### `target_selection_input`<sup>Optional</sup> <a name="target_selection_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targetSelectionInput"></a>

```python
target_selection_input: str
```

- *Type:* str

---

##### `targets_input`<sup>Optional</sup> <a name="targets_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targetsInput"></a>

```python
targets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `additional_parameters`<sup>Required</sup> <a name="additional_parameters" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.additionalParameters"></a>

```python
additional_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `ota_update_id`<sup>Required</sup> <a name="ota_update_id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateId"></a>

```python
ota_update_id: str
```

- *Type:* str

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targets"></a>

```python
targets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_selection`<sup>Required</sup> <a name="target_selection" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targetSelection"></a>

```python
target_selection: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotOtaUpdateAwsJobAbortConfig <a name="IotOtaUpdateAwsJobAbortConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig(
  abort_criteria_list: IResolvable | typing.List[IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig.property.abortCriteriaList">abort_criteria_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct</a>]</code> | The list of criteria that determine when and how to abort the job. |

---

##### `abort_criteria_list`<sup>Optional</sup> <a name="abort_criteria_list" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig.property.abortCriteriaList"></a>

```python
abort_criteria_list: IResolvable | typing.List[IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct</a>]

The list of criteria that determine when and how to abort the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#abort_criteria_list IotOtaUpdate#abort_criteria_list}

---

### IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct <a name="IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct(
  action: str = None,
  failure_type: str = None,
  min_number_of_executed_things: typing.Union[int, float] = None,
  threshold_percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.action">action</a></code> | <code>str</code> | The type of job action to take to initiate the job abort. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.failureType">failure_type</a></code> | <code>str</code> | The type of job execution failures that can initiate a job abort. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.minNumberOfExecutedThings">min_number_of_executed_things</a></code> | <code>typing.Union[int, float]</code> | The minimum number of things which must receive job execution notifications before the job can be aborted. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.thresholdPercentage">threshold_percentage</a></code> | <code>typing.Union[int, float]</code> | The minimum percentage of job execution failures that must occur to initiate the job abort. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.action"></a>

```python
action: str
```

- *Type:* str

The type of job action to take to initiate the job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#action IotOtaUpdate#action}

---

##### `failure_type`<sup>Optional</sup> <a name="failure_type" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.failureType"></a>

```python
failure_type: str
```

- *Type:* str

The type of job execution failures that can initiate a job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#failure_type IotOtaUpdate#failure_type}

---

##### `min_number_of_executed_things`<sup>Optional</sup> <a name="min_number_of_executed_things" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.minNumberOfExecutedThings"></a>

```python
min_number_of_executed_things: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of things which must receive job execution notifications before the job can be aborted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#min_number_of_executed_things IotOtaUpdate#min_number_of_executed_things}

---

##### `threshold_percentage`<sup>Optional</sup> <a name="threshold_percentage" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.thresholdPercentage"></a>

```python
threshold_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum percentage of job execution failures that must occur to initiate the job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#threshold_percentage IotOtaUpdate#threshold_percentage}

---

### IotOtaUpdateAwsJobExecutionsRolloutConfig <a name="IotOtaUpdateAwsJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig(
  exponential_rate: IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate = None,
  maximum_per_minute: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig.property.exponentialRate">exponential_rate</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#exponential_rate IotOtaUpdate#exponential_rate}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig.property.maximumPerMinute">maximum_per_minute</a></code> | <code>typing.Union[int, float]</code> | The maximum number of OTA update job executions started per minute. |

---

##### `exponential_rate`<sup>Optional</sup> <a name="exponential_rate" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig.property.exponentialRate"></a>

```python
exponential_rate: IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#exponential_rate IotOtaUpdate#exponential_rate}.

---

##### `maximum_per_minute`<sup>Optional</sup> <a name="maximum_per_minute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig.property.maximumPerMinute"></a>

```python
maximum_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of OTA update job executions started per minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#maximum_per_minute IotOtaUpdate#maximum_per_minute}

---

### IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate <a name="IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate(
  base_rate_per_minute: typing.Union[int, float] = None,
  increment_factor: typing.Union[int, float] = None,
  rate_increase_criteria: IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate.property.baseRatePerMinute">base_rate_per_minute</a></code> | <code>typing.Union[int, float]</code> | The minimum number of things that will be notified of a pending job, per minute, at the start of the job rollout. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate.property.incrementFactor">increment_factor</a></code> | <code>typing.Union[int, float]</code> | The rate of increase for a job rollout. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate.property.rateIncreaseCriteria">rate_increase_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#rate_increase_criteria IotOtaUpdate#rate_increase_criteria}. |

---

##### `base_rate_per_minute`<sup>Optional</sup> <a name="base_rate_per_minute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate.property.baseRatePerMinute"></a>

```python
base_rate_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of things that will be notified of a pending job, per minute, at the start of the job rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#base_rate_per_minute IotOtaUpdate#base_rate_per_minute}

---

##### `increment_factor`<sup>Optional</sup> <a name="increment_factor" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate.property.incrementFactor"></a>

```python
increment_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The rate of increase for a job rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#increment_factor IotOtaUpdate#increment_factor}

---

##### `rate_increase_criteria`<sup>Optional</sup> <a name="rate_increase_criteria" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate.property.rateIncreaseCriteria"></a>

```python
rate_increase_criteria: IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#rate_increase_criteria IotOtaUpdate#rate_increase_criteria}.

---

### IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria <a name="IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria(
  number_of_notified_things: typing.Union[int, float] = None,
  number_of_succeeded_things: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfNotifiedThings">number_of_notified_things</a></code> | <code>typing.Union[int, float]</code> | When this number of things have been notified, it will initiate an increase in the rollout rate. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfSucceededThings">number_of_succeeded_things</a></code> | <code>typing.Union[int, float]</code> | When this number of things have succeeded in their job execution, it will initiate an increase in the rollout rate. |

---

##### `number_of_notified_things`<sup>Optional</sup> <a name="number_of_notified_things" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfNotifiedThings"></a>

```python
number_of_notified_things: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

When this number of things have been notified, it will initiate an increase in the rollout rate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#number_of_notified_things IotOtaUpdate#number_of_notified_things}

---

##### `number_of_succeeded_things`<sup>Optional</sup> <a name="number_of_succeeded_things" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfSucceededThings"></a>

```python
number_of_succeeded_things: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

When this number of things have succeeded in their job execution, it will initiate an increase in the rollout rate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#number_of_succeeded_things IotOtaUpdate#number_of_succeeded_things}

---

### IotOtaUpdateAwsJobPresignedUrlConfig <a name="IotOtaUpdateAwsJobPresignedUrlConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig(
  expires_in_sec: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig.property.expiresInSec">expires_in_sec</a></code> | <code>typing.Union[int, float]</code> | How long (in seconds) pre-signed URLs are valid. |

---

##### `expires_in_sec`<sup>Optional</sup> <a name="expires_in_sec" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig.property.expiresInSec"></a>

```python
expires_in_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How long (in seconds) pre-signed URLs are valid.

Valid values are 60 - 3600, the default value is 1800 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#expires_in_sec IotOtaUpdate#expires_in_sec}

---

### IotOtaUpdateAwsJobTimeoutConfig <a name="IotOtaUpdateAwsJobTimeoutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig(
  in_progress_timeout_in_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig.property.inProgressTimeoutInMinutes">in_progress_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Specifies the amount of time, in minutes, this device has to finish execution of this job. |

---

##### `in_progress_timeout_in_minutes`<sup>Optional</sup> <a name="in_progress_timeout_in_minutes" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig.property.inProgressTimeoutInMinutes"></a>

```python
in_progress_timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the amount of time, in minutes, this device has to finish execution of this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#in_progress_timeout_in_minutes IotOtaUpdate#in_progress_timeout_in_minutes}

---

### IotOtaUpdateConfig <a name="IotOtaUpdateConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  files: IResolvable | typing.List[IotOtaUpdateFiles],
  ota_update_id: str,
  targets: typing.List[str],
  additional_parameters: typing.Mapping[str] = None,
  aws_job_abort_config: IotOtaUpdateAwsJobAbortConfig = None,
  aws_job_executions_rollout_config: IotOtaUpdateAwsJobExecutionsRolloutConfig = None,
  aws_job_presigned_url_config: IotOtaUpdateAwsJobPresignedUrlConfig = None,
  aws_job_timeout_config: IotOtaUpdateAwsJobTimeoutConfig = None,
  description: str = None,
  protocols: typing.List[str] = None,
  role_arn: str = None,
  tags: IResolvable | typing.List[IotOtaUpdateTags] = None,
  target_selection: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.files">files</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles">IotOtaUpdateFiles</a>]</code> | The files to be streamed by the OTA update. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.otaUpdateId">ota_update_id</a></code> | <code>str</code> | The ID of the OTA update to be created. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.targets">targets</a></code> | <code>typing.List[str]</code> | The devices targeted to receive OTA updates. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.additionalParameters">additional_parameters</a></code> | <code>typing.Mapping[str]</code> | A list of additional OTA update parameters, which are name-value pairs. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobAbortConfig">aws_job_abort_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig">IotOtaUpdateAwsJobAbortConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_abort_config IotOtaUpdate#aws_job_abort_config}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobExecutionsRolloutConfig">aws_job_executions_rollout_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig">IotOtaUpdateAwsJobExecutionsRolloutConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_executions_rollout_config IotOtaUpdate#aws_job_executions_rollout_config}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobPresignedUrlConfig">aws_job_presigned_url_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig">IotOtaUpdateAwsJobPresignedUrlConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_presigned_url_config IotOtaUpdate#aws_job_presigned_url_config}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobTimeoutConfig">aws_job_timeout_config</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig">IotOtaUpdateAwsJobTimeoutConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_timeout_config IotOtaUpdate#aws_job_timeout_config}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.description">description</a></code> | <code>str</code> | The description of the OTA update. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | The protocol used to transfer the OTA update image. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The IAM role that grants AWS IoT Core access to the Amazon S3, IoT jobs and AWS Code Signing resources to create an OTA update job. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags">IotOtaUpdateTags</a>]</code> | Metadata which can be used to manage updates. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.targetSelection">target_selection</a></code> | <code>str</code> | Specifies whether the update will continue to run (CONTINUOUS), or will be complete after all things specified as targets have completed the update (SNAPSHOT). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.files"></a>

```python
files: IResolvable | typing.List[IotOtaUpdateFiles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles">IotOtaUpdateFiles</a>]

The files to be streamed by the OTA update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#files IotOtaUpdate#files}

---

##### `ota_update_id`<sup>Required</sup> <a name="ota_update_id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.otaUpdateId"></a>

```python
ota_update_id: str
```

- *Type:* str

The ID of the OTA update to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#ota_update_id IotOtaUpdate#ota_update_id}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.targets"></a>

```python
targets: typing.List[str]
```

- *Type:* typing.List[str]

The devices targeted to receive OTA updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#targets IotOtaUpdate#targets}

---

##### `additional_parameters`<sup>Optional</sup> <a name="additional_parameters" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.additionalParameters"></a>

```python
additional_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A list of additional OTA update parameters, which are name-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#additional_parameters IotOtaUpdate#additional_parameters}

---

##### `aws_job_abort_config`<sup>Optional</sup> <a name="aws_job_abort_config" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobAbortConfig"></a>

```python
aws_job_abort_config: IotOtaUpdateAwsJobAbortConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig">IotOtaUpdateAwsJobAbortConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_abort_config IotOtaUpdate#aws_job_abort_config}.

---

##### `aws_job_executions_rollout_config`<sup>Optional</sup> <a name="aws_job_executions_rollout_config" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobExecutionsRolloutConfig"></a>

```python
aws_job_executions_rollout_config: IotOtaUpdateAwsJobExecutionsRolloutConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig">IotOtaUpdateAwsJobExecutionsRolloutConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_executions_rollout_config IotOtaUpdate#aws_job_executions_rollout_config}.

---

##### `aws_job_presigned_url_config`<sup>Optional</sup> <a name="aws_job_presigned_url_config" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobPresignedUrlConfig"></a>

```python
aws_job_presigned_url_config: IotOtaUpdateAwsJobPresignedUrlConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig">IotOtaUpdateAwsJobPresignedUrlConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_presigned_url_config IotOtaUpdate#aws_job_presigned_url_config}.

---

##### `aws_job_timeout_config`<sup>Optional</sup> <a name="aws_job_timeout_config" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobTimeoutConfig"></a>

```python
aws_job_timeout_config: IotOtaUpdateAwsJobTimeoutConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig">IotOtaUpdateAwsJobTimeoutConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_timeout_config IotOtaUpdate#aws_job_timeout_config}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the OTA update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#description IotOtaUpdate#description}

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

The protocol used to transfer the OTA update image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#protocols IotOtaUpdate#protocols}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The IAM role that grants AWS IoT Core access to the Amazon S3, IoT jobs and AWS Code Signing resources to create an OTA update job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#role_arn IotOtaUpdate#role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IotOtaUpdateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags">IotOtaUpdateTags</a>]

Metadata which can be used to manage updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#tags IotOtaUpdate#tags}

---

##### `target_selection`<sup>Optional</sup> <a name="target_selection" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.targetSelection"></a>

```python
target_selection: str
```

- *Type:* str

Specifies whether the update will continue to run (CONTINUOUS), or will be complete after all things specified as targets have completed the update (SNAPSHOT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#target_selection IotOtaUpdate#target_selection}

---

### IotOtaUpdateFiles <a name="IotOtaUpdateFiles" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateFiles(
  attributes: typing.Mapping[str] = None,
  code_signing: IotOtaUpdateFilesCodeSigning = None,
  file_location: IotOtaUpdateFilesFileLocation = None,
  file_name: str = None,
  file_type: typing.Union[int, float] = None,
  file_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.attributes">attributes</a></code> | <code>typing.Mapping[str]</code> | A list of name-attribute pairs. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.codeSigning">code_signing</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning">IotOtaUpdateFilesCodeSigning</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#code_signing IotOtaUpdate#code_signing}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileLocation">file_location</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation">IotOtaUpdateFilesFileLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#file_location IotOtaUpdate#file_location}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileName">file_name</a></code> | <code>str</code> | The name of the file. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileType">file_type</a></code> | <code>typing.Union[int, float]</code> | An integer value you can include in the job document to allow your devices to identify the type of file received from the cloud. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileVersion">file_version</a></code> | <code>str</code> | The file version. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.attributes"></a>

```python
attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A list of name-attribute pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#attributes IotOtaUpdate#attributes}

---

##### `code_signing`<sup>Optional</sup> <a name="code_signing" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.codeSigning"></a>

```python
code_signing: IotOtaUpdateFilesCodeSigning
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning">IotOtaUpdateFilesCodeSigning</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#code_signing IotOtaUpdate#code_signing}.

---

##### `file_location`<sup>Optional</sup> <a name="file_location" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileLocation"></a>

```python
file_location: IotOtaUpdateFilesFileLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation">IotOtaUpdateFilesFileLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#file_location IotOtaUpdate#file_location}.

---

##### `file_name`<sup>Optional</sup> <a name="file_name" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

The name of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#file_name IotOtaUpdate#file_name}

---

##### `file_type`<sup>Optional</sup> <a name="file_type" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileType"></a>

```python
file_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An integer value you can include in the job document to allow your devices to identify the type of file received from the cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#file_type IotOtaUpdate#file_type}

---

##### `file_version`<sup>Optional</sup> <a name="file_version" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileVersion"></a>

```python
file_version: str
```

- *Type:* str

The file version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#file_version IotOtaUpdate#file_version}

---

### IotOtaUpdateFilesCodeSigning <a name="IotOtaUpdateFilesCodeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateFilesCodeSigning(
  aws_signer_job_id: str = None,
  custom_code_signing: IotOtaUpdateFilesCodeSigningCustomCodeSigning = None,
  start_signing_job_parameter: IotOtaUpdateFilesCodeSigningStartSigningJobParameter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning.property.awsSignerJobId">aws_signer_job_id</a></code> | <code>str</code> | The ID of the AWSSignerJob which was created to sign the file. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning.property.customCodeSigning">custom_code_signing</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning">IotOtaUpdateFilesCodeSigningCustomCodeSigning</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#custom_code_signing IotOtaUpdate#custom_code_signing}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning.property.startSigningJobParameter">start_signing_job_parameter</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#start_signing_job_parameter IotOtaUpdate#start_signing_job_parameter}. |

---

##### `aws_signer_job_id`<sup>Optional</sup> <a name="aws_signer_job_id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning.property.awsSignerJobId"></a>

```python
aws_signer_job_id: str
```

- *Type:* str

The ID of the AWSSignerJob which was created to sign the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_signer_job_id IotOtaUpdate#aws_signer_job_id}

---

##### `custom_code_signing`<sup>Optional</sup> <a name="custom_code_signing" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning.property.customCodeSigning"></a>

```python
custom_code_signing: IotOtaUpdateFilesCodeSigningCustomCodeSigning
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning">IotOtaUpdateFilesCodeSigningCustomCodeSigning</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#custom_code_signing IotOtaUpdate#custom_code_signing}.

---

##### `start_signing_job_parameter`<sup>Optional</sup> <a name="start_signing_job_parameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning.property.startSigningJobParameter"></a>

```python
start_signing_job_parameter: IotOtaUpdateFilesCodeSigningStartSigningJobParameter
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#start_signing_job_parameter IotOtaUpdate#start_signing_job_parameter}.

---

### IotOtaUpdateFilesCodeSigningCustomCodeSigning <a name="IotOtaUpdateFilesCodeSigningCustomCodeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning(
  certificate_chain: IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain = None,
  hash_algorithm: str = None,
  signature: IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature = None,
  signature_algorithm: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.certificateChain">certificate_chain</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#certificate_chain IotOtaUpdate#certificate_chain}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.hashAlgorithm">hash_algorithm</a></code> | <code>str</code> | The hash algorithm used to code sign the file. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.signature">signature</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signature IotOtaUpdate#signature}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.signatureAlgorithm">signature_algorithm</a></code> | <code>str</code> | The signature algorithm used to code sign the file. |

---

##### `certificate_chain`<sup>Optional</sup> <a name="certificate_chain" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.certificateChain"></a>

```python
certificate_chain: IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#certificate_chain IotOtaUpdate#certificate_chain}.

---

##### `hash_algorithm`<sup>Optional</sup> <a name="hash_algorithm" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.hashAlgorithm"></a>

```python
hash_algorithm: str
```

- *Type:* str

The hash algorithm used to code sign the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#hash_algorithm IotOtaUpdate#hash_algorithm}

---

##### `signature`<sup>Optional</sup> <a name="signature" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.signature"></a>

```python
signature: IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signature IotOtaUpdate#signature}.

---

##### `signature_algorithm`<sup>Optional</sup> <a name="signature_algorithm" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.signatureAlgorithm"></a>

```python
signature_algorithm: str
```

- *Type:* str

The signature algorithm used to code sign the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signature_algorithm IotOtaUpdate#signature_algorithm}

---

### IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain <a name="IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain(
  certificate_name: str = None,
  inline_document: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain.property.certificateName">certificate_name</a></code> | <code>str</code> | The name of the certificate. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain.property.inlineDocument">inline_document</a></code> | <code>str</code> | A base64 encoded binary representation of the code signing certificate chain. |

---

##### `certificate_name`<sup>Optional</sup> <a name="certificate_name" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain.property.certificateName"></a>

```python
certificate_name: str
```

- *Type:* str

The name of the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#certificate_name IotOtaUpdate#certificate_name}

---

##### `inline_document`<sup>Optional</sup> <a name="inline_document" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain.property.inlineDocument"></a>

```python
inline_document: str
```

- *Type:* str

A base64 encoded binary representation of the code signing certificate chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#inline_document IotOtaUpdate#inline_document}

---

### IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature <a name="IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature(
  inline_document: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature.property.inlineDocument">inline_document</a></code> | <code>str</code> | A base64 encoded binary representation of the code signing signature. |

---

##### `inline_document`<sup>Optional</sup> <a name="inline_document" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature.property.inlineDocument"></a>

```python
inline_document: str
```

- *Type:* str

A base64 encoded binary representation of the code signing signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#inline_document IotOtaUpdate#inline_document}

---

### IotOtaUpdateFilesCodeSigningStartSigningJobParameter <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter(
  destination: IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination = None,
  signing_profile_name: str = None,
  signing_profile_parameter: IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#destination IotOtaUpdate#destination}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter.property.signingProfileName">signing_profile_name</a></code> | <code>str</code> | The code-signing profile name. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter.property.signingProfileParameter">signing_profile_parameter</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signing_profile_parameter IotOtaUpdate#signing_profile_parameter}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter.property.destination"></a>

```python
destination: IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#destination IotOtaUpdate#destination}.

---

##### `signing_profile_name`<sup>Optional</sup> <a name="signing_profile_name" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter.property.signingProfileName"></a>

```python
signing_profile_name: str
```

- *Type:* str

The code-signing profile name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signing_profile_name IotOtaUpdate#signing_profile_name}

---

##### `signing_profile_parameter`<sup>Optional</sup> <a name="signing_profile_parameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter.property.signingProfileParameter"></a>

```python
signing_profile_parameter: IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signing_profile_parameter IotOtaUpdate#signing_profile_parameter}.

---

### IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination(
  s3_destination: IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination.property.s3Destination">s3_destination</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#s3_destination IotOtaUpdate#s3_destination}. |

---

##### `s3_destination`<sup>Optional</sup> <a name="s3_destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination.property.s3Destination"></a>

```python
s3_destination: IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#s3_destination IotOtaUpdate#s3_destination}.

---

### IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination(
  bucket: str = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination.property.bucket">bucket</a></code> | <code>str</code> | The S3 bucket that contains the updated firmware. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination.property.prefix">prefix</a></code> | <code>str</code> | The S3 prefix. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The S3 bucket that contains the updated firmware.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#bucket IotOtaUpdate#bucket}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

The S3 prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#prefix IotOtaUpdate#prefix}

---

### IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter(
  certificate_arn: str = None,
  certificate_path_on_device: str = None,
  platform: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter.property.certificateArn">certificate_arn</a></code> | <code>str</code> | Certificate ARN. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter.property.certificatePathOnDevice">certificate_path_on_device</a></code> | <code>str</code> | The location of the code-signing certificate on your device. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter.property.platform">platform</a></code> | <code>str</code> | The hardware platform of your device. |

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

Certificate ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#certificate_arn IotOtaUpdate#certificate_arn}

---

##### `certificate_path_on_device`<sup>Optional</sup> <a name="certificate_path_on_device" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter.property.certificatePathOnDevice"></a>

```python
certificate_path_on_device: str
```

- *Type:* str

The location of the code-signing certificate on your device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#certificate_path_on_device IotOtaUpdate#certificate_path_on_device}

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter.property.platform"></a>

```python
platform: str
```

- *Type:* str

The hardware platform of your device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#platform IotOtaUpdate#platform}

---

### IotOtaUpdateFilesFileLocation <a name="IotOtaUpdateFilesFileLocation" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateFilesFileLocation(
  s3_location: IotOtaUpdateFilesFileLocationS3Location = None,
  stream: IotOtaUpdateFilesFileLocationStream = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation.property.s3Location">s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location">IotOtaUpdateFilesFileLocationS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#s3_location IotOtaUpdate#s3_location}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation.property.stream">stream</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream">IotOtaUpdateFilesFileLocationStream</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#stream IotOtaUpdate#stream}. |

---

##### `s3_location`<sup>Optional</sup> <a name="s3_location" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation.property.s3Location"></a>

```python
s3_location: IotOtaUpdateFilesFileLocationS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location">IotOtaUpdateFilesFileLocationS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#s3_location IotOtaUpdate#s3_location}.

---

##### `stream`<sup>Optional</sup> <a name="stream" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation.property.stream"></a>

```python
stream: IotOtaUpdateFilesFileLocationStream
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream">IotOtaUpdateFilesFileLocationStream</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#stream IotOtaUpdate#stream}.

---

### IotOtaUpdateFilesFileLocationS3Location <a name="IotOtaUpdateFilesFileLocationS3Location" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location(
  bucket: str = None,
  key: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location.property.bucket">bucket</a></code> | <code>str</code> | The S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location.property.key">key</a></code> | <code>str</code> | The S3 key. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location.property.version">version</a></code> | <code>str</code> | The S3 bucket version. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#bucket IotOtaUpdate#bucket}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location.property.key"></a>

```python
key: str
```

- *Type:* str

The S3 key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#key IotOtaUpdate#key}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location.property.version"></a>

```python
version: str
```

- *Type:* str

The S3 bucket version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#version IotOtaUpdate#version}

---

### IotOtaUpdateFilesFileLocationStream <a name="IotOtaUpdateFilesFileLocationStream" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateFilesFileLocationStream(
  file_id: typing.Union[int, float] = None,
  stream_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream.property.fileId">file_id</a></code> | <code>typing.Union[int, float]</code> | The ID of a file associated with a stream. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream.property.streamId">stream_id</a></code> | <code>str</code> | The stream ID. |

---

##### `file_id`<sup>Optional</sup> <a name="file_id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream.property.fileId"></a>

```python
file_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of a file associated with a stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#file_id IotOtaUpdate#file_id}

---

##### `stream_id`<sup>Optional</sup> <a name="stream_id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

The stream ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#stream_id IotOtaUpdate#stream_id}

---

### IotOtaUpdateTags <a name="IotOtaUpdateTags" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#key IotOtaUpdate#key}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#value IotOtaUpdate#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#key IotOtaUpdate#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#value IotOtaUpdate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList <a name="IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct</a>]

---


### IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference <a name="IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetFailureType">reset_failure_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetMinNumberOfExecutedThings">reset_min_number_of_executed_things</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetThresholdPercentage">reset_threshold_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_failure_type` <a name="reset_failure_type" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetFailureType"></a>

```python
def reset_failure_type() -> None
```

##### `reset_min_number_of_executed_things` <a name="reset_min_number_of_executed_things" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetMinNumberOfExecutedThings"></a>

```python
def reset_min_number_of_executed_things() -> None
```

##### `reset_threshold_percentage` <a name="reset_threshold_percentage" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetThresholdPercentage"></a>

```python
def reset_threshold_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.failureTypeInput">failure_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.minNumberOfExecutedThingsInput">min_number_of_executed_things_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.thresholdPercentageInput">threshold_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.failureType">failure_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.minNumberOfExecutedThings">min_number_of_executed_things</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.thresholdPercentage">threshold_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `failure_type_input`<sup>Optional</sup> <a name="failure_type_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.failureTypeInput"></a>

```python
failure_type_input: str
```

- *Type:* str

---

##### `min_number_of_executed_things_input`<sup>Optional</sup> <a name="min_number_of_executed_things_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.minNumberOfExecutedThingsInput"></a>

```python
min_number_of_executed_things_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_percentage_input`<sup>Optional</sup> <a name="threshold_percentage_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.thresholdPercentageInput"></a>

```python
threshold_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `failure_type`<sup>Required</sup> <a name="failure_type" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.failureType"></a>

```python
failure_type: str
```

- *Type:* str

---

##### `min_number_of_executed_things`<sup>Required</sup> <a name="min_number_of_executed_things" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.minNumberOfExecutedThings"></a>

```python
min_number_of_executed_things: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_percentage`<sup>Required</sup> <a name="threshold_percentage" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.thresholdPercentage"></a>

```python
threshold_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct</a>

---


### IotOtaUpdateAwsJobAbortConfigOutputReference <a name="IotOtaUpdateAwsJobAbortConfigOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.putAbortCriteriaList">put_abort_criteria_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.resetAbortCriteriaList">reset_abort_criteria_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_abort_criteria_list` <a name="put_abort_criteria_list" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.putAbortCriteriaList"></a>

```python
def put_abort_criteria_list(
  value: IResolvable | typing.List[IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.putAbortCriteriaList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct</a>]

---

##### `reset_abort_criteria_list` <a name="reset_abort_criteria_list" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.resetAbortCriteriaList"></a>

```python
def reset_abort_criteria_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.abortCriteriaList">abort_criteria_list</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.abortCriteriaListInput">abort_criteria_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig">IotOtaUpdateAwsJobAbortConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `abort_criteria_list`<sup>Required</sup> <a name="abort_criteria_list" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.abortCriteriaList"></a>

```python
abort_criteria_list: IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList</a>

---

##### `abort_criteria_list_input`<sup>Optional</sup> <a name="abort_criteria_list_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.abortCriteriaListInput"></a>

```python
abort_criteria_list_input: IResolvable | typing.List[IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotOtaUpdateAwsJobAbortConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig">IotOtaUpdateAwsJobAbortConfig</a>

---


### IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference <a name="IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria">put_rate_increase_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resetBaseRatePerMinute">reset_base_rate_per_minute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resetIncrementFactor">reset_increment_factor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resetRateIncreaseCriteria">reset_rate_increase_criteria</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rate_increase_criteria` <a name="put_rate_increase_criteria" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria"></a>

```python
def put_rate_increase_criteria(
  number_of_notified_things: typing.Union[int, float] = None,
  number_of_succeeded_things: typing.Union[int, float] = None
) -> None
```

###### `number_of_notified_things`<sup>Optional</sup> <a name="number_of_notified_things" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria.parameter.numberOfNotifiedThings"></a>

- *Type:* typing.Union[int, float]

When this number of things have been notified, it will initiate an increase in the rollout rate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#number_of_notified_things IotOtaUpdate#number_of_notified_things}

---

###### `number_of_succeeded_things`<sup>Optional</sup> <a name="number_of_succeeded_things" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria.parameter.numberOfSucceededThings"></a>

- *Type:* typing.Union[int, float]

When this number of things have succeeded in their job execution, it will initiate an increase in the rollout rate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#number_of_succeeded_things IotOtaUpdate#number_of_succeeded_things}

---

##### `reset_base_rate_per_minute` <a name="reset_base_rate_per_minute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resetBaseRatePerMinute"></a>

```python
def reset_base_rate_per_minute() -> None
```

##### `reset_increment_factor` <a name="reset_increment_factor" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resetIncrementFactor"></a>

```python
def reset_increment_factor() -> None
```

##### `reset_rate_increase_criteria` <a name="reset_rate_increase_criteria" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resetRateIncreaseCriteria"></a>

```python
def reset_rate_increase_criteria() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteria">rate_increase_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinuteInput">base_rate_per_minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactorInput">increment_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteriaInput">rate_increase_criteria_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinute">base_rate_per_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactor">increment_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rate_increase_criteria`<sup>Required</sup> <a name="rate_increase_criteria" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteria"></a>

```python
rate_increase_criteria: IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference</a>

---

##### `base_rate_per_minute_input`<sup>Optional</sup> <a name="base_rate_per_minute_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinuteInput"></a>

```python
base_rate_per_minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `increment_factor_input`<sup>Optional</sup> <a name="increment_factor_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactorInput"></a>

```python
increment_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_increase_criteria_input`<sup>Optional</sup> <a name="rate_increase_criteria_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteriaInput"></a>

```python
rate_increase_criteria_input: IResolvable | IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

---

##### `base_rate_per_minute`<sup>Required</sup> <a name="base_rate_per_minute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinute"></a>

```python
base_rate_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `increment_factor`<sup>Required</sup> <a name="increment_factor" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactor"></a>

```python
increment_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate</a>

---


### IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference <a name="IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfNotifiedThings">reset_number_of_notified_things</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfSucceededThings">reset_number_of_succeeded_things</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_number_of_notified_things` <a name="reset_number_of_notified_things" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfNotifiedThings"></a>

```python
def reset_number_of_notified_things() -> None
```

##### `reset_number_of_succeeded_things` <a name="reset_number_of_succeeded_things" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfSucceededThings"></a>

```python
def reset_number_of_succeeded_things() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThingsInput">number_of_notified_things_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThingsInput">number_of_succeeded_things_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings">number_of_notified_things</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings">number_of_succeeded_things</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `number_of_notified_things_input`<sup>Optional</sup> <a name="number_of_notified_things_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThingsInput"></a>

```python
number_of_notified_things_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_succeeded_things_input`<sup>Optional</sup> <a name="number_of_succeeded_things_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThingsInput"></a>

```python
number_of_succeeded_things_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_notified_things`<sup>Required</sup> <a name="number_of_notified_things" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings"></a>

```python
number_of_notified_things: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_succeeded_things`<sup>Required</sup> <a name="number_of_succeeded_things" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings"></a>

```python
number_of_succeeded_things: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

---


### IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference <a name="IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.putExponentialRate">put_exponential_rate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.resetExponentialRate">reset_exponential_rate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.resetMaximumPerMinute">reset_maximum_per_minute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_exponential_rate` <a name="put_exponential_rate" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.putExponentialRate"></a>

```python
def put_exponential_rate(
  base_rate_per_minute: typing.Union[int, float] = None,
  increment_factor: typing.Union[int, float] = None,
  rate_increase_criteria: IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria = None
) -> None
```

###### `base_rate_per_minute`<sup>Optional</sup> <a name="base_rate_per_minute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.putExponentialRate.parameter.baseRatePerMinute"></a>

- *Type:* typing.Union[int, float]

The minimum number of things that will be notified of a pending job, per minute, at the start of the job rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#base_rate_per_minute IotOtaUpdate#base_rate_per_minute}

---

###### `increment_factor`<sup>Optional</sup> <a name="increment_factor" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.putExponentialRate.parameter.incrementFactor"></a>

- *Type:* typing.Union[int, float]

The rate of increase for a job rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#increment_factor IotOtaUpdate#increment_factor}

---

###### `rate_increase_criteria`<sup>Optional</sup> <a name="rate_increase_criteria" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.putExponentialRate.parameter.rateIncreaseCriteria"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#rate_increase_criteria IotOtaUpdate#rate_increase_criteria}.

---

##### `reset_exponential_rate` <a name="reset_exponential_rate" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.resetExponentialRate"></a>

```python
def reset_exponential_rate() -> None
```

##### `reset_maximum_per_minute` <a name="reset_maximum_per_minute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.resetMaximumPerMinute"></a>

```python
def reset_maximum_per_minute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.exponentialRate">exponential_rate</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.exponentialRateInput">exponential_rate_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.maximumPerMinuteInput">maximum_per_minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute">maximum_per_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig">IotOtaUpdateAwsJobExecutionsRolloutConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exponential_rate`<sup>Required</sup> <a name="exponential_rate" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.exponentialRate"></a>

```python
exponential_rate: IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference</a>

---

##### `exponential_rate_input`<sup>Optional</sup> <a name="exponential_rate_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.exponentialRateInput"></a>

```python
exponential_rate_input: IResolvable | IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate</a>

---

##### `maximum_per_minute_input`<sup>Optional</sup> <a name="maximum_per_minute_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.maximumPerMinuteInput"></a>

```python
maximum_per_minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_per_minute`<sup>Required</sup> <a name="maximum_per_minute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute"></a>

```python
maximum_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotOtaUpdateAwsJobExecutionsRolloutConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig">IotOtaUpdateAwsJobExecutionsRolloutConfig</a>

---


### IotOtaUpdateAwsJobPresignedUrlConfigOutputReference <a name="IotOtaUpdateAwsJobPresignedUrlConfigOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.resetExpiresInSec">reset_expires_in_sec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expires_in_sec` <a name="reset_expires_in_sec" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.resetExpiresInSec"></a>

```python
def reset_expires_in_sec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.expiresInSecInput">expires_in_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.expiresInSec">expires_in_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig">IotOtaUpdateAwsJobPresignedUrlConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expires_in_sec_input`<sup>Optional</sup> <a name="expires_in_sec_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.expiresInSecInput"></a>

```python
expires_in_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expires_in_sec`<sup>Required</sup> <a name="expires_in_sec" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.expiresInSec"></a>

```python
expires_in_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotOtaUpdateAwsJobPresignedUrlConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig">IotOtaUpdateAwsJobPresignedUrlConfig</a>

---


### IotOtaUpdateAwsJobTimeoutConfigOutputReference <a name="IotOtaUpdateAwsJobTimeoutConfigOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.resetInProgressTimeoutInMinutes">reset_in_progress_timeout_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_in_progress_timeout_in_minutes` <a name="reset_in_progress_timeout_in_minutes" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.resetInProgressTimeoutInMinutes"></a>

```python
def reset_in_progress_timeout_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutesInput">in_progress_timeout_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes">in_progress_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig">IotOtaUpdateAwsJobTimeoutConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `in_progress_timeout_in_minutes_input`<sup>Optional</sup> <a name="in_progress_timeout_in_minutes_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutesInput"></a>

```python
in_progress_timeout_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `in_progress_timeout_in_minutes`<sup>Required</sup> <a name="in_progress_timeout_in_minutes" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes"></a>

```python
in_progress_timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotOtaUpdateAwsJobTimeoutConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig">IotOtaUpdateAwsJobTimeoutConfig</a>

---


### IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference <a name="IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.resetCertificateName">reset_certificate_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.resetInlineDocument">reset_inline_document</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_name` <a name="reset_certificate_name" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.resetCertificateName"></a>

```python
def reset_certificate_name() -> None
```

##### `reset_inline_document` <a name="reset_inline_document" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.resetInlineDocument"></a>

```python
def reset_inline_document() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.certificateNameInput">certificate_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.inlineDocumentInput">inline_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.certificateName">certificate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.inlineDocument">inline_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_name_input`<sup>Optional</sup> <a name="certificate_name_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.certificateNameInput"></a>

```python
certificate_name_input: str
```

- *Type:* str

---

##### `inline_document_input`<sup>Optional</sup> <a name="inline_document_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.inlineDocumentInput"></a>

```python
inline_document_input: str
```

- *Type:* str

---

##### `certificate_name`<sup>Required</sup> <a name="certificate_name" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.certificateName"></a>

```python
certificate_name: str
```

- *Type:* str

---

##### `inline_document`<sup>Required</sup> <a name="inline_document" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.inlineDocument"></a>

```python
inline_document: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain</a>

---


### IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference <a name="IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.putCertificateChain">put_certificate_chain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.putSignature">put_signature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetCertificateChain">reset_certificate_chain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetHashAlgorithm">reset_hash_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetSignature">reset_signature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetSignatureAlgorithm">reset_signature_algorithm</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_certificate_chain` <a name="put_certificate_chain" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.putCertificateChain"></a>

```python
def put_certificate_chain(
  certificate_name: str = None,
  inline_document: str = None
) -> None
```

###### `certificate_name`<sup>Optional</sup> <a name="certificate_name" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.putCertificateChain.parameter.certificateName"></a>

- *Type:* str

The name of the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#certificate_name IotOtaUpdate#certificate_name}

---

###### `inline_document`<sup>Optional</sup> <a name="inline_document" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.putCertificateChain.parameter.inlineDocument"></a>

- *Type:* str

A base64 encoded binary representation of the code signing certificate chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#inline_document IotOtaUpdate#inline_document}

---

##### `put_signature` <a name="put_signature" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.putSignature"></a>

```python
def put_signature(
  inline_document: str = None
) -> None
```

###### `inline_document`<sup>Optional</sup> <a name="inline_document" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.putSignature.parameter.inlineDocument"></a>

- *Type:* str

A base64 encoded binary representation of the code signing signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#inline_document IotOtaUpdate#inline_document}

---

##### `reset_certificate_chain` <a name="reset_certificate_chain" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetCertificateChain"></a>

```python
def reset_certificate_chain() -> None
```

##### `reset_hash_algorithm` <a name="reset_hash_algorithm" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetHashAlgorithm"></a>

```python
def reset_hash_algorithm() -> None
```

##### `reset_signature` <a name="reset_signature" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetSignature"></a>

```python
def reset_signature() -> None
```

##### `reset_signature_algorithm` <a name="reset_signature_algorithm" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetSignatureAlgorithm"></a>

```python
def reset_signature_algorithm() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.certificateChain">certificate_chain</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signature">signature</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.certificateChainInput">certificate_chain_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.hashAlgorithmInput">hash_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signatureAlgorithmInput">signature_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signatureInput">signature_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.hashAlgorithm">hash_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signatureAlgorithm">signature_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning">IotOtaUpdateFilesCodeSigningCustomCodeSigning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_chain`<sup>Required</sup> <a name="certificate_chain" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.certificateChain"></a>

```python
certificate_chain: IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference</a>

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signature"></a>

```python
signature: IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference</a>

---

##### `certificate_chain_input`<sup>Optional</sup> <a name="certificate_chain_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.certificateChainInput"></a>

```python
certificate_chain_input: IResolvable | IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain</a>

---

##### `hash_algorithm_input`<sup>Optional</sup> <a name="hash_algorithm_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.hashAlgorithmInput"></a>

```python
hash_algorithm_input: str
```

- *Type:* str

---

##### `signature_algorithm_input`<sup>Optional</sup> <a name="signature_algorithm_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signatureAlgorithmInput"></a>

```python
signature_algorithm_input: str
```

- *Type:* str

---

##### `signature_input`<sup>Optional</sup> <a name="signature_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signatureInput"></a>

```python
signature_input: IResolvable | IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature</a>

---

##### `hash_algorithm`<sup>Required</sup> <a name="hash_algorithm" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.hashAlgorithm"></a>

```python
hash_algorithm: str
```

- *Type:* str

---

##### `signature_algorithm`<sup>Required</sup> <a name="signature_algorithm" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signatureAlgorithm"></a>

```python
signature_algorithm: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotOtaUpdateFilesCodeSigningCustomCodeSigning
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning">IotOtaUpdateFilesCodeSigningCustomCodeSigning</a>

---


### IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference <a name="IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.resetInlineDocument">reset_inline_document</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_inline_document` <a name="reset_inline_document" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.resetInlineDocument"></a>

```python
def reset_inline_document() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.inlineDocumentInput">inline_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.inlineDocument">inline_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inline_document_input`<sup>Optional</sup> <a name="inline_document_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.inlineDocumentInput"></a>

```python
inline_document_input: str
```

- *Type:* str

---

##### `inline_document`<sup>Required</sup> <a name="inline_document" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.inlineDocument"></a>

```python
inline_document: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature</a>

---


### IotOtaUpdateFilesCodeSigningOutputReference <a name="IotOtaUpdateFilesCodeSigningOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.putCustomCodeSigning">put_custom_code_signing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.putStartSigningJobParameter">put_start_signing_job_parameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resetAwsSignerJobId">reset_aws_signer_job_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resetCustomCodeSigning">reset_custom_code_signing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resetStartSigningJobParameter">reset_start_signing_job_parameter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_code_signing` <a name="put_custom_code_signing" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.putCustomCodeSigning"></a>

```python
def put_custom_code_signing(
  certificate_chain: IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain = None,
  hash_algorithm: str = None,
  signature: IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature = None,
  signature_algorithm: str = None
) -> None
```

###### `certificate_chain`<sup>Optional</sup> <a name="certificate_chain" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.putCustomCodeSigning.parameter.certificateChain"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#certificate_chain IotOtaUpdate#certificate_chain}.

---

###### `hash_algorithm`<sup>Optional</sup> <a name="hash_algorithm" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.putCustomCodeSigning.parameter.hashAlgorithm"></a>

- *Type:* str

The hash algorithm used to code sign the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#hash_algorithm IotOtaUpdate#hash_algorithm}

---

###### `signature`<sup>Optional</sup> <a name="signature" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.putCustomCodeSigning.parameter.signature"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signature IotOtaUpdate#signature}.

---

###### `signature_algorithm`<sup>Optional</sup> <a name="signature_algorithm" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.putCustomCodeSigning.parameter.signatureAlgorithm"></a>

- *Type:* str

The signature algorithm used to code sign the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signature_algorithm IotOtaUpdate#signature_algorithm}

---

##### `put_start_signing_job_parameter` <a name="put_start_signing_job_parameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.putStartSigningJobParameter"></a>

```python
def put_start_signing_job_parameter(
  destination: IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination = None,
  signing_profile_name: str = None,
  signing_profile_parameter: IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter = None
) -> None
```

###### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.putStartSigningJobParameter.parameter.destination"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#destination IotOtaUpdate#destination}.

---

###### `signing_profile_name`<sup>Optional</sup> <a name="signing_profile_name" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.putStartSigningJobParameter.parameter.signingProfileName"></a>

- *Type:* str

The code-signing profile name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signing_profile_name IotOtaUpdate#signing_profile_name}

---

###### `signing_profile_parameter`<sup>Optional</sup> <a name="signing_profile_parameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.putStartSigningJobParameter.parameter.signingProfileParameter"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signing_profile_parameter IotOtaUpdate#signing_profile_parameter}.

---

##### `reset_aws_signer_job_id` <a name="reset_aws_signer_job_id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resetAwsSignerJobId"></a>

```python
def reset_aws_signer_job_id() -> None
```

##### `reset_custom_code_signing` <a name="reset_custom_code_signing" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resetCustomCodeSigning"></a>

```python
def reset_custom_code_signing() -> None
```

##### `reset_start_signing_job_parameter` <a name="reset_start_signing_job_parameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resetStartSigningJobParameter"></a>

```python
def reset_start_signing_job_parameter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.customCodeSigning">custom_code_signing</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference">IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.startSigningJobParameter">start_signing_job_parameter</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.awsSignerJobIdInput">aws_signer_job_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.customCodeSigningInput">custom_code_signing_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning">IotOtaUpdateFilesCodeSigningCustomCodeSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.startSigningJobParameterInput">start_signing_job_parameter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.awsSignerJobId">aws_signer_job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning">IotOtaUpdateFilesCodeSigning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_code_signing`<sup>Required</sup> <a name="custom_code_signing" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.customCodeSigning"></a>

```python
custom_code_signing: IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference">IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference</a>

---

##### `start_signing_job_parameter`<sup>Required</sup> <a name="start_signing_job_parameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.startSigningJobParameter"></a>

```python
start_signing_job_parameter: IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference</a>

---

##### `aws_signer_job_id_input`<sup>Optional</sup> <a name="aws_signer_job_id_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.awsSignerJobIdInput"></a>

```python
aws_signer_job_id_input: str
```

- *Type:* str

---

##### `custom_code_signing_input`<sup>Optional</sup> <a name="custom_code_signing_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.customCodeSigningInput"></a>

```python
custom_code_signing_input: IResolvable | IotOtaUpdateFilesCodeSigningCustomCodeSigning
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning">IotOtaUpdateFilesCodeSigningCustomCodeSigning</a>

---

##### `start_signing_job_parameter_input`<sup>Optional</sup> <a name="start_signing_job_parameter_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.startSigningJobParameterInput"></a>

```python
start_signing_job_parameter_input: IResolvable | IotOtaUpdateFilesCodeSigningStartSigningJobParameter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameter</a>

---

##### `aws_signer_job_id`<sup>Required</sup> <a name="aws_signer_job_id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.awsSignerJobId"></a>

```python
aws_signer_job_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotOtaUpdateFilesCodeSigning
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning">IotOtaUpdateFilesCodeSigning</a>

---


### IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.putS3Destination">put_s3_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.resetS3Destination">reset_s3_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_destination` <a name="put_s3_destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.putS3Destination"></a>

```python
def put_s3_destination(
  bucket: str = None,
  prefix: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.putS3Destination.parameter.bucket"></a>

- *Type:* str

The S3 bucket that contains the updated firmware.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#bucket IotOtaUpdate#bucket}

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.putS3Destination.parameter.prefix"></a>

- *Type:* str

The S3 prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#prefix IotOtaUpdate#prefix}

---

##### `reset_s3_destination` <a name="reset_s3_destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.resetS3Destination"></a>

```python
def reset_s3_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.s3Destination">s3_destination</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.s3DestinationInput">s3_destination_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_destination`<sup>Required</sup> <a name="s3_destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.s3Destination"></a>

```python
s3_destination: IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference</a>

---

##### `s3_destination_input`<sup>Optional</sup> <a name="s3_destination_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.s3DestinationInput"></a>

```python
s3_destination_input: IResolvable | IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination</a>

---


### IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination</a>

---


### IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.putDestination">put_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.putSigningProfileParameter">put_signing_profile_parameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resetDestination">reset_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resetSigningProfileName">reset_signing_profile_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resetSigningProfileParameter">reset_signing_profile_parameter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination` <a name="put_destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.putDestination"></a>

```python
def put_destination(
  s3_destination: IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination = None
) -> None
```

###### `s3_destination`<sup>Optional</sup> <a name="s3_destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.putDestination.parameter.s3Destination"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#s3_destination IotOtaUpdate#s3_destination}.

---

##### `put_signing_profile_parameter` <a name="put_signing_profile_parameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.putSigningProfileParameter"></a>

```python
def put_signing_profile_parameter(
  certificate_arn: str = None,
  certificate_path_on_device: str = None,
  platform: str = None
) -> None
```

###### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.putSigningProfileParameter.parameter.certificateArn"></a>

- *Type:* str

Certificate ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#certificate_arn IotOtaUpdate#certificate_arn}

---

###### `certificate_path_on_device`<sup>Optional</sup> <a name="certificate_path_on_device" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.putSigningProfileParameter.parameter.certificatePathOnDevice"></a>

- *Type:* str

The location of the code-signing certificate on your device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#certificate_path_on_device IotOtaUpdate#certificate_path_on_device}

---

###### `platform`<sup>Optional</sup> <a name="platform" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.putSigningProfileParameter.parameter.platform"></a>

- *Type:* str

The hardware platform of your device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#platform IotOtaUpdate#platform}

---

##### `reset_destination` <a name="reset_destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```

##### `reset_signing_profile_name` <a name="reset_signing_profile_name" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resetSigningProfileName"></a>

```python
def reset_signing_profile_name() -> None
```

##### `reset_signing_profile_parameter` <a name="reset_signing_profile_parameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resetSigningProfileParameter"></a>

```python
def reset_signing_profile_parameter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileParameter">signing_profile_parameter</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.destinationInput">destination_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileNameInput">signing_profile_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileParameterInput">signing_profile_parameter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileName">signing_profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.destination"></a>

```python
destination: IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference</a>

---

##### `signing_profile_parameter`<sup>Required</sup> <a name="signing_profile_parameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileParameter"></a>

```python
signing_profile_parameter: IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference</a>

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.destinationInput"></a>

```python
destination_input: IResolvable | IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination</a>

---

##### `signing_profile_name_input`<sup>Optional</sup> <a name="signing_profile_name_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileNameInput"></a>

```python
signing_profile_name_input: str
```

- *Type:* str

---

##### `signing_profile_parameter_input`<sup>Optional</sup> <a name="signing_profile_parameter_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileParameterInput"></a>

```python
signing_profile_parameter_input: IResolvable | IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter</a>

---

##### `signing_profile_name`<sup>Required</sup> <a name="signing_profile_name" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileName"></a>

```python
signing_profile_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotOtaUpdateFilesCodeSigningStartSigningJobParameter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameter</a>

---


### IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resetCertificateArn">reset_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resetCertificatePathOnDevice">reset_certificate_path_on_device</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resetPlatform">reset_platform</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_arn` <a name="reset_certificate_arn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resetCertificateArn"></a>

```python
def reset_certificate_arn() -> None
```

##### `reset_certificate_path_on_device` <a name="reset_certificate_path_on_device" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resetCertificatePathOnDevice"></a>

```python
def reset_certificate_path_on_device() -> None
```

##### `reset_platform` <a name="reset_platform" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resetPlatform"></a>

```python
def reset_platform() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificatePathOnDeviceInput">certificate_path_on_device_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.platformInput">platform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificatePathOnDevice">certificate_path_on_device</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `certificate_path_on_device_input`<sup>Optional</sup> <a name="certificate_path_on_device_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificatePathOnDeviceInput"></a>

```python
certificate_path_on_device_input: str
```

- *Type:* str

---

##### `platform_input`<sup>Optional</sup> <a name="platform_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.platformInput"></a>

```python
platform_input: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `certificate_path_on_device`<sup>Required</sup> <a name="certificate_path_on_device" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificatePathOnDevice"></a>

```python
certificate_path_on_device: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter</a>

---


### IotOtaUpdateFilesFileLocationOutputReference <a name="IotOtaUpdateFilesFileLocationOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.putS3Location">put_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.putStream">put_stream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.resetS3Location">reset_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.resetStream">reset_stream</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_location` <a name="put_s3_location" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.putS3Location"></a>

```python
def put_s3_location(
  bucket: str = None,
  key: str = None,
  version: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.putS3Location.parameter.bucket"></a>

- *Type:* str

The S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#bucket IotOtaUpdate#bucket}

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.putS3Location.parameter.key"></a>

- *Type:* str

The S3 key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#key IotOtaUpdate#key}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.putS3Location.parameter.version"></a>

- *Type:* str

The S3 bucket version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#version IotOtaUpdate#version}

---

##### `put_stream` <a name="put_stream" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.putStream"></a>

```python
def put_stream(
  file_id: typing.Union[int, float] = None,
  stream_id: str = None
) -> None
```

###### `file_id`<sup>Optional</sup> <a name="file_id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.putStream.parameter.fileId"></a>

- *Type:* typing.Union[int, float]

The ID of a file associated with a stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#file_id IotOtaUpdate#file_id}

---

###### `stream_id`<sup>Optional</sup> <a name="stream_id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.putStream.parameter.streamId"></a>

- *Type:* str

The stream ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#stream_id IotOtaUpdate#stream_id}

---

##### `reset_s3_location` <a name="reset_s3_location" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.resetS3Location"></a>

```python
def reset_s3_location() -> None
```

##### `reset_stream` <a name="reset_stream" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.resetStream"></a>

```python
def reset_stream() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.s3Location">s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference">IotOtaUpdateFilesFileLocationS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.stream">stream</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference">IotOtaUpdateFilesFileLocationStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.s3LocationInput">s3_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location">IotOtaUpdateFilesFileLocationS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.streamInput">stream_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream">IotOtaUpdateFilesFileLocationStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation">IotOtaUpdateFilesFileLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_location`<sup>Required</sup> <a name="s3_location" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.s3Location"></a>

```python
s3_location: IotOtaUpdateFilesFileLocationS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference">IotOtaUpdateFilesFileLocationS3LocationOutputReference</a>

---

##### `stream`<sup>Required</sup> <a name="stream" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.stream"></a>

```python
stream: IotOtaUpdateFilesFileLocationStreamOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference">IotOtaUpdateFilesFileLocationStreamOutputReference</a>

---

##### `s3_location_input`<sup>Optional</sup> <a name="s3_location_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.s3LocationInput"></a>

```python
s3_location_input: IResolvable | IotOtaUpdateFilesFileLocationS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location">IotOtaUpdateFilesFileLocationS3Location</a>

---

##### `stream_input`<sup>Optional</sup> <a name="stream_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.streamInput"></a>

```python
stream_input: IResolvable | IotOtaUpdateFilesFileLocationStream
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream">IotOtaUpdateFilesFileLocationStream</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotOtaUpdateFilesFileLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation">IotOtaUpdateFilesFileLocation</a>

---


### IotOtaUpdateFilesFileLocationS3LocationOutputReference <a name="IotOtaUpdateFilesFileLocationS3LocationOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location">IotOtaUpdateFilesFileLocationS3Location</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotOtaUpdateFilesFileLocationS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location">IotOtaUpdateFilesFileLocationS3Location</a>

---


### IotOtaUpdateFilesFileLocationStreamOutputReference <a name="IotOtaUpdateFilesFileLocationStreamOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.resetFileId">reset_file_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.resetStreamId">reset_stream_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_id` <a name="reset_file_id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.resetFileId"></a>

```python
def reset_file_id() -> None
```

##### `reset_stream_id` <a name="reset_stream_id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.resetStreamId"></a>

```python
def reset_stream_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.fileIdInput">file_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.streamIdInput">stream_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.fileId">file_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.streamId">stream_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream">IotOtaUpdateFilesFileLocationStream</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_id_input`<sup>Optional</sup> <a name="file_id_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.fileIdInput"></a>

```python
file_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stream_id_input`<sup>Optional</sup> <a name="stream_id_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.streamIdInput"></a>

```python
stream_id_input: str
```

- *Type:* str

---

##### `file_id`<sup>Required</sup> <a name="file_id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.fileId"></a>

```python
file_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stream_id`<sup>Required</sup> <a name="stream_id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotOtaUpdateFilesFileLocationStream
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream">IotOtaUpdateFilesFileLocationStream</a>

---


### IotOtaUpdateFilesList <a name="IotOtaUpdateFilesList" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateFilesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotOtaUpdateFilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles">IotOtaUpdateFiles</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotOtaUpdateFiles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles">IotOtaUpdateFiles</a>]

---


### IotOtaUpdateFilesOutputReference <a name="IotOtaUpdateFilesOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateFilesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.putCodeSigning">put_code_signing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.putFileLocation">put_file_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetCodeSigning">reset_code_signing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileLocation">reset_file_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileName">reset_file_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileType">reset_file_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileVersion">reset_file_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_code_signing` <a name="put_code_signing" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.putCodeSigning"></a>

```python
def put_code_signing(
  aws_signer_job_id: str = None,
  custom_code_signing: IotOtaUpdateFilesCodeSigningCustomCodeSigning = None,
  start_signing_job_parameter: IotOtaUpdateFilesCodeSigningStartSigningJobParameter = None
) -> None
```

###### `aws_signer_job_id`<sup>Optional</sup> <a name="aws_signer_job_id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.putCodeSigning.parameter.awsSignerJobId"></a>

- *Type:* str

The ID of the AWSSignerJob which was created to sign the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_signer_job_id IotOtaUpdate#aws_signer_job_id}

---

###### `custom_code_signing`<sup>Optional</sup> <a name="custom_code_signing" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.putCodeSigning.parameter.customCodeSigning"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning">IotOtaUpdateFilesCodeSigningCustomCodeSigning</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#custom_code_signing IotOtaUpdate#custom_code_signing}.

---

###### `start_signing_job_parameter`<sup>Optional</sup> <a name="start_signing_job_parameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.putCodeSigning.parameter.startSigningJobParameter"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#start_signing_job_parameter IotOtaUpdate#start_signing_job_parameter}.

---

##### `put_file_location` <a name="put_file_location" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.putFileLocation"></a>

```python
def put_file_location(
  s3_location: IotOtaUpdateFilesFileLocationS3Location = None,
  stream: IotOtaUpdateFilesFileLocationStream = None
) -> None
```

###### `s3_location`<sup>Optional</sup> <a name="s3_location" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.putFileLocation.parameter.s3Location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location">IotOtaUpdateFilesFileLocationS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#s3_location IotOtaUpdate#s3_location}.

---

###### `stream`<sup>Optional</sup> <a name="stream" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.putFileLocation.parameter.stream"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream">IotOtaUpdateFilesFileLocationStream</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#stream IotOtaUpdate#stream}.

---

##### `reset_attributes` <a name="reset_attributes" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_code_signing` <a name="reset_code_signing" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetCodeSigning"></a>

```python
def reset_code_signing() -> None
```

##### `reset_file_location` <a name="reset_file_location" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileLocation"></a>

```python
def reset_file_location() -> None
```

##### `reset_file_name` <a name="reset_file_name" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileName"></a>

```python
def reset_file_name() -> None
```

##### `reset_file_type` <a name="reset_file_type" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileType"></a>

```python
def reset_file_type() -> None
```

##### `reset_file_version` <a name="reset_file_version" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileVersion"></a>

```python
def reset_file_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.codeSigning">code_signing</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference">IotOtaUpdateFilesCodeSigningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileLocation">file_location</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference">IotOtaUpdateFilesFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.attributesInput">attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.codeSigningInput">code_signing_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning">IotOtaUpdateFilesCodeSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileLocationInput">file_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation">IotOtaUpdateFilesFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileNameInput">file_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileTypeInput">file_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileVersionInput">file_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.attributes">attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileName">file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileType">file_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileVersion">file_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles">IotOtaUpdateFiles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_signing`<sup>Required</sup> <a name="code_signing" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.codeSigning"></a>

```python
code_signing: IotOtaUpdateFilesCodeSigningOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference">IotOtaUpdateFilesCodeSigningOutputReference</a>

---

##### `file_location`<sup>Required</sup> <a name="file_location" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileLocation"></a>

```python
file_location: IotOtaUpdateFilesFileLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference">IotOtaUpdateFilesFileLocationOutputReference</a>

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.attributesInput"></a>

```python
attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `code_signing_input`<sup>Optional</sup> <a name="code_signing_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.codeSigningInput"></a>

```python
code_signing_input: IResolvable | IotOtaUpdateFilesCodeSigning
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning">IotOtaUpdateFilesCodeSigning</a>

---

##### `file_location_input`<sup>Optional</sup> <a name="file_location_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileLocationInput"></a>

```python
file_location_input: IResolvable | IotOtaUpdateFilesFileLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation">IotOtaUpdateFilesFileLocation</a>

---

##### `file_name_input`<sup>Optional</sup> <a name="file_name_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileNameInput"></a>

```python
file_name_input: str
```

- *Type:* str

---

##### `file_type_input`<sup>Optional</sup> <a name="file_type_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileTypeInput"></a>

```python
file_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `file_version_input`<sup>Optional</sup> <a name="file_version_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileVersionInput"></a>

```python
file_version_input: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.attributes"></a>

```python
attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `file_name`<sup>Required</sup> <a name="file_name" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

---

##### `file_type`<sup>Required</sup> <a name="file_type" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileType"></a>

```python
file_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `file_version`<sup>Required</sup> <a name="file_version" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileVersion"></a>

```python
file_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotOtaUpdateFiles
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles">IotOtaUpdateFiles</a>

---


### IotOtaUpdateTagsList <a name="IotOtaUpdateTagsList" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotOtaUpdateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags">IotOtaUpdateTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotOtaUpdateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags">IotOtaUpdateTags</a>]

---


### IotOtaUpdateTagsOutputReference <a name="IotOtaUpdateTagsOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_ota_update

iotOtaUpdate.IotOtaUpdateTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags">IotOtaUpdateTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotOtaUpdateTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags">IotOtaUpdateTags</a>

---



