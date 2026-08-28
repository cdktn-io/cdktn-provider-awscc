# `sagemakerModelQualityJobDefinition` Submodule <a name="`sagemakerModelQualityJobDefinition` Submodule" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerModelQualityJobDefinition <a name="SagemakerModelQualityJobDefinition" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition awscc_sagemaker_model_quality_job_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  job_resources: SagemakerModelQualityJobDefinitionJobResources,
  model_quality_app_specification: SagemakerModelQualityJobDefinitionModelQualityAppSpecification,
  model_quality_job_input: SagemakerModelQualityJobDefinitionModelQualityJobInput,
  model_quality_job_output_config: SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig,
  role_arn: str,
  endpoint_name: str = None,
  job_definition_name: str = None,
  model_quality_baseline_config: SagemakerModelQualityJobDefinitionModelQualityBaselineConfig = None,
  network_config: SagemakerModelQualityJobDefinitionNetworkConfig = None,
  stopping_condition: SagemakerModelQualityJobDefinitionStoppingCondition = None,
  tags: IResolvable | typing.List[SagemakerModelQualityJobDefinitionTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.jobResources">job_resources</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources">SagemakerModelQualityJobDefinitionJobResources</a></code> | Identifies the resources to deploy for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.modelQualityAppSpecification">model_quality_app_specification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification">SagemakerModelQualityJobDefinitionModelQualityAppSpecification</a></code> | Container image configuration object for the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.modelQualityJobInput">model_quality_job_input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput">SagemakerModelQualityJobDefinitionModelQualityJobInput</a></code> | The inputs for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.modelQualityJobOutputConfig">model_quality_job_output_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig</a></code> | The output configuration for monitoring jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.endpointName">endpoint_name</a></code> | <code>str</code> | The name of the endpoint used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.jobDefinitionName">job_definition_name</a></code> | <code>str</code> | The name of the job definition. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.modelQualityBaselineConfig">model_quality_baseline_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig">SagemakerModelQualityJobDefinitionModelQualityBaselineConfig</a></code> | Baseline configuration used to validate that the data conforms to the specified constraints and statistics. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.networkConfig">network_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig">SagemakerModelQualityJobDefinitionNetworkConfig</a></code> | Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.stoppingCondition">stopping_condition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition">SagemakerModelQualityJobDefinitionStoppingCondition</a></code> | Specifies a time limit for how long the monitoring job is allowed to run. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags">SagemakerModelQualityJobDefinitionTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `job_resources`<sup>Required</sup> <a name="job_resources" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.jobResources"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources">SagemakerModelQualityJobDefinitionJobResources</a>

Identifies the resources to deploy for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#job_resources SagemakerModelQualityJobDefinition#job_resources}

---

##### `model_quality_app_specification`<sup>Required</sup> <a name="model_quality_app_specification" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.modelQualityAppSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification">SagemakerModelQualityJobDefinitionModelQualityAppSpecification</a>

Container image configuration object for the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#model_quality_app_specification SagemakerModelQualityJobDefinition#model_quality_app_specification}

---

##### `model_quality_job_input`<sup>Required</sup> <a name="model_quality_job_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.modelQualityJobInput"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput">SagemakerModelQualityJobDefinitionModelQualityJobInput</a>

The inputs for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#model_quality_job_input SagemakerModelQualityJobDefinition#model_quality_job_input}

---

##### `model_quality_job_output_config`<sup>Required</sup> <a name="model_quality_job_output_config" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.modelQualityJobOutputConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig</a>

The output configuration for monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#model_quality_job_output_config SagemakerModelQualityJobDefinition#model_quality_job_output_config}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.roleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#role_arn SagemakerModelQualityJobDefinition#role_arn}

---

##### `endpoint_name`<sup>Optional</sup> <a name="endpoint_name" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.endpointName"></a>

- *Type:* str

The name of the endpoint used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#endpoint_name SagemakerModelQualityJobDefinition#endpoint_name}

---

##### `job_definition_name`<sup>Optional</sup> <a name="job_definition_name" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.jobDefinitionName"></a>

- *Type:* str

The name of the job definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#job_definition_name SagemakerModelQualityJobDefinition#job_definition_name}

---

##### `model_quality_baseline_config`<sup>Optional</sup> <a name="model_quality_baseline_config" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.modelQualityBaselineConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig">SagemakerModelQualityJobDefinitionModelQualityBaselineConfig</a>

Baseline configuration used to validate that the data conforms to the specified constraints and statistics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#model_quality_baseline_config SagemakerModelQualityJobDefinition#model_quality_baseline_config}

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.networkConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig">SagemakerModelQualityJobDefinitionNetworkConfig</a>

Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#network_config SagemakerModelQualityJobDefinition#network_config}

---

##### `stopping_condition`<sup>Optional</sup> <a name="stopping_condition" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.stoppingCondition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition">SagemakerModelQualityJobDefinitionStoppingCondition</a>

Specifies a time limit for how long the monitoring job is allowed to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#stopping_condition SagemakerModelQualityJobDefinition#stopping_condition}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags">SagemakerModelQualityJobDefinitionTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#tags SagemakerModelQualityJobDefinition#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putJobResources">put_job_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityAppSpecification">put_model_quality_app_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityBaselineConfig">put_model_quality_baseline_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityJobInput">put_model_quality_job_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityJobOutputConfig">put_model_quality_job_output_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putNetworkConfig">put_network_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putStoppingCondition">put_stopping_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetEndpointName">reset_endpoint_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetJobDefinitionName">reset_job_definition_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetModelQualityBaselineConfig">reset_model_quality_baseline_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetNetworkConfig">reset_network_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetStoppingCondition">reset_stopping_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_job_resources` <a name="put_job_resources" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putJobResources"></a>

```python
def put_job_resources(
  cluster_config: SagemakerModelQualityJobDefinitionJobResourcesClusterConfig
) -> None
```

###### `cluster_config`<sup>Required</sup> <a name="cluster_config" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putJobResources.parameter.clusterConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig">SagemakerModelQualityJobDefinitionJobResourcesClusterConfig</a>

Configuration for the cluster used to run model monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#cluster_config SagemakerModelQualityJobDefinition#cluster_config}

---

##### `put_model_quality_app_specification` <a name="put_model_quality_app_specification" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityAppSpecification"></a>

```python
def put_model_quality_app_specification(
  image_uri: str,
  problem_type: str,
  container_arguments: typing.List[str] = None,
  container_entrypoint: typing.List[str] = None,
  environment: typing.Mapping[str] = None,
  post_analytics_processor_source_uri: str = None,
  record_preprocessor_source_uri: str = None
) -> None
```

###### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityAppSpecification.parameter.imageUri"></a>

- *Type:* str

The container image to be run by the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#image_uri SagemakerModelQualityJobDefinition#image_uri}

---

###### `problem_type`<sup>Required</sup> <a name="problem_type" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityAppSpecification.parameter.problemType"></a>

- *Type:* str

The status of the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#problem_type SagemakerModelQualityJobDefinition#problem_type}

---

###### `container_arguments`<sup>Optional</sup> <a name="container_arguments" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityAppSpecification.parameter.containerArguments"></a>

- *Type:* typing.List[str]

An array of arguments for the container used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#container_arguments SagemakerModelQualityJobDefinition#container_arguments}

---

###### `container_entrypoint`<sup>Optional</sup> <a name="container_entrypoint" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityAppSpecification.parameter.containerEntrypoint"></a>

- *Type:* typing.List[str]

Specifies the entrypoint for a container used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#container_entrypoint SagemakerModelQualityJobDefinition#container_entrypoint}

---

###### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityAppSpecification.parameter.environment"></a>

- *Type:* typing.Mapping[str]

Sets the environment variables in the Docker container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#environment SagemakerModelQualityJobDefinition#environment}

---

###### `post_analytics_processor_source_uri`<sup>Optional</sup> <a name="post_analytics_processor_source_uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityAppSpecification.parameter.postAnalyticsProcessorSourceUri"></a>

- *Type:* str

An Amazon S3 URI to a script that is called after analysis has been performed.

Applicable only for the built-in (first party) containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#post_analytics_processor_source_uri SagemakerModelQualityJobDefinition#post_analytics_processor_source_uri}

---

###### `record_preprocessor_source_uri`<sup>Optional</sup> <a name="record_preprocessor_source_uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityAppSpecification.parameter.recordPreprocessorSourceUri"></a>

- *Type:* str

An Amazon S3 URI to a script that is called per row prior to running analysis.

It can base64 decode the payload and convert it into a flatted json so that the built-in container can use the converted data. Applicable only for the built-in (first party) containers

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#record_preprocessor_source_uri SagemakerModelQualityJobDefinition#record_preprocessor_source_uri}

---

##### `put_model_quality_baseline_config` <a name="put_model_quality_baseline_config" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityBaselineConfig"></a>

```python
def put_model_quality_baseline_config(
  baselining_job_name: str = None,
  constraints_resource: SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource = None
) -> None
```

###### `baselining_job_name`<sup>Optional</sup> <a name="baselining_job_name" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityBaselineConfig.parameter.baseliningJobName"></a>

- *Type:* str

The name of a processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#baselining_job_name SagemakerModelQualityJobDefinition#baselining_job_name}

---

###### `constraints_resource`<sup>Optional</sup> <a name="constraints_resource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityBaselineConfig.parameter.constraintsResource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource">SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource</a>

The baseline constraints resource for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#constraints_resource SagemakerModelQualityJobDefinition#constraints_resource}

---

##### `put_model_quality_job_input` <a name="put_model_quality_job_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityJobInput"></a>

```python
def put_model_quality_job_input(
  ground_truth_s3_input: SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input,
  batch_transform_input: SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput = None,
  endpoint_input: SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput = None
) -> None
```

###### `ground_truth_s3_input`<sup>Required</sup> <a name="ground_truth_s3_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityJobInput.parameter.groundTruthS3Input"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input">SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input</a>

Ground truth input provided in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#ground_truth_s3_input SagemakerModelQualityJobDefinition#ground_truth_s3_input}

---

###### `batch_transform_input`<sup>Optional</sup> <a name="batch_transform_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityJobInput.parameter.batchTransformInput"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput</a>

The batch transform input for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#batch_transform_input SagemakerModelQualityJobDefinition#batch_transform_input}

---

###### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityJobInput.parameter.endpointInput"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput">SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput</a>

The endpoint for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#endpoint_input SagemakerModelQualityJobDefinition#endpoint_input}

---

##### `put_model_quality_job_output_config` <a name="put_model_quality_job_output_config" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityJobOutputConfig"></a>

```python
def put_model_quality_job_output_config(
  monitoring_outputs: IResolvable | typing.List[SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs],
  kms_key_id: str = None
) -> None
```

###### `monitoring_outputs`<sup>Required</sup> <a name="monitoring_outputs" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityJobOutputConfig.parameter.monitoringOutputs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs</a>]

Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#monitoring_outputs SagemakerModelQualityJobDefinition#monitoring_outputs}

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putModelQualityJobOutputConfig.parameter.kmsKeyId"></a>

- *Type:* str

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#kms_key_id SagemakerModelQualityJobDefinition#kms_key_id}

---

##### `put_network_config` <a name="put_network_config" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putNetworkConfig"></a>

```python
def put_network_config(
  enable_inter_container_traffic_encryption: bool | IResolvable = None,
  enable_network_isolation: bool | IResolvable = None,
  vpc_config: SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig = None
) -> None
```

###### `enable_inter_container_traffic_encryption`<sup>Optional</sup> <a name="enable_inter_container_traffic_encryption" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putNetworkConfig.parameter.enableInterContainerTrafficEncryption"></a>

- *Type:* bool | cdktn.IResolvable

Whether to encrypt all communications between distributed processing jobs.

Choose True to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#enable_inter_container_traffic_encryption SagemakerModelQualityJobDefinition#enable_inter_container_traffic_encryption}

---

###### `enable_network_isolation`<sup>Optional</sup> <a name="enable_network_isolation" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putNetworkConfig.parameter.enableNetworkIsolation"></a>

- *Type:* bool | cdktn.IResolvable

Whether to allow inbound and outbound network calls to and from the containers used for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#enable_network_isolation SagemakerModelQualityJobDefinition#enable_network_isolation}

---

###### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putNetworkConfig.parameter.vpcConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig">SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig</a>

Specifies a VPC that your training jobs and hosted models have access to.

Control access to and from your training and model containers by configuring the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#vpc_config SagemakerModelQualityJobDefinition#vpc_config}

---

##### `put_stopping_condition` <a name="put_stopping_condition" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putStoppingCondition"></a>

```python
def put_stopping_condition(
  max_runtime_in_seconds: typing.Union[int, float] = None
) -> None
```

###### `max_runtime_in_seconds`<sup>Optional</sup> <a name="max_runtime_in_seconds" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putStoppingCondition.parameter.maxRuntimeInSeconds"></a>

- *Type:* typing.Union[int, float]

The maximum runtime allowed in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#max_runtime_in_seconds SagemakerModelQualityJobDefinition#max_runtime_in_seconds}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SagemakerModelQualityJobDefinitionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags">SagemakerModelQualityJobDefinitionTags</a>]

---

##### `reset_endpoint_name` <a name="reset_endpoint_name" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetEndpointName"></a>

```python
def reset_endpoint_name() -> None
```

##### `reset_job_definition_name` <a name="reset_job_definition_name" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetJobDefinitionName"></a>

```python
def reset_job_definition_name() -> None
```

##### `reset_model_quality_baseline_config` <a name="reset_model_quality_baseline_config" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetModelQualityBaselineConfig"></a>

```python
def reset_model_quality_baseline_config() -> None
```

##### `reset_network_config` <a name="reset_network_config" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetNetworkConfig"></a>

```python
def reset_network_config() -> None
```

##### `reset_stopping_condition` <a name="reset_stopping_condition" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetStoppingCondition"></a>

```python
def reset_stopping_condition() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SagemakerModelQualityJobDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.isConstruct"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.isTerraformElement"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.isTerraformResource"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SagemakerModelQualityJobDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerModelQualityJobDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerModelQualityJobDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerModelQualityJobDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.jobDefinitionArn">job_definition_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.jobResources">job_resources</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference">SagemakerModelQualityJobDefinitionJobResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityAppSpecification">model_quality_app_specification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference">SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityBaselineConfig">model_quality_baseline_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference">SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityJobInput">model_quality_job_input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityJobOutputConfig">model_quality_job_output_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.networkConfig">network_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference">SagemakerModelQualityJobDefinitionNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.stoppingCondition">stopping_condition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference">SagemakerModelQualityJobDefinitionStoppingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList">SagemakerModelQualityJobDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.endpointNameInput">endpoint_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.jobDefinitionNameInput">job_definition_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.jobResourcesInput">job_resources_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources">SagemakerModelQualityJobDefinitionJobResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityAppSpecificationInput">model_quality_app_specification_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification">SagemakerModelQualityJobDefinitionModelQualityAppSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityBaselineConfigInput">model_quality_baseline_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig">SagemakerModelQualityJobDefinitionModelQualityBaselineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityJobInputInput">model_quality_job_input_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput">SagemakerModelQualityJobDefinitionModelQualityJobInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityJobOutputConfigInput">model_quality_job_output_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.networkConfigInput">network_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig">SagemakerModelQualityJobDefinitionNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.stoppingConditionInput">stopping_condition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition">SagemakerModelQualityJobDefinitionStoppingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags">SagemakerModelQualityJobDefinitionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.endpointName">endpoint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.jobDefinitionName">job_definition_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `job_definition_arn`<sup>Required</sup> <a name="job_definition_arn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.jobDefinitionArn"></a>

```python
job_definition_arn: str
```

- *Type:* str

---

##### `job_resources`<sup>Required</sup> <a name="job_resources" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.jobResources"></a>

```python
job_resources: SagemakerModelQualityJobDefinitionJobResourcesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference">SagemakerModelQualityJobDefinitionJobResourcesOutputReference</a>

---

##### `model_quality_app_specification`<sup>Required</sup> <a name="model_quality_app_specification" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityAppSpecification"></a>

```python
model_quality_app_specification: SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference">SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference</a>

---

##### `model_quality_baseline_config`<sup>Required</sup> <a name="model_quality_baseline_config" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityBaselineConfig"></a>

```python
model_quality_baseline_config: SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference">SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference</a>

---

##### `model_quality_job_input`<sup>Required</sup> <a name="model_quality_job_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityJobInput"></a>

```python
model_quality_job_input: SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference</a>

---

##### `model_quality_job_output_config`<sup>Required</sup> <a name="model_quality_job_output_config" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityJobOutputConfig"></a>

```python
model_quality_job_output_config: SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference</a>

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.networkConfig"></a>

```python
network_config: SagemakerModelQualityJobDefinitionNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference">SagemakerModelQualityJobDefinitionNetworkConfigOutputReference</a>

---

##### `stopping_condition`<sup>Required</sup> <a name="stopping_condition" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.stoppingCondition"></a>

```python
stopping_condition: SagemakerModelQualityJobDefinitionStoppingConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference">SagemakerModelQualityJobDefinitionStoppingConditionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.tags"></a>

```python
tags: SagemakerModelQualityJobDefinitionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList">SagemakerModelQualityJobDefinitionTagsList</a>

---

##### `endpoint_name_input`<sup>Optional</sup> <a name="endpoint_name_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.endpointNameInput"></a>

```python
endpoint_name_input: str
```

- *Type:* str

---

##### `job_definition_name_input`<sup>Optional</sup> <a name="job_definition_name_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.jobDefinitionNameInput"></a>

```python
job_definition_name_input: str
```

- *Type:* str

---

##### `job_resources_input`<sup>Optional</sup> <a name="job_resources_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.jobResourcesInput"></a>

```python
job_resources_input: IResolvable | SagemakerModelQualityJobDefinitionJobResources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources">SagemakerModelQualityJobDefinitionJobResources</a>

---

##### `model_quality_app_specification_input`<sup>Optional</sup> <a name="model_quality_app_specification_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityAppSpecificationInput"></a>

```python
model_quality_app_specification_input: IResolvable | SagemakerModelQualityJobDefinitionModelQualityAppSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification">SagemakerModelQualityJobDefinitionModelQualityAppSpecification</a>

---

##### `model_quality_baseline_config_input`<sup>Optional</sup> <a name="model_quality_baseline_config_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityBaselineConfigInput"></a>

```python
model_quality_baseline_config_input: IResolvable | SagemakerModelQualityJobDefinitionModelQualityBaselineConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig">SagemakerModelQualityJobDefinitionModelQualityBaselineConfig</a>

---

##### `model_quality_job_input_input`<sup>Optional</sup> <a name="model_quality_job_input_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityJobInputInput"></a>

```python
model_quality_job_input_input: IResolvable | SagemakerModelQualityJobDefinitionModelQualityJobInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput">SagemakerModelQualityJobDefinitionModelQualityJobInput</a>

---

##### `model_quality_job_output_config_input`<sup>Optional</sup> <a name="model_quality_job_output_config_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.modelQualityJobOutputConfigInput"></a>

```python
model_quality_job_output_config_input: IResolvable | SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig</a>

---

##### `network_config_input`<sup>Optional</sup> <a name="network_config_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.networkConfigInput"></a>

```python
network_config_input: IResolvable | SagemakerModelQualityJobDefinitionNetworkConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig">SagemakerModelQualityJobDefinitionNetworkConfig</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `stopping_condition_input`<sup>Optional</sup> <a name="stopping_condition_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.stoppingConditionInput"></a>

```python
stopping_condition_input: IResolvable | SagemakerModelQualityJobDefinitionStoppingCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition">SagemakerModelQualityJobDefinitionStoppingCondition</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SagemakerModelQualityJobDefinitionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags">SagemakerModelQualityJobDefinitionTags</a>]

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

