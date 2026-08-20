# `sagemakerProcessingJob` Submodule <a name="`sagemakerProcessingJob` Submodule" id="@cdktn/provider-awscc.sagemakerProcessingJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerProcessingJob <a name="SagemakerProcessingJob" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job awscc_sagemaker_processing_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJob(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app_specification: SagemakerProcessingJobAppSpecification,
  processing_resources: SagemakerProcessingJobProcessingResources,
  role_arn: str,
  environment: typing.Mapping[str] = None,
  experiment_config: SagemakerProcessingJobExperimentConfig = None,
  network_config: SagemakerProcessingJobNetworkConfig = None,
  processing_inputs: IResolvable | typing.List[SagemakerProcessingJobProcessingInputs] = None,
  processing_job_name: str = None,
  processing_output_config: SagemakerProcessingJobProcessingOutputConfig = None,
  stopping_condition: SagemakerProcessingJobStoppingCondition = None,
  tags: IResolvable | typing.List[SagemakerProcessingJobTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.appSpecification">app_specification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification">SagemakerProcessingJobAppSpecification</a></code> | Configures the processing job to run a specified Docker container image. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.processingResources">processing_resources</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources">SagemakerProcessingJobProcessingResources</a></code> | Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.environment">environment</a></code> | <code>typing.Mapping[str]</code> | Sets the environment variables in the Docker container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.experimentConfig">experiment_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig">SagemakerProcessingJobExperimentConfig</a></code> | Associates a SageMaker job as a trial component with an experiment and trial. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.networkConfig">network_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig">SagemakerProcessingJobNetworkConfig</a></code> | Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.processingInputs">processing_inputs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs">SagemakerProcessingJobProcessingInputs</a>]</code> | An array of inputs configuring the data to download into the processing container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.processingJobName">processing_job_name</a></code> | <code>str</code> | The name of the processing job. The name must be unique within an AWS Region in the AWS account. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.processingOutputConfig">processing_output_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig">SagemakerProcessingJobProcessingOutputConfig</a></code> | Configuration for uploading output from the processing container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.stoppingCondition">stopping_condition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition">SagemakerProcessingJobStoppingCondition</a></code> | Configures conditions under which the processing job should be stopped, such as how long the processing job has been running. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags">SagemakerProcessingJobTags</a>]</code> | (Optional) An array of key-value pairs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_specification`<sup>Required</sup> <a name="app_specification" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.appSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification">SagemakerProcessingJobAppSpecification</a>

Configures the processing job to run a specified Docker container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#app_specification SagemakerProcessingJob#app_specification}

---

##### `processing_resources`<sup>Required</sup> <a name="processing_resources" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.processingResources"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources">SagemakerProcessingJobProcessingResources</a>

Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job.

In distributed training, you specify more than one instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#processing_resources SagemakerProcessingJob#processing_resources}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.roleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#role_arn SagemakerProcessingJob#role_arn}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.environment"></a>

- *Type:* typing.Mapping[str]

Sets the environment variables in the Docker container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#environment SagemakerProcessingJob#environment}

---

##### `experiment_config`<sup>Optional</sup> <a name="experiment_config" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.experimentConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig">SagemakerProcessingJobExperimentConfig</a>

Associates a SageMaker job as a trial component with an experiment and trial.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#experiment_config SagemakerProcessingJob#experiment_config}

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.networkConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig">SagemakerProcessingJobNetworkConfig</a>

Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#network_config SagemakerProcessingJob#network_config}

---

##### `processing_inputs`<sup>Optional</sup> <a name="processing_inputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.processingInputs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs">SagemakerProcessingJobProcessingInputs</a>]

An array of inputs configuring the data to download into the processing container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#processing_inputs SagemakerProcessingJob#processing_inputs}

---

##### `processing_job_name`<sup>Optional</sup> <a name="processing_job_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.processingJobName"></a>

- *Type:* str

The name of the processing job. The name must be unique within an AWS Region in the AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#processing_job_name SagemakerProcessingJob#processing_job_name}

---

##### `processing_output_config`<sup>Optional</sup> <a name="processing_output_config" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.processingOutputConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig">SagemakerProcessingJobProcessingOutputConfig</a>

Configuration for uploading output from the processing container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#processing_output_config SagemakerProcessingJob#processing_output_config}

---

##### `stopping_condition`<sup>Optional</sup> <a name="stopping_condition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.stoppingCondition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition">SagemakerProcessingJobStoppingCondition</a>

Configures conditions under which the processing job should be stopped, such as how long the processing job has been running.

After the condition is met, the processing job is stopped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#stopping_condition SagemakerProcessingJob#stopping_condition}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags">SagemakerProcessingJobTags</a>]

(Optional) An array of key-value pairs.

For more information, see Using Cost Allocation Tags(https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL) in the AWS Billing and Cost Management User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#tags SagemakerProcessingJob#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putAppSpecification">put_app_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putExperimentConfig">put_experiment_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putNetworkConfig">put_network_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putProcessingInputs">put_processing_inputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putProcessingOutputConfig">put_processing_output_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putProcessingResources">put_processing_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putStoppingCondition">put_stopping_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetExperimentConfig">reset_experiment_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetNetworkConfig">reset_network_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetProcessingInputs">reset_processing_inputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetProcessingJobName">reset_processing_job_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetProcessingOutputConfig">reset_processing_output_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetStoppingCondition">reset_stopping_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_app_specification` <a name="put_app_specification" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putAppSpecification"></a>

```python
def put_app_specification(
  image_uri: str,
  container_arguments: typing.List[str] = None,
  container_entrypoint: typing.List[str] = None
) -> None
```

###### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putAppSpecification.parameter.imageUri"></a>

- *Type:* str

The container image to be run by the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#image_uri SagemakerProcessingJob#image_uri}

---

###### `container_arguments`<sup>Optional</sup> <a name="container_arguments" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putAppSpecification.parameter.containerArguments"></a>

- *Type:* typing.List[str]

The arguments for a container used to run a processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#container_arguments SagemakerProcessingJob#container_arguments}

---

###### `container_entrypoint`<sup>Optional</sup> <a name="container_entrypoint" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putAppSpecification.parameter.containerEntrypoint"></a>

- *Type:* typing.List[str]

The entrypoint for a container used to run a processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#container_entrypoint SagemakerProcessingJob#container_entrypoint}

---

##### `put_experiment_config` <a name="put_experiment_config" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putExperimentConfig"></a>

```python
def put_experiment_config(
  experiment_name: str = None,
  run_name: str = None,
  trial_component_display_name: str = None,
  trial_name: str = None
) -> None
```

###### `experiment_name`<sup>Optional</sup> <a name="experiment_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putExperimentConfig.parameter.experimentName"></a>

- *Type:* str

The name of an existing experiment to associate with the trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#experiment_name SagemakerProcessingJob#experiment_name}

---

###### `run_name`<sup>Optional</sup> <a name="run_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putExperimentConfig.parameter.runName"></a>

- *Type:* str

The name of the experiment run to associate with the trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#run_name SagemakerProcessingJob#run_name}

---

###### `trial_component_display_name`<sup>Optional</sup> <a name="trial_component_display_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putExperimentConfig.parameter.trialComponentDisplayName"></a>

- *Type:* str

The display name for the trial component.

If this key isn't specified, the display name is the trial component name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#trial_component_display_name SagemakerProcessingJob#trial_component_display_name}

---

###### `trial_name`<sup>Optional</sup> <a name="trial_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putExperimentConfig.parameter.trialName"></a>

- *Type:* str

The name of an existing trial to associate the trial component with.

If not specified, a new trial is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#trial_name SagemakerProcessingJob#trial_name}

---

##### `put_network_config` <a name="put_network_config" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putNetworkConfig"></a>

```python
def put_network_config(
  enable_inter_container_traffic_encryption: bool | IResolvable = None,
  enable_network_isolation: bool | IResolvable = None,
  vpc_config: SagemakerProcessingJobNetworkConfigVpcConfig = None
) -> None
```

###### `enable_inter_container_traffic_encryption`<sup>Optional</sup> <a name="enable_inter_container_traffic_encryption" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putNetworkConfig.parameter.enableInterContainerTrafficEncryption"></a>

- *Type:* bool | cdktn.IResolvable

Whether to encrypt all communications between distributed processing jobs.

Choose True to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#enable_inter_container_traffic_encryption SagemakerProcessingJob#enable_inter_container_traffic_encryption}

---

###### `enable_network_isolation`<sup>Optional</sup> <a name="enable_network_isolation" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putNetworkConfig.parameter.enableNetworkIsolation"></a>

- *Type:* bool | cdktn.IResolvable

Whether to allow inbound and outbound network calls to and from the containers used for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#enable_network_isolation SagemakerProcessingJob#enable_network_isolation}

---

###### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putNetworkConfig.parameter.vpcConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig">SagemakerProcessingJobNetworkConfigVpcConfig</a>

Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to.

You can control access to and from your resources by configuring a VPC. For more information, see https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#vpc_config SagemakerProcessingJob#vpc_config}

---

##### `put_processing_inputs` <a name="put_processing_inputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putProcessingInputs"></a>

```python
def put_processing_inputs(
  value: IResolvable | typing.List[SagemakerProcessingJobProcessingInputs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putProcessingInputs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs">SagemakerProcessingJobProcessingInputs</a>]

---

##### `put_processing_output_config` <a name="put_processing_output_config" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putProcessingOutputConfig"></a>

```python
def put_processing_output_config(
  kms_key_id: str = None,
  outputs: IResolvable | typing.List[SagemakerProcessingJobProcessingOutputConfigOutputs] = None
) -> None
```

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putProcessingOutputConfig.parameter.kmsKeyId"></a>

- *Type:* str

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the processing job output.

KmsKeyId can be an ID of a KMS key, ARN of a KMS key, or alias of a KMS key. The KmsKeyId is applied to all outputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#kms_key_id SagemakerProcessingJob#kms_key_id}

---

###### `outputs`<sup>Optional</sup> <a name="outputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putProcessingOutputConfig.parameter.outputs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs">SagemakerProcessingJobProcessingOutputConfigOutputs</a>]

An array of outputs configuring the data to upload from the processing container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#outputs SagemakerProcessingJob#outputs}

---

##### `put_processing_resources` <a name="put_processing_resources" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putProcessingResources"></a>

```python
def put_processing_resources(
  cluster_config: SagemakerProcessingJobProcessingResourcesClusterConfig
) -> None
```

###### `cluster_config`<sup>Required</sup> <a name="cluster_config" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putProcessingResources.parameter.clusterConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig">SagemakerProcessingJobProcessingResourcesClusterConfig</a>

Configuration for the cluster used to run a processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#cluster_config SagemakerProcessingJob#cluster_config}

---

##### `put_stopping_condition` <a name="put_stopping_condition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putStoppingCondition"></a>

```python
def put_stopping_condition(
  max_runtime_in_seconds: typing.Union[int, float] = None
) -> None
```

###### `max_runtime_in_seconds`<sup>Optional</sup> <a name="max_runtime_in_seconds" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putStoppingCondition.parameter.maxRuntimeInSeconds"></a>

- *Type:* typing.Union[int, float]

Specifies the maximum runtime in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#max_runtime_in_seconds SagemakerProcessingJob#max_runtime_in_seconds}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SagemakerProcessingJobTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags">SagemakerProcessingJobTags</a>]

---

##### `reset_environment` <a name="reset_environment" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_experiment_config` <a name="reset_experiment_config" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetExperimentConfig"></a>

```python
def reset_experiment_config() -> None
```

##### `reset_network_config` <a name="reset_network_config" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetNetworkConfig"></a>

```python
def reset_network_config() -> None
```

##### `reset_processing_inputs` <a name="reset_processing_inputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetProcessingInputs"></a>

```python
def reset_processing_inputs() -> None
```

##### `reset_processing_job_name` <a name="reset_processing_job_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetProcessingJobName"></a>

```python
def reset_processing_job_name() -> None
```

##### `reset_processing_output_config` <a name="reset_processing_output_config" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetProcessingOutputConfig"></a>

```python
def reset_processing_output_config() -> None
```

##### `reset_stopping_condition` <a name="reset_stopping_condition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetStoppingCondition"></a>

```python
def reset_stopping_condition() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SagemakerProcessingJob resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.isConstruct"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.isTerraformElement"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.isTerraformResource"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SagemakerProcessingJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerProcessingJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerProcessingJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerProcessingJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.appSpecification">app_specification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference">SagemakerProcessingJobAppSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.autoMlJobArn">auto_ml_job_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.exitMessage">exit_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.experimentConfig">experiment_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference">SagemakerProcessingJobExperimentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.failureReason">failure_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.monitoringScheduleArn">monitoring_schedule_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.networkConfig">network_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference">SagemakerProcessingJobNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingEndTime">processing_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingInputs">processing_inputs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList">SagemakerProcessingJobProcessingInputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingJobArn">processing_job_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingJobStatus">processing_job_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingOutputConfig">processing_output_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference">SagemakerProcessingJobProcessingOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingResources">processing_resources</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference">SagemakerProcessingJobProcessingResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingStartTime">processing_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.stoppingCondition">stopping_condition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference">SagemakerProcessingJobStoppingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList">SagemakerProcessingJobTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.trainingJobArn">training_job_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.appSpecificationInput">app_specification_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification">SagemakerProcessingJobAppSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.environmentInput">environment_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.experimentConfigInput">experiment_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig">SagemakerProcessingJobExperimentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.networkConfigInput">network_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig">SagemakerProcessingJobNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingInputsInput">processing_inputs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs">SagemakerProcessingJobProcessingInputs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingJobNameInput">processing_job_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingOutputConfigInput">processing_output_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig">SagemakerProcessingJobProcessingOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingResourcesInput">processing_resources_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources">SagemakerProcessingJobProcessingResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.stoppingConditionInput">stopping_condition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition">SagemakerProcessingJobStoppingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags">SagemakerProcessingJobTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.environment">environment</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingJobName">processing_job_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_specification`<sup>Required</sup> <a name="app_specification" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.appSpecification"></a>

```python
app_specification: SagemakerProcessingJobAppSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference">SagemakerProcessingJobAppSpecificationOutputReference</a>

---

##### `auto_ml_job_arn`<sup>Required</sup> <a name="auto_ml_job_arn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.autoMlJobArn"></a>

```python
auto_ml_job_arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `exit_message`<sup>Required</sup> <a name="exit_message" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.exitMessage"></a>

```python
exit_message: str
```

- *Type:* str

---

##### `experiment_config`<sup>Required</sup> <a name="experiment_config" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.experimentConfig"></a>

```python
experiment_config: SagemakerProcessingJobExperimentConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference">SagemakerProcessingJobExperimentConfigOutputReference</a>

---

##### `failure_reason`<sup>Required</sup> <a name="failure_reason" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.failureReason"></a>

```python
failure_reason: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `monitoring_schedule_arn`<sup>Required</sup> <a name="monitoring_schedule_arn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.monitoringScheduleArn"></a>

```python
monitoring_schedule_arn: str
```

- *Type:* str

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.networkConfig"></a>

```python
network_config: SagemakerProcessingJobNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference">SagemakerProcessingJobNetworkConfigOutputReference</a>

---

##### `processing_end_time`<sup>Required</sup> <a name="processing_end_time" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingEndTime"></a>

```python
processing_end_time: str
```

- *Type:* str

---

##### `processing_inputs`<sup>Required</sup> <a name="processing_inputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingInputs"></a>

```python
processing_inputs: SagemakerProcessingJobProcessingInputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList">SagemakerProcessingJobProcessingInputsList</a>

---

##### `processing_job_arn`<sup>Required</sup> <a name="processing_job_arn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingJobArn"></a>

```python
processing_job_arn: str
```

- *Type:* str

---

##### `processing_job_status`<sup>Required</sup> <a name="processing_job_status" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingJobStatus"></a>

```python
processing_job_status: str
```

- *Type:* str

---

##### `processing_output_config`<sup>Required</sup> <a name="processing_output_config" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingOutputConfig"></a>

```python
processing_output_config: SagemakerProcessingJobProcessingOutputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference">SagemakerProcessingJobProcessingOutputConfigOutputReference</a>

---

##### `processing_resources`<sup>Required</sup> <a name="processing_resources" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingResources"></a>

```python
processing_resources: SagemakerProcessingJobProcessingResourcesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference">SagemakerProcessingJobProcessingResourcesOutputReference</a>

---

##### `processing_start_time`<sup>Required</sup> <a name="processing_start_time" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingStartTime"></a>

```python
processing_start_time: str
```

- *Type:* str

---

##### `stopping_condition`<sup>Required</sup> <a name="stopping_condition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.stoppingCondition"></a>

```python
stopping_condition: SagemakerProcessingJobStoppingConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference">SagemakerProcessingJobStoppingConditionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.tags"></a>

```python
tags: SagemakerProcessingJobTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList">SagemakerProcessingJobTagsList</a>

---

##### `training_job_arn`<sup>Required</sup> <a name="training_job_arn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.trainingJobArn"></a>

```python
training_job_arn: str
```

- *Type:* str

---

##### `app_specification_input`<sup>Optional</sup> <a name="app_specification_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.appSpecificationInput"></a>

```python
app_specification_input: IResolvable | SagemakerProcessingJobAppSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification">SagemakerProcessingJobAppSpecification</a>

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.environmentInput"></a>

```python
environment_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `experiment_config_input`<sup>Optional</sup> <a name="experiment_config_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.experimentConfigInput"></a>

```python
experiment_config_input: IResolvable | SagemakerProcessingJobExperimentConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig">SagemakerProcessingJobExperimentConfig</a>

---

##### `network_config_input`<sup>Optional</sup> <a name="network_config_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.networkConfigInput"></a>

```python
network_config_input: IResolvable | SagemakerProcessingJobNetworkConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig">SagemakerProcessingJobNetworkConfig</a>

---

##### `processing_inputs_input`<sup>Optional</sup> <a name="processing_inputs_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingInputsInput"></a>

```python
processing_inputs_input: IResolvable | typing.List[SagemakerProcessingJobProcessingInputs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs">SagemakerProcessingJobProcessingInputs</a>]

---

##### `processing_job_name_input`<sup>Optional</sup> <a name="processing_job_name_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingJobNameInput"></a>

```python
processing_job_name_input: str
```

- *Type:* str

---

##### `processing_output_config_input`<sup>Optional</sup> <a name="processing_output_config_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingOutputConfigInput"></a>

```python
processing_output_config_input: IResolvable | SagemakerProcessingJobProcessingOutputConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig">SagemakerProcessingJobProcessingOutputConfig</a>

---

##### `processing_resources_input`<sup>Optional</sup> <a name="processing_resources_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingResourcesInput"></a>

```python
processing_resources_input: IResolvable | SagemakerProcessingJobProcessingResources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources">SagemakerProcessingJobProcessingResources</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `stopping_condition_input`<sup>Optional</sup> <a name="stopping_condition_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.stoppingConditionInput"></a>

```python
stopping_condition_input: IResolvable | SagemakerProcessingJobStoppingCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition">SagemakerProcessingJobStoppingCondition</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SagemakerProcessingJobTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags">SagemakerProcessingJobTags</a>]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.environment"></a>

