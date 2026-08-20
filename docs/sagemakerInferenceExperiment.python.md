# `sagemakerInferenceExperiment` Submodule <a name="`sagemakerInferenceExperiment` Submodule" id="@cdktn/provider-awscc.sagemakerInferenceExperiment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerInferenceExperiment <a name="SagemakerInferenceExperiment" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment awscc_sagemaker_inference_experiment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_experiment

sagemakerInferenceExperiment.SagemakerInferenceExperiment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  endpoint_name: str,
  model_variants: IResolvable | typing.List[SagemakerInferenceExperimentModelVariants],
  name: str,
  role_arn: str,
  type: str,
  data_storage_config: SagemakerInferenceExperimentDataStorageConfig = None,
  description: str = None,
  desired_state: str = None,
  kms_key: str = None,
  schedule: SagemakerInferenceExperimentSchedule = None,
  shadow_mode_config: SagemakerInferenceExperimentShadowModeConfig = None,
  status_reason: str = None,
  tags: IResolvable | typing.List[SagemakerInferenceExperimentTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.endpointName">endpoint_name</a></code> | <code>str</code> | The name of the endpoint used to run the inference experiment. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.modelVariants">model_variants</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants">SagemakerInferenceExperimentModelVariants</a>]</code> | An array of ModelVariantConfig objects. Each ModelVariantConfig object in the array describes the infrastructure configuration for the corresponding variant. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.name">name</a></code> | <code>str</code> | The name for the inference experiment. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage Amazon SageMaker Inference endpoints for model deployment. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of the inference experiment that you want to run. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.dataStorageConfig">data_storage_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig">SagemakerInferenceExperimentDataStorageConfig</a></code> | The Amazon S3 location and configuration for storing inference request and response data. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the inference experiment. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.desiredState">desired_state</a></code> | <code>str</code> | The desired state of the experiment after starting or stopping operation. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.kmsKey">kms_key</a></code> | <code>str</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule">SagemakerInferenceExperimentSchedule</a></code> | The duration for which you want the inference experiment to run. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.shadowModeConfig">shadow_mode_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig">SagemakerInferenceExperimentShadowModeConfig</a></code> | The configuration of ShadowMode inference experiment type. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.statusReason">status_reason</a></code> | <code>str</code> | The error message or client-specified reason from the StopInferenceExperiment API, that explains the status of the inference experiment. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags">SagemakerInferenceExperimentTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.endpointName"></a>

- *Type:* str

The name of the endpoint used to run the inference experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#endpoint_name SagemakerInferenceExperiment#endpoint_name}

---

##### `model_variants`<sup>Required</sup> <a name="model_variants" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.modelVariants"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants">SagemakerInferenceExperimentModelVariants</a>]

An array of ModelVariantConfig objects. Each ModelVariantConfig object in the array describes the infrastructure configuration for the corresponding variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#model_variants SagemakerInferenceExperiment#model_variants}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.name"></a>

- *Type:* str

The name for the inference experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#name SagemakerInferenceExperiment#name}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.roleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage Amazon SageMaker Inference endpoints for model deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#role_arn SagemakerInferenceExperiment#role_arn}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.type"></a>

- *Type:* str

The type of the inference experiment that you want to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#type SagemakerInferenceExperiment#type}

---

##### `data_storage_config`<sup>Optional</sup> <a name="data_storage_config" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.dataStorageConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig">SagemakerInferenceExperimentDataStorageConfig</a>

The Amazon S3 location and configuration for storing inference request and response data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#data_storage_config SagemakerInferenceExperiment#data_storage_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.description"></a>

- *Type:* str

The description of the inference experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#description SagemakerInferenceExperiment#description}

---

##### `desired_state`<sup>Optional</sup> <a name="desired_state" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.desiredState"></a>

- *Type:* str

The desired state of the experiment after starting or stopping operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#desired_state SagemakerInferenceExperiment#desired_state}

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.kmsKey"></a>

- *Type:* str

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#kms_key SagemakerInferenceExperiment#kms_key}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule">SagemakerInferenceExperimentSchedule</a>

The duration for which you want the inference experiment to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#schedule SagemakerInferenceExperiment#schedule}

---

##### `shadow_mode_config`<sup>Optional</sup> <a name="shadow_mode_config" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.shadowModeConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig">SagemakerInferenceExperimentShadowModeConfig</a>

The configuration of ShadowMode inference experiment type.

Use this field to specify a production variant which takes all the inference requests, and a shadow variant to which Amazon SageMaker replicates a percentage of the inference requests. For the shadow variant also specify the percentage of requests that Amazon SageMaker replicates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#shadow_mode_config SagemakerInferenceExperiment#shadow_mode_config}

---

##### `status_reason`<sup>Optional</sup> <a name="status_reason" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.statusReason"></a>

- *Type:* str

The error message or client-specified reason from the StopInferenceExperiment API, that explains the status of the inference experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#status_reason SagemakerInferenceExperiment#status_reason}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags">SagemakerInferenceExperimentTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#tags SagemakerInferenceExperiment#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putDataStorageConfig">put_data_storage_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putModelVariants">put_model_variants</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putShadowModeConfig">put_shadow_mode_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetDataStorageConfig">reset_data_storage_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetDesiredState">reset_desired_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetKmsKey">reset_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetShadowModeConfig">reset_shadow_mode_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetStatusReason">reset_status_reason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data_storage_config` <a name="put_data_storage_config" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putDataStorageConfig"></a>

```python
def put_data_storage_config(
  content_type: SagemakerInferenceExperimentDataStorageConfigContentType = None,
  destination: str = None,
  kms_key: str = None
) -> None
```

###### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putDataStorageConfig.parameter.contentType"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType">SagemakerInferenceExperimentDataStorageConfigContentType</a>

Configuration specifying how to treat different headers.

If no headers are specified SageMaker will by default base64 encode when capturing the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#content_type SagemakerInferenceExperiment#content_type}

---

###### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putDataStorageConfig.parameter.destination"></a>

- *Type:* str

The Amazon S3 bucket where the inference request and response data is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#destination SagemakerInferenceExperiment#destination}

---

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putDataStorageConfig.parameter.kmsKey"></a>

- *Type:* str

The AWS Key Management Service key that Amazon SageMaker uses to encrypt captured data at rest using Amazon S3 server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#kms_key SagemakerInferenceExperiment#kms_key}

---

##### `put_model_variants` <a name="put_model_variants" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putModelVariants"></a>

```python
def put_model_variants(
  value: IResolvable | typing.List[SagemakerInferenceExperimentModelVariants]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putModelVariants.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants">SagemakerInferenceExperimentModelVariants</a>]

---

##### `put_schedule` <a name="put_schedule" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putSchedule"></a>

```python
def put_schedule(
  end_time: str = None,
  start_time: str = None
) -> None
```

###### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putSchedule.parameter.endTime"></a>

- *Type:* str

The timestamp at which the inference experiment ended or will end.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#end_time SagemakerInferenceExperiment#end_time}

---

###### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putSchedule.parameter.startTime"></a>

- *Type:* str

The timestamp at which the inference experiment started or will start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#start_time SagemakerInferenceExperiment#start_time}

---

##### `put_shadow_mode_config` <a name="put_shadow_mode_config" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putShadowModeConfig"></a>

```python
def put_shadow_mode_config(
  shadow_model_variants: IResolvable | typing.List[SagemakerInferenceExperimentShadowModeConfigShadowModelVariants] = None,
  source_model_variant_name: str = None
) -> None
```

###### `shadow_model_variants`<sup>Optional</sup> <a name="shadow_model_variants" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putShadowModeConfig.parameter.shadowModelVariants"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants">SagemakerInferenceExperimentShadowModeConfigShadowModelVariants</a>]

List of shadow variant configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#shadow_model_variants SagemakerInferenceExperiment#shadow_model_variants}

---

###### `source_model_variant_name`<sup>Optional</sup> <a name="source_model_variant_name" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putShadowModeConfig.parameter.sourceModelVariantName"></a>

- *Type:* str

The name of the production variant, which takes all the inference requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#source_model_variant_name SagemakerInferenceExperiment#source_model_variant_name}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SagemakerInferenceExperimentTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags">SagemakerInferenceExperimentTags</a>]

---

##### `reset_data_storage_config` <a name="reset_data_storage_config" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetDataStorageConfig"></a>

```python
def reset_data_storage_config() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_desired_state` <a name="reset_desired_state" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetDesiredState"></a>

```python
def reset_desired_state() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_shadow_mode_config` <a name="reset_shadow_mode_config" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetShadowModeConfig"></a>

```python
def reset_shadow_mode_config() -> None
```

##### `reset_status_reason` <a name="reset_status_reason" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetStatusReason"></a>

```python
def reset_status_reason() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SagemakerInferenceExperiment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.isConstruct"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_experiment

sagemakerInferenceExperiment.SagemakerInferenceExperiment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_experiment

sagemakerInferenceExperiment.SagemakerInferenceExperiment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.isTerraformResource"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_experiment

sagemakerInferenceExperiment.SagemakerInferenceExperiment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_experiment

sagemakerInferenceExperiment.SagemakerInferenceExperiment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SagemakerInferenceExperiment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerInferenceExperiment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerInferenceExperiment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerInferenceExperiment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.dataStorageConfig">data_storage_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference">SagemakerInferenceExperimentDataStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.endpointMetadata">endpoint_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference">SagemakerInferenceExperimentEndpointMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.modelVariants">model_variants</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList">SagemakerInferenceExperimentModelVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference">SagemakerInferenceExperimentScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.shadowModeConfig">shadow_mode_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference">SagemakerInferenceExperimentShadowModeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList">SagemakerInferenceExperimentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.dataStorageConfigInput">data_storage_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig">SagemakerInferenceExperimentDataStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.desiredStateInput">desired_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.endpointNameInput">endpoint_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.modelVariantsInput">model_variants_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants">SagemakerInferenceExperimentModelVariants</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.scheduleInput">schedule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule">SagemakerInferenceExperimentSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.shadowModeConfigInput">shadow_mode_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig">SagemakerInferenceExperimentShadowModeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.statusReasonInput">status_reason_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags">SagemakerInferenceExperimentTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.desiredState">desired_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.endpointName">endpoint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.statusReason">status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `data_storage_config`<sup>Required</sup> <a name="data_storage_config" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.dataStorageConfig"></a>

```python
data_storage_config: SagemakerInferenceExperimentDataStorageConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference">SagemakerInferenceExperimentDataStorageConfigOutputReference</a>

---

##### `endpoint_metadata`<sup>Required</sup> <a name="endpoint_metadata" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.endpointMetadata"></a>

```python
endpoint_metadata: SagemakerInferenceExperimentEndpointMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference">SagemakerInferenceExperimentEndpointMetadataOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `model_variants`<sup>Required</sup> <a name="model_variants" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.modelVariants"></a>

```python
model_variants: SagemakerInferenceExperimentModelVariantsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList">SagemakerInferenceExperimentModelVariantsList</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.schedule"></a>

```python
schedule: SagemakerInferenceExperimentScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference">SagemakerInferenceExperimentScheduleOutputReference</a>

---

##### `shadow_mode_config`<sup>Required</sup> <a name="shadow_mode_config" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.shadowModeConfig"></a>

```python
shadow_mode_config: SagemakerInferenceExperimentShadowModeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference">SagemakerInferenceExperimentShadowModeConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.tags"></a>

```python
tags: SagemakerInferenceExperimentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList">SagemakerInferenceExperimentTagsList</a>

---

##### `data_storage_config_input`<sup>Optional</sup> <a name="data_storage_config_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.dataStorageConfigInput"></a>

```python
data_storage_config_input: IResolvable | SagemakerInferenceExperimentDataStorageConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig">SagemakerInferenceExperimentDataStorageConfig</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `desired_state_input`<sup>Optional</sup> <a name="desired_state_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.desiredStateInput"></a>

```python
desired_state_input: str
```

- *Type:* str

---

##### `endpoint_name_input`<sup>Optional</sup> <a name="endpoint_name_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.endpointNameInput"></a>

```python
endpoint_name_input: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `model_variants_input`<sup>Optional</sup> <a name="model_variants_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.modelVariantsInput"></a>

```python
model_variants_input: IResolvable | typing.List[SagemakerInferenceExperimentModelVariants]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants">SagemakerInferenceExperimentModelVariants</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.scheduleInput"></a>

```python
schedule_input: IResolvable | SagemakerInferenceExperimentSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule">SagemakerInferenceExperimentSchedule</a>

---

##### `shadow_mode_config_input`<sup>Optional</sup> <a name="shadow_mode_config_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.shadowModeConfigInput"></a>

```python
shadow_mode_config_input: IResolvable | SagemakerInferenceExperimentShadowModeConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig">SagemakerInferenceExperimentShadowModeConfig</a>

---

##### `status_reason_input`<sup>Optional</sup> <a name="status_reason_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.statusReasonInput"></a>

```python
status_reason_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SagemakerInferenceExperimentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags">SagemakerInferenceExperimentTags</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `desired_state`<sup>Required</sup> <a name="desired_state" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `status_reason`<sup>Required</sup> <a name="status_reason" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperiment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerInferenceExperimentConfig <a name="SagemakerInferenceExperimentConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_experiment

sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  endpoint_name: str,
  model_variants: IResolvable | typing.List[SagemakerInferenceExperimentModelVariants],
  name: str,
  role_arn: str,
  type: str,
  data_storage_config: SagemakerInferenceExperimentDataStorageConfig = None,
  description: str = None,
  desired_state: str = None,
  kms_key: str = None,
  schedule: SagemakerInferenceExperimentSchedule = None,
  shadow_mode_config: SagemakerInferenceExperimentShadowModeConfig = None,
  status_reason: str = None,
  tags: IResolvable | typing.List[SagemakerInferenceExperimentTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.endpointName">endpoint_name</a></code> | <code>str</code> | The name of the endpoint used to run the inference experiment. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.modelVariants">model_variants</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants">SagemakerInferenceExperimentModelVariants</a>]</code> | An array of ModelVariantConfig objects. Each ModelVariantConfig object in the array describes the infrastructure configuration for the corresponding variant. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.name">name</a></code> | <code>str</code> | The name for the inference experiment. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage Amazon SageMaker Inference endpoints for model deployment. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.type">type</a></code> | <code>str</code> | The type of the inference experiment that you want to run. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.dataStorageConfig">data_storage_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig">SagemakerInferenceExperimentDataStorageConfig</a></code> | The Amazon S3 location and configuration for storing inference request and response data. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.description">description</a></code> | <code>str</code> | The description of the inference experiment. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.desiredState">desired_state</a></code> | <code>str</code> | The desired state of the experiment after starting or stopping operation. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.kmsKey">kms_key</a></code> | <code>str</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule">SagemakerInferenceExperimentSchedule</a></code> | The duration for which you want the inference experiment to run. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.shadowModeConfig">shadow_mode_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig">SagemakerInferenceExperimentShadowModeConfig</a></code> | The configuration of ShadowMode inference experiment type. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.statusReason">status_reason</a></code> | <code>str</code> | The error message or client-specified reason from the StopInferenceExperiment API, that explains the status of the inference experiment. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags">SagemakerInferenceExperimentTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

The name of the endpoint used to run the inference experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#endpoint_name SagemakerInferenceExperiment#endpoint_name}

---

##### `model_variants`<sup>Required</sup> <a name="model_variants" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.modelVariants"></a>

```python
model_variants: IResolvable | typing.List[SagemakerInferenceExperimentModelVariants]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants">SagemakerInferenceExperimentModelVariants</a>]

An array of ModelVariantConfig objects. Each ModelVariantConfig object in the array describes the infrastructure configuration for the corresponding variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#model_variants SagemakerInferenceExperiment#model_variants}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name for the inference experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#name SagemakerInferenceExperiment#name}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage Amazon SageMaker Inference endpoints for model deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#role_arn SagemakerInferenceExperiment#role_arn}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the inference experiment that you want to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#type SagemakerInferenceExperiment#type}

---

##### `data_storage_config`<sup>Optional</sup> <a name="data_storage_config" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.dataStorageConfig"></a>

```python
data_storage_config: SagemakerInferenceExperimentDataStorageConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig">SagemakerInferenceExperimentDataStorageConfig</a>

The Amazon S3 location and configuration for storing inference request and response data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#data_storage_config SagemakerInferenceExperiment#data_storage_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the inference experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#description SagemakerInferenceExperiment#description}

---

##### `desired_state`<sup>Optional</sup> <a name="desired_state" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

The desired state of the experiment after starting or stopping operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#desired_state SagemakerInferenceExperiment#desired_state}

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#kms_key SagemakerInferenceExperiment#kms_key}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.schedule"></a>

```python
schedule: SagemakerInferenceExperimentSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule">SagemakerInferenceExperimentSchedule</a>

The duration for which you want the inference experiment to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#schedule SagemakerInferenceExperiment#schedule}

---

##### `shadow_mode_config`<sup>Optional</sup> <a name="shadow_mode_config" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.shadowModeConfig"></a>

```python
shadow_mode_config: SagemakerInferenceExperimentShadowModeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig">SagemakerInferenceExperimentShadowModeConfig</a>

The configuration of ShadowMode inference experiment type.

Use this field to specify a production variant which takes all the inference requests, and a shadow variant to which Amazon SageMaker replicates a percentage of the inference requests. For the shadow variant also specify the percentage of requests that Amazon SageMaker replicates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#shadow_mode_config SagemakerInferenceExperiment#shadow_mode_config}

---

##### `status_reason`<sup>Optional</sup> <a name="status_reason" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

The error message or client-specified reason from the StopInferenceExperiment API, that explains the status of the inference experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#status_reason SagemakerInferenceExperiment#status_reason}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SagemakerInferenceExperimentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags">SagemakerInferenceExperimentTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#tags SagemakerInferenceExperiment#tags}

---

### SagemakerInferenceExperimentDataStorageConfig <a name="SagemakerInferenceExperimentDataStorageConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_experiment

sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig(
  content_type: SagemakerInferenceExperimentDataStorageConfigContentType = None,
  destination: str = None,
  kms_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig.property.contentType">content_type</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType">SagemakerInferenceExperimentDataStorageConfigContentType</a></code> | Configuration specifying how to treat different headers. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig.property.destination">destination</a></code> | <code>str</code> | The Amazon S3 bucket where the inference request and response data is stored. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig.property.kmsKey">kms_key</a></code> | <code>str</code> | The AWS Key Management Service key that Amazon SageMaker uses to encrypt captured data at rest using Amazon S3 server-side encryption. |

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig.property.contentType"></a>

```python
content_type: SagemakerInferenceExperimentDataStorageConfigContentType
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType">SagemakerInferenceExperimentDataStorageConfigContentType</a>

Configuration specifying how to treat different headers.

If no headers are specified SageMaker will by default base64 encode when capturing the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#content_type SagemakerInferenceExperiment#content_type}

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig.property.destination"></a>

```python
destination: str
```

- *Type:* str

The Amazon S3 bucket where the inference request and response data is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#destination SagemakerInferenceExperiment#destination}

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

The AWS Key Management Service key that Amazon SageMaker uses to encrypt captured data at rest using Amazon S3 server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#kms_key SagemakerInferenceExperiment#kms_key}

---

### SagemakerInferenceExperimentDataStorageConfigContentType <a name="SagemakerInferenceExperimentDataStorageConfigContentType" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_experiment

sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType(
  csv_content_types: typing.List[str] = None,
  json_content_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType.property.csvContentTypes">csv_content_types</a></code> | <code>typing.List[str]</code> | The list of all content type headers that SageMaker will treat as CSV and capture accordingly. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType.property.jsonContentTypes">json_content_types</a></code> | <code>typing.List[str]</code> | The list of all content type headers that SageMaker will treat as JSON and capture accordingly. |

---

##### `csv_content_types`<sup>Optional</sup> <a name="csv_content_types" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType.property.csvContentTypes"></a>

```python
csv_content_types: typing.List[str]
```

- *Type:* typing.List[str]

The list of all content type headers that SageMaker will treat as CSV and capture accordingly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#csv_content_types SagemakerInferenceExperiment#csv_content_types}

---

##### `json_content_types`<sup>Optional</sup> <a name="json_content_types" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType.property.jsonContentTypes"></a>

```python
json_content_types: typing.List[str]
```

- *Type:* typing.List[str]

The list of all content type headers that SageMaker will treat as JSON and capture accordingly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#json_content_types SagemakerInferenceExperiment#json_content_types}

---

### SagemakerInferenceExperimentEndpointMetadata <a name="SagemakerInferenceExperimentEndpointMetadata" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_experiment

sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadata()
```


### SagemakerInferenceExperimentModelVariants <a name="SagemakerInferenceExperimentModelVariants" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_experiment

sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants(
  infrastructure_config: SagemakerInferenceExperimentModelVariantsInfrastructureConfig,
  model_name: str,
  variant_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants.property.infrastructureConfig">infrastructure_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfig</a></code> | The configuration for the infrastructure that the model will be deployed to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants.property.modelName">model_name</a></code> | <code>str</code> | The name of the Amazon SageMaker Model entity. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants.property.variantName">variant_name</a></code> | <code>str</code> | The name of the variant. |

---

##### `infrastructure_config`<sup>Required</sup> <a name="infrastructure_config" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants.property.infrastructureConfig"></a>

```python
infrastructure_config: SagemakerInferenceExperimentModelVariantsInfrastructureConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfig</a>

The configuration for the infrastructure that the model will be deployed to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#infrastructure_config SagemakerInferenceExperiment#infrastructure_config}

---

##### `model_name`<sup>Required</sup> <a name="model_name" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants.property.modelName"></a>

```python
model_name: str
```

- *Type:* str

The name of the Amazon SageMaker Model entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#model_name SagemakerInferenceExperiment#model_name}

---

##### `variant_name`<sup>Required</sup> <a name="variant_name" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants.property.variantName"></a>

```python
variant_name: str
```

- *Type:* str

The name of the variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#variant_name SagemakerInferenceExperiment#variant_name}

---

### SagemakerInferenceExperimentModelVariantsInfrastructureConfig <a name="SagemakerInferenceExperimentModelVariantsInfrastructureConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_experiment

sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig(
  infrastructure_type: str,
  real_time_inference_config: SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig.property.infrastructureType">infrastructure_type</a></code> | <code>str</code> | The type of the inference experiment that you want to run. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig.property.realTimeInferenceConfig">real_time_inference_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig</a></code> | The infrastructure configuration for deploying the model to a real-time inference endpoint. |

---

##### `infrastructure_type`<sup>Required</sup> <a name="infrastructure_type" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig.property.infrastructureType"></a>

```python
infrastructure_type: str
```

- *Type:* str

The type of the inference experiment that you want to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#infrastructure_type SagemakerInferenceExperiment#infrastructure_type}

---

##### `real_time_inference_config`<sup>Required</sup> <a name="real_time_inference_config" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig.property.realTimeInferenceConfig"></a>

```python
real_time_inference_config: SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig</a>

The infrastructure configuration for deploying the model to a real-time inference endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#real_time_inference_config SagemakerInferenceExperiment#real_time_inference_config}

---

### SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig <a name="SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_experiment

sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig(
  instance_count: typing.Union[int, float],
  instance_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | The number of instances of the type specified by InstanceType. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig.property.instanceType">instance_type</a></code> | <code>str</code> | The instance type the model is deployed to. |

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of instances of the type specified by InstanceType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#instance_count SagemakerInferenceExperiment#instance_count}

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

The instance type the model is deployed to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#instance_type SagemakerInferenceExperiment#instance_type}

---

### SagemakerInferenceExperimentSchedule <a name="SagemakerInferenceExperimentSchedule" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_experiment

sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule(
  end_time: str = None,
  start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule.property.endTime">end_time</a></code> | <code>str</code> | The timestamp at which the inference experiment ended or will end. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule.property.startTime">start_time</a></code> | <code>str</code> | The timestamp at which the inference experiment started or will start. |

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

The timestamp at which the inference experiment ended or will end.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#end_time SagemakerInferenceExperiment#end_time}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

The timestamp at which the inference experiment started or will start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#start_time SagemakerInferenceExperiment#start_time}

---

### SagemakerInferenceExperimentShadowModeConfig <a name="SagemakerInferenceExperimentShadowModeConfig" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_experiment

sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig(
  shadow_model_variants: IResolvable | typing.List[SagemakerInferenceExperimentShadowModeConfigShadowModelVariants] = None,
  source_model_variant_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig.property.shadowModelVariants">shadow_model_variants</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants">SagemakerInferenceExperimentShadowModeConfigShadowModelVariants</a>]</code> | List of shadow variant configurations. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig.property.sourceModelVariantName">source_model_variant_name</a></code> | <code>str</code> | The name of the production variant, which takes all the inference requests. |

---

##### `shadow_model_variants`<sup>Optional</sup> <a name="shadow_model_variants" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig.property.shadowModelVariants"></a>

```python
shadow_model_variants: IResolvable | typing.List[SagemakerInferenceExperimentShadowModeConfigShadowModelVariants]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants">SagemakerInferenceExperimentShadowModeConfigShadowModelVariants</a>]

List of shadow variant configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#shadow_model_variants SagemakerInferenceExperiment#shadow_model_variants}

---

##### `source_model_variant_name`<sup>Optional</sup> <a name="source_model_variant_name" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig.property.sourceModelVariantName"></a>

```python
source_model_variant_name: str
```

- *Type:* str

The name of the production variant, which takes all the inference requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#source_model_variant_name SagemakerInferenceExperiment#source_model_variant_name}

---

### SagemakerInferenceExperimentShadowModeConfigShadowModelVariants <a name="SagemakerInferenceExperimentShadowModeConfigShadowModelVariants" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_experiment

sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants(
  sampling_percentage: typing.Union[int, float] = None,
  shadow_model_variant_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants.property.samplingPercentage">sampling_percentage</a></code> | <code>typing.Union[int, float]</code> | The percentage of inference requests that Amazon SageMaker replicates from the production variant to the shadow variant. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants.property.shadowModelVariantName">shadow_model_variant_name</a></code> | <code>str</code> | The name of the shadow variant. |

---

##### `sampling_percentage`<sup>Optional</sup> <a name="sampling_percentage" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants.property.samplingPercentage"></a>

```python
sampling_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage of inference requests that Amazon SageMaker replicates from the production variant to the shadow variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#sampling_percentage SagemakerInferenceExperiment#sampling_percentage}

---

##### `shadow_model_variant_name`<sup>Optional</sup> <a name="shadow_model_variant_name" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants.property.shadowModelVariantName"></a>

```python
shadow_model_variant_name: str
```

- *Type:* str

The name of the shadow variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#shadow_model_variant_name SagemakerInferenceExperiment#shadow_model_variant_name}

---

### SagemakerInferenceExperimentTags <a name="SagemakerInferenceExperimentTags" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_experiment

sagemakerInferenceExperiment.SagemakerInferenceExperimentTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#key SagemakerInferenceExperiment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#value SagemakerInferenceExperiment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference <a name="SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_experiment

sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.resetCsvContentTypes">reset_csv_content_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.resetJsonContentTypes">reset_json_content_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_csv_content_types` <a name="reset_csv_content_types" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.resetCsvContentTypes"></a>

```python
def reset_csv_content_types() -> None
```

##### `reset_json_content_types` <a name="reset_json_content_types" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.resetJsonContentTypes"></a>

```python
def reset_json_content_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.csvContentTypesInput">csv_content_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.jsonContentTypesInput">json_content_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.csvContentTypes">csv_content_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.jsonContentTypes">json_content_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType">SagemakerInferenceExperimentDataStorageConfigContentType</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `csv_content_types_input`<sup>Optional</sup> <a name="csv_content_types_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.csvContentTypesInput"></a>

```python
csv_content_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `json_content_types_input`<sup>Optional</sup> <a name="json_content_types_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.jsonContentTypesInput"></a>

```python
json_content_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `csv_content_types`<sup>Required</sup> <a name="csv_content_types" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.csvContentTypes"></a>

```python
csv_content_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `json_content_types`<sup>Required</sup> <a name="json_content_types" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.jsonContentTypes"></a>

```python
json_content_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceExperimentDataStorageConfigContentType
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType">SagemakerInferenceExperimentDataStorageConfigContentType</a>

---


### SagemakerInferenceExperimentDataStorageConfigOutputReference <a name="SagemakerInferenceExperimentDataStorageConfigOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_experiment

sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.putContentType">put_content_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.resetDestination">reset_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_content_type` <a name="put_content_type" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.putContentType"></a>

```python
def put_content_type(
  csv_content_types: typing.List[str] = None,
  json_content_types: typing.List[str] = None
) -> None
```

###### `csv_content_types`<sup>Optional</sup> <a name="csv_content_types" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.putContentType.parameter.csvContentTypes"></a>

- *Type:* typing.List[str]

The list of all content type headers that SageMaker will treat as CSV and capture accordingly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#csv_content_types SagemakerInferenceExperiment#csv_content_types}

---

###### `json_content_types`<sup>Optional</sup> <a name="json_content_types" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.putContentType.parameter.jsonContentTypes"></a>

- *Type:* typing.List[str]

The list of all content type headers that SageMaker will treat as JSON and capture accordingly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#json_content_types SagemakerInferenceExperiment#json_content_types}

---

##### `reset_content_type` <a name="reset_content_type" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_destination` <a name="reset_destination" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.contentType">content_type</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference">SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType">SagemakerInferenceExperimentDataStorageConfigContentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig">SagemakerInferenceExperimentDataStorageConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.contentType"></a>

```python
content_type: SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference">SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference</a>

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.contentTypeInput"></a>

```python
content_type_input: IResolvable | SagemakerInferenceExperimentDataStorageConfigContentType
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigContentType">SagemakerInferenceExperimentDataStorageConfigContentType</a>

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceExperimentDataStorageConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentDataStorageConfig">SagemakerInferenceExperimentDataStorageConfig</a>

---


### SagemakerInferenceExperimentEndpointMetadataOutputReference <a name="SagemakerInferenceExperimentEndpointMetadataOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_experiment

sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.endpointConfigName">endpoint_config_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.endpointName">endpoint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.endpointStatus">endpoint_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadata">SagemakerInferenceExperimentEndpointMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_config_name`<sup>Required</sup> <a name="endpoint_config_name" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.endpointConfigName"></a>

```python
endpoint_config_name: str
```

- *Type:* str

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

---

##### `endpoint_status`<sup>Required</sup> <a name="endpoint_status" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.endpointStatus"></a>

```python
endpoint_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadataOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerInferenceExperimentEndpointMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentEndpointMetadata">SagemakerInferenceExperimentEndpointMetadata</a>

---


### SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference <a name="SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_experiment

sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.putRealTimeInferenceConfig">put_real_time_inference_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_real_time_inference_config` <a name="put_real_time_inference_config" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.putRealTimeInferenceConfig"></a>

```python
def put_real_time_inference_config(
  instance_count: typing.Union[int, float],
  instance_type: str
) -> None
```

###### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.putRealTimeInferenceConfig.parameter.instanceCount"></a>

- *Type:* typing.Union[int, float]

The number of instances of the type specified by InstanceType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#instance_count SagemakerInferenceExperiment#instance_count}

---

###### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.putRealTimeInferenceConfig.parameter.instanceType"></a>

- *Type:* str

The instance type the model is deployed to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#instance_type SagemakerInferenceExperiment#instance_type}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.realTimeInferenceConfig">real_time_inference_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference">SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.infrastructureTypeInput">infrastructure_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.realTimeInferenceConfigInput">real_time_inference_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.infrastructureType">infrastructure_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `real_time_inference_config`<sup>Required</sup> <a name="real_time_inference_config" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.realTimeInferenceConfig"></a>

```python
real_time_inference_config: SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference">SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference</a>

---

##### `infrastructure_type_input`<sup>Optional</sup> <a name="infrastructure_type_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.infrastructureTypeInput"></a>

```python
infrastructure_type_input: str
```

- *Type:* str

---

##### `real_time_inference_config_input`<sup>Optional</sup> <a name="real_time_inference_config_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.realTimeInferenceConfigInput"></a>

```python
real_time_inference_config_input: IResolvable | SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig</a>

---

##### `infrastructure_type`<sup>Required</sup> <a name="infrastructure_type" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.infrastructureType"></a>

```python
infrastructure_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceExperimentModelVariantsInfrastructureConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfig</a>

---


### SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference <a name="SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_experiment

sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceCountInput">instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_count_input`<sup>Optional</sup> <a name="instance_count_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceCountInput"></a>

```python
instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig</a>

---


### SagemakerInferenceExperimentModelVariantsList <a name="SagemakerInferenceExperimentModelVariantsList" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_experiment

sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceExperimentModelVariantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants">SagemakerInferenceExperimentModelVariants</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerInferenceExperimentModelVariants]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants">SagemakerInferenceExperimentModelVariants</a>]

---


### SagemakerInferenceExperimentModelVariantsOutputReference <a name="SagemakerInferenceExperimentModelVariantsOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_experiment

sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.putInfrastructureConfig">put_infrastructure_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_infrastructure_config` <a name="put_infrastructure_config" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.putInfrastructureConfig"></a>

```python
def put_infrastructure_config(
  infrastructure_type: str,
  real_time_inference_config: SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig
) -> None
```

###### `infrastructure_type`<sup>Required</sup> <a name="infrastructure_type" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.putInfrastructureConfig.parameter.infrastructureType"></a>

- *Type:* str

The type of the inference experiment that you want to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#infrastructure_type SagemakerInferenceExperiment#infrastructure_type}

---

###### `real_time_inference_config`<sup>Required</sup> <a name="real_time_inference_config" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.putInfrastructureConfig.parameter.realTimeInferenceConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig</a>

The infrastructure configuration for deploying the model to a real-time inference endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_inference_experiment#real_time_inference_config SagemakerInferenceExperiment#real_time_inference_config}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.infrastructureConfig">infrastructure_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference">SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.infrastructureConfigInput">infrastructure_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.modelNameInput">model_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.variantNameInput">variant_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.modelName">model_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.variantName">variant_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants">SagemakerInferenceExperimentModelVariants</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `infrastructure_config`<sup>Required</sup> <a name="infrastructure_config" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.infrastructureConfig"></a>

```python
infrastructure_config: SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference">SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference</a>

---

##### `infrastructure_config_input`<sup>Optional</sup> <a name="infrastructure_config_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.infrastructureConfigInput"></a>

```python
infrastructure_config_input: IResolvable | SagemakerInferenceExperimentModelVariantsInfrastructureConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsInfrastructureConfig">SagemakerInferenceExperimentModelVariantsInfrastructureConfig</a>

---

##### `model_name_input`<sup>Optional</sup> <a name="model_name_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.modelNameInput"></a>

```python
model_name_input: str
```

- *Type:* str

---

##### `variant_name_input`<sup>Optional</sup> <a name="variant_name_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.variantNameInput"></a>

```python
variant_name_input: str
```

- *Type:* str

---

##### `model_name`<sup>Required</sup> <a name="model_name" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.modelName"></a>

```python
model_name: str
```

- *Type:* str

---

##### `variant_name`<sup>Required</sup> <a name="variant_name" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.variantName"></a>

```python
variant_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariantsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceExperimentModelVariants
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentModelVariants">SagemakerInferenceExperimentModelVariants</a>

---


### SagemakerInferenceExperimentScheduleOutputReference <a name="SagemakerInferenceExperimentScheduleOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_experiment

sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end_time` <a name="reset_end_time" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule">SagemakerInferenceExperimentSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceExperimentSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentSchedule">SagemakerInferenceExperimentSchedule</a>

---


### SagemakerInferenceExperimentShadowModeConfigOutputReference <a name="SagemakerInferenceExperimentShadowModeConfigOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_experiment

sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.putShadowModelVariants">put_shadow_model_variants</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.resetShadowModelVariants">reset_shadow_model_variants</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.resetSourceModelVariantName">reset_source_model_variant_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_shadow_model_variants` <a name="put_shadow_model_variants" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.putShadowModelVariants"></a>

```python
def put_shadow_model_variants(
  value: IResolvable | typing.List[SagemakerInferenceExperimentShadowModeConfigShadowModelVariants]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.putShadowModelVariants.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants">SagemakerInferenceExperimentShadowModeConfigShadowModelVariants</a>]

---

##### `reset_shadow_model_variants` <a name="reset_shadow_model_variants" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.resetShadowModelVariants"></a>

```python
def reset_shadow_model_variants() -> None
```

##### `reset_source_model_variant_name` <a name="reset_source_model_variant_name" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.resetSourceModelVariantName"></a>

```python
def reset_source_model_variant_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.shadowModelVariants">shadow_model_variants</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList">SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.shadowModelVariantsInput">shadow_model_variants_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants">SagemakerInferenceExperimentShadowModeConfigShadowModelVariants</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.sourceModelVariantNameInput">source_model_variant_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.sourceModelVariantName">source_model_variant_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig">SagemakerInferenceExperimentShadowModeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `shadow_model_variants`<sup>Required</sup> <a name="shadow_model_variants" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.shadowModelVariants"></a>

```python
shadow_model_variants: SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList">SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList</a>

---

##### `shadow_model_variants_input`<sup>Optional</sup> <a name="shadow_model_variants_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.shadowModelVariantsInput"></a>

```python
shadow_model_variants_input: IResolvable | typing.List[SagemakerInferenceExperimentShadowModeConfigShadowModelVariants]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants">SagemakerInferenceExperimentShadowModeConfigShadowModelVariants</a>]

---

##### `source_model_variant_name_input`<sup>Optional</sup> <a name="source_model_variant_name_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.sourceModelVariantNameInput"></a>

```python
source_model_variant_name_input: str
```

- *Type:* str

---

##### `source_model_variant_name`<sup>Required</sup> <a name="source_model_variant_name" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.sourceModelVariantName"></a>

```python
source_model_variant_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceExperimentShadowModeConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfig">SagemakerInferenceExperimentShadowModeConfig</a>

---


### SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList <a name="SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_experiment

sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants">SagemakerInferenceExperimentShadowModeConfigShadowModelVariants</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerInferenceExperimentShadowModeConfigShadowModelVariants]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants">SagemakerInferenceExperimentShadowModeConfigShadowModelVariants</a>]

---


### SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference <a name="SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_experiment

sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.resetSamplingPercentage">reset_sampling_percentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.resetShadowModelVariantName">reset_shadow_model_variant_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_sampling_percentage` <a name="reset_sampling_percentage" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.resetSamplingPercentage"></a>

```python
def reset_sampling_percentage() -> None
```

##### `reset_shadow_model_variant_name` <a name="reset_shadow_model_variant_name" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.resetShadowModelVariantName"></a>

```python
def reset_shadow_model_variant_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.samplingPercentageInput">sampling_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.shadowModelVariantNameInput">shadow_model_variant_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.samplingPercentage">sampling_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.shadowModelVariantName">shadow_model_variant_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants">SagemakerInferenceExperimentShadowModeConfigShadowModelVariants</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sampling_percentage_input`<sup>Optional</sup> <a name="sampling_percentage_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.samplingPercentageInput"></a>

```python
sampling_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shadow_model_variant_name_input`<sup>Optional</sup> <a name="shadow_model_variant_name_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.shadowModelVariantNameInput"></a>

```python
shadow_model_variant_name_input: str
```

- *Type:* str

---

##### `sampling_percentage`<sup>Required</sup> <a name="sampling_percentage" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.samplingPercentage"></a>

```python
sampling_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shadow_model_variant_name`<sup>Required</sup> <a name="shadow_model_variant_name" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.shadowModelVariantName"></a>

```python
shadow_model_variant_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceExperimentShadowModeConfigShadowModelVariants
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentShadowModeConfigShadowModelVariants">SagemakerInferenceExperimentShadowModeConfigShadowModelVariants</a>

---


### SagemakerInferenceExperimentTagsList <a name="SagemakerInferenceExperimentTagsList" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_experiment

sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceExperimentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags">SagemakerInferenceExperimentTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerInferenceExperimentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags">SagemakerInferenceExperimentTags</a>]

---


### SagemakerInferenceExperimentTagsOutputReference <a name="SagemakerInferenceExperimentTagsOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_experiment

sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags">SagemakerInferenceExperimentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceExperimentTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceExperiment.SagemakerInferenceExperimentTags">SagemakerInferenceExperimentTags</a>

---