---

##### `job_definition_name`<sup>Required</sup> <a name="job_definition_name" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.jobDefinitionName"></a>

```python
job_definition_name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerModelQualityJobDefinitionConfig <a name="SagemakerModelQualityJobDefinitionConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  job_resources: SagemakerModelQualityJobDefinitionJobResources,
  model_quality_app_specification: SagemakerModelQualityJobDefinitionModelQualityAppSpecification,
  model_quality_job_input: SagemakerModelQualityJobDefinitionModelQualityJobInput,
  model_quality_job_output_config: SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig,
  role_arn: str,
  endpoint_name: str = None,
  job_definition_name: str = None,
  model_quality_baseline_config: SagemakerModelQualityJobDefinitionModelQualityBaselineConfig = None,
  network_config: SagemakerModelQualityJobDefinitionNetworkConfig = None,
  stopping_condition: SagemakerModelQualityJobDefinitionStoppingCondition = None,
  tags: IResolvable | typing.List[SagemakerModelQualityJobDefinitionTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.jobResources">job_resources</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources">SagemakerModelQualityJobDefinitionJobResources</a></code> | Identifies the resources to deploy for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.modelQualityAppSpecification">model_quality_app_specification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification">SagemakerModelQualityJobDefinitionModelQualityAppSpecification</a></code> | Container image configuration object for the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.modelQualityJobInput">model_quality_job_input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput">SagemakerModelQualityJobDefinitionModelQualityJobInput</a></code> | The inputs for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.modelQualityJobOutputConfig">model_quality_job_output_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig</a></code> | The output configuration for monitoring jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.endpointName">endpoint_name</a></code> | <code>str</code> | The name of the endpoint used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.jobDefinitionName">job_definition_name</a></code> | <code>str</code> | The name of the job definition. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.modelQualityBaselineConfig">model_quality_baseline_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig">SagemakerModelQualityJobDefinitionModelQualityBaselineConfig</a></code> | Baseline configuration used to validate that the data conforms to the specified constraints and statistics. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.networkConfig">network_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig">SagemakerModelQualityJobDefinitionNetworkConfig</a></code> | Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.stoppingCondition">stopping_condition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition">SagemakerModelQualityJobDefinitionStoppingCondition</a></code> | Specifies a time limit for how long the monitoring job is allowed to run. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags">SagemakerModelQualityJobDefinitionTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `job_resources`<sup>Required</sup> <a name="job_resources" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.jobResources"></a>

```python
job_resources: SagemakerModelQualityJobDefinitionJobResources
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources">SagemakerModelQualityJobDefinitionJobResources</a>

Identifies the resources to deploy for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#job_resources SagemakerModelQualityJobDefinition#job_resources}

---

##### `model_quality_app_specification`<sup>Required</sup> <a name="model_quality_app_specification" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.modelQualityAppSpecification"></a>