```python
environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `processing_job_name`<sup>Required</sup> <a name="processing_job_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.processingJobName"></a>

```python
processing_job_name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerProcessingJobAppSpecification <a name="SagemakerProcessingJobAppSpecification" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobAppSpecification(
  image_uri: str,
  container_arguments: typing.List[str] = None,
  container_entrypoint: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification.property.imageUri">image_uri</a></code> | <code>str</code> | The container image to be run by the processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification.property.containerArguments">container_arguments</a></code> | <code>typing.List[str]</code> | The arguments for a container used to run a processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification.property.containerEntrypoint">container_entrypoint</a></code> | <code>typing.List[str]</code> | The entrypoint for a container used to run a processing job. |

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

The container image to be run by the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#image_uri SagemakerProcessingJob#image_uri}

---

##### `container_arguments`<sup>Optional</sup> <a name="container_arguments" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification.property.containerArguments"></a>

```python
container_arguments: typing.List[str]
```

- *Type:* typing.List[str]

The arguments for a container used to run a processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#container_arguments SagemakerProcessingJob#container_arguments}

---

##### `container_entrypoint`<sup>Optional</sup> <a name="container_entrypoint" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification.property.containerEntrypoint"></a>

```python
container_entrypoint: typing.List[str]
```

- *Type:* typing.List[str]

The entrypoint for a container used to run a processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#container_entrypoint SagemakerProcessingJob#container_entrypoint}

---

### SagemakerProcessingJobConfig <a name="SagemakerProcessingJobConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app_specification: SagemakerProcessingJobAppSpecification,
  processing_resources: SagemakerProcessingJobProcessingResources,
  role_arn: str,
  environment: typing.Mapping[str] = None,
  experiment_config: SagemakerProcessingJobExperimentConfig = None,
  network_config: SagemakerProcessingJobNetworkConfig = None,
  processing_inputs: IResolvable | typing.List[SagemakerProcessingJobProcessingInputs] = None,
  processing_job_name: str = None,
  processing_output_config: SagemakerProcessingJobProcessingOutputConfig = None,
  stopping_condition: SagemakerProcessingJobStoppingCondition = None,
  tags: IResolvable | typing.List[SagemakerProcessingJobTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.appSpecification">app_specification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification">SagemakerProcessingJobAppSpecification</a></code> | Configures the processing job to run a specified Docker container image. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.processingResources">processing_resources</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources">SagemakerProcessingJobProcessingResources</a></code> | Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.environment">environment</a></code> | <code>typing.Mapping[str]</code> | Sets the environment variables in the Docker container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.experimentConfig">experiment_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig">SagemakerProcessingJobExperimentConfig</a></code> | Associates a SageMaker job as a trial component with an experiment and trial. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.networkConfig">network_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig">SagemakerProcessingJobNetworkConfig</a></code> | Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.processingInputs">processing_inputs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs">SagemakerProcessingJobProcessingInputs</a>]</code> | An array of inputs configuring the data to download into the processing container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.processingJobName">processing_job_name</a></code> | <code>str</code> | The name of the processing job. The name must be unique within an AWS Region in the AWS account. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.processingOutputConfig">processing_output_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig">SagemakerProcessingJobProcessingOutputConfig</a></code> | Configuration for uploading output from the processing container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.stoppingCondition">stopping_condition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition">SagemakerProcessingJobStoppingCondition</a></code> | Configures conditions under which the processing job should be stopped, such as how long the processing job has been running. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags">SagemakerProcessingJobTags</a>]</code> | (Optional) An array of key-value pairs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_specification`<sup>Required</sup> <a name="app_specification" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.appSpecification"></a>

```python
app_specification: SagemakerProcessingJobAppSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification">SagemakerProcessingJobAppSpecification</a>

Configures the processing job to run a specified Docker container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#app_specification SagemakerProcessingJob#app_specification}

---

##### `processing_resources`<sup>Required</sup> <a name="processing_resources" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.processingResources"></a>

```python
processing_resources: SagemakerProcessingJobProcessingResources
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources">SagemakerProcessingJobProcessingResources</a>

Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job.

In distributed training, you specify more than one instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#processing_resources SagemakerProcessingJob#processing_resources}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#role_arn SagemakerProcessingJob#role_arn}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.environment"></a>

```python
environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Sets the environment variables in the Docker container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#environment SagemakerProcessingJob#environment}

---

##### `experiment_config`<sup>Optional</sup> <a name="experiment_config" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.experimentConfig"></a>

```python
experiment_config: SagemakerProcessingJobExperimentConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig">SagemakerProcessingJobExperimentConfig</a>

Associates a SageMaker job as a trial component with an experiment and trial.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#experiment_config SagemakerProcessingJob#experiment_config}

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.networkConfig"></a>

```python
network_config: SagemakerProcessingJobNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig">SagemakerProcessingJobNetworkConfig</a>

Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#network_config SagemakerProcessingJob#network_config}

---

##### `processing_inputs`<sup>Optional</sup> <a name="processing_inputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.processingInputs"></a>

```python
processing_inputs: IResolvable | typing.List[SagemakerProcessingJobProcessingInputs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs">SagemakerProcessingJobProcessingInputs</a>]

An array of inputs configuring the data to download into the processing container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#processing_inputs SagemakerProcessingJob#processing_inputs}

---

##### `processing_job_name`<sup>Optional</sup> <a name="processing_job_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.processingJobName"></a>

```python
processing_job_name: str
```

- *Type:* str

The name of the processing job. The name must be unique within an AWS Region in the AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#processing_job_name SagemakerProcessingJob#processing_job_name}

---

##### `processing_output_config`<sup>Optional</sup> <a name="processing_output_config" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.processingOutputConfig"></a>

```python
processing_output_config: SagemakerProcessingJobProcessingOutputConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig">SagemakerProcessingJobProcessingOutputConfig</a>

Configuration for uploading output from the processing container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#processing_output_config SagemakerProcessingJob#processing_output_config}

---

##### `stopping_condition`<sup>Optional</sup> <a name="stopping_condition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.stoppingCondition"></a>

```python
stopping_condition: SagemakerProcessingJobStoppingCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition">SagemakerProcessingJobStoppingCondition</a>

Configures conditions under which the processing job should be stopped, such as how long the processing job has been running.

After the condition is met, the processing job is stopped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#stopping_condition SagemakerProcessingJob#stopping_condition}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SagemakerProcessingJobTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags">SagemakerProcessingJobTags</a>]

(Optional) An array of key-value pairs.

For more information, see Using Cost Allocation Tags(https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL) in the AWS Billing and Cost Management User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#tags SagemakerProcessingJob#tags}

---

### SagemakerProcessingJobExperimentConfig <a name="SagemakerProcessingJobExperimentConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig(
  experiment_name: str = None,
  run_name: str = None,
  trial_component_display_name: str = None,
  trial_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig.property.experimentName">experiment_name</a></code> | <code>str</code> | The name of an existing experiment to associate with the trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig.property.runName">run_name</a></code> | <code>str</code> | The name of the experiment run to associate with the trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig.property.trialComponentDisplayName">trial_component_display_name</a></code> | <code>str</code> | The display name for the trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig.property.trialName">trial_name</a></code> | <code>str</code> | The name of an existing trial to associate the trial component with. |

---

##### `experiment_name`<sup>Optional</sup> <a name="experiment_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig.property.experimentName"></a>

```python
experiment_name: str
```

- *Type:* str

The name of an existing experiment to associate with the trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#experiment_name SagemakerProcessingJob#experiment_name}

---

##### `run_name`<sup>Optional</sup> <a name="run_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig.property.runName"></a>

```python
run_name: str
```

- *Type:* str

The name of the experiment run to associate with the trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#run_name SagemakerProcessingJob#run_name}

---

##### `trial_component_display_name`<sup>Optional</sup> <a name="trial_component_display_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig.property.trialComponentDisplayName"></a>

```python
trial_component_display_name: str
```

- *Type:* str

The display name for the trial component.

If this key isn't specified, the display name is the trial component name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#trial_component_display_name SagemakerProcessingJob#trial_component_display_name}

---

##### `trial_name`<sup>Optional</sup> <a name="trial_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig.property.trialName"></a>

```python
trial_name: str
```

- *Type:* str

The name of an existing trial to associate the trial component with.

If not specified, a new trial is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#trial_name SagemakerProcessingJob#trial_name}

---

### SagemakerProcessingJobNetworkConfig <a name="SagemakerProcessingJobNetworkConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig(
  enable_inter_container_traffic_encryption: bool | IResolvable = None,
  enable_network_isolation: bool | IResolvable = None,
  vpc_config: SagemakerProcessingJobNetworkConfigVpcConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig.property.enableInterContainerTrafficEncryption">enable_inter_container_traffic_encryption</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to encrypt all communications between distributed processing jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig.property.enableNetworkIsolation">enable_network_isolation</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to allow inbound and outbound network calls to and from the containers used for the processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig">SagemakerProcessingJobNetworkConfigVpcConfig</a></code> | Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. |

---

##### `enable_inter_container_traffic_encryption`<sup>Optional</sup> <a name="enable_inter_container_traffic_encryption" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig.property.enableInterContainerTrafficEncryption"></a>

```python
enable_inter_container_traffic_encryption: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to encrypt all communications between distributed processing jobs.

Choose True to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#enable_inter_container_traffic_encryption SagemakerProcessingJob#enable_inter_container_traffic_encryption}

---

##### `enable_network_isolation`<sup>Optional</sup> <a name="enable_network_isolation" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig.property.enableNetworkIsolation"></a>

```python
enable_network_isolation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to allow inbound and outbound network calls to and from the containers used for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#enable_network_isolation SagemakerProcessingJob#enable_network_isolation}

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig.property.vpcConfig"></a>

```python
vpc_config: SagemakerProcessingJobNetworkConfigVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig">SagemakerProcessingJobNetworkConfigVpcConfig</a>

Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to.

You can control access to and from your resources by configuring a VPC. For more information, see https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#vpc_config SagemakerProcessingJob#vpc_config}

---

### SagemakerProcessingJobNetworkConfigVpcConfig <a name="SagemakerProcessingJobNetworkConfigVpcConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig(
  security_group_ids: typing.List[str] = None,
  subnets: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The VPC security group IDs, in the form 'sg-xxxxxxxx'. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | The ID of the subnets in the VPC to which you want to connect your training job or model. |

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

The VPC security group IDs, in the form 'sg-xxxxxxxx'.

Specify the security groups for the VPC that is specified in the 'Subnets' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#security_group_ids SagemakerProcessingJob#security_group_ids}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

The ID of the subnets in the VPC to which you want to connect your training job or model.

For information about the availability of specific instance types, see https://docs.aws.amazon.com/sagemaker/latest/dg/regions-quotas.html

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#subnets SagemakerProcessingJob#subnets}

---

### SagemakerProcessingJobProcessingInputs <a name="SagemakerProcessingJobProcessingInputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs(
  app_managed: bool | IResolvable = None,
  dataset_definition: SagemakerProcessingJobProcessingInputsDatasetDefinition = None,
  input_name: str = None,
  s3_input: SagemakerProcessingJobProcessingInputsS3Input = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs.property.appManaged">app_managed</a></code> | <code>bool \| cdktn.IResolvable</code> | When True, input operations such as data download are managed natively by the processing job application. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs.property.datasetDefinition">dataset_definition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinition</a></code> | Configuration for Dataset Definition inputs. The Dataset Definition input must specify exactly one of either `AthenaDatasetDefinition` or `RedshiftDatasetDefinition` types. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs.property.inputName">input_name</a></code> | <code>str</code> | The name for the processing job input. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs.property.s3Input">s3_input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input">SagemakerProcessingJobProcessingInputsS3Input</a></code> | Configuration for downloading input data from Amazon S3 into the processing container. |

---

##### `app_managed`<sup>Optional</sup> <a name="app_managed" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs.property.appManaged"></a>

```python
app_managed: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When True, input operations such as data download are managed natively by the processing job application.

When False (default), input operations are managed by Amazon SageMaker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#app_managed SagemakerProcessingJob#app_managed}

---

##### `dataset_definition`<sup>Optional</sup> <a name="dataset_definition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs.property.datasetDefinition"></a>

```python
dataset_definition: SagemakerProcessingJobProcessingInputsDatasetDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinition</a>

Configuration for Dataset Definition inputs. The Dataset Definition input must specify exactly one of either `AthenaDatasetDefinition` or `RedshiftDatasetDefinition` types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#dataset_definition SagemakerProcessingJob#dataset_definition}

---

##### `input_name`<sup>Optional</sup> <a name="input_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs.property.inputName"></a>

```python
input_name: str
```

- *Type:* str

The name for the processing job input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#input_name SagemakerProcessingJob#input_name}

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs.property.s3Input"></a>

```python
s3_input: SagemakerProcessingJobProcessingInputsS3Input
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input">SagemakerProcessingJobProcessingInputsS3Input</a>

Configuration for downloading input data from Amazon S3 into the processing container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#s3_input SagemakerProcessingJob#s3_input}

---

### SagemakerProcessingJobProcessingInputsDatasetDefinition <a name="SagemakerProcessingJobProcessingInputsDatasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition(
  athena_dataset_definition: SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition = None,
  data_distribution_type: str = None,
  input_mode: str = None,
  local_path: str = None,
  redshift_dataset_definition: SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.property.athenaDatasetDefinition">athena_dataset_definition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition</a></code> | Configuration for Athena Dataset Definition input. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.property.dataDistributionType">data_distribution_type</a></code> | <code>str</code> | Whether the generated dataset is FullyReplicated or ShardedByS3Key (default). |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.property.inputMode">input_mode</a></code> | <code>str</code> | Whether to use File or Pipe input mode. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.property.localPath">local_path</a></code> | <code>str</code> | The local path where you want Amazon SageMaker to download the Dataset Definition inputs to run a processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.property.redshiftDatasetDefinition">redshift_dataset_definition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition</a></code> | Configuration for Redshift Dataset Definition input. |

---

##### `athena_dataset_definition`<sup>Optional</sup> <a name="athena_dataset_definition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.property.athenaDatasetDefinition"></a>

```python
athena_dataset_definition: SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition</a>

Configuration for Athena Dataset Definition input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#athena_dataset_definition SagemakerProcessingJob#athena_dataset_definition}

---

##### `data_distribution_type`<sup>Optional</sup> <a name="data_distribution_type" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.property.dataDistributionType"></a>

```python
data_distribution_type: str
```

- *Type:* str

Whether the generated dataset is FullyReplicated or ShardedByS3Key (default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#data_distribution_type SagemakerProcessingJob#data_distribution_type}

---

##### `input_mode`<sup>Optional</sup> <a name="input_mode" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.property.inputMode"></a>

```python
input_mode: str
```

- *Type:* str

Whether to use File or Pipe input mode.

In File (default) mode, Amazon SageMaker copies the data from the input source onto the local Amazon Elastic Block Store (Amazon EBS) volumes before starting your training algorithm. This is the most commonly used input mode. In Pipe mode, Amazon SageMaker streams input data from the source directly to your algorithm without using the EBS volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#input_mode SagemakerProcessingJob#input_mode}

---

##### `local_path`<sup>Optional</sup> <a name="local_path" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

The local path where you want Amazon SageMaker to download the Dataset Definition inputs to run a processing job.

LocalPath is an absolute path to the input data. This is a required parameter when AppManaged is False (default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#local_path SagemakerProcessingJob#local_path}

---

##### `redshift_dataset_definition`<sup>Optional</sup> <a name="redshift_dataset_definition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition.property.redshiftDatasetDefinition"></a>

```python
redshift_dataset_definition: SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition</a>

Configuration for Redshift Dataset Definition input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#redshift_dataset_definition SagemakerProcessingJob#redshift_dataset_definition}

---

### SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition <a name="SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition(
  catalog: str = None,
  database: str = None,
  kms_key_id: str = None,
  output_compression: str = None,
  output_format: str = None,
  output_s3_uri: str = None,
  query_string: str = None,
  work_group: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.catalog">catalog</a></code> | <code>str</code> | The name of the data catalog used in Athena query execution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.database">database</a></code> | <code>str</code> | The name of the database used in the Athena query execution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data generated from an Athena query execution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.outputCompression">output_compression</a></code> | <code>str</code> | The compression used for Athena query results. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.outputFormat">output_format</a></code> | <code>str</code> | The data storage format for Athena query results. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.outputS3Uri">output_s3_uri</a></code> | <code>str</code> | The location in Amazon S3 where Athena query results are stored. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.queryString">query_string</a></code> | <code>str</code> | The SQL query statements, to be executed. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.workGroup">work_group</a></code> | <code>str</code> | The name of the workgroup in which the Athena query is being started. |

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

The name of the data catalog used in Athena query execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#catalog SagemakerProcessingJob#catalog}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.database"></a>

```python
database: str
```

- *Type:* str

The name of the database used in the Athena query execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#database SagemakerProcessingJob#database}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data generated from an Athena query execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#kms_key_id SagemakerProcessingJob#kms_key_id}

---

##### `output_compression`<sup>Optional</sup> <a name="output_compression" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.outputCompression"></a>

```python
output_compression: str
```

- *Type:* str

The compression used for Athena query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#output_compression SagemakerProcessingJob#output_compression}

---

##### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

The data storage format for Athena query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#output_format SagemakerProcessingJob#output_format}

---

##### `output_s3_uri`<sup>Optional</sup> <a name="output_s3_uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.outputS3Uri"></a>

```python
output_s3_uri: str
```

- *Type:* str

The location in Amazon S3 where Athena query results are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#output_s3_uri SagemakerProcessingJob#output_s3_uri}

---

##### `query_string`<sup>Optional</sup> <a name="query_string" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.queryString"></a>

```python
query_string: str
```

- *Type:* str

The SQL query statements, to be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#query_string SagemakerProcessingJob#query_string}

---

##### `work_group`<sup>Optional</sup> <a name="work_group" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition.property.workGroup"></a>

```python
work_group: str
```

- *Type:* str

The name of the workgroup in which the Athena query is being started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#work_group SagemakerProcessingJob#work_group}

---

### SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition <a name="SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition(
  cluster_id: str = None,
  cluster_role_arn: str = None,
  database: str = None,
  db_user: str = None,
  kms_key_id: str = None,
  output_compression: str = None,
  output_format: str = None,
  output_s3_uri: str = None,
  query_string: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.clusterId">cluster_id</a></code> | <code>str</code> | The Redshift cluster Identifier. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.clusterRoleArn">cluster_role_arn</a></code> | <code>str</code> | The IAM role attached to your Redshift cluster that Amazon SageMaker uses to generate datasets. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.database">database</a></code> | <code>str</code> | The name of the Redshift database used in Redshift query execution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.dbUser">db_user</a></code> | <code>str</code> | The database user name used in Redshift query execution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data from a Redshift execution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.outputCompression">output_compression</a></code> | <code>str</code> | The compression used for Redshift query results. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.outputFormat">output_format</a></code> | <code>str</code> | The data storage format for Redshift query results. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.outputS3Uri">output_s3_uri</a></code> | <code>str</code> | The location in Amazon S3 where the Redshift query results are stored. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.queryString">query_string</a></code> | <code>str</code> | The SQL query statements to be executed. |

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

The Redshift cluster Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#cluster_id SagemakerProcessingJob#cluster_id}

---

##### `cluster_role_arn`<sup>Optional</sup> <a name="cluster_role_arn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.clusterRoleArn"></a>

```python
cluster_role_arn: str
```

- *Type:* str

The IAM role attached to your Redshift cluster that Amazon SageMaker uses to generate datasets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#cluster_role_arn SagemakerProcessingJob#cluster_role_arn}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.database"></a>

```python
database: str
```

- *Type:* str

The name of the Redshift database used in Redshift query execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#database SagemakerProcessingJob#database}

---

##### `db_user`<sup>Optional</sup> <a name="db_user" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.dbUser"></a>

```python
db_user: str
```

- *Type:* str

The database user name used in Redshift query execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#db_user SagemakerProcessingJob#db_user}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data from a Redshift execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#kms_key_id SagemakerProcessingJob#kms_key_id}

---

##### `output_compression`<sup>Optional</sup> <a name="output_compression" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.outputCompression"></a>

```python
output_compression: str
```

- *Type:* str

The compression used for Redshift query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#output_compression SagemakerProcessingJob#output_compression}

---

##### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

The data storage format for Redshift query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#output_format SagemakerProcessingJob#output_format}

---

##### `output_s3_uri`<sup>Optional</sup> <a name="output_s3_uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.outputS3Uri"></a>

```python
output_s3_uri: str
```

- *Type:* str

The location in Amazon S3 where the Redshift query results are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#output_s3_uri SagemakerProcessingJob#output_s3_uri}

---

##### `query_string`<sup>Optional</sup> <a name="query_string" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition.property.queryString"></a>

```python
query_string: str
```

- *Type:* str

The SQL query statements to be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#query_string SagemakerProcessingJob#query_string}

---

### SagemakerProcessingJobProcessingInputsS3Input <a name="SagemakerProcessingJobProcessingInputsS3Input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input(
  local_path: str = None,
  s3_compression_type: str = None,
  s3_data_distribution_type: str = None,
  s3_data_type: str = None,
  s3_input_mode: str = None,
  s3_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.localPath">local_path</a></code> | <code>str</code> | The local path in your container where you want Amazon SageMaker to write input data to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.s3CompressionType">s3_compression_type</a></code> | <code>str</code> | Whether to GZIP-decompress the data in Amazon S3 as it is streamed into the processing container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.s3DataDistributionType">s3_data_distribution_type</a></code> | <code>str</code> | Whether to distribute the data from Amazon S3 to all processing instances with `FullyReplicated`, or whether the data from Amazon S3 is shared by Amazon S3 key, downloading one shard of data to each processing instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.s3DataType">s3_data_type</a></code> | <code>str</code> | Whether you use an S3Prefix or a ManifestFile for the data type. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.s3InputMode">s3_input_mode</a></code> | <code>str</code> | Whether to use File or Pipe input mode. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.s3Uri">s3_uri</a></code> | <code>str</code> | The URI of the Amazon S3 prefix Amazon SageMaker downloads data required to run a processing job. |

---

##### `local_path`<sup>Optional</sup> <a name="local_path" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

The local path in your container where you want Amazon SageMaker to write input data to.

`LocalPath` is an absolute path to the input data and must begin with `/opt/ml/processing/`. LocalPath is a required parameter when `AppManaged` is `False` (default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#local_path SagemakerProcessingJob#local_path}

---

##### `s3_compression_type`<sup>Optional</sup> <a name="s3_compression_type" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.s3CompressionType"></a>

```python
s3_compression_type: str
```

- *Type:* str

Whether to GZIP-decompress the data in Amazon S3 as it is streamed into the processing container.

`Gzip` can only be used when `Pipe` mode is specified as the `S3InputMode`. In `Pipe` mode, Amazon SageMaker streams input data from the source directly to your container without using the EBS volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#s3_compression_type SagemakerProcessingJob#s3_compression_type}

---

##### `s3_data_distribution_type`<sup>Optional</sup> <a name="s3_data_distribution_type" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.s3DataDistributionType"></a>

```python
s3_data_distribution_type: str
```

- *Type:* str

Whether to distribute the data from Amazon S3 to all processing instances with `FullyReplicated`, or whether the data from Amazon S3 is shared by Amazon S3 key, downloading one shard of data to each processing instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#s3_data_distribution_type SagemakerProcessingJob#s3_data_distribution_type}

---

##### `s3_data_type`<sup>Optional</sup> <a name="s3_data_type" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.s3DataType"></a>

```python
s3_data_type: str
```

- *Type:* str

Whether you use an S3Prefix or a ManifestFile for the data type.

If you choose S3Prefix, S3Uri identifies a key name prefix. Amazon SageMaker uses all objects with the specified key name prefix for the processing job. If you choose ManifestFile, S3Uri identifies an object that is a manifest file containing a list of object keys that you want Amazon SageMaker to use for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#s3_data_type SagemakerProcessingJob#s3_data_type}

---

##### `s3_input_mode`<sup>Optional</sup> <a name="s3_input_mode" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.s3InputMode"></a>

```python
s3_input_mode: str
```

- *Type:* str

Whether to use File or Pipe input mode.

In File mode, Amazon SageMaker copies the data from the input source onto the local ML storage volume before starting your processing container. This is the most commonly used input mode. In Pipe mode, Amazon SageMaker streams input data from the source directly to your processing container into named pipes without using the ML storage volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#s3_input_mode SagemakerProcessingJob#s3_input_mode}

---

##### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

The URI of the Amazon S3 prefix Amazon SageMaker downloads data required to run a processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#s3_uri SagemakerProcessingJob#s3_uri}

---

### SagemakerProcessingJobProcessingOutputConfig <a name="SagemakerProcessingJobProcessingOutputConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig(
  kms_key_id: str = None,
  outputs: IResolvable | typing.List[SagemakerProcessingJobProcessingOutputConfigOutputs] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the processing job output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig.property.outputs">outputs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs">SagemakerProcessingJobProcessingOutputConfigOutputs</a>]</code> | An array of outputs configuring the data to upload from the processing container. |

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the processing job output.

KmsKeyId can be an ID of a KMS key, ARN of a KMS key, or alias of a KMS key. The KmsKeyId is applied to all outputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#kms_key_id SagemakerProcessingJob#kms_key_id}

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig.property.outputs"></a>

```python
outputs: IResolvable | typing.List[SagemakerProcessingJobProcessingOutputConfigOutputs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs">SagemakerProcessingJobProcessingOutputConfigOutputs</a>]

An array of outputs configuring the data to upload from the processing container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#outputs SagemakerProcessingJob#outputs}

---

### SagemakerProcessingJobProcessingOutputConfigOutputs <a name="SagemakerProcessingJobProcessingOutputConfigOutputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs(
  app_managed: bool | IResolvable = None,
  feature_store_output: SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput = None,
  output_name: str = None,
  s3_output: SagemakerProcessingJobProcessingOutputConfigOutputsS3Output = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs.property.appManaged">app_managed</a></code> | <code>bool \| cdktn.IResolvable</code> | When True, output operations such as data upload are managed natively by the processing job application. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs.property.featureStoreOutput">feature_store_output</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput">SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput</a></code> | Configuration for processing job outputs in Amazon SageMaker Feature Store. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs.property.outputName">output_name</a></code> | <code>str</code> | The name for the processing job output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs.property.s3Output">s3_output</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output">SagemakerProcessingJobProcessingOutputConfigOutputsS3Output</a></code> | Configuration for uploading output data to Amazon S3 from the processing container. |

---

##### `app_managed`<sup>Optional</sup> <a name="app_managed" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs.property.appManaged"></a>

```python
app_managed: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When True, output operations such as data upload are managed natively by the processing job application.

When False (default), output operations are managed by Amazon SageMaker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#app_managed SagemakerProcessingJob#app_managed}

---

##### `feature_store_output`<sup>Optional</sup> <a name="feature_store_output" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs.property.featureStoreOutput"></a>

```python
feature_store_output: SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput">SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput</a>

Configuration for processing job outputs in Amazon SageMaker Feature Store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#feature_store_output SagemakerProcessingJob#feature_store_output}

---

##### `output_name`<sup>Optional</sup> <a name="output_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs.property.outputName"></a>

```python
output_name: str
```

- *Type:* str

The name for the processing job output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#output_name SagemakerProcessingJob#output_name}

---

##### `s3_output`<sup>Optional</sup> <a name="s3_output" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs.property.s3Output"></a>

```python
s3_output: SagemakerProcessingJobProcessingOutputConfigOutputsS3Output
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output">SagemakerProcessingJobProcessingOutputConfigOutputsS3Output</a>

Configuration for uploading output data to Amazon S3 from the processing container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#s3_output SagemakerProcessingJob#s3_output}

---

### SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput <a name="SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput(
  feature_group_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput.property.featureGroupName">feature_group_name</a></code> | <code>str</code> | The name of the Amazon SageMaker FeatureGroup to use as the destination for processing job output. |

---

##### `feature_group_name`<sup>Optional</sup> <a name="feature_group_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput.property.featureGroupName"></a>

```python
feature_group_name: str
```

- *Type:* str

The name of the Amazon SageMaker FeatureGroup to use as the destination for processing job output.

Note that your processing script is responsible for putting records into your Feature Store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#feature_group_name SagemakerProcessingJob#feature_group_name}

---

### SagemakerProcessingJobProcessingOutputConfigOutputsS3Output <a name="SagemakerProcessingJobProcessingOutputConfigOutputsS3Output" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output(
  local_path: str = None,
  s3_upload_mode: str = None,
  s3_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output.property.localPath">local_path</a></code> | <code>str</code> | The local path of a directory where you want Amazon SageMaker to upload its contents to Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output.property.s3UploadMode">s3_upload_mode</a></code> | <code>str</code> | Whether to upload the results of the processing job continuously or after the job completes. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output.property.s3Uri">s3_uri</a></code> | <code>str</code> | A URI that identifies the Amazon S3 bucket where you want Amazon SageMaker to save the results of a processing job. |

---

##### `local_path`<sup>Optional</sup> <a name="local_path" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

The local path of a directory where you want Amazon SageMaker to upload its contents to Amazon S3.

LocalPath is an absolute path to a directory containing output files. This directory will be created by the platform and exist when your container's entrypoint is invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#local_path SagemakerProcessingJob#local_path}

---

##### `s3_upload_mode`<sup>Optional</sup> <a name="s3_upload_mode" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output.property.s3UploadMode"></a>

```python
s3_upload_mode: str
```

- *Type:* str

Whether to upload the results of the processing job continuously or after the job completes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#s3_upload_mode SagemakerProcessingJob#s3_upload_mode}

---

##### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

A URI that identifies the Amazon S3 bucket where you want Amazon SageMaker to save the results of a processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#s3_uri SagemakerProcessingJob#s3_uri}

---

### SagemakerProcessingJobProcessingResources <a name="SagemakerProcessingJobProcessingResources" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobProcessingResources(
  cluster_config: SagemakerProcessingJobProcessingResourcesClusterConfig
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources.property.clusterConfig">cluster_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig">SagemakerProcessingJobProcessingResourcesClusterConfig</a></code> | Configuration for the cluster used to run a processing job. |

---

##### `cluster_config`<sup>Required</sup> <a name="cluster_config" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources.property.clusterConfig"></a>

```python
cluster_config: SagemakerProcessingJobProcessingResourcesClusterConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig">SagemakerProcessingJobProcessingResourcesClusterConfig</a>

Configuration for the cluster used to run a processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#cluster_config SagemakerProcessingJob#cluster_config}

---

### SagemakerProcessingJobProcessingResourcesClusterConfig <a name="SagemakerProcessingJobProcessingResourcesClusterConfig" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig(
  instance_count: typing.Union[int, float],
  instance_type: str,
  volume_size_in_gb: typing.Union[int, float],
  volume_kms_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | The number of ML compute instances to use in the processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig.property.instanceType">instance_type</a></code> | <code>str</code> | The ML compute instance type for the processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig.property.volumeSizeInGb">volume_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | The size of the ML storage volume in gigabytes that you want to provision. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig.property.volumeKmsKeyId">volume_kms_key_id</a></code> | <code>str</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the processing job. |

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of ML compute instances to use in the processing job.

For distributed processing jobs, specify a value greater than 1. The default value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#instance_count SagemakerProcessingJob#instance_count}

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

The ML compute instance type for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#instance_type SagemakerProcessingJob#instance_type}

---

##### `volume_size_in_gb`<sup>Required</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig.property.volumeSizeInGb"></a>

```python
volume_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size of the ML storage volume in gigabytes that you want to provision.

You must specify sufficient ML storage for your scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#volume_size_in_gb SagemakerProcessingJob#volume_size_in_gb}

---

##### `volume_kms_key_id`<sup>Optional</sup> <a name="volume_kms_key_id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig.property.volumeKmsKeyId"></a>

```python
volume_kms_key_id: str
```

- *Type:* str

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#volume_kms_key_id SagemakerProcessingJob#volume_kms_key_id}

---

### SagemakerProcessingJobStoppingCondition <a name="SagemakerProcessingJobStoppingCondition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition(
  max_runtime_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition.property.maxRuntimeInSeconds">max_runtime_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum runtime in seconds. |

---

##### `max_runtime_in_seconds`<sup>Optional</sup> <a name="max_runtime_in_seconds" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition.property.maxRuntimeInSeconds"></a>

```python
max_runtime_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the maximum runtime in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#max_runtime_in_seconds SagemakerProcessingJob#max_runtime_in_seconds}

---

### SagemakerProcessingJobTags <a name="SagemakerProcessingJobTags" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags.property.key">key</a></code> | <code>str</code> | The tag key. Tag keys must be unique per resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key. Tag keys must be unique per resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#key SagemakerProcessingJob#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#value SagemakerProcessingJob#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerProcessingJobAppSpecificationOutputReference <a name="SagemakerProcessingJobAppSpecificationOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.resetContainerArguments">reset_container_arguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.resetContainerEntrypoint">reset_container_entrypoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_container_arguments` <a name="reset_container_arguments" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.resetContainerArguments"></a>

```python
def reset_container_arguments() -> None
```

##### `reset_container_entrypoint` <a name="reset_container_entrypoint" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.resetContainerEntrypoint"></a>

```python
def reset_container_entrypoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.containerArgumentsInput">container_arguments_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.containerEntrypointInput">container_entrypoint_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.imageUriInput">image_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.containerArguments">container_arguments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.containerEntrypoint">container_entrypoint</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification">SagemakerProcessingJobAppSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_arguments_input`<sup>Optional</sup> <a name="container_arguments_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.containerArgumentsInput"></a>

```python
container_arguments_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_entrypoint_input`<sup>Optional</sup> <a name="container_entrypoint_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.containerEntrypointInput"></a>

```python
container_entrypoint_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `image_uri_input`<sup>Optional</sup> <a name="image_uri_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.imageUriInput"></a>

```python
image_uri_input: str
```

- *Type:* str

---

##### `container_arguments`<sup>Required</sup> <a name="container_arguments" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.containerArguments"></a>

```python
container_arguments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_entrypoint`<sup>Required</sup> <a name="container_entrypoint" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.containerEntrypoint"></a>

```python
container_entrypoint: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerProcessingJobAppSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobAppSpecification">SagemakerProcessingJobAppSpecification</a>

---


### SagemakerProcessingJobExperimentConfigOutputReference <a name="SagemakerProcessingJobExperimentConfigOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resetExperimentName">reset_experiment_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resetRunName">reset_run_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resetTrialComponentDisplayName">reset_trial_component_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resetTrialName">reset_trial_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_experiment_name` <a name="reset_experiment_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resetExperimentName"></a>

```python
def reset_experiment_name() -> None
```

##### `reset_run_name` <a name="reset_run_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resetRunName"></a>

```python
def reset_run_name() -> None
```

##### `reset_trial_component_display_name` <a name="reset_trial_component_display_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resetTrialComponentDisplayName"></a>

```python
def reset_trial_component_display_name() -> None
```

##### `reset_trial_name` <a name="reset_trial_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.resetTrialName"></a>

```python
def reset_trial_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.experimentNameInput">experiment_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.runNameInput">run_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.trialComponentDisplayNameInput">trial_component_display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.trialNameInput">trial_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.experimentName">experiment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.runName">run_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.trialComponentDisplayName">trial_component_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.trialName">trial_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig">SagemakerProcessingJobExperimentConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `experiment_name_input`<sup>Optional</sup> <a name="experiment_name_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.experimentNameInput"></a>

```python
experiment_name_input: str
```

- *Type:* str

---

##### `run_name_input`<sup>Optional</sup> <a name="run_name_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.runNameInput"></a>

```python
run_name_input: str
```

- *Type:* str

---

##### `trial_component_display_name_input`<sup>Optional</sup> <a name="trial_component_display_name_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.trialComponentDisplayNameInput"></a>

```python
trial_component_display_name_input: str
```

- *Type:* str

---

##### `trial_name_input`<sup>Optional</sup> <a name="trial_name_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.trialNameInput"></a>

```python
trial_name_input: str
```

- *Type:* str

---

##### `experiment_name`<sup>Required</sup> <a name="experiment_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.experimentName"></a>

```python
experiment_name: str
```

- *Type:* str

---

##### `run_name`<sup>Required</sup> <a name="run_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.runName"></a>

```python
run_name: str
```

- *Type:* str

---

##### `trial_component_display_name`<sup>Required</sup> <a name="trial_component_display_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.trialComponentDisplayName"></a>

```python
trial_component_display_name: str
```

- *Type:* str

---

##### `trial_name`<sup>Required</sup> <a name="trial_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.trialName"></a>

```python
trial_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerProcessingJobExperimentConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobExperimentConfig">SagemakerProcessingJobExperimentConfig</a>

---


### SagemakerProcessingJobNetworkConfigOutputReference <a name="SagemakerProcessingJobNetworkConfigOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.putVpcConfig">put_vpc_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.resetEnableInterContainerTrafficEncryption">reset_enable_inter_container_traffic_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.resetEnableNetworkIsolation">reset_enable_network_isolation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.resetVpcConfig">reset_vpc_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_vpc_config` <a name="put_vpc_config" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.putVpcConfig"></a>

```python
def put_vpc_config(
  security_group_ids: typing.List[str] = None,
  subnets: typing.List[str] = None
) -> None
```

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.putVpcConfig.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

The VPC security group IDs, in the form 'sg-xxxxxxxx'.

Specify the security groups for the VPC that is specified in the 'Subnets' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#security_group_ids SagemakerProcessingJob#security_group_ids}

---

###### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.putVpcConfig.parameter.subnets"></a>

- *Type:* typing.List[str]

The ID of the subnets in the VPC to which you want to connect your training job or model.

For information about the availability of specific instance types, see https://docs.aws.amazon.com/sagemaker/latest/dg/regions-quotas.html

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#subnets SagemakerProcessingJob#subnets}

---

##### `reset_enable_inter_container_traffic_encryption` <a name="reset_enable_inter_container_traffic_encryption" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.resetEnableInterContainerTrafficEncryption"></a>

```python
def reset_enable_inter_container_traffic_encryption() -> None
```

##### `reset_enable_network_isolation` <a name="reset_enable_network_isolation" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.resetEnableNetworkIsolation"></a>

```python
def reset_enable_network_isolation() -> None
```

##### `reset_vpc_config` <a name="reset_vpc_config" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.resetVpcConfig"></a>

```python
def reset_vpc_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference">SagemakerProcessingJobNetworkConfigVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.enableInterContainerTrafficEncryptionInput">enable_inter_container_traffic_encryption_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.enableNetworkIsolationInput">enable_network_isolation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.vpcConfigInput">vpc_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig">SagemakerProcessingJobNetworkConfigVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption">enable_inter_container_traffic_encryption</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.enableNetworkIsolation">enable_network_isolation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig">SagemakerProcessingJobNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.vpcConfig"></a>

```python
vpc_config: SagemakerProcessingJobNetworkConfigVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference">SagemakerProcessingJobNetworkConfigVpcConfigOutputReference</a>

---

##### `enable_inter_container_traffic_encryption_input`<sup>Optional</sup> <a name="enable_inter_container_traffic_encryption_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.enableInterContainerTrafficEncryptionInput"></a>

```python
enable_inter_container_traffic_encryption_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_network_isolation_input`<sup>Optional</sup> <a name="enable_network_isolation_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.enableNetworkIsolationInput"></a>

```python
enable_network_isolation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `vpc_config_input`<sup>Optional</sup> <a name="vpc_config_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.vpcConfigInput"></a>

```python
vpc_config_input: IResolvable | SagemakerProcessingJobNetworkConfigVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig">SagemakerProcessingJobNetworkConfigVpcConfig</a>

---

##### `enable_inter_container_traffic_encryption`<sup>Required</sup> <a name="enable_inter_container_traffic_encryption" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption"></a>

```python
enable_inter_container_traffic_encryption: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_network_isolation`<sup>Required</sup> <a name="enable_network_isolation" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.enableNetworkIsolation"></a>

```python
enable_network_isolation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerProcessingJobNetworkConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfig">SagemakerProcessingJobNetworkConfig</a>

---


### SagemakerProcessingJobNetworkConfigVpcConfigOutputReference <a name="SagemakerProcessingJobNetworkConfigVpcConfigOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.resetSubnets">reset_subnets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnets` <a name="reset_subnets" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.resetSubnets"></a>

```python
def reset_subnets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig">SagemakerProcessingJobNetworkConfigVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerProcessingJobNetworkConfigVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobNetworkConfigVpcConfig">SagemakerProcessingJobNetworkConfigVpcConfig</a>

---


### SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference <a name="SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetCatalog">reset_catalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetOutputCompression">reset_output_compression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetOutputFormat">reset_output_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetOutputS3Uri">reset_output_s3_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetQueryString">reset_query_string</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetWorkGroup">reset_work_group</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog` <a name="reset_catalog" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetCatalog"></a>

```python
def reset_catalog() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_output_compression` <a name="reset_output_compression" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetOutputCompression"></a>

```python
def reset_output_compression() -> None
```

##### `reset_output_format` <a name="reset_output_format" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetOutputFormat"></a>

```python
def reset_output_format() -> None
```

##### `reset_output_s3_uri` <a name="reset_output_s3_uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetOutputS3Uri"></a>

```python
def reset_output_s3_uri() -> None
```

##### `reset_query_string` <a name="reset_query_string" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetQueryString"></a>

```python
def reset_query_string() -> None
```

##### `reset_work_group` <a name="reset_work_group" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.resetWorkGroup"></a>

```python
def reset_work_group() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.catalogInput">catalog_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputCompressionInput">output_compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputFormatInput">output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputS3UriInput">output_s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.queryStringInput">query_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.workGroupInput">work_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.catalog">catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputCompression">output_compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputFormat">output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputS3Uri">output_s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.queryString">query_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.workGroup">work_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.catalogInput"></a>

```python
catalog_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `output_compression_input`<sup>Optional</sup> <a name="output_compression_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputCompressionInput"></a>

```python
output_compression_input: str
```

- *Type:* str

---

##### `output_format_input`<sup>Optional</sup> <a name="output_format_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputFormatInput"></a>

```python
output_format_input: str
```

- *Type:* str

---

##### `output_s3_uri_input`<sup>Optional</sup> <a name="output_s3_uri_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputS3UriInput"></a>

```python
output_s3_uri_input: str
```

- *Type:* str

---

##### `query_string_input`<sup>Optional</sup> <a name="query_string_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.queryStringInput"></a>

```python
query_string_input: str
```

- *Type:* str

---

##### `work_group_input`<sup>Optional</sup> <a name="work_group_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.workGroupInput"></a>

```python
work_group_input: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `output_compression`<sup>Required</sup> <a name="output_compression" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputCompression"></a>

```python
output_compression: str
```

- *Type:* str

---

##### `output_format`<sup>Required</sup> <a name="output_format" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

---

##### `output_s3_uri`<sup>Required</sup> <a name="output_s3_uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.outputS3Uri"></a>

```python
output_s3_uri: str
```

- *Type:* str

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.queryString"></a>

```python
query_string: str
```

- *Type:* str

---

##### `work_group`<sup>Required</sup> <a name="work_group" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.workGroup"></a>

```python
work_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition</a>

---


### SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference <a name="SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putAthenaDatasetDefinition">put_athena_dataset_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putRedshiftDatasetDefinition">put_redshift_dataset_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resetAthenaDatasetDefinition">reset_athena_dataset_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resetDataDistributionType">reset_data_distribution_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resetInputMode">reset_input_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resetLocalPath">reset_local_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resetRedshiftDatasetDefinition">reset_redshift_dataset_definition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_athena_dataset_definition` <a name="put_athena_dataset_definition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putAthenaDatasetDefinition"></a>

```python
def put_athena_dataset_definition(
  catalog: str = None,
  database: str = None,
  kms_key_id: str = None,
  output_compression: str = None,
  output_format: str = None,
  output_s3_uri: str = None,
  query_string: str = None,
  work_group: str = None
) -> None
```

###### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putAthenaDatasetDefinition.parameter.catalog"></a>

- *Type:* str

The name of the data catalog used in Athena query execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#catalog SagemakerProcessingJob#catalog}

---

###### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putAthenaDatasetDefinition.parameter.database"></a>

- *Type:* str

The name of the database used in the Athena query execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#database SagemakerProcessingJob#database}

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putAthenaDatasetDefinition.parameter.kmsKeyId"></a>

- *Type:* str

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data generated from an Athena query execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#kms_key_id SagemakerProcessingJob#kms_key_id}

---

###### `output_compression`<sup>Optional</sup> <a name="output_compression" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putAthenaDatasetDefinition.parameter.outputCompression"></a>

- *Type:* str

The compression used for Athena query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#output_compression SagemakerProcessingJob#output_compression}

---

###### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putAthenaDatasetDefinition.parameter.outputFormat"></a>

- *Type:* str

The data storage format for Athena query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#output_format SagemakerProcessingJob#output_format}

---

###### `output_s3_uri`<sup>Optional</sup> <a name="output_s3_uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putAthenaDatasetDefinition.parameter.outputS3Uri"></a>

- *Type:* str

The location in Amazon S3 where Athena query results are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#output_s3_uri SagemakerProcessingJob#output_s3_uri}

---

###### `query_string`<sup>Optional</sup> <a name="query_string" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putAthenaDatasetDefinition.parameter.queryString"></a>

- *Type:* str

The SQL query statements, to be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#query_string SagemakerProcessingJob#query_string}

---

###### `work_group`<sup>Optional</sup> <a name="work_group" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putAthenaDatasetDefinition.parameter.workGroup"></a>

- *Type:* str

The name of the workgroup in which the Athena query is being started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#work_group SagemakerProcessingJob#work_group}

---

##### `put_redshift_dataset_definition` <a name="put_redshift_dataset_definition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putRedshiftDatasetDefinition"></a>

```python
def put_redshift_dataset_definition(
  cluster_id: str = None,
  cluster_role_arn: str = None,
  database: str = None,
  db_user: str = None,
  kms_key_id: str = None,
  output_compression: str = None,
  output_format: str = None,
  output_s3_uri: str = None,
  query_string: str = None
) -> None
```

###### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putRedshiftDatasetDefinition.parameter.clusterId"></a>

- *Type:* str

The Redshift cluster Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#cluster_id SagemakerProcessingJob#cluster_id}

---

###### `cluster_role_arn`<sup>Optional</sup> <a name="cluster_role_arn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putRedshiftDatasetDefinition.parameter.clusterRoleArn"></a>

- *Type:* str

The IAM role attached to your Redshift cluster that Amazon SageMaker uses to generate datasets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#cluster_role_arn SagemakerProcessingJob#cluster_role_arn}

---

###### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putRedshiftDatasetDefinition.parameter.database"></a>

- *Type:* str

The name of the Redshift database used in Redshift query execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#database SagemakerProcessingJob#database}

---

###### `db_user`<sup>Optional</sup> <a name="db_user" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putRedshiftDatasetDefinition.parameter.dbUser"></a>

- *Type:* str

The database user name used in Redshift query execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#db_user SagemakerProcessingJob#db_user}

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putRedshiftDatasetDefinition.parameter.kmsKeyId"></a>

- *Type:* str

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data from a Redshift execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#kms_key_id SagemakerProcessingJob#kms_key_id}

---

###### `output_compression`<sup>Optional</sup> <a name="output_compression" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putRedshiftDatasetDefinition.parameter.outputCompression"></a>

- *Type:* str

The compression used for Redshift query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#output_compression SagemakerProcessingJob#output_compression}

---

###### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putRedshiftDatasetDefinition.parameter.outputFormat"></a>

- *Type:* str

The data storage format for Redshift query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#output_format SagemakerProcessingJob#output_format}

---

###### `output_s3_uri`<sup>Optional</sup> <a name="output_s3_uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putRedshiftDatasetDefinition.parameter.outputS3Uri"></a>

- *Type:* str

The location in Amazon S3 where the Redshift query results are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#output_s3_uri SagemakerProcessingJob#output_s3_uri}

---

###### `query_string`<sup>Optional</sup> <a name="query_string" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.putRedshiftDatasetDefinition.parameter.queryString"></a>

- *Type:* str

The SQL query statements to be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#query_string SagemakerProcessingJob#query_string}

---

##### `reset_athena_dataset_definition` <a name="reset_athena_dataset_definition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resetAthenaDatasetDefinition"></a>

```python
def reset_athena_dataset_definition() -> None
```

##### `reset_data_distribution_type` <a name="reset_data_distribution_type" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resetDataDistributionType"></a>

```python
def reset_data_distribution_type() -> None
```

##### `reset_input_mode` <a name="reset_input_mode" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resetInputMode"></a>

```python
def reset_input_mode() -> None
```

##### `reset_local_path` <a name="reset_local_path" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resetLocalPath"></a>

```python
def reset_local_path() -> None
```

##### `reset_redshift_dataset_definition` <a name="reset_redshift_dataset_definition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.resetRedshiftDatasetDefinition"></a>

```python
def reset_redshift_dataset_definition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.athenaDatasetDefinition">athena_dataset_definition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference">SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.redshiftDatasetDefinition">redshift_dataset_definition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference">SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.athenaDatasetDefinitionInput">athena_dataset_definition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.dataDistributionTypeInput">data_distribution_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.inputModeInput">input_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.localPathInput">local_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.redshiftDatasetDefinitionInput">redshift_dataset_definition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.dataDistributionType">data_distribution_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.inputMode">input_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.localPath">local_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `athena_dataset_definition`<sup>Required</sup> <a name="athena_dataset_definition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.athenaDatasetDefinition"></a>

```python
athena_dataset_definition: SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference">SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference</a>

---

##### `redshift_dataset_definition`<sup>Required</sup> <a name="redshift_dataset_definition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.redshiftDatasetDefinition"></a>

```python
redshift_dataset_definition: SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference">SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference</a>

---

##### `athena_dataset_definition_input`<sup>Optional</sup> <a name="athena_dataset_definition_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.athenaDatasetDefinitionInput"></a>

```python
athena_dataset_definition_input: IResolvable | SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition</a>

---

##### `data_distribution_type_input`<sup>Optional</sup> <a name="data_distribution_type_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.dataDistributionTypeInput"></a>

```python
data_distribution_type_input: str
```

- *Type:* str

---

##### `input_mode_input`<sup>Optional</sup> <a name="input_mode_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.inputModeInput"></a>

```python
input_mode_input: str
```

- *Type:* str

---

##### `local_path_input`<sup>Optional</sup> <a name="local_path_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.localPathInput"></a>

```python
local_path_input: str
```

- *Type:* str

---

##### `redshift_dataset_definition_input`<sup>Optional</sup> <a name="redshift_dataset_definition_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.redshiftDatasetDefinitionInput"></a>

```python
redshift_dataset_definition_input: IResolvable | SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition</a>

---

##### `data_distribution_type`<sup>Required</sup> <a name="data_distribution_type" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.dataDistributionType"></a>

```python
data_distribution_type: str
```

- *Type:* str

---

##### `input_mode`<sup>Required</sup> <a name="input_mode" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.inputMode"></a>

```python
input_mode: str
```

- *Type:* str

---

##### `local_path`<sup>Required</sup> <a name="local_path" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerProcessingJobProcessingInputsDatasetDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinition</a>

---


### SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference <a name="SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetClusterId">reset_cluster_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetClusterRoleArn">reset_cluster_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetDbUser">reset_db_user</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetOutputCompression">reset_output_compression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetOutputFormat">reset_output_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetOutputS3Uri">reset_output_s3_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetQueryString">reset_query_string</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cluster_id` <a name="reset_cluster_id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetClusterId"></a>

```python
def reset_cluster_id() -> None
```

##### `reset_cluster_role_arn` <a name="reset_cluster_role_arn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetClusterRoleArn"></a>

```python
def reset_cluster_role_arn() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_db_user` <a name="reset_db_user" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetDbUser"></a>

```python
def reset_db_user() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_output_compression` <a name="reset_output_compression" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetOutputCompression"></a>

```python
def reset_output_compression() -> None
```

##### `reset_output_format` <a name="reset_output_format" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetOutputFormat"></a>

```python
def reset_output_format() -> None
```

##### `reset_output_s3_uri` <a name="reset_output_s3_uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetOutputS3Uri"></a>

```python
def reset_output_s3_uri() -> None
```

##### `reset_query_string` <a name="reset_query_string" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.resetQueryString"></a>

```python
def reset_query_string() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterRoleArnInput">cluster_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.dbUserInput">db_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputCompressionInput">output_compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputFormatInput">output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputS3UriInput">output_s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.queryStringInput">query_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterRoleArn">cluster_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.dbUser">db_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputCompression">output_compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputFormat">output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputS3Uri">output_s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.queryString">query_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `cluster_role_arn_input`<sup>Optional</sup> <a name="cluster_role_arn_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterRoleArnInput"></a>

```python
cluster_role_arn_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `db_user_input`<sup>Optional</sup> <a name="db_user_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.dbUserInput"></a>

```python
db_user_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `output_compression_input`<sup>Optional</sup> <a name="output_compression_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputCompressionInput"></a>

```python
output_compression_input: str
```

- *Type:* str

---

##### `output_format_input`<sup>Optional</sup> <a name="output_format_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputFormatInput"></a>

```python
output_format_input: str
```

- *Type:* str

---

##### `output_s3_uri_input`<sup>Optional</sup> <a name="output_s3_uri_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputS3UriInput"></a>

```python
output_s3_uri_input: str
```

- *Type:* str

---

##### `query_string_input`<sup>Optional</sup> <a name="query_string_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.queryStringInput"></a>

```python
query_string_input: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `cluster_role_arn`<sup>Required</sup> <a name="cluster_role_arn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.clusterRoleArn"></a>

```python
cluster_role_arn: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `db_user`<sup>Required</sup> <a name="db_user" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.dbUser"></a>

```python
db_user: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `output_compression`<sup>Required</sup> <a name="output_compression" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputCompression"></a>

```python
output_compression: str
```

- *Type:* str

---

##### `output_format`<sup>Required</sup> <a name="output_format" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

---

##### `output_s3_uri`<sup>Required</sup> <a name="output_s3_uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.outputS3Uri"></a>

```python
output_s3_uri: str
```

- *Type:* str

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.queryString"></a>

```python
query_string: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition</a>

---


### SagemakerProcessingJobProcessingInputsList <a name="SagemakerProcessingJobProcessingInputsList" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerProcessingJobProcessingInputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs">SagemakerProcessingJobProcessingInputs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerProcessingJobProcessingInputs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs">SagemakerProcessingJobProcessingInputs</a>]

---


### SagemakerProcessingJobProcessingInputsOutputReference <a name="SagemakerProcessingJobProcessingInputsOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.putDatasetDefinition">put_dataset_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.putS3Input">put_s3_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resetAppManaged">reset_app_managed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resetDatasetDefinition">reset_dataset_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resetInputName">reset_input_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resetS3Input">reset_s3_input</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dataset_definition` <a name="put_dataset_definition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.putDatasetDefinition"></a>

```python
def put_dataset_definition(
  athena_dataset_definition: SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition = None,
  data_distribution_type: str = None,
  input_mode: str = None,
  local_path: str = None,
  redshift_dataset_definition: SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition = None
) -> None
```

###### `athena_dataset_definition`<sup>Optional</sup> <a name="athena_dataset_definition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.putDatasetDefinition.parameter.athenaDatasetDefinition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition</a>

Configuration for Athena Dataset Definition input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#athena_dataset_definition SagemakerProcessingJob#athena_dataset_definition}

---

###### `data_distribution_type`<sup>Optional</sup> <a name="data_distribution_type" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.putDatasetDefinition.parameter.dataDistributionType"></a>

- *Type:* str

Whether the generated dataset is FullyReplicated or ShardedByS3Key (default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#data_distribution_type SagemakerProcessingJob#data_distribution_type}

---

###### `input_mode`<sup>Optional</sup> <a name="input_mode" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.putDatasetDefinition.parameter.inputMode"></a>

- *Type:* str

Whether to use File or Pipe input mode.

In File (default) mode, Amazon SageMaker copies the data from the input source onto the local Amazon Elastic Block Store (Amazon EBS) volumes before starting your training algorithm. This is the most commonly used input mode. In Pipe mode, Amazon SageMaker streams input data from the source directly to your algorithm without using the EBS volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#input_mode SagemakerProcessingJob#input_mode}

---

###### `local_path`<sup>Optional</sup> <a name="local_path" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.putDatasetDefinition.parameter.localPath"></a>

- *Type:* str

The local path where you want Amazon SageMaker to download the Dataset Definition inputs to run a processing job.

LocalPath is an absolute path to the input data. This is a required parameter when AppManaged is False (default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#local_path SagemakerProcessingJob#local_path}

---

###### `redshift_dataset_definition`<sup>Optional</sup> <a name="redshift_dataset_definition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.putDatasetDefinition.parameter.redshiftDatasetDefinition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition</a>

Configuration for Redshift Dataset Definition input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#redshift_dataset_definition SagemakerProcessingJob#redshift_dataset_definition}

---

##### `put_s3_input` <a name="put_s3_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.putS3Input"></a>

```python
def put_s3_input(
  local_path: str = None,
  s3_compression_type: str = None,
  s3_data_distribution_type: str = None,
  s3_data_type: str = None,
  s3_input_mode: str = None,
  s3_uri: str = None
) -> None
```

###### `local_path`<sup>Optional</sup> <a name="local_path" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.putS3Input.parameter.localPath"></a>

- *Type:* str

The local path in your container where you want Amazon SageMaker to write input data to.

`LocalPath` is an absolute path to the input data and must begin with `/opt/ml/processing/`. LocalPath is a required parameter when `AppManaged` is `False` (default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#local_path SagemakerProcessingJob#local_path}

---

###### `s3_compression_type`<sup>Optional</sup> <a name="s3_compression_type" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.putS3Input.parameter.s3CompressionType"></a>

- *Type:* str

Whether to GZIP-decompress the data in Amazon S3 as it is streamed into the processing container.

`Gzip` can only be used when `Pipe` mode is specified as the `S3InputMode`. In `Pipe` mode, Amazon SageMaker streams input data from the source directly to your container without using the EBS volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#s3_compression_type SagemakerProcessingJob#s3_compression_type}

---

###### `s3_data_distribution_type`<sup>Optional</sup> <a name="s3_data_distribution_type" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.putS3Input.parameter.s3DataDistributionType"></a>

- *Type:* str

Whether to distribute the data from Amazon S3 to all processing instances with `FullyReplicated`, or whether the data from Amazon S3 is shared by Amazon S3 key, downloading one shard of data to each processing instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#s3_data_distribution_type SagemakerProcessingJob#s3_data_distribution_type}

---

###### `s3_data_type`<sup>Optional</sup> <a name="s3_data_type" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.putS3Input.parameter.s3DataType"></a>

- *Type:* str

Whether you use an S3Prefix or a ManifestFile for the data type.

If you choose S3Prefix, S3Uri identifies a key name prefix. Amazon SageMaker uses all objects with the specified key name prefix for the processing job. If you choose ManifestFile, S3Uri identifies an object that is a manifest file containing a list of object keys that you want Amazon SageMaker to use for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#s3_data_type SagemakerProcessingJob#s3_data_type}

---

###### `s3_input_mode`<sup>Optional</sup> <a name="s3_input_mode" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.putS3Input.parameter.s3InputMode"></a>

- *Type:* str

Whether to use File or Pipe input mode.

In File mode, Amazon SageMaker copies the data from the input source onto the local ML storage volume before starting your processing container. This is the most commonly used input mode. In Pipe mode, Amazon SageMaker streams input data from the source directly to your processing container into named pipes without using the ML storage volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#s3_input_mode SagemakerProcessingJob#s3_input_mode}

---

###### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.putS3Input.parameter.s3Uri"></a>

- *Type:* str

The URI of the Amazon S3 prefix Amazon SageMaker downloads data required to run a processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#s3_uri SagemakerProcessingJob#s3_uri}

---

##### `reset_app_managed` <a name="reset_app_managed" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resetAppManaged"></a>

```python
def reset_app_managed() -> None
```

##### `reset_dataset_definition` <a name="reset_dataset_definition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resetDatasetDefinition"></a>

```python
def reset_dataset_definition() -> None
```

##### `reset_input_name` <a name="reset_input_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resetInputName"></a>

```python
def reset_input_name() -> None
```

##### `reset_s3_input` <a name="reset_s3_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.resetS3Input"></a>

```python
def reset_s3_input() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.datasetDefinition">dataset_definition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference">SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.s3Input">s3_input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference">SagemakerProcessingJobProcessingInputsS3InputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.appManagedInput">app_managed_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.datasetDefinitionInput">dataset_definition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.inputNameInput">input_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.s3InputInput">s3_input_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input">SagemakerProcessingJobProcessingInputsS3Input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.appManaged">app_managed</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.inputName">input_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs">SagemakerProcessingJobProcessingInputs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_definition`<sup>Required</sup> <a name="dataset_definition" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.datasetDefinition"></a>

```python
dataset_definition: SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference">SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference</a>

---

##### `s3_input`<sup>Required</sup> <a name="s3_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.s3Input"></a>

```python
s3_input: SagemakerProcessingJobProcessingInputsS3InputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference">SagemakerProcessingJobProcessingInputsS3InputOutputReference</a>

---

##### `app_managed_input`<sup>Optional</sup> <a name="app_managed_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.appManagedInput"></a>

```python
app_managed_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `dataset_definition_input`<sup>Optional</sup> <a name="dataset_definition_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.datasetDefinitionInput"></a>

```python
dataset_definition_input: IResolvable | SagemakerProcessingJobProcessingInputsDatasetDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsDatasetDefinition">SagemakerProcessingJobProcessingInputsDatasetDefinition</a>

---

##### `input_name_input`<sup>Optional</sup> <a name="input_name_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.inputNameInput"></a>

```python
input_name_input: str
```

- *Type:* str

---

##### `s3_input_input`<sup>Optional</sup> <a name="s3_input_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.s3InputInput"></a>

```python
s3_input_input: IResolvable | SagemakerProcessingJobProcessingInputsS3Input
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input">SagemakerProcessingJobProcessingInputsS3Input</a>

---

##### `app_managed`<sup>Required</sup> <a name="app_managed" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.appManaged"></a>

```python
app_managed: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `input_name`<sup>Required</sup> <a name="input_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.inputName"></a>

```python
input_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerProcessingJobProcessingInputs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputs">SagemakerProcessingJobProcessingInputs</a>

---


### SagemakerProcessingJobProcessingInputsS3InputOutputReference <a name="SagemakerProcessingJobProcessingInputsS3InputOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetLocalPath">reset_local_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetS3CompressionType">reset_s3_compression_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetS3DataDistributionType">reset_s3_data_distribution_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetS3DataType">reset_s3_data_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetS3InputMode">reset_s3_input_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetS3Uri">reset_s3_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_local_path` <a name="reset_local_path" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetLocalPath"></a>

```python
def reset_local_path() -> None
```

##### `reset_s3_compression_type` <a name="reset_s3_compression_type" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetS3CompressionType"></a>

```python
def reset_s3_compression_type() -> None
```

##### `reset_s3_data_distribution_type` <a name="reset_s3_data_distribution_type" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetS3DataDistributionType"></a>

```python
def reset_s3_data_distribution_type() -> None
```

##### `reset_s3_data_type` <a name="reset_s3_data_type" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetS3DataType"></a>

```python
def reset_s3_data_type() -> None
```

##### `reset_s3_input_mode` <a name="reset_s3_input_mode" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetS3InputMode"></a>

```python
def reset_s3_input_mode() -> None
```

##### `reset_s3_uri` <a name="reset_s3_uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.resetS3Uri"></a>

```python
def reset_s3_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.localPathInput">local_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3CompressionTypeInput">s3_compression_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataDistributionTypeInput">s3_data_distribution_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataTypeInput">s3_data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3InputModeInput">s3_input_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3UriInput">s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.localPath">local_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3CompressionType">s3_compression_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataDistributionType">s3_data_distribution_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataType">s3_data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3InputMode">s3_input_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input">SagemakerProcessingJobProcessingInputsS3Input</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_path_input`<sup>Optional</sup> <a name="local_path_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.localPathInput"></a>

```python
local_path_input: str
```

- *Type:* str

---

##### `s3_compression_type_input`<sup>Optional</sup> <a name="s3_compression_type_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3CompressionTypeInput"></a>

```python
s3_compression_type_input: str
```

- *Type:* str

---

##### `s3_data_distribution_type_input`<sup>Optional</sup> <a name="s3_data_distribution_type_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataDistributionTypeInput"></a>

```python
s3_data_distribution_type_input: str
```

- *Type:* str

---

##### `s3_data_type_input`<sup>Optional</sup> <a name="s3_data_type_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataTypeInput"></a>

```python
s3_data_type_input: str
```

- *Type:* str

---

##### `s3_input_mode_input`<sup>Optional</sup> <a name="s3_input_mode_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3InputModeInput"></a>

```python
s3_input_mode_input: str
```

- *Type:* str

---

##### `s3_uri_input`<sup>Optional</sup> <a name="s3_uri_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3UriInput"></a>

```python
s3_uri_input: str
```

- *Type:* str

---

##### `local_path`<sup>Required</sup> <a name="local_path" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

---

##### `s3_compression_type`<sup>Required</sup> <a name="s3_compression_type" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3CompressionType"></a>

```python
s3_compression_type: str
```

- *Type:* str

---

##### `s3_data_distribution_type`<sup>Required</sup> <a name="s3_data_distribution_type" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataDistributionType"></a>

```python
s3_data_distribution_type: str
```

- *Type:* str

---

##### `s3_data_type`<sup>Required</sup> <a name="s3_data_type" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3DataType"></a>

```python
s3_data_type: str
```

- *Type:* str

---

##### `s3_input_mode`<sup>Required</sup> <a name="s3_input_mode" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3InputMode"></a>

```python
s3_input_mode: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3InputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerProcessingJobProcessingInputsS3Input
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingInputsS3Input">SagemakerProcessingJobProcessingInputsS3Input</a>

---


### SagemakerProcessingJobProcessingOutputConfigOutputReference <a name="SagemakerProcessingJobProcessingOutputConfigOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.putOutputs">put_outputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.resetOutputs">reset_outputs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_outputs` <a name="put_outputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.putOutputs"></a>

```python
def put_outputs(
  value: IResolvable | typing.List[SagemakerProcessingJobProcessingOutputConfigOutputs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.putOutputs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs">SagemakerProcessingJobProcessingOutputConfigOutputs</a>]

---

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_outputs` <a name="reset_outputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.resetOutputs"></a>

```python
def reset_outputs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList">SagemakerProcessingJobProcessingOutputConfigOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.outputsInput">outputs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs">SagemakerProcessingJobProcessingOutputConfigOutputs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig">SagemakerProcessingJobProcessingOutputConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.outputs"></a>

```python
outputs: SagemakerProcessingJobProcessingOutputConfigOutputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList">SagemakerProcessingJobProcessingOutputConfigOutputsList</a>

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `outputs_input`<sup>Optional</sup> <a name="outputs_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.outputsInput"></a>

```python
outputs_input: IResolvable | typing.List[SagemakerProcessingJobProcessingOutputConfigOutputs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs">SagemakerProcessingJobProcessingOutputConfigOutputs</a>]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerProcessingJobProcessingOutputConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfig">SagemakerProcessingJobProcessingOutputConfig</a>

---


### SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference <a name="SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.resetFeatureGroupName">reset_feature_group_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_feature_group_name` <a name="reset_feature_group_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.resetFeatureGroupName"></a>

```python
def reset_feature_group_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.featureGroupNameInput">feature_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.featureGroupName">feature_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput">SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `feature_group_name_input`<sup>Optional</sup> <a name="feature_group_name_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.featureGroupNameInput"></a>

```python
feature_group_name_input: str
```

- *Type:* str

---

##### `feature_group_name`<sup>Required</sup> <a name="feature_group_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.featureGroupName"></a>

```python
feature_group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput">SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput</a>

---


### SagemakerProcessingJobProcessingOutputConfigOutputsList <a name="SagemakerProcessingJobProcessingOutputConfigOutputsList" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs">SagemakerProcessingJobProcessingOutputConfigOutputs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerProcessingJobProcessingOutputConfigOutputs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs">SagemakerProcessingJobProcessingOutputConfigOutputs</a>]

---


### SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference <a name="SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.putFeatureStoreOutput">put_feature_store_output</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.putS3Output">put_s3_output</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resetAppManaged">reset_app_managed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resetFeatureStoreOutput">reset_feature_store_output</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resetOutputName">reset_output_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resetS3Output">reset_s3_output</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_feature_store_output` <a name="put_feature_store_output" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.putFeatureStoreOutput"></a>

```python
def put_feature_store_output(
  feature_group_name: str = None
) -> None
```

###### `feature_group_name`<sup>Optional</sup> <a name="feature_group_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.putFeatureStoreOutput.parameter.featureGroupName"></a>

- *Type:* str

The name of the Amazon SageMaker FeatureGroup to use as the destination for processing job output.

Note that your processing script is responsible for putting records into your Feature Store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#feature_group_name SagemakerProcessingJob#feature_group_name}

---

##### `put_s3_output` <a name="put_s3_output" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.putS3Output"></a>

```python
def put_s3_output(
  local_path: str = None,
  s3_upload_mode: str = None,
  s3_uri: str = None
) -> None
```

###### `local_path`<sup>Optional</sup> <a name="local_path" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.putS3Output.parameter.localPath"></a>

- *Type:* str

The local path of a directory where you want Amazon SageMaker to upload its contents to Amazon S3.

LocalPath is an absolute path to a directory containing output files. This directory will be created by the platform and exist when your container's entrypoint is invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#local_path SagemakerProcessingJob#local_path}

---

###### `s3_upload_mode`<sup>Optional</sup> <a name="s3_upload_mode" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.putS3Output.parameter.s3UploadMode"></a>

- *Type:* str

Whether to upload the results of the processing job continuously or after the job completes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#s3_upload_mode SagemakerProcessingJob#s3_upload_mode}

---

###### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.putS3Output.parameter.s3Uri"></a>

- *Type:* str

A URI that identifies the Amazon S3 bucket where you want Amazon SageMaker to save the results of a processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#s3_uri SagemakerProcessingJob#s3_uri}

---

##### `reset_app_managed` <a name="reset_app_managed" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resetAppManaged"></a>

```python
def reset_app_managed() -> None
```

##### `reset_feature_store_output` <a name="reset_feature_store_output" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resetFeatureStoreOutput"></a>

```python
def reset_feature_store_output() -> None
```

##### `reset_output_name` <a name="reset_output_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resetOutputName"></a>

```python
def reset_output_name() -> None
```

##### `reset_s3_output` <a name="reset_s3_output" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.resetS3Output"></a>

```python
def reset_s3_output() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.featureStoreOutput">feature_store_output</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference">SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.s3Output">s3_output</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference">SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.appManagedInput">app_managed_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.featureStoreOutputInput">feature_store_output_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput">SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.outputNameInput">output_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.s3OutputInput">s3_output_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output">SagemakerProcessingJobProcessingOutputConfigOutputsS3Output</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.appManaged">app_managed</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.outputName">output_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs">SagemakerProcessingJobProcessingOutputConfigOutputs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `feature_store_output`<sup>Required</sup> <a name="feature_store_output" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.featureStoreOutput"></a>

```python
feature_store_output: SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference">SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference</a>

---

##### `s3_output`<sup>Required</sup> <a name="s3_output" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.s3Output"></a>

```python
s3_output: SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference">SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference</a>

---

##### `app_managed_input`<sup>Optional</sup> <a name="app_managed_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.appManagedInput"></a>

```python
app_managed_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `feature_store_output_input`<sup>Optional</sup> <a name="feature_store_output_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.featureStoreOutputInput"></a>

```python
feature_store_output_input: IResolvable | SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput">SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput</a>

---

##### `output_name_input`<sup>Optional</sup> <a name="output_name_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.outputNameInput"></a>

```python
output_name_input: str
```

- *Type:* str

---

##### `s3_output_input`<sup>Optional</sup> <a name="s3_output_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.s3OutputInput"></a>

```python
s3_output_input: IResolvable | SagemakerProcessingJobProcessingOutputConfigOutputsS3Output
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output">SagemakerProcessingJobProcessingOutputConfigOutputsS3Output</a>

---

##### `app_managed`<sup>Required</sup> <a name="app_managed" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.appManaged"></a>

```python
app_managed: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `output_name`<sup>Required</sup> <a name="output_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.outputName"></a>

```python
output_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerProcessingJobProcessingOutputConfigOutputs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputs">SagemakerProcessingJobProcessingOutputConfigOutputs</a>

---


### SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference <a name="SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resetLocalPath">reset_local_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resetS3UploadMode">reset_s3_upload_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resetS3Uri">reset_s3_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_local_path` <a name="reset_local_path" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resetLocalPath"></a>

```python
def reset_local_path() -> None
```

##### `reset_s3_upload_mode` <a name="reset_s3_upload_mode" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resetS3UploadMode"></a>

```python
def reset_s3_upload_mode() -> None
```

##### `reset_s3_uri` <a name="reset_s3_uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.resetS3Uri"></a>

```python
def reset_s3_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.localPathInput">local_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3UploadModeInput">s3_upload_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3UriInput">s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.localPath">local_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3UploadMode">s3_upload_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output">SagemakerProcessingJobProcessingOutputConfigOutputsS3Output</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_path_input`<sup>Optional</sup> <a name="local_path_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.localPathInput"></a>

```python
local_path_input: str
```

- *Type:* str

---

##### `s3_upload_mode_input`<sup>Optional</sup> <a name="s3_upload_mode_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3UploadModeInput"></a>

```python
s3_upload_mode_input: str
```

- *Type:* str

---

##### `s3_uri_input`<sup>Optional</sup> <a name="s3_uri_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3UriInput"></a>

```python
s3_uri_input: str
```

- *Type:* str

---

##### `local_path`<sup>Required</sup> <a name="local_path" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

---

##### `s3_upload_mode`<sup>Required</sup> <a name="s3_upload_mode" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3UploadMode"></a>

```python
s3_upload_mode: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerProcessingJobProcessingOutputConfigOutputsS3Output
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingOutputConfigOutputsS3Output">SagemakerProcessingJobProcessingOutputConfigOutputsS3Output</a>

---


### SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference <a name="SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.resetVolumeKmsKeyId">reset_volume_kms_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_volume_kms_key_id` <a name="reset_volume_kms_key_id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.resetVolumeKmsKeyId"></a>

```python
def reset_volume_kms_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceCountInput">instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeKmsKeyIdInput">volume_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeSizeInGbInput">volume_size_in_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeKmsKeyId">volume_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeSizeInGb">volume_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig">SagemakerProcessingJobProcessingResourcesClusterConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_count_input`<sup>Optional</sup> <a name="instance_count_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceCountInput"></a>

```python
instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `volume_kms_key_id_input`<sup>Optional</sup> <a name="volume_kms_key_id_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeKmsKeyIdInput"></a>

```python
volume_kms_key_id_input: str
```

- *Type:* str

---

##### `volume_size_in_gb_input`<sup>Optional</sup> <a name="volume_size_in_gb_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeSizeInGbInput"></a>

```python
volume_size_in_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `volume_kms_key_id`<sup>Required</sup> <a name="volume_kms_key_id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeKmsKeyId"></a>

```python
volume_kms_key_id: str
```

- *Type:* str

---

##### `volume_size_in_gb`<sup>Required</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.volumeSizeInGb"></a>

```python
volume_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerProcessingJobProcessingResourcesClusterConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig">SagemakerProcessingJobProcessingResourcesClusterConfig</a>

---


### SagemakerProcessingJobProcessingResourcesOutputReference <a name="SagemakerProcessingJobProcessingResourcesOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.putClusterConfig">put_cluster_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cluster_config` <a name="put_cluster_config" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.putClusterConfig"></a>

```python
def put_cluster_config(
  instance_count: typing.Union[int, float],
  instance_type: str,
  volume_size_in_gb: typing.Union[int, float],
  volume_kms_key_id: str = None
) -> None
```

###### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.putClusterConfig.parameter.instanceCount"></a>

- *Type:* typing.Union[int, float]

The number of ML compute instances to use in the processing job.

For distributed processing jobs, specify a value greater than 1. The default value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#instance_count SagemakerProcessingJob#instance_count}

---

###### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.putClusterConfig.parameter.instanceType"></a>

- *Type:* str

The ML compute instance type for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#instance_type SagemakerProcessingJob#instance_type}

---

###### `volume_size_in_gb`<sup>Required</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.putClusterConfig.parameter.volumeSizeInGb"></a>

- *Type:* typing.Union[int, float]

The size of the ML storage volume in gigabytes that you want to provision.

You must specify sufficient ML storage for your scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#volume_size_in_gb SagemakerProcessingJob#volume_size_in_gb}

---

###### `volume_kms_key_id`<sup>Optional</sup> <a name="volume_kms_key_id" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.putClusterConfig.parameter.volumeKmsKeyId"></a>

- *Type:* str

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_processing_job#volume_kms_key_id SagemakerProcessingJob#volume_kms_key_id}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.property.clusterConfig">cluster_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference">SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.property.clusterConfigInput">cluster_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig">SagemakerProcessingJobProcessingResourcesClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources">SagemakerProcessingJobProcessingResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_config`<sup>Required</sup> <a name="cluster_config" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.property.clusterConfig"></a>

```python
cluster_config: SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference">SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference</a>

---

##### `cluster_config_input`<sup>Optional</sup> <a name="cluster_config_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.property.clusterConfigInput"></a>

```python
cluster_config_input: IResolvable | SagemakerProcessingJobProcessingResourcesClusterConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesClusterConfig">SagemakerProcessingJobProcessingResourcesClusterConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerProcessingJobProcessingResources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobProcessingResources">SagemakerProcessingJobProcessingResources</a>

---


### SagemakerProcessingJobStoppingConditionOutputReference <a name="SagemakerProcessingJobStoppingConditionOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.resetMaxRuntimeInSeconds">reset_max_runtime_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_runtime_in_seconds` <a name="reset_max_runtime_in_seconds" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.resetMaxRuntimeInSeconds"></a>

```python
def reset_max_runtime_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.property.maxRuntimeInSecondsInput">max_runtime_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.property.maxRuntimeInSeconds">max_runtime_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition">SagemakerProcessingJobStoppingCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_runtime_in_seconds_input`<sup>Optional</sup> <a name="max_runtime_in_seconds_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.property.maxRuntimeInSecondsInput"></a>

```python
max_runtime_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_runtime_in_seconds`<sup>Required</sup> <a name="max_runtime_in_seconds" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.property.maxRuntimeInSeconds"></a>

```python
max_runtime_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingConditionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerProcessingJobStoppingCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobStoppingCondition">SagemakerProcessingJobStoppingCondition</a>

---


### SagemakerProcessingJobTagsList <a name="SagemakerProcessingJobTagsList" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerProcessingJobTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags">SagemakerProcessingJobTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerProcessingJobTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags">SagemakerProcessingJobTags</a>]

---


### SagemakerProcessingJobTagsOutputReference <a name="SagemakerProcessingJobTagsOutputReference" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_processing_job

sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags">SagemakerProcessingJobTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerProcessingJobTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerProcessingJob.SagemakerProcessingJobTags">SagemakerProcessingJobTags</a>

---