```python
model_quality_app_specification: SagemakerModelQualityJobDefinitionModelQualityAppSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification">SagemakerModelQualityJobDefinitionModelQualityAppSpecification</a>

Container image configuration object for the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#model_quality_app_specification SagemakerModelQualityJobDefinition#model_quality_app_specification}

---

##### `model_quality_job_input`<sup>Required</sup> <a name="model_quality_job_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.modelQualityJobInput"></a>

```python
model_quality_job_input: SagemakerModelQualityJobDefinitionModelQualityJobInput
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput">SagemakerModelQualityJobDefinitionModelQualityJobInput</a>

The inputs for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#model_quality_job_input SagemakerModelQualityJobDefinition#model_quality_job_input}

---

##### `model_quality_job_output_config`<sup>Required</sup> <a name="model_quality_job_output_config" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.modelQualityJobOutputConfig"></a>

```python
model_quality_job_output_config: SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig</a>

The output configuration for monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#model_quality_job_output_config SagemakerModelQualityJobDefinition#model_quality_job_output_config}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#role_arn SagemakerModelQualityJobDefinition#role_arn}

---

##### `endpoint_name`<sup>Optional</sup> <a name="endpoint_name" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

The name of the endpoint used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#endpoint_name SagemakerModelQualityJobDefinition#endpoint_name}

---

##### `job_definition_name`<sup>Optional</sup> <a name="job_definition_name" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.jobDefinitionName"></a>

```python
job_definition_name: str
```

- *Type:* str

The name of the job definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#job_definition_name SagemakerModelQualityJobDefinition#job_definition_name}

---

##### `model_quality_baseline_config`<sup>Optional</sup> <a name="model_quality_baseline_config" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.modelQualityBaselineConfig"></a>

```python
model_quality_baseline_config: SagemakerModelQualityJobDefinitionModelQualityBaselineConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig">SagemakerModelQualityJobDefinitionModelQualityBaselineConfig</a>

Baseline configuration used to validate that the data conforms to the specified constraints and statistics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#model_quality_baseline_config SagemakerModelQualityJobDefinition#model_quality_baseline_config}

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.networkConfig"></a>

```python
network_config: SagemakerModelQualityJobDefinitionNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig">SagemakerModelQualityJobDefinitionNetworkConfig</a>

Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#network_config SagemakerModelQualityJobDefinition#network_config}

---

##### `stopping_condition`<sup>Optional</sup> <a name="stopping_condition" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.stoppingCondition"></a>

```python
stopping_condition: SagemakerModelQualityJobDefinitionStoppingCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition">SagemakerModelQualityJobDefinitionStoppingCondition</a>

Specifies a time limit for how long the monitoring job is allowed to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#stopping_condition SagemakerModelQualityJobDefinition#stopping_condition}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SagemakerModelQualityJobDefinitionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags">SagemakerModelQualityJobDefinitionTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#tags SagemakerModelQualityJobDefinition#tags}

---

### SagemakerModelQualityJobDefinitionJobResources <a name="SagemakerModelQualityJobDefinitionJobResources" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources(
  cluster_config: SagemakerModelQualityJobDefinitionJobResourcesClusterConfig
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources.property.clusterConfig">cluster_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig">SagemakerModelQualityJobDefinitionJobResourcesClusterConfig</a></code> | Configuration for the cluster used to run model monitoring jobs. |

---

##### `cluster_config`<sup>Required</sup> <a name="cluster_config" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources.property.clusterConfig"></a>

```python
cluster_config: SagemakerModelQualityJobDefinitionJobResourcesClusterConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig">SagemakerModelQualityJobDefinitionJobResourcesClusterConfig</a>

Configuration for the cluster used to run model monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#cluster_config SagemakerModelQualityJobDefinition#cluster_config}

---

### SagemakerModelQualityJobDefinitionJobResourcesClusterConfig <a name="SagemakerModelQualityJobDefinitionJobResourcesClusterConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig(
  instance_count: typing.Union[int, float],
  instance_type: str,
  volume_size_in_gb: typing.Union[int, float],
  volume_kms_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | The number of ML compute instances to use in the model monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig.property.instanceType">instance_type</a></code> | <code>str</code> | The ML compute instance type for the processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig.property.volumeSizeInGb">volume_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | The size of the ML storage volume, in gigabytes, that you want to provision. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig.property.volumeKmsKeyId">volume_kms_key_id</a></code> | <code>str</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job. |

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of ML compute instances to use in the model monitoring job.

For distributed processing jobs, specify a value greater than 1. The default value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#instance_count SagemakerModelQualityJobDefinition#instance_count}

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

The ML compute instance type for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#instance_type SagemakerModelQualityJobDefinition#instance_type}

---

##### `volume_size_in_gb`<sup>Required</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig.property.volumeSizeInGb"></a>

```python
volume_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size of the ML storage volume, in gigabytes, that you want to provision.

You must specify sufficient ML storage for your scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#volume_size_in_gb SagemakerModelQualityJobDefinition#volume_size_in_gb}

---

##### `volume_kms_key_id`<sup>Optional</sup> <a name="volume_kms_key_id" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig.property.volumeKmsKeyId"></a>

```python
volume_kms_key_id: str
```

- *Type:* str

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#volume_kms_key_id SagemakerModelQualityJobDefinition#volume_kms_key_id}

---

### SagemakerModelQualityJobDefinitionModelQualityAppSpecification <a name="SagemakerModelQualityJobDefinitionModelQualityAppSpecification" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification(
  image_uri: str,
  problem_type: str,
  container_arguments: typing.List[str] = None,
  container_entrypoint: typing.List[str] = None,
  environment: typing.Mapping[str] = None,
  post_analytics_processor_source_uri: str = None,
  record_preprocessor_source_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.imageUri">image_uri</a></code> | <code>str</code> | The container image to be run by the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.problemType">problem_type</a></code> | <code>str</code> | The status of the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.containerArguments">container_arguments</a></code> | <code>typing.List[str]</code> | An array of arguments for the container used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.containerEntrypoint">container_entrypoint</a></code> | <code>typing.List[str]</code> | Specifies the entrypoint for a container used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.environment">environment</a></code> | <code>typing.Mapping[str]</code> | Sets the environment variables in the Docker container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.postAnalyticsProcessorSourceUri">post_analytics_processor_source_uri</a></code> | <code>str</code> | An Amazon S3 URI to a script that is called after analysis has been performed. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.recordPreprocessorSourceUri">record_preprocessor_source_uri</a></code> | <code>str</code> | An Amazon S3 URI to a script that is called per row prior to running analysis. |

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

The container image to be run by the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#image_uri SagemakerModelQualityJobDefinition#image_uri}

---

##### `problem_type`<sup>Required</sup> <a name="problem_type" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.problemType"></a>

```python
problem_type: str
```

- *Type:* str

The status of the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#problem_type SagemakerModelQualityJobDefinition#problem_type}

---

##### `container_arguments`<sup>Optional</sup> <a name="container_arguments" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.containerArguments"></a>

```python
container_arguments: typing.List[str]
```

- *Type:* typing.List[str]

An array of arguments for the container used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#container_arguments SagemakerModelQualityJobDefinition#container_arguments}

---

##### `container_entrypoint`<sup>Optional</sup> <a name="container_entrypoint" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.containerEntrypoint"></a>

```python
container_entrypoint: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the entrypoint for a container used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#container_entrypoint SagemakerModelQualityJobDefinition#container_entrypoint}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.environment"></a>

```python
environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Sets the environment variables in the Docker container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#environment SagemakerModelQualityJobDefinition#environment}

---

##### `post_analytics_processor_source_uri`<sup>Optional</sup> <a name="post_analytics_processor_source_uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.postAnalyticsProcessorSourceUri"></a>

```python
post_analytics_processor_source_uri: str
```

- *Type:* str

An Amazon S3 URI to a script that is called after analysis has been performed.

Applicable only for the built-in (first party) containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#post_analytics_processor_source_uri SagemakerModelQualityJobDefinition#post_analytics_processor_source_uri}

---

##### `record_preprocessor_source_uri`<sup>Optional</sup> <a name="record_preprocessor_source_uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification.property.recordPreprocessorSourceUri"></a>

```python
record_preprocessor_source_uri: str
```

- *Type:* str

An Amazon S3 URI to a script that is called per row prior to running analysis.

It can base64 decode the payload and convert it into a flatted json so that the built-in container can use the converted data. Applicable only for the built-in (first party) containers

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#record_preprocessor_source_uri SagemakerModelQualityJobDefinition#record_preprocessor_source_uri}

---

### SagemakerModelQualityJobDefinitionModelQualityBaselineConfig <a name="SagemakerModelQualityJobDefinitionModelQualityBaselineConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig(
  baselining_job_name: str = None,
  constraints_resource: SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig.property.baseliningJobName">baselining_job_name</a></code> | <code>str</code> | The name of a processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig.property.constraintsResource">constraints_resource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource">SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource</a></code> | The baseline constraints resource for a monitoring job. |

---

##### `baselining_job_name`<sup>Optional</sup> <a name="baselining_job_name" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig.property.baseliningJobName"></a>

```python
baselining_job_name: str
```

- *Type:* str

The name of a processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#baselining_job_name SagemakerModelQualityJobDefinition#baselining_job_name}

---

##### `constraints_resource`<sup>Optional</sup> <a name="constraints_resource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig.property.constraintsResource"></a>

```python
constraints_resource: SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource">SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource</a>

The baseline constraints resource for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#constraints_resource SagemakerModelQualityJobDefinition#constraints_resource}

---

### SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource <a name="SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource(
  s3_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource.property.s3Uri">s3_uri</a></code> | <code>str</code> | The Amazon S3 URI for baseline constraint file in Amazon S3 that the current monitoring job should validated against. |

---

##### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

The Amazon S3 URI for baseline constraint file in Amazon S3 that the current monitoring job should validated against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#s3_uri SagemakerModelQualityJobDefinition#s3_uri}

---

### SagemakerModelQualityJobDefinitionModelQualityJobInput <a name="SagemakerModelQualityJobDefinitionModelQualityJobInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput(
  ground_truth_s3_input: SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input,
  batch_transform_input: SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput = None,
  endpoint_input: SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput.property.groundTruthS3Input">ground_truth_s3_input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input">SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input</a></code> | Ground truth input provided in S3. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput.property.batchTransformInput">batch_transform_input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput</a></code> | The batch transform input for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput.property.endpointInput">endpoint_input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput">SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput</a></code> | The endpoint for a monitoring job. |

---

##### `ground_truth_s3_input`<sup>Required</sup> <a name="ground_truth_s3_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput.property.groundTruthS3Input"></a>

```python
ground_truth_s3_input: SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input">SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input</a>

Ground truth input provided in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#ground_truth_s3_input SagemakerModelQualityJobDefinition#ground_truth_s3_input}

---

##### `batch_transform_input`<sup>Optional</sup> <a name="batch_transform_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput.property.batchTransformInput"></a>

```python
batch_transform_input: SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput</a>

The batch transform input for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#batch_transform_input SagemakerModelQualityJobDefinition#batch_transform_input}

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput.property.endpointInput"></a>

```python
endpoint_input: SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput">SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput</a>

The endpoint for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#endpoint_input SagemakerModelQualityJobDefinition#endpoint_input}

---

### SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput(
  data_captured_destination_s3_uri: str = None,
  dataset_format: SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat = None,
  end_time_offset: str = None,
  inference_attribute: str = None,
  local_path: str = None,
  probability_attribute: str = None,
  probability_threshold_attribute: typing.Union[int, float] = None,
  s3_data_distribution_type: str = None,
  s3_input_mode: str = None,
  start_time_offset: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.dataCapturedDestinationS3Uri">data_captured_destination_s3_uri</a></code> | <code>str</code> | A URI that identifies the Amazon S3 storage location where Batch Transform Job captures data. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.datasetFormat">dataset_format</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat</a></code> | The dataset format of the data to monitor. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.endTimeOffset">end_time_offset</a></code> | <code>str</code> | Monitoring end time offset, e.g. PT0H. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.inferenceAttribute">inference_attribute</a></code> | <code>str</code> | Index or JSONpath to locate predicted label(s). |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.localPath">local_path</a></code> | <code>str</code> | Path to the filesystem where the endpoint data is available to the container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.probabilityAttribute">probability_attribute</a></code> | <code>str</code> | Index or JSONpath to locate probabilities. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.probabilityThresholdAttribute">probability_threshold_attribute</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#probability_threshold_attribute SagemakerModelQualityJobDefinition#probability_threshold_attribute}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.s3DataDistributionType">s3_data_distribution_type</a></code> | <code>str</code> | Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.s3InputMode">s3_input_mode</a></code> | <code>str</code> | Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.startTimeOffset">start_time_offset</a></code> | <code>str</code> | Monitoring start time offset, e.g. -PT1H. |

---

##### `data_captured_destination_s3_uri`<sup>Optional</sup> <a name="data_captured_destination_s3_uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.dataCapturedDestinationS3Uri"></a>

```python
data_captured_destination_s3_uri: str
```

- *Type:* str

A URI that identifies the Amazon S3 storage location where Batch Transform Job captures data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#data_captured_destination_s3_uri SagemakerModelQualityJobDefinition#data_captured_destination_s3_uri}

---

##### `dataset_format`<sup>Optional</sup> <a name="dataset_format" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.datasetFormat"></a>

```python
dataset_format: SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat</a>

The dataset format of the data to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#dataset_format SagemakerModelQualityJobDefinition#dataset_format}

---

##### `end_time_offset`<sup>Optional</sup> <a name="end_time_offset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.endTimeOffset"></a>

```python
end_time_offset: str
```

- *Type:* str

Monitoring end time offset, e.g. PT0H.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#end_time_offset SagemakerModelQualityJobDefinition#end_time_offset}

---

##### `inference_attribute`<sup>Optional</sup> <a name="inference_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.inferenceAttribute"></a>

```python
inference_attribute: str
```

- *Type:* str

Index or JSONpath to locate predicted label(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#inference_attribute SagemakerModelQualityJobDefinition#inference_attribute}

---

##### `local_path`<sup>Optional</sup> <a name="local_path" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

Path to the filesystem where the endpoint data is available to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#local_path SagemakerModelQualityJobDefinition#local_path}

---

##### `probability_attribute`<sup>Optional</sup> <a name="probability_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.probabilityAttribute"></a>

```python
probability_attribute: str
```

- *Type:* str

Index or JSONpath to locate probabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#probability_attribute SagemakerModelQualityJobDefinition#probability_attribute}

---

##### `probability_threshold_attribute`<sup>Optional</sup> <a name="probability_threshold_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.probabilityThresholdAttribute"></a>

```python
probability_threshold_attribute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#probability_threshold_attribute SagemakerModelQualityJobDefinition#probability_threshold_attribute}.

---

##### `s3_data_distribution_type`<sup>Optional</sup> <a name="s3_data_distribution_type" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.s3DataDistributionType"></a>

```python
s3_data_distribution_type: str
```

- *Type:* str

Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#s3_data_distribution_type SagemakerModelQualityJobDefinition#s3_data_distribution_type}

---

##### `s3_input_mode`<sup>Optional</sup> <a name="s3_input_mode" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.s3InputMode"></a>

```python
s3_input_mode: str
```

- *Type:* str

Whether the Pipe or File is used as the input mode for transfering data for the monitoring job.

Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#s3_input_mode SagemakerModelQualityJobDefinition#s3_input_mode}

---

##### `start_time_offset`<sup>Optional</sup> <a name="start_time_offset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput.property.startTimeOffset"></a>

```python
start_time_offset: str
```

- *Type:* str

Monitoring start time offset, e.g. -PT1H.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#start_time_offset SagemakerModelQualityJobDefinition#start_time_offset}

---

### SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat(
  csv: SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv = None,
  json: SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson = None,
  parquet: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv</a></code> | The CSV format. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat.property.json">json</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson</a></code> | The Json format. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat.property.parquet">parquet</a></code> | <code>bool \| cdktn.IResolvable</code> | A flag indicating if the dataset format is Parquet. |

---

##### `csv`<sup>Optional</sup> <a name="csv" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat.property.csv"></a>

```python
csv: SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv</a>

The CSV format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#csv SagemakerModelQualityJobDefinition#csv}

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat.property.json"></a>

```python
json: SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson</a>

The Json format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#json SagemakerModelQualityJobDefinition#json}

---

##### `parquet`<sup>Optional</sup> <a name="parquet" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat.property.parquet"></a>

```python
parquet: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A flag indicating if the dataset format is Parquet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#parquet SagemakerModelQualityJobDefinition#parquet}

---

### SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv(
  header: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv.property.header">header</a></code> | <code>bool \| cdktn.IResolvable</code> | A boolean flag indicating if given CSV has header. |

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv.property.header"></a>

```python
header: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A boolean flag indicating if given CSV has header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#header SagemakerModelQualityJobDefinition#header}

---

### SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson(
  line: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson.property.line">line</a></code> | <code>bool \| cdktn.IResolvable</code> | A boolean flag indicating if it is JSON line format. |

---

##### `line`<sup>Optional</sup> <a name="line" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson.property.line"></a>

```python
line: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A boolean flag indicating if it is JSON line format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#line SagemakerModelQualityJobDefinition#line}

---

### SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput(
  endpoint_name: str = None,
  end_time_offset: str = None,
  inference_attribute: str = None,
  local_path: str = None,
  probability_attribute: str = None,
  probability_threshold_attribute: typing.Union[int, float] = None,
  s3_data_distribution_type: str = None,
  s3_input_mode: str = None,
  start_time_offset: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.endpointName">endpoint_name</a></code> | <code>str</code> | The name of the endpoint used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.endTimeOffset">end_time_offset</a></code> | <code>str</code> | Monitoring end time offset, e.g. PT0H. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.inferenceAttribute">inference_attribute</a></code> | <code>str</code> | Index or JSONpath to locate predicted label(s). |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.localPath">local_path</a></code> | <code>str</code> | Path to the filesystem where the endpoint data is available to the container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.probabilityAttribute">probability_attribute</a></code> | <code>str</code> | Index or JSONpath to locate probabilities. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.probabilityThresholdAttribute">probability_threshold_attribute</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#probability_threshold_attribute SagemakerModelQualityJobDefinition#probability_threshold_attribute}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.s3DataDistributionType">s3_data_distribution_type</a></code> | <code>str</code> | Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.s3InputMode">s3_input_mode</a></code> | <code>str</code> | Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.startTimeOffset">start_time_offset</a></code> | <code>str</code> | Monitoring start time offset, e.g. -PT1H. |

---

##### `endpoint_name`<sup>Optional</sup> <a name="endpoint_name" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

The name of the endpoint used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#endpoint_name SagemakerModelQualityJobDefinition#endpoint_name}

---

##### `end_time_offset`<sup>Optional</sup> <a name="end_time_offset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.endTimeOffset"></a>

```python
end_time_offset: str
```

- *Type:* str

Monitoring end time offset, e.g. PT0H.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#end_time_offset SagemakerModelQualityJobDefinition#end_time_offset}

---

##### `inference_attribute`<sup>Optional</sup> <a name="inference_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.inferenceAttribute"></a>

```python
inference_attribute: str
```

- *Type:* str

Index or JSONpath to locate predicted label(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#inference_attribute SagemakerModelQualityJobDefinition#inference_attribute}

---

##### `local_path`<sup>Optional</sup> <a name="local_path" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

Path to the filesystem where the endpoint data is available to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#local_path SagemakerModelQualityJobDefinition#local_path}

---

##### `probability_attribute`<sup>Optional</sup> <a name="probability_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.probabilityAttribute"></a>

```python
probability_attribute: str
```

- *Type:* str

Index or JSONpath to locate probabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#probability_attribute SagemakerModelQualityJobDefinition#probability_attribute}

---

##### `probability_threshold_attribute`<sup>Optional</sup> <a name="probability_threshold_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.probabilityThresholdAttribute"></a>

```python
probability_threshold_attribute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#probability_threshold_attribute SagemakerModelQualityJobDefinition#probability_threshold_attribute}.

---

##### `s3_data_distribution_type`<sup>Optional</sup> <a name="s3_data_distribution_type" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.s3DataDistributionType"></a>

```python
s3_data_distribution_type: str
```

- *Type:* str

Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#s3_data_distribution_type SagemakerModelQualityJobDefinition#s3_data_distribution_type}

---

##### `s3_input_mode`<sup>Optional</sup> <a name="s3_input_mode" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.s3InputMode"></a>

```python
s3_input_mode: str
```

- *Type:* str

Whether the Pipe or File is used as the input mode for transfering data for the monitoring job.

Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#s3_input_mode SagemakerModelQualityJobDefinition#s3_input_mode}

---

##### `start_time_offset`<sup>Optional</sup> <a name="start_time_offset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput.property.startTimeOffset"></a>

```python
start_time_offset: str
```

- *Type:* str

Monitoring start time offset, e.g. -PT1H.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#start_time_offset SagemakerModelQualityJobDefinition#start_time_offset}

---

### SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input(
  s3_uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input.property.s3Uri">s3_uri</a></code> | <code>str</code> | A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. |

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#s3_uri SagemakerModelQualityJobDefinition#s3_uri}

---

### SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig <a name="SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig(
  monitoring_outputs: IResolvable | typing.List[SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs],
  kms_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig.property.monitoringOutputs">monitoring_outputs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs</a>]</code> | Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption. |

---

##### `monitoring_outputs`<sup>Required</sup> <a name="monitoring_outputs" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig.property.monitoringOutputs"></a>

```python
monitoring_outputs: IResolvable | typing.List[SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs</a>]

Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#monitoring_outputs SagemakerModelQualityJobDefinition#monitoring_outputs}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#kms_key_id SagemakerModelQualityJobDefinition#kms_key_id}

---

### SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs <a name="SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs(
  s3_output: SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs.property.s3Output">s3_output</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output</a></code> | Information about where and how to store the results of a monitoring job. |

---

##### `s3_output`<sup>Required</sup> <a name="s3_output" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs.property.s3Output"></a>

```python
s3_output: SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output</a>

Information about where and how to store the results of a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#s3_output SagemakerModelQualityJobDefinition#s3_output}

---

### SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output <a name="SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output(
  local_path: str,
  s3_uri: str,
  s3_upload_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output.property.localPath">local_path</a></code> | <code>str</code> | The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output.property.s3Uri">s3_uri</a></code> | <code>str</code> | A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output.property.s3UploadMode">s3_upload_mode</a></code> | <code>str</code> | Whether to upload the results of the monitoring job continuously or after the job completes. |

---

##### `local_path`<sup>Required</sup> <a name="local_path" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.

LocalPath is an absolute path for the output data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#local_path SagemakerModelQualityJobDefinition#local_path}

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#s3_uri SagemakerModelQualityJobDefinition#s3_uri}

---

##### `s3_upload_mode`<sup>Optional</sup> <a name="s3_upload_mode" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output.property.s3UploadMode"></a>

```python
s3_upload_mode: str
```

- *Type:* str

Whether to upload the results of the monitoring job continuously or after the job completes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#s3_upload_mode SagemakerModelQualityJobDefinition#s3_upload_mode}

---

### SagemakerModelQualityJobDefinitionNetworkConfig <a name="SagemakerModelQualityJobDefinitionNetworkConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig(
  enable_inter_container_traffic_encryption: bool | IResolvable = None,
  enable_network_isolation: bool | IResolvable = None,
  vpc_config: SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig.property.enableInterContainerTrafficEncryption">enable_inter_container_traffic_encryption</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to encrypt all communications between distributed processing jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig.property.enableNetworkIsolation">enable_network_isolation</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to allow inbound and outbound network calls to and from the containers used for the processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig">SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig</a></code> | Specifies a VPC that your training jobs and hosted models have access to. |

---

##### `enable_inter_container_traffic_encryption`<sup>Optional</sup> <a name="enable_inter_container_traffic_encryption" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig.property.enableInterContainerTrafficEncryption"></a>

```python
enable_inter_container_traffic_encryption: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to encrypt all communications between distributed processing jobs.

Choose True to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#enable_inter_container_traffic_encryption SagemakerModelQualityJobDefinition#enable_inter_container_traffic_encryption}

---

##### `enable_network_isolation`<sup>Optional</sup> <a name="enable_network_isolation" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig.property.enableNetworkIsolation"></a>

```python
enable_network_isolation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to allow inbound and outbound network calls to and from the containers used for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#enable_network_isolation SagemakerModelQualityJobDefinition#enable_network_isolation}

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig.property.vpcConfig"></a>

```python
vpc_config: SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig">SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig</a>

Specifies a VPC that your training jobs and hosted models have access to.

Control access to and from your training and model containers by configuring the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#vpc_config SagemakerModelQualityJobDefinition#vpc_config}

---

### SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig <a name="SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig(
  security_group_ids: typing.List[str] = None,
  subnets: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The VPC security group IDs, in the form sg-xxxxxxxx. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | The ID of the subnets in the VPC to which you want to connect to your monitoring jobs. |

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

The VPC security group IDs, in the form sg-xxxxxxxx.

Specify the security groups for the VPC that is specified in the Subnets field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#security_group_ids SagemakerModelQualityJobDefinition#security_group_ids}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

The ID of the subnets in the VPC to which you want to connect to your monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#subnets SagemakerModelQualityJobDefinition#subnets}

---

### SagemakerModelQualityJobDefinitionStoppingCondition <a name="SagemakerModelQualityJobDefinitionStoppingCondition" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition(
  max_runtime_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition.property.maxRuntimeInSeconds">max_runtime_in_seconds</a></code> | <code>typing.Union[int, float]</code> | The maximum runtime allowed in seconds. |

---

##### `max_runtime_in_seconds`<sup>Optional</sup> <a name="max_runtime_in_seconds" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition.property.maxRuntimeInSeconds"></a>

```python
max_runtime_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum runtime allowed in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#max_runtime_in_seconds SagemakerModelQualityJobDefinition#max_runtime_in_seconds}

---

### SagemakerModelQualityJobDefinitionTags <a name="SagemakerModelQualityJobDefinitionTags" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#key SagemakerModelQualityJobDefinition#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#value SagemakerModelQualityJobDefinition#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference <a name="SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.resetVolumeKmsKeyId">reset_volume_kms_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_volume_kms_key_id` <a name="reset_volume_kms_key_id" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.resetVolumeKmsKeyId"></a>

```python
def reset_volume_kms_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCountInput">instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyIdInput">volume_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGbInput">volume_size_in_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId">volume_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb">volume_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig">SagemakerModelQualityJobDefinitionJobResourcesClusterConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_count_input`<sup>Optional</sup> <a name="instance_count_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCountInput"></a>

```python
instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `volume_kms_key_id_input`<sup>Optional</sup> <a name="volume_kms_key_id_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyIdInput"></a>

```python
volume_kms_key_id_input: str
```

- *Type:* str

---

##### `volume_size_in_gb_input`<sup>Optional</sup> <a name="volume_size_in_gb_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGbInput"></a>

```python
volume_size_in_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `volume_kms_key_id`<sup>Required</sup> <a name="volume_kms_key_id" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId"></a>

```python
volume_kms_key_id: str
```

- *Type:* str

---

##### `volume_size_in_gb`<sup>Required</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb"></a>

```python
volume_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelQualityJobDefinitionJobResourcesClusterConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig">SagemakerModelQualityJobDefinitionJobResourcesClusterConfig</a>

---


### SagemakerModelQualityJobDefinitionJobResourcesOutputReference <a name="SagemakerModelQualityJobDefinitionJobResourcesOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.putClusterConfig">put_cluster_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cluster_config` <a name="put_cluster_config" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.putClusterConfig"></a>

```python
def put_cluster_config(
  instance_count: typing.Union[int, float],
  instance_type: str,
  volume_size_in_gb: typing.Union[int, float],
  volume_kms_key_id: str = None
) -> None
```

###### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.putClusterConfig.parameter.instanceCount"></a>

- *Type:* typing.Union[int, float]

The number of ML compute instances to use in the model monitoring job.

For distributed processing jobs, specify a value greater than 1. The default value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#instance_count SagemakerModelQualityJobDefinition#instance_count}

---

###### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.putClusterConfig.parameter.instanceType"></a>

- *Type:* str

The ML compute instance type for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#instance_type SagemakerModelQualityJobDefinition#instance_type}

---

###### `volume_size_in_gb`<sup>Required</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.putClusterConfig.parameter.volumeSizeInGb"></a>

- *Type:* typing.Union[int, float]

The size of the ML storage volume, in gigabytes, that you want to provision.

You must specify sufficient ML storage for your scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#volume_size_in_gb SagemakerModelQualityJobDefinition#volume_size_in_gb}

---

###### `volume_kms_key_id`<sup>Optional</sup> <a name="volume_kms_key_id" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.putClusterConfig.parameter.volumeKmsKeyId"></a>

- *Type:* str

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#volume_kms_key_id SagemakerModelQualityJobDefinition#volume_kms_key_id}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.clusterConfig">cluster_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference">SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.clusterConfigInput">cluster_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig">SagemakerModelQualityJobDefinitionJobResourcesClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources">SagemakerModelQualityJobDefinitionJobResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_config`<sup>Required</sup> <a name="cluster_config" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.clusterConfig"></a>

```python
cluster_config: SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference">SagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference</a>

---

##### `cluster_config_input`<sup>Optional</sup> <a name="cluster_config_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.clusterConfigInput"></a>

```python
cluster_config_input: IResolvable | SagemakerModelQualityJobDefinitionJobResourcesClusterConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesClusterConfig">SagemakerModelQualityJobDefinitionJobResourcesClusterConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelQualityJobDefinitionJobResources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionJobResources">SagemakerModelQualityJobDefinitionJobResources</a>

---


### SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resetContainerArguments">reset_container_arguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resetContainerEntrypoint">reset_container_entrypoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resetPostAnalyticsProcessorSourceUri">reset_post_analytics_processor_source_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resetRecordPreprocessorSourceUri">reset_record_preprocessor_source_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_container_arguments` <a name="reset_container_arguments" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resetContainerArguments"></a>

```python
def reset_container_arguments() -> None
```

##### `reset_container_entrypoint` <a name="reset_container_entrypoint" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resetContainerEntrypoint"></a>

```python
def reset_container_entrypoint() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_post_analytics_processor_source_uri` <a name="reset_post_analytics_processor_source_uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resetPostAnalyticsProcessorSourceUri"></a>

```python
def reset_post_analytics_processor_source_uri() -> None
```

##### `reset_record_preprocessor_source_uri` <a name="reset_record_preprocessor_source_uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.resetRecordPreprocessorSourceUri"></a>

```python
def reset_record_preprocessor_source_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.containerArgumentsInput">container_arguments_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.containerEntrypointInput">container_entrypoint_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.environmentInput">environment_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.imageUriInput">image_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUriInput">post_analytics_processor_source_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.problemTypeInput">problem_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUriInput">record_preprocessor_source_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.containerArguments">container_arguments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.containerEntrypoint">container_entrypoint</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.environment">environment</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUri">post_analytics_processor_source_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.problemType">problem_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUri">record_preprocessor_source_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification">SagemakerModelQualityJobDefinitionModelQualityAppSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_arguments_input`<sup>Optional</sup> <a name="container_arguments_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.containerArgumentsInput"></a>

```python
container_arguments_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_entrypoint_input`<sup>Optional</sup> <a name="container_entrypoint_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.containerEntrypointInput"></a>

```python
container_entrypoint_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.environmentInput"></a>

```python
environment_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `image_uri_input`<sup>Optional</sup> <a name="image_uri_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.imageUriInput"></a>

```python
image_uri_input: str
```

- *Type:* str

---

##### `post_analytics_processor_source_uri_input`<sup>Optional</sup> <a name="post_analytics_processor_source_uri_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUriInput"></a>

```python
post_analytics_processor_source_uri_input: str
```

- *Type:* str

---

##### `problem_type_input`<sup>Optional</sup> <a name="problem_type_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.problemTypeInput"></a>

```python
problem_type_input: str
```

- *Type:* str

---

##### `record_preprocessor_source_uri_input`<sup>Optional</sup> <a name="record_preprocessor_source_uri_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUriInput"></a>

```python
record_preprocessor_source_uri_input: str
```

- *Type:* str

---

##### `container_arguments`<sup>Required</sup> <a name="container_arguments" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.containerArguments"></a>

```python
container_arguments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_entrypoint`<sup>Required</sup> <a name="container_entrypoint" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.containerEntrypoint"></a>

```python
container_entrypoint: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.environment"></a>

```python
environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `post_analytics_processor_source_uri`<sup>Required</sup> <a name="post_analytics_processor_source_uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUri"></a>

```python
post_analytics_processor_source_uri: str
```

- *Type:* str

---

##### `problem_type`<sup>Required</sup> <a name="problem_type" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.problemType"></a>

```python
problem_type: str
```

- *Type:* str

---

##### `record_preprocessor_source_uri`<sup>Required</sup> <a name="record_preprocessor_source_uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUri"></a>

```python
record_preprocessor_source_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelQualityJobDefinitionModelQualityAppSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityAppSpecification">SagemakerModelQualityJobDefinitionModelQualityAppSpecification</a>

---


### SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.resetS3Uri">reset_s3_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_uri` <a name="reset_s3_uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.resetS3Uri"></a>

```python
def reset_s3_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.s3UriInput">s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource">SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_uri_input`<sup>Optional</sup> <a name="s3_uri_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.s3UriInput"></a>

```python
s3_uri_input: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource">SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource</a>

---


### SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.putConstraintsResource">put_constraints_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.resetBaseliningJobName">reset_baselining_job_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.resetConstraintsResource">reset_constraints_resource</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_constraints_resource` <a name="put_constraints_resource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.putConstraintsResource"></a>

```python
def put_constraints_resource(
  s3_uri: str = None
) -> None
```

###### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.putConstraintsResource.parameter.s3Uri"></a>

- *Type:* str

The Amazon S3 URI for baseline constraint file in Amazon S3 that the current monitoring job should validated against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#s3_uri SagemakerModelQualityJobDefinition#s3_uri}

---

##### `reset_baselining_job_name` <a name="reset_baselining_job_name" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.resetBaseliningJobName"></a>

```python
def reset_baselining_job_name() -> None
```

##### `reset_constraints_resource` <a name="reset_constraints_resource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.resetConstraintsResource"></a>

```python
def reset_constraints_resource() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.constraintsResource">constraints_resource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference">SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.baseliningJobNameInput">baselining_job_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.constraintsResourceInput">constraints_resource_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource">SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.baseliningJobName">baselining_job_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig">SagemakerModelQualityJobDefinitionModelQualityBaselineConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `constraints_resource`<sup>Required</sup> <a name="constraints_resource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.constraintsResource"></a>

```python
constraints_resource: SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference">SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference</a>

---

##### `baselining_job_name_input`<sup>Optional</sup> <a name="baselining_job_name_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.baseliningJobNameInput"></a>

```python
baselining_job_name_input: str
```

- *Type:* str

---

##### `constraints_resource_input`<sup>Optional</sup> <a name="constraints_resource_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.constraintsResourceInput"></a>

```python
constraints_resource_input: IResolvable | SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource">SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource</a>

---

##### `baselining_job_name`<sup>Required</sup> <a name="baselining_job_name" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.baseliningJobName"></a>

```python
baselining_job_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelQualityJobDefinitionModelQualityBaselineConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityBaselineConfig">SagemakerModelQualityJobDefinitionModelQualityBaselineConfig</a>

---


### SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resetHeader">reset_header</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_header` <a name="reset_header" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resetHeader"></a>

```python
def reset_header() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.headerInput">header_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header">header</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.headerInput"></a>

```python
header_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header"></a>

```python
header: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv</a>

---


### SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resetLine">reset_line</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_line` <a name="reset_line" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resetLine"></a>

```python
def reset_line() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.lineInput">line_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line">line</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `line_input`<sup>Optional</sup> <a name="line_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.lineInput"></a>

```python
line_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `line`<sup>Required</sup> <a name="line" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line"></a>

```python
line: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson</a>

---


### SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.putCsv">put_csv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.putJson">put_json</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetCsv">reset_csv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetJson">reset_json</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetParquet">reset_parquet</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_csv` <a name="put_csv" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.putCsv"></a>

```python
def put_csv(
  header: bool | IResolvable = None
) -> None
```

###### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.putCsv.parameter.header"></a>

- *Type:* bool | cdktn.IResolvable

A boolean flag indicating if given CSV has header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#header SagemakerModelQualityJobDefinition#header}

---

##### `put_json` <a name="put_json" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.putJson"></a>

```python
def put_json(
  line: bool | IResolvable = None
) -> None
```

###### `line`<sup>Optional</sup> <a name="line" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.putJson.parameter.line"></a>

- *Type:* bool | cdktn.IResolvable

A boolean flag indicating if it is JSON line format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#line SagemakerModelQualityJobDefinition#line}

---

##### `reset_csv` <a name="reset_csv" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetCsv"></a>

```python
def reset_csv() -> None
```

##### `reset_json` <a name="reset_json" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetJson"></a>

```python
def reset_json() -> None
```

##### `reset_parquet` <a name="reset_parquet" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetParquet"></a>

```python
def reset_parquet() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.json">json</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csvInput">csv_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.jsonInput">json_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquetInput">parquet_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquet">parquet</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csv"></a>

```python
csv: SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference</a>

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.json"></a>

```python
json: SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference</a>

---

##### `csv_input`<sup>Optional</sup> <a name="csv_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csvInput"></a>

```python
csv_input: IResolvable | SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv</a>

---

##### `json_input`<sup>Optional</sup> <a name="json_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.jsonInput"></a>

```python
json_input: IResolvable | SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson</a>

---

##### `parquet_input`<sup>Optional</sup> <a name="parquet_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquetInput"></a>

```python
parquet_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `parquet`<sup>Required</sup> <a name="parquet" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquet"></a>

```python
parquet: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat</a>

---


### SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.putDatasetFormat">put_dataset_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetDataCapturedDestinationS3Uri">reset_data_captured_destination_s3_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetDatasetFormat">reset_dataset_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetEndTimeOffset">reset_end_time_offset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetInferenceAttribute">reset_inference_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetLocalPath">reset_local_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetProbabilityAttribute">reset_probability_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetProbabilityThresholdAttribute">reset_probability_threshold_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetS3DataDistributionType">reset_s3_data_distribution_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetS3InputMode">reset_s3_input_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetStartTimeOffset">reset_start_time_offset</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dataset_format` <a name="put_dataset_format" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.putDatasetFormat"></a>

```python
def put_dataset_format(
  csv: SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv = None,
  json: SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson = None,
  parquet: bool | IResolvable = None
) -> None
```

###### `csv`<sup>Optional</sup> <a name="csv" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.putDatasetFormat.parameter.csv"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv</a>

The CSV format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#csv SagemakerModelQualityJobDefinition#csv}

---

###### `json`<sup>Optional</sup> <a name="json" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.putDatasetFormat.parameter.json"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson</a>

The Json format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#json SagemakerModelQualityJobDefinition#json}

---

###### `parquet`<sup>Optional</sup> <a name="parquet" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.putDatasetFormat.parameter.parquet"></a>

- *Type:* bool | cdktn.IResolvable

A flag indicating if the dataset format is Parquet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#parquet SagemakerModelQualityJobDefinition#parquet}

---

##### `reset_data_captured_destination_s3_uri` <a name="reset_data_captured_destination_s3_uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetDataCapturedDestinationS3Uri"></a>

```python
def reset_data_captured_destination_s3_uri() -> None
```

##### `reset_dataset_format` <a name="reset_dataset_format" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetDatasetFormat"></a>

```python
def reset_dataset_format() -> None
```

##### `reset_end_time_offset` <a name="reset_end_time_offset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetEndTimeOffset"></a>

```python
def reset_end_time_offset() -> None
```

##### `reset_inference_attribute` <a name="reset_inference_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetInferenceAttribute"></a>

```python
def reset_inference_attribute() -> None
```

##### `reset_local_path` <a name="reset_local_path" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetLocalPath"></a>

```python
def reset_local_path() -> None
```

##### `reset_probability_attribute` <a name="reset_probability_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetProbabilityAttribute"></a>

```python
def reset_probability_attribute() -> None
```

##### `reset_probability_threshold_attribute` <a name="reset_probability_threshold_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetProbabilityThresholdAttribute"></a>

```python
def reset_probability_threshold_attribute() -> None
```

##### `reset_s3_data_distribution_type` <a name="reset_s3_data_distribution_type" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetS3DataDistributionType"></a>

```python
def reset_s3_data_distribution_type() -> None
```

##### `reset_s3_input_mode` <a name="reset_s3_input_mode" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetS3InputMode"></a>

```python
def reset_s3_input_mode() -> None
```

##### `reset_start_time_offset` <a name="reset_start_time_offset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.resetStartTimeOffset"></a>

```python
def reset_start_time_offset() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.datasetFormat">dataset_format</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3UriInput">data_captured_destination_s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.datasetFormatInput">dataset_format_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.endTimeOffsetInput">end_time_offset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.inferenceAttributeInput">inference_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.localPathInput">local_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.probabilityAttributeInput">probability_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.probabilityThresholdAttributeInput">probability_threshold_attribute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionTypeInput">s3_data_distribution_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.s3InputModeInput">s3_input_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.startTimeOffsetInput">start_time_offset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri">data_captured_destination_s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.endTimeOffset">end_time_offset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.inferenceAttribute">inference_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.localPath">local_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.probabilityAttribute">probability_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.probabilityThresholdAttribute">probability_threshold_attribute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionType">s3_data_distribution_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.s3InputMode">s3_input_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.startTimeOffset">start_time_offset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_format`<sup>Required</sup> <a name="dataset_format" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.datasetFormat"></a>

```python
dataset_format: SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference</a>

---

##### `data_captured_destination_s3_uri_input`<sup>Optional</sup> <a name="data_captured_destination_s3_uri_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3UriInput"></a>

```python
data_captured_destination_s3_uri_input: str
```

- *Type:* str

---

##### `dataset_format_input`<sup>Optional</sup> <a name="dataset_format_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.datasetFormatInput"></a>

```python
dataset_format_input: IResolvable | SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat</a>

---

##### `end_time_offset_input`<sup>Optional</sup> <a name="end_time_offset_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.endTimeOffsetInput"></a>

```python
end_time_offset_input: str
```

- *Type:* str

---

##### `inference_attribute_input`<sup>Optional</sup> <a name="inference_attribute_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.inferenceAttributeInput"></a>

```python
inference_attribute_input: str
```

- *Type:* str

---

##### `local_path_input`<sup>Optional</sup> <a name="local_path_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.localPathInput"></a>

```python
local_path_input: str
```

- *Type:* str

---

##### `probability_attribute_input`<sup>Optional</sup> <a name="probability_attribute_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.probabilityAttributeInput"></a>

```python
probability_attribute_input: str
```

- *Type:* str

---

##### `probability_threshold_attribute_input`<sup>Optional</sup> <a name="probability_threshold_attribute_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.probabilityThresholdAttributeInput"></a>

```python
probability_threshold_attribute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_data_distribution_type_input`<sup>Optional</sup> <a name="s3_data_distribution_type_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionTypeInput"></a>

```python
s3_data_distribution_type_input: str
```

- *Type:* str

---

##### `s3_input_mode_input`<sup>Optional</sup> <a name="s3_input_mode_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.s3InputModeInput"></a>

```python
s3_input_mode_input: str
```

- *Type:* str

---

##### `start_time_offset_input`<sup>Optional</sup> <a name="start_time_offset_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.startTimeOffsetInput"></a>

```python
start_time_offset_input: str
```

- *Type:* str

---

##### `data_captured_destination_s3_uri`<sup>Required</sup> <a name="data_captured_destination_s3_uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri"></a>

```python
data_captured_destination_s3_uri: str
```

- *Type:* str

---

##### `end_time_offset`<sup>Required</sup> <a name="end_time_offset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.endTimeOffset"></a>

```python
end_time_offset: str
```

- *Type:* str

---

##### `inference_attribute`<sup>Required</sup> <a name="inference_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.inferenceAttribute"></a>

```python
inference_attribute: str
```

- *Type:* str

---

##### `local_path`<sup>Required</sup> <a name="local_path" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

---

##### `probability_attribute`<sup>Required</sup> <a name="probability_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.probabilityAttribute"></a>

```python
probability_attribute: str
```

- *Type:* str

---

##### `probability_threshold_attribute`<sup>Required</sup> <a name="probability_threshold_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.probabilityThresholdAttribute"></a>

```python
probability_threshold_attribute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_data_distribution_type`<sup>Required</sup> <a name="s3_data_distribution_type" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionType"></a>

```python
s3_data_distribution_type: str
```

- *Type:* str

---

##### `s3_input_mode`<sup>Required</sup> <a name="s3_input_mode" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.s3InputMode"></a>

```python
s3_input_mode: str
```

- *Type:* str

---

##### `start_time_offset`<sup>Required</sup> <a name="start_time_offset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.startTimeOffset"></a>

```python
start_time_offset: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput</a>

---


### SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetEndpointName">reset_endpoint_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetEndTimeOffset">reset_end_time_offset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetInferenceAttribute">reset_inference_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetLocalPath">reset_local_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetProbabilityAttribute">reset_probability_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetProbabilityThresholdAttribute">reset_probability_threshold_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetS3DataDistributionType">reset_s3_data_distribution_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetS3InputMode">reset_s3_input_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetStartTimeOffset">reset_start_time_offset</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_endpoint_name` <a name="reset_endpoint_name" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetEndpointName"></a>

```python
def reset_endpoint_name() -> None
```

##### `reset_end_time_offset` <a name="reset_end_time_offset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetEndTimeOffset"></a>

```python
def reset_end_time_offset() -> None
```

##### `reset_inference_attribute` <a name="reset_inference_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetInferenceAttribute"></a>

```python
def reset_inference_attribute() -> None
```

##### `reset_local_path` <a name="reset_local_path" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetLocalPath"></a>

```python
def reset_local_path() -> None
```

##### `reset_probability_attribute` <a name="reset_probability_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetProbabilityAttribute"></a>

```python
def reset_probability_attribute() -> None
```

##### `reset_probability_threshold_attribute` <a name="reset_probability_threshold_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetProbabilityThresholdAttribute"></a>

```python
def reset_probability_threshold_attribute() -> None
```

##### `reset_s3_data_distribution_type` <a name="reset_s3_data_distribution_type" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetS3DataDistributionType"></a>

```python
def reset_s3_data_distribution_type() -> None
```

##### `reset_s3_input_mode` <a name="reset_s3_input_mode" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetS3InputMode"></a>

```python
def reset_s3_input_mode() -> None
```

##### `reset_start_time_offset` <a name="reset_start_time_offset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.resetStartTimeOffset"></a>

```python
def reset_start_time_offset() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.endpointNameInput">endpoint_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.endTimeOffsetInput">end_time_offset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.inferenceAttributeInput">inference_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.localPathInput">local_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.probabilityAttributeInput">probability_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.probabilityThresholdAttributeInput">probability_threshold_attribute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.s3DataDistributionTypeInput">s3_data_distribution_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.s3InputModeInput">s3_input_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.startTimeOffsetInput">start_time_offset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.endpointName">endpoint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.endTimeOffset">end_time_offset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.inferenceAttribute">inference_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.localPath">local_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.probabilityAttribute">probability_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.probabilityThresholdAttribute">probability_threshold_attribute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.s3DataDistributionType">s3_data_distribution_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.s3InputMode">s3_input_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.startTimeOffset">start_time_offset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput">SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_name_input`<sup>Optional</sup> <a name="endpoint_name_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.endpointNameInput"></a>

```python
endpoint_name_input: str
```

- *Type:* str

---

##### `end_time_offset_input`<sup>Optional</sup> <a name="end_time_offset_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.endTimeOffsetInput"></a>

```python
end_time_offset_input: str
```

- *Type:* str

---

##### `inference_attribute_input`<sup>Optional</sup> <a name="inference_attribute_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.inferenceAttributeInput"></a>

```python
inference_attribute_input: str
```

- *Type:* str

---

##### `local_path_input`<sup>Optional</sup> <a name="local_path_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.localPathInput"></a>

```python
local_path_input: str
```

- *Type:* str

---

##### `probability_attribute_input`<sup>Optional</sup> <a name="probability_attribute_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.probabilityAttributeInput"></a>

```python
probability_attribute_input: str
```

- *Type:* str

---

##### `probability_threshold_attribute_input`<sup>Optional</sup> <a name="probability_threshold_attribute_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.probabilityThresholdAttributeInput"></a>

```python
probability_threshold_attribute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_data_distribution_type_input`<sup>Optional</sup> <a name="s3_data_distribution_type_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.s3DataDistributionTypeInput"></a>

```python
s3_data_distribution_type_input: str
```

- *Type:* str

---

##### `s3_input_mode_input`<sup>Optional</sup> <a name="s3_input_mode_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.s3InputModeInput"></a>

```python
s3_input_mode_input: str
```

- *Type:* str

---

##### `start_time_offset_input`<sup>Optional</sup> <a name="start_time_offset_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.startTimeOffsetInput"></a>

```python
start_time_offset_input: str
```

- *Type:* str

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

---

##### `end_time_offset`<sup>Required</sup> <a name="end_time_offset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.endTimeOffset"></a>

```python
end_time_offset: str
```

- *Type:* str

---

##### `inference_attribute`<sup>Required</sup> <a name="inference_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.inferenceAttribute"></a>

```python
inference_attribute: str
```

- *Type:* str

---

##### `local_path`<sup>Required</sup> <a name="local_path" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

---

##### `probability_attribute`<sup>Required</sup> <a name="probability_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.probabilityAttribute"></a>

```python
probability_attribute: str
```

- *Type:* str

---

##### `probability_threshold_attribute`<sup>Required</sup> <a name="probability_threshold_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.probabilityThresholdAttribute"></a>

```python
probability_threshold_attribute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_data_distribution_type`<sup>Required</sup> <a name="s3_data_distribution_type" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.s3DataDistributionType"></a>

```python
s3_data_distribution_type: str
```

- *Type:* str

---

##### `s3_input_mode`<sup>Required</sup> <a name="s3_input_mode" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.s3InputMode"></a>

```python
s3_input_mode: str
```

- *Type:* str

---

##### `start_time_offset`<sup>Required</sup> <a name="start_time_offset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.startTimeOffset"></a>

```python
start_time_offset: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput">SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput</a>

---


### SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.s3UriInput">s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input">SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_uri_input`<sup>Optional</sup> <a name="s3_uri_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.s3UriInput"></a>

```python
s3_uri_input: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input">SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input</a>

---


### SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putBatchTransformInput">put_batch_transform_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putEndpointInput">put_endpoint_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putGroundTruthS3Input">put_ground_truth_s3_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.resetBatchTransformInput">reset_batch_transform_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.resetEndpointInput">reset_endpoint_input</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_batch_transform_input` <a name="put_batch_transform_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putBatchTransformInput"></a>

```python
def put_batch_transform_input(
  data_captured_destination_s3_uri: str = None,
  dataset_format: SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat = None,
  end_time_offset: str = None,
  inference_attribute: str = None,
  local_path: str = None,
  probability_attribute: str = None,
  probability_threshold_attribute: typing.Union[int, float] = None,
  s3_data_distribution_type: str = None,
  s3_input_mode: str = None,
  start_time_offset: str = None
) -> None
```

###### `data_captured_destination_s3_uri`<sup>Optional</sup> <a name="data_captured_destination_s3_uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putBatchTransformInput.parameter.dataCapturedDestinationS3Uri"></a>

- *Type:* str

A URI that identifies the Amazon S3 storage location where Batch Transform Job captures data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#data_captured_destination_s3_uri SagemakerModelQualityJobDefinition#data_captured_destination_s3_uri}

---

###### `dataset_format`<sup>Optional</sup> <a name="dataset_format" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putBatchTransformInput.parameter.datasetFormat"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat</a>

The dataset format of the data to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#dataset_format SagemakerModelQualityJobDefinition#dataset_format}

---

###### `end_time_offset`<sup>Optional</sup> <a name="end_time_offset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putBatchTransformInput.parameter.endTimeOffset"></a>

- *Type:* str

Monitoring end time offset, e.g. PT0H.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#end_time_offset SagemakerModelQualityJobDefinition#end_time_offset}

---

###### `inference_attribute`<sup>Optional</sup> <a name="inference_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putBatchTransformInput.parameter.inferenceAttribute"></a>

- *Type:* str

Index or JSONpath to locate predicted label(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#inference_attribute SagemakerModelQualityJobDefinition#inference_attribute}

---

###### `local_path`<sup>Optional</sup> <a name="local_path" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putBatchTransformInput.parameter.localPath"></a>

- *Type:* str

Path to the filesystem where the endpoint data is available to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#local_path SagemakerModelQualityJobDefinition#local_path}

---

###### `probability_attribute`<sup>Optional</sup> <a name="probability_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putBatchTransformInput.parameter.probabilityAttribute"></a>

- *Type:* str

Index or JSONpath to locate probabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#probability_attribute SagemakerModelQualityJobDefinition#probability_attribute}

---

###### `probability_threshold_attribute`<sup>Optional</sup> <a name="probability_threshold_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putBatchTransformInput.parameter.probabilityThresholdAttribute"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#probability_threshold_attribute SagemakerModelQualityJobDefinition#probability_threshold_attribute}.

---

###### `s3_data_distribution_type`<sup>Optional</sup> <a name="s3_data_distribution_type" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putBatchTransformInput.parameter.s3DataDistributionType"></a>

- *Type:* str

Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#s3_data_distribution_type SagemakerModelQualityJobDefinition#s3_data_distribution_type}

---

###### `s3_input_mode`<sup>Optional</sup> <a name="s3_input_mode" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putBatchTransformInput.parameter.s3InputMode"></a>

- *Type:* str

Whether the Pipe or File is used as the input mode for transfering data for the monitoring job.

Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#s3_input_mode SagemakerModelQualityJobDefinition#s3_input_mode}

---

###### `start_time_offset`<sup>Optional</sup> <a name="start_time_offset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putBatchTransformInput.parameter.startTimeOffset"></a>

- *Type:* str

Monitoring start time offset, e.g. -PT1H.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#start_time_offset SagemakerModelQualityJobDefinition#start_time_offset}

---

##### `put_endpoint_input` <a name="put_endpoint_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putEndpointInput"></a>

```python
def put_endpoint_input(
  endpoint_name: str = None,
  end_time_offset: str = None,
  inference_attribute: str = None,
  local_path: str = None,
  probability_attribute: str = None,
  probability_threshold_attribute: typing.Union[int, float] = None,
  s3_data_distribution_type: str = None,
  s3_input_mode: str = None,
  start_time_offset: str = None
) -> None
```

###### `endpoint_name`<sup>Optional</sup> <a name="endpoint_name" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putEndpointInput.parameter.endpointName"></a>

- *Type:* str

The name of the endpoint used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#endpoint_name SagemakerModelQualityJobDefinition#endpoint_name}

---

###### `end_time_offset`<sup>Optional</sup> <a name="end_time_offset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putEndpointInput.parameter.endTimeOffset"></a>

- *Type:* str

Monitoring end time offset, e.g. PT0H.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#end_time_offset SagemakerModelQualityJobDefinition#end_time_offset}

---

###### `inference_attribute`<sup>Optional</sup> <a name="inference_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putEndpointInput.parameter.inferenceAttribute"></a>

- *Type:* str

Index or JSONpath to locate predicted label(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#inference_attribute SagemakerModelQualityJobDefinition#inference_attribute}

---

###### `local_path`<sup>Optional</sup> <a name="local_path" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putEndpointInput.parameter.localPath"></a>

- *Type:* str

Path to the filesystem where the endpoint data is available to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#local_path SagemakerModelQualityJobDefinition#local_path}

---

###### `probability_attribute`<sup>Optional</sup> <a name="probability_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putEndpointInput.parameter.probabilityAttribute"></a>

- *Type:* str

Index or JSONpath to locate probabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#probability_attribute SagemakerModelQualityJobDefinition#probability_attribute}

---

###### `probability_threshold_attribute`<sup>Optional</sup> <a name="probability_threshold_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putEndpointInput.parameter.probabilityThresholdAttribute"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#probability_threshold_attribute SagemakerModelQualityJobDefinition#probability_threshold_attribute}.

---

###### `s3_data_distribution_type`<sup>Optional</sup> <a name="s3_data_distribution_type" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putEndpointInput.parameter.s3DataDistributionType"></a>

- *Type:* str

Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#s3_data_distribution_type SagemakerModelQualityJobDefinition#s3_data_distribution_type}

---

###### `s3_input_mode`<sup>Optional</sup> <a name="s3_input_mode" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putEndpointInput.parameter.s3InputMode"></a>

- *Type:* str

Whether the Pipe or File is used as the input mode for transfering data for the monitoring job.

Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#s3_input_mode SagemakerModelQualityJobDefinition#s3_input_mode}

---

###### `start_time_offset`<sup>Optional</sup> <a name="start_time_offset" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putEndpointInput.parameter.startTimeOffset"></a>

- *Type:* str

Monitoring start time offset, e.g. -PT1H.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#start_time_offset SagemakerModelQualityJobDefinition#start_time_offset}

---

##### `put_ground_truth_s3_input` <a name="put_ground_truth_s3_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putGroundTruthS3Input"></a>

```python
def put_ground_truth_s3_input(
  s3_uri: str
) -> None
```

###### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.putGroundTruthS3Input.parameter.s3Uri"></a>

- *Type:* str

A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#s3_uri SagemakerModelQualityJobDefinition#s3_uri}

---

##### `reset_batch_transform_input` <a name="reset_batch_transform_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.resetBatchTransformInput"></a>

```python
def reset_batch_transform_input() -> None
```

##### `reset_endpoint_input` <a name="reset_endpoint_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.resetEndpointInput"></a>

```python
def reset_endpoint_input() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.batchTransformInput">batch_transform_input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.endpointInput">endpoint_input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.groundTruthS3Input">ground_truth_s3_input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.batchTransformInputInput">batch_transform_input_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.endpointInputInput">endpoint_input_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput">SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.groundTruthS3InputInput">ground_truth_s3_input_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input">SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput">SagemakerModelQualityJobDefinitionModelQualityJobInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_transform_input`<sup>Required</sup> <a name="batch_transform_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.batchTransformInput"></a>

```python
batch_transform_input: SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference</a>

---

##### `endpoint_input`<sup>Required</sup> <a name="endpoint_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.endpointInput"></a>

```python
endpoint_input: SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference</a>

---

##### `ground_truth_s3_input`<sup>Required</sup> <a name="ground_truth_s3_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.groundTruthS3Input"></a>

```python
ground_truth_s3_input: SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference</a>

---

##### `batch_transform_input_input`<sup>Optional</sup> <a name="batch_transform_input_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.batchTransformInputInput"></a>

```python
batch_transform_input_input: IResolvable | SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput">SagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput</a>

---

##### `endpoint_input_input`<sup>Optional</sup> <a name="endpoint_input_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.endpointInputInput"></a>

```python
endpoint_input_input: IResolvable | SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput">SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput</a>

---

##### `ground_truth_s3_input_input`<sup>Optional</sup> <a name="ground_truth_s3_input_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.groundTruthS3InputInput"></a>

```python
ground_truth_s3_input_input: IResolvable | SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input">SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelQualityJobDefinitionModelQualityJobInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobInput">SagemakerModelQualityJobDefinitionModelQualityJobInput</a>

---


### SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList <a name="SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs</a>]

---


### SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.putS3Output">put_s3_output</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_output` <a name="put_s3_output" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.putS3Output"></a>

```python
def put_s3_output(
  local_path: str,
  s3_uri: str,
  s3_upload_mode: str = None
) -> None
```

###### `local_path`<sup>Required</sup> <a name="local_path" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.putS3Output.parameter.localPath"></a>

- *Type:* str

The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.

LocalPath is an absolute path for the output data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#local_path SagemakerModelQualityJobDefinition#local_path}

---

###### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.putS3Output.parameter.s3Uri"></a>

- *Type:* str

A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#s3_uri SagemakerModelQualityJobDefinition#s3_uri}

---

###### `s3_upload_mode`<sup>Optional</sup> <a name="s3_upload_mode" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.putS3Output.parameter.s3UploadMode"></a>

- *Type:* str

Whether to upload the results of the monitoring job continuously or after the job completes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#s3_upload_mode SagemakerModelQualityJobDefinition#s3_upload_mode}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3Output">s3_output</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3OutputInput">s3_output_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_output`<sup>Required</sup> <a name="s3_output" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3Output"></a>

```python
s3_output: SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference</a>

---

##### `s3_output_input`<sup>Optional</sup> <a name="s3_output_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3OutputInput"></a>

```python
s3_output_input: IResolvable | SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs</a>

---


### SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resetS3UploadMode">reset_s3_upload_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_upload_mode` <a name="reset_s3_upload_mode" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resetS3UploadMode"></a>

```python
def reset_s3_upload_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPathInput">local_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadModeInput">s3_upload_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UriInput">s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath">local_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode">s3_upload_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_path_input`<sup>Optional</sup> <a name="local_path_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPathInput"></a>

```python
local_path_input: str
```

- *Type:* str

---

##### `s3_upload_mode_input`<sup>Optional</sup> <a name="s3_upload_mode_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadModeInput"></a>

```python
s3_upload_mode_input: str
```

- *Type:* str

---

##### `s3_uri_input`<sup>Optional</sup> <a name="s3_uri_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UriInput"></a>

```python
s3_uri_input: str
```

- *Type:* str

---

##### `local_path`<sup>Required</sup> <a name="local_path" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

---

##### `s3_upload_mode`<sup>Required</sup> <a name="s3_upload_mode" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode"></a>

```python
s3_upload_mode: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output</a>

---


### SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference <a name="SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.putMonitoringOutputs">put_monitoring_outputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_monitoring_outputs` <a name="put_monitoring_outputs" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.putMonitoringOutputs"></a>

```python
def put_monitoring_outputs(
  value: IResolvable | typing.List[SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.putMonitoringOutputs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs</a>]

---

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.monitoringOutputs">monitoring_outputs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.monitoringOutputsInput">monitoring_outputs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `monitoring_outputs`<sup>Required</sup> <a name="monitoring_outputs" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.monitoringOutputs"></a>

```python
monitoring_outputs: SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList</a>

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `monitoring_outputs_input`<sup>Optional</sup> <a name="monitoring_outputs_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.monitoringOutputsInput"></a>

```python
monitoring_outputs_input: IResolvable | typing.List[SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs</a>]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig">SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig</a>

---


### SagemakerModelQualityJobDefinitionNetworkConfigOutputReference <a name="SagemakerModelQualityJobDefinitionNetworkConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.putVpcConfig">put_vpc_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.resetEnableInterContainerTrafficEncryption">reset_enable_inter_container_traffic_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.resetEnableNetworkIsolation">reset_enable_network_isolation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.resetVpcConfig">reset_vpc_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_vpc_config` <a name="put_vpc_config" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.putVpcConfig"></a>

```python
def put_vpc_config(
  security_group_ids: typing.List[str] = None,
  subnets: typing.List[str] = None
) -> None
```

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.putVpcConfig.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

The VPC security group IDs, in the form sg-xxxxxxxx.

Specify the security groups for the VPC that is specified in the Subnets field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#security_group_ids SagemakerModelQualityJobDefinition#security_group_ids}

---

###### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.putVpcConfig.parameter.subnets"></a>

- *Type:* typing.List[str]

The ID of the subnets in the VPC to which you want to connect to your monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_quality_job_definition#subnets SagemakerModelQualityJobDefinition#subnets}

---

##### `reset_enable_inter_container_traffic_encryption` <a name="reset_enable_inter_container_traffic_encryption" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.resetEnableInterContainerTrafficEncryption"></a>

```python
def reset_enable_inter_container_traffic_encryption() -> None
```

##### `reset_enable_network_isolation` <a name="reset_enable_network_isolation" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.resetEnableNetworkIsolation"></a>

```python
def reset_enable_network_isolation() -> None
```

##### `reset_vpc_config` <a name="reset_vpc_config" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.resetVpcConfig"></a>

```python
def reset_vpc_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference">SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryptionInput">enable_inter_container_traffic_encryption_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolationInput">enable_network_isolation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfigInput">vpc_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig">SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption">enable_inter_container_traffic_encryption</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation">enable_network_isolation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig">SagemakerModelQualityJobDefinitionNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfig"></a>

```python
vpc_config: SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference">SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference</a>

---

##### `enable_inter_container_traffic_encryption_input`<sup>Optional</sup> <a name="enable_inter_container_traffic_encryption_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryptionInput"></a>

```python
enable_inter_container_traffic_encryption_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_network_isolation_input`<sup>Optional</sup> <a name="enable_network_isolation_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolationInput"></a>

```python
enable_network_isolation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `vpc_config_input`<sup>Optional</sup> <a name="vpc_config_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfigInput"></a>

```python
vpc_config_input: IResolvable | SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig">SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig</a>

---

##### `enable_inter_container_traffic_encryption`<sup>Required</sup> <a name="enable_inter_container_traffic_encryption" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption"></a>

```python
enable_inter_container_traffic_encryption: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_network_isolation`<sup>Required</sup> <a name="enable_network_isolation" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation"></a>

```python
enable_network_isolation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelQualityJobDefinitionNetworkConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfig">SagemakerModelQualityJobDefinitionNetworkConfig</a>

---


### SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference <a name="SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resetSubnets">reset_subnets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnets` <a name="reset_subnets" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resetSubnets"></a>

```python
def reset_subnets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig">SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig">SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig</a>

---


### SagemakerModelQualityJobDefinitionStoppingConditionOutputReference <a name="SagemakerModelQualityJobDefinitionStoppingConditionOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.resetMaxRuntimeInSeconds">reset_max_runtime_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_runtime_in_seconds` <a name="reset_max_runtime_in_seconds" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.resetMaxRuntimeInSeconds"></a>

```python
def reset_max_runtime_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSecondsInput">max_runtime_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds">max_runtime_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition">SagemakerModelQualityJobDefinitionStoppingCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_runtime_in_seconds_input`<sup>Optional</sup> <a name="max_runtime_in_seconds_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSecondsInput"></a>

```python
max_runtime_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_runtime_in_seconds`<sup>Required</sup> <a name="max_runtime_in_seconds" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds"></a>

```python
max_runtime_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingConditionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelQualityJobDefinitionStoppingCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionStoppingCondition">SagemakerModelQualityJobDefinitionStoppingCondition</a>

---


### SagemakerModelQualityJobDefinitionTagsList <a name="SagemakerModelQualityJobDefinitionTagsList" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerModelQualityJobDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags">SagemakerModelQualityJobDefinitionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerModelQualityJobDefinitionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags">SagemakerModelQualityJobDefinitionTags</a>]

---


### SagemakerModelQualityJobDefinitionTagsOutputReference <a name="SagemakerModelQualityJobDefinitionTagsOutputReference" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model_quality_job_definition

sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags">SagemakerModelQualityJobDefinitionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelQualityJobDefinitionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModelQualityJobDefinition.SagemakerModelQualityJobDefinitionTags">SagemakerModelQualityJobDefinitionTags</a>

---



