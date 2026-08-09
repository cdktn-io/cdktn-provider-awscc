# `sagemakerDataQualityJobDefinition` Submodule <a name="`sagemakerDataQualityJobDefinition` Submodule" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerDataQualityJobDefinition <a name="SagemakerDataQualityJobDefinition" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition awscc_sagemaker_data_quality_job_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_quality_app_specification: SagemakerDataQualityJobDefinitionDataQualityAppSpecification,
  data_quality_job_input: SagemakerDataQualityJobDefinitionDataQualityJobInput,
  data_quality_job_output_config: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig,
  job_resources: SagemakerDataQualityJobDefinitionJobResources,
  role_arn: str,
  data_quality_baseline_config: SagemakerDataQualityJobDefinitionDataQualityBaselineConfig = None,
  endpoint_name: str = None,
  job_definition_name: str = None,
  network_config: SagemakerDataQualityJobDefinitionNetworkConfig = None,
  stopping_condition: SagemakerDataQualityJobDefinitionStoppingCondition = None,
  tags: IResolvable | typing.List[SagemakerDataQualityJobDefinitionTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.dataQualityAppSpecification">data_quality_app_specification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification">SagemakerDataQualityJobDefinitionDataQualityAppSpecification</a></code> | Container image configuration object for the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.dataQualityJobInput">data_quality_job_input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput">SagemakerDataQualityJobDefinitionDataQualityJobInput</a></code> | The inputs for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.dataQualityJobOutputConfig">data_quality_job_output_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig</a></code> | The output configuration for monitoring jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.jobResources">job_resources</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources">SagemakerDataQualityJobDefinitionJobResources</a></code> | Identifies the resources to deploy for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.dataQualityBaselineConfig">data_quality_baseline_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig">SagemakerDataQualityJobDefinitionDataQualityBaselineConfig</a></code> | Baseline configuration used to validate that the data conforms to the specified constraints and statistics. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.endpointName">endpoint_name</a></code> | <code>str</code> | The name of the endpoint used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.jobDefinitionName">job_definition_name</a></code> | <code>str</code> | The name of the job definition. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.networkConfig">network_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig">SagemakerDataQualityJobDefinitionNetworkConfig</a></code> | Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.stoppingCondition">stopping_condition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition">SagemakerDataQualityJobDefinitionStoppingCondition</a></code> | Specifies a time limit for how long the monitoring job is allowed to run. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags">SagemakerDataQualityJobDefinitionTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_quality_app_specification`<sup>Required</sup> <a name="data_quality_app_specification" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.dataQualityAppSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification">SagemakerDataQualityJobDefinitionDataQualityAppSpecification</a>

Container image configuration object for the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_app_specification SagemakerDataQualityJobDefinition#data_quality_app_specification}

---

##### `data_quality_job_input`<sup>Required</sup> <a name="data_quality_job_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.dataQualityJobInput"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput">SagemakerDataQualityJobDefinitionDataQualityJobInput</a>

The inputs for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_job_input SagemakerDataQualityJobDefinition#data_quality_job_input}

---

##### `data_quality_job_output_config`<sup>Required</sup> <a name="data_quality_job_output_config" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.dataQualityJobOutputConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig</a>

The output configuration for monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_job_output_config SagemakerDataQualityJobDefinition#data_quality_job_output_config}

---

##### `job_resources`<sup>Required</sup> <a name="job_resources" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.jobResources"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources">SagemakerDataQualityJobDefinitionJobResources</a>

Identifies the resources to deploy for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#job_resources SagemakerDataQualityJobDefinition#job_resources}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.roleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#role_arn SagemakerDataQualityJobDefinition#role_arn}

---

##### `data_quality_baseline_config`<sup>Optional</sup> <a name="data_quality_baseline_config" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.dataQualityBaselineConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig">SagemakerDataQualityJobDefinitionDataQualityBaselineConfig</a>

Baseline configuration used to validate that the data conforms to the specified constraints and statistics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_baseline_config SagemakerDataQualityJobDefinition#data_quality_baseline_config}

---

##### `endpoint_name`<sup>Optional</sup> <a name="endpoint_name" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.endpointName"></a>

- *Type:* str

The name of the endpoint used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#endpoint_name SagemakerDataQualityJobDefinition#endpoint_name}

---

##### `job_definition_name`<sup>Optional</sup> <a name="job_definition_name" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.jobDefinitionName"></a>

- *Type:* str

The name of the job definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#job_definition_name SagemakerDataQualityJobDefinition#job_definition_name}

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.networkConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig">SagemakerDataQualityJobDefinitionNetworkConfig</a>

Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#network_config SagemakerDataQualityJobDefinition#network_config}

---

##### `stopping_condition`<sup>Optional</sup> <a name="stopping_condition" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.stoppingCondition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition">SagemakerDataQualityJobDefinitionStoppingCondition</a>

Specifies a time limit for how long the monitoring job is allowed to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#stopping_condition SagemakerDataQualityJobDefinition#stopping_condition}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags">SagemakerDataQualityJobDefinitionTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#tags SagemakerDataQualityJobDefinition#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityAppSpecification">put_data_quality_app_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityBaselineConfig">put_data_quality_baseline_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityJobInput">put_data_quality_job_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityJobOutputConfig">put_data_quality_job_output_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putJobResources">put_job_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putNetworkConfig">put_network_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putStoppingCondition">put_stopping_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetDataQualityBaselineConfig">reset_data_quality_baseline_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetEndpointName">reset_endpoint_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetJobDefinitionName">reset_job_definition_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetNetworkConfig">reset_network_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetStoppingCondition">reset_stopping_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data_quality_app_specification` <a name="put_data_quality_app_specification" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityAppSpecification"></a>

```python
def put_data_quality_app_specification(
  image_uri: str,
  container_arguments: typing.List[str] = None,
  container_entrypoint: typing.List[str] = None,
  environment: typing.Mapping[str] = None,
  post_analytics_processor_source_uri: str = None,
  record_preprocessor_source_uri: str = None
) -> None
```

###### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityAppSpecification.parameter.imageUri"></a>

- *Type:* str

The container image to be run by the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#image_uri SagemakerDataQualityJobDefinition#image_uri}

---

###### `container_arguments`<sup>Optional</sup> <a name="container_arguments" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityAppSpecification.parameter.containerArguments"></a>

- *Type:* typing.List[str]

An array of arguments for the container used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#container_arguments SagemakerDataQualityJobDefinition#container_arguments}

---

###### `container_entrypoint`<sup>Optional</sup> <a name="container_entrypoint" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityAppSpecification.parameter.containerEntrypoint"></a>

- *Type:* typing.List[str]

Specifies the entrypoint for a container used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#container_entrypoint SagemakerDataQualityJobDefinition#container_entrypoint}

---

###### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityAppSpecification.parameter.environment"></a>

- *Type:* typing.Mapping[str]

Sets the environment variables in the Docker container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#environment SagemakerDataQualityJobDefinition#environment}

---

###### `post_analytics_processor_source_uri`<sup>Optional</sup> <a name="post_analytics_processor_source_uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityAppSpecification.parameter.postAnalyticsProcessorSourceUri"></a>

- *Type:* str

An Amazon S3 URI to a script that is called after analysis has been performed.

Applicable only for the built-in (first party) containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#post_analytics_processor_source_uri SagemakerDataQualityJobDefinition#post_analytics_processor_source_uri}

---

###### `record_preprocessor_source_uri`<sup>Optional</sup> <a name="record_preprocessor_source_uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityAppSpecification.parameter.recordPreprocessorSourceUri"></a>

- *Type:* str

An Amazon S3 URI to a script that is called per row prior to running analysis.

It can base64 decode the payload and convert it into a flatted json so that the built-in container can use the converted data. Applicable only for the built-in (first party) containers

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#record_preprocessor_source_uri SagemakerDataQualityJobDefinition#record_preprocessor_source_uri}

---

##### `put_data_quality_baseline_config` <a name="put_data_quality_baseline_config" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityBaselineConfig"></a>

```python
def put_data_quality_baseline_config(
  baselining_job_name: str = None,
  constraints_resource: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource = None,
  statistics_resource: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource = None
) -> None
```

###### `baselining_job_name`<sup>Optional</sup> <a name="baselining_job_name" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityBaselineConfig.parameter.baseliningJobName"></a>

- *Type:* str

The name of a processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#baselining_job_name SagemakerDataQualityJobDefinition#baselining_job_name}

---

###### `constraints_resource`<sup>Optional</sup> <a name="constraints_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityBaselineConfig.parameter.constraintsResource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource</a>

The baseline constraints resource for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#constraints_resource SagemakerDataQualityJobDefinition#constraints_resource}

---

###### `statistics_resource`<sup>Optional</sup> <a name="statistics_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityBaselineConfig.parameter.statisticsResource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource</a>

The baseline statistics resource for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#statistics_resource SagemakerDataQualityJobDefinition#statistics_resource}

---

##### `put_data_quality_job_input` <a name="put_data_quality_job_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityJobInput"></a>

```python
def put_data_quality_job_input(
  batch_transform_input: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput = None,
  endpoint_input: SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput = None
) -> None
```

###### `batch_transform_input`<sup>Optional</sup> <a name="batch_transform_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityJobInput.parameter.batchTransformInput"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput</a>

The batch transform input for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#batch_transform_input SagemakerDataQualityJobDefinition#batch_transform_input}

---

###### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityJobInput.parameter.endpointInput"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput</a>

The endpoint for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#endpoint_input SagemakerDataQualityJobDefinition#endpoint_input}

---

##### `put_data_quality_job_output_config` <a name="put_data_quality_job_output_config" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityJobOutputConfig"></a>

```python
def put_data_quality_job_output_config(
  monitoring_outputs: IResolvable | typing.List[SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs],
  kms_key_id: str = None
) -> None
```

###### `monitoring_outputs`<sup>Required</sup> <a name="monitoring_outputs" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityJobOutputConfig.parameter.monitoringOutputs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs</a>]

Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#monitoring_outputs SagemakerDataQualityJobDefinition#monitoring_outputs}

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityJobOutputConfig.parameter.kmsKeyId"></a>

- *Type:* str

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#kms_key_id SagemakerDataQualityJobDefinition#kms_key_id}

---

##### `put_job_resources` <a name="put_job_resources" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putJobResources"></a>

```python
def put_job_resources(
  cluster_config: SagemakerDataQualityJobDefinitionJobResourcesClusterConfig
) -> None
```

###### `cluster_config`<sup>Required</sup> <a name="cluster_config" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putJobResources.parameter.clusterConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig">SagemakerDataQualityJobDefinitionJobResourcesClusterConfig</a>

Configuration for the cluster used to run model monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#cluster_config SagemakerDataQualityJobDefinition#cluster_config}

---

##### `put_network_config` <a name="put_network_config" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putNetworkConfig"></a>

```python
def put_network_config(
  enable_inter_container_traffic_encryption: bool | IResolvable = None,
  enable_network_isolation: bool | IResolvable = None,
  vpc_config: SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig = None
) -> None
```

###### `enable_inter_container_traffic_encryption`<sup>Optional</sup> <a name="enable_inter_container_traffic_encryption" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putNetworkConfig.parameter.enableInterContainerTrafficEncryption"></a>

- *Type:* bool | cdktn.IResolvable

Whether to encrypt all communications between distributed processing jobs.

Choose True to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#enable_inter_container_traffic_encryption SagemakerDataQualityJobDefinition#enable_inter_container_traffic_encryption}

---

###### `enable_network_isolation`<sup>Optional</sup> <a name="enable_network_isolation" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putNetworkConfig.parameter.enableNetworkIsolation"></a>

- *Type:* bool | cdktn.IResolvable

Whether to allow inbound and outbound network calls to and from the containers used for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#enable_network_isolation SagemakerDataQualityJobDefinition#enable_network_isolation}

---

###### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putNetworkConfig.parameter.vpcConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig</a>

Specifies a VPC that your training jobs and hosted models have access to.

Control access to and from your training and model containers by configuring the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#vpc_config SagemakerDataQualityJobDefinition#vpc_config}

---

##### `put_stopping_condition` <a name="put_stopping_condition" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putStoppingCondition"></a>

```python
def put_stopping_condition(
  max_runtime_in_seconds: typing.Union[int, float] = None
) -> None
```

###### `max_runtime_in_seconds`<sup>Optional</sup> <a name="max_runtime_in_seconds" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putStoppingCondition.parameter.maxRuntimeInSeconds"></a>

- *Type:* typing.Union[int, float]

The maximum runtime allowed in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#max_runtime_in_seconds SagemakerDataQualityJobDefinition#max_runtime_in_seconds}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SagemakerDataQualityJobDefinitionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags">SagemakerDataQualityJobDefinitionTags</a>]

---

##### `reset_data_quality_baseline_config` <a name="reset_data_quality_baseline_config" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetDataQualityBaselineConfig"></a>

```python
def reset_data_quality_baseline_config() -> None
```

##### `reset_endpoint_name` <a name="reset_endpoint_name" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetEndpointName"></a>

```python
def reset_endpoint_name() -> None
```

##### `reset_job_definition_name` <a name="reset_job_definition_name" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetJobDefinitionName"></a>

```python
def reset_job_definition_name() -> None
```

##### `reset_network_config` <a name="reset_network_config" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetNetworkConfig"></a>

```python
def reset_network_config() -> None
```

##### `reset_stopping_condition` <a name="reset_stopping_condition" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetStoppingCondition"></a>

```python
def reset_stopping_condition() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SagemakerDataQualityJobDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isConstruct"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isTerraformElement"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isTerraformResource"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SagemakerDataQualityJobDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerDataQualityJobDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerDataQualityJobDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerDataQualityJobDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityAppSpecification">data_quality_app_specification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference">SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityBaselineConfig">data_quality_baseline_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobInput">data_quality_job_input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobOutputConfig">data_quality_job_output_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobDefinitionArn">job_definition_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobResources">job_resources</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference">SagemakerDataQualityJobDefinitionJobResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.networkConfig">network_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference">SagemakerDataQualityJobDefinitionNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.stoppingCondition">stopping_condition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference">SagemakerDataQualityJobDefinitionStoppingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList">SagemakerDataQualityJobDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityAppSpecificationInput">data_quality_app_specification_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification">SagemakerDataQualityJobDefinitionDataQualityAppSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityBaselineConfigInput">data_quality_baseline_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig">SagemakerDataQualityJobDefinitionDataQualityBaselineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobInputInput">data_quality_job_input_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput">SagemakerDataQualityJobDefinitionDataQualityJobInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobOutputConfigInput">data_quality_job_output_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.endpointNameInput">endpoint_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobDefinitionNameInput">job_definition_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobResourcesInput">job_resources_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources">SagemakerDataQualityJobDefinitionJobResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.networkConfigInput">network_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig">SagemakerDataQualityJobDefinitionNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.stoppingConditionInput">stopping_condition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition">SagemakerDataQualityJobDefinitionStoppingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags">SagemakerDataQualityJobDefinitionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.endpointName">endpoint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobDefinitionName">job_definition_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `data_quality_app_specification`<sup>Required</sup> <a name="data_quality_app_specification" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityAppSpecification"></a>

```python
data_quality_app_specification: SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference">SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference</a>

---

##### `data_quality_baseline_config`<sup>Required</sup> <a name="data_quality_baseline_config" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityBaselineConfig"></a>

```python
data_quality_baseline_config: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference</a>

---

##### `data_quality_job_input`<sup>Required</sup> <a name="data_quality_job_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobInput"></a>

```python
data_quality_job_input: SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference</a>

---

##### `data_quality_job_output_config`<sup>Required</sup> <a name="data_quality_job_output_config" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobOutputConfig"></a>

```python
data_quality_job_output_config: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `job_definition_arn`<sup>Required</sup> <a name="job_definition_arn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobDefinitionArn"></a>

```python
job_definition_arn: str
```

- *Type:* str

---

##### `job_resources`<sup>Required</sup> <a name="job_resources" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobResources"></a>

```python
job_resources: SagemakerDataQualityJobDefinitionJobResourcesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference">SagemakerDataQualityJobDefinitionJobResourcesOutputReference</a>

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.networkConfig"></a>

```python
network_config: SagemakerDataQualityJobDefinitionNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference">SagemakerDataQualityJobDefinitionNetworkConfigOutputReference</a>

---

##### `stopping_condition`<sup>Required</sup> <a name="stopping_condition" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.stoppingCondition"></a>

```python
stopping_condition: SagemakerDataQualityJobDefinitionStoppingConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference">SagemakerDataQualityJobDefinitionStoppingConditionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.tags"></a>

```python
tags: SagemakerDataQualityJobDefinitionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList">SagemakerDataQualityJobDefinitionTagsList</a>

---

##### `data_quality_app_specification_input`<sup>Optional</sup> <a name="data_quality_app_specification_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityAppSpecificationInput"></a>

```python
data_quality_app_specification_input: IResolvable | SagemakerDataQualityJobDefinitionDataQualityAppSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification">SagemakerDataQualityJobDefinitionDataQualityAppSpecification</a>

---

##### `data_quality_baseline_config_input`<sup>Optional</sup> <a name="data_quality_baseline_config_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityBaselineConfigInput"></a>

```python
data_quality_baseline_config_input: IResolvable | SagemakerDataQualityJobDefinitionDataQualityBaselineConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig">SagemakerDataQualityJobDefinitionDataQualityBaselineConfig</a>

---

##### `data_quality_job_input_input`<sup>Optional</sup> <a name="data_quality_job_input_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobInputInput"></a>

```python
data_quality_job_input_input: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput">SagemakerDataQualityJobDefinitionDataQualityJobInput</a>

---

##### `data_quality_job_output_config_input`<sup>Optional</sup> <a name="data_quality_job_output_config_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobOutputConfigInput"></a>

```python
data_quality_job_output_config_input: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig</a>

---

##### `endpoint_name_input`<sup>Optional</sup> <a name="endpoint_name_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.endpointNameInput"></a>

```python
endpoint_name_input: str
```

- *Type:* str

---

##### `job_definition_name_input`<sup>Optional</sup> <a name="job_definition_name_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobDefinitionNameInput"></a>

```python
job_definition_name_input: str
```

- *Type:* str

---

##### `job_resources_input`<sup>Optional</sup> <a name="job_resources_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobResourcesInput"></a>

```python
job_resources_input: IResolvable | SagemakerDataQualityJobDefinitionJobResources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources">SagemakerDataQualityJobDefinitionJobResources</a>

---

##### `network_config_input`<sup>Optional</sup> <a name="network_config_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.networkConfigInput"></a>

```python
network_config_input: IResolvable | SagemakerDataQualityJobDefinitionNetworkConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig">SagemakerDataQualityJobDefinitionNetworkConfig</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `stopping_condition_input`<sup>Optional</sup> <a name="stopping_condition_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.stoppingConditionInput"></a>

```python
stopping_condition_input: IResolvable | SagemakerDataQualityJobDefinitionStoppingCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition">SagemakerDataQualityJobDefinitionStoppingCondition</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SagemakerDataQualityJobDefinitionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags">SagemakerDataQualityJobDefinitionTags</a>]

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

---

##### `job_definition_name`<sup>Required</sup> <a name="job_definition_name" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobDefinitionName"></a>

```python
job_definition_name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerDataQualityJobDefinitionConfig <a name="SagemakerDataQualityJobDefinitionConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_quality_app_specification: SagemakerDataQualityJobDefinitionDataQualityAppSpecification,
  data_quality_job_input: SagemakerDataQualityJobDefinitionDataQualityJobInput,
  data_quality_job_output_config: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig,
  job_resources: SagemakerDataQualityJobDefinitionJobResources,
  role_arn: str,
  data_quality_baseline_config: SagemakerDataQualityJobDefinitionDataQualityBaselineConfig = None,
  endpoint_name: str = None,
  job_definition_name: str = None,
  network_config: SagemakerDataQualityJobDefinitionNetworkConfig = None,
  stopping_condition: SagemakerDataQualityJobDefinitionStoppingCondition = None,
  tags: IResolvable | typing.List[SagemakerDataQualityJobDefinitionTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityAppSpecification">data_quality_app_specification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification">SagemakerDataQualityJobDefinitionDataQualityAppSpecification</a></code> | Container image configuration object for the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityJobInput">data_quality_job_input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput">SagemakerDataQualityJobDefinitionDataQualityJobInput</a></code> | The inputs for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityJobOutputConfig">data_quality_job_output_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig</a></code> | The output configuration for monitoring jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.jobResources">job_resources</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources">SagemakerDataQualityJobDefinitionJobResources</a></code> | Identifies the resources to deploy for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityBaselineConfig">data_quality_baseline_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig">SagemakerDataQualityJobDefinitionDataQualityBaselineConfig</a></code> | Baseline configuration used to validate that the data conforms to the specified constraints and statistics. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.endpointName">endpoint_name</a></code> | <code>str</code> | The name of the endpoint used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.jobDefinitionName">job_definition_name</a></code> | <code>str</code> | The name of the job definition. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.networkConfig">network_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig">SagemakerDataQualityJobDefinitionNetworkConfig</a></code> | Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.stoppingCondition">stopping_condition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition">SagemakerDataQualityJobDefinitionStoppingCondition</a></code> | Specifies a time limit for how long the monitoring job is allowed to run. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags">SagemakerDataQualityJobDefinitionTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_quality_app_specification`<sup>Required</sup> <a name="data_quality_app_specification" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityAppSpecification"></a>

```python
data_quality_app_specification: SagemakerDataQualityJobDefinitionDataQualityAppSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification">SagemakerDataQualityJobDefinitionDataQualityAppSpecification</a>

Container image configuration object for the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_app_specification SagemakerDataQualityJobDefinition#data_quality_app_specification}

---

##### `data_quality_job_input`<sup>Required</sup> <a name="data_quality_job_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityJobInput"></a>

```python
data_quality_job_input: SagemakerDataQualityJobDefinitionDataQualityJobInput
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput">SagemakerDataQualityJobDefinitionDataQualityJobInput</a>

The inputs for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_job_input SagemakerDataQualityJobDefinition#data_quality_job_input}

---

##### `data_quality_job_output_config`<sup>Required</sup> <a name="data_quality_job_output_config" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityJobOutputConfig"></a>

```python
data_quality_job_output_config: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig</a>

The output configuration for monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_job_output_config SagemakerDataQualityJobDefinition#data_quality_job_output_config}

---

##### `job_resources`<sup>Required</sup> <a name="job_resources" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.jobResources"></a>

```python
job_resources: SagemakerDataQualityJobDefinitionJobResources
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources">SagemakerDataQualityJobDefinitionJobResources</a>

Identifies the resources to deploy for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#job_resources SagemakerDataQualityJobDefinition#job_resources}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#role_arn SagemakerDataQualityJobDefinition#role_arn}

---

##### `data_quality_baseline_config`<sup>Optional</sup> <a name="data_quality_baseline_config" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityBaselineConfig"></a>

```python
data_quality_baseline_config: SagemakerDataQualityJobDefinitionDataQualityBaselineConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig">SagemakerDataQualityJobDefinitionDataQualityBaselineConfig</a>

Baseline configuration used to validate that the data conforms to the specified constraints and statistics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_baseline_config SagemakerDataQualityJobDefinition#data_quality_baseline_config}

---

##### `endpoint_name`<sup>Optional</sup> <a name="endpoint_name" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

The name of the endpoint used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#endpoint_name SagemakerDataQualityJobDefinition#endpoint_name}

---

##### `job_definition_name`<sup>Optional</sup> <a name="job_definition_name" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.jobDefinitionName"></a>

```python
job_definition_name: str
```

- *Type:* str

The name of the job definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#job_definition_name SagemakerDataQualityJobDefinition#job_definition_name}

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.networkConfig"></a>

```python
network_config: SagemakerDataQualityJobDefinitionNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig">SagemakerDataQualityJobDefinitionNetworkConfig</a>

Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#network_config SagemakerDataQualityJobDefinition#network_config}

---

##### `stopping_condition`<sup>Optional</sup> <a name="stopping_condition" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.stoppingCondition"></a>

```python
stopping_condition: SagemakerDataQualityJobDefinitionStoppingCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition">SagemakerDataQualityJobDefinitionStoppingCondition</a>

Specifies a time limit for how long the monitoring job is allowed to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#stopping_condition SagemakerDataQualityJobDefinition#stopping_condition}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SagemakerDataQualityJobDefinitionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags">SagemakerDataQualityJobDefinitionTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#tags SagemakerDataQualityJobDefinition#tags}

---

### SagemakerDataQualityJobDefinitionDataQualityAppSpecification <a name="SagemakerDataQualityJobDefinitionDataQualityAppSpecification" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification(
  image_uri: str,
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
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.imageUri">image_uri</a></code> | <code>str</code> | The container image to be run by the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.containerArguments">container_arguments</a></code> | <code>typing.List[str]</code> | An array of arguments for the container used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.containerEntrypoint">container_entrypoint</a></code> | <code>typing.List[str]</code> | Specifies the entrypoint for a container used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.environment">environment</a></code> | <code>typing.Mapping[str]</code> | Sets the environment variables in the Docker container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.postAnalyticsProcessorSourceUri">post_analytics_processor_source_uri</a></code> | <code>str</code> | An Amazon S3 URI to a script that is called after analysis has been performed. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.recordPreprocessorSourceUri">record_preprocessor_source_uri</a></code> | <code>str</code> | An Amazon S3 URI to a script that is called per row prior to running analysis. |

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

The container image to be run by the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#image_uri SagemakerDataQualityJobDefinition#image_uri}

---

##### `container_arguments`<sup>Optional</sup> <a name="container_arguments" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.containerArguments"></a>

```python
container_arguments: typing.List[str]
```

- *Type:* typing.List[str]

An array of arguments for the container used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#container_arguments SagemakerDataQualityJobDefinition#container_arguments}

---

##### `container_entrypoint`<sup>Optional</sup> <a name="container_entrypoint" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.containerEntrypoint"></a>

```python
container_entrypoint: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the entrypoint for a container used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#container_entrypoint SagemakerDataQualityJobDefinition#container_entrypoint}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.environment"></a>

```python
environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Sets the environment variables in the Docker container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#environment SagemakerDataQualityJobDefinition#environment}

---

##### `post_analytics_processor_source_uri`<sup>Optional</sup> <a name="post_analytics_processor_source_uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.postAnalyticsProcessorSourceUri"></a>

```python
post_analytics_processor_source_uri: str
```

- *Type:* str

An Amazon S3 URI to a script that is called after analysis has been performed.

Applicable only for the built-in (first party) containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#post_analytics_processor_source_uri SagemakerDataQualityJobDefinition#post_analytics_processor_source_uri}

---

##### `record_preprocessor_source_uri`<sup>Optional</sup> <a name="record_preprocessor_source_uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.recordPreprocessorSourceUri"></a>

```python
record_preprocessor_source_uri: str
```

- *Type:* str

An Amazon S3 URI to a script that is called per row prior to running analysis.

It can base64 decode the payload and convert it into a flatted json so that the built-in container can use the converted data. Applicable only for the built-in (first party) containers

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#record_preprocessor_source_uri SagemakerDataQualityJobDefinition#record_preprocessor_source_uri}

---

### SagemakerDataQualityJobDefinitionDataQualityBaselineConfig <a name="SagemakerDataQualityJobDefinitionDataQualityBaselineConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig(
  baselining_job_name: str = None,
  constraints_resource: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource = None,
  statistics_resource: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig.property.baseliningJobName">baselining_job_name</a></code> | <code>str</code> | The name of a processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig.property.constraintsResource">constraints_resource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource</a></code> | The baseline constraints resource for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig.property.statisticsResource">statistics_resource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource</a></code> | The baseline statistics resource for a monitoring job. |

---

##### `baselining_job_name`<sup>Optional</sup> <a name="baselining_job_name" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig.property.baseliningJobName"></a>

```python
baselining_job_name: str
```

- *Type:* str

The name of a processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#baselining_job_name SagemakerDataQualityJobDefinition#baselining_job_name}

---

##### `constraints_resource`<sup>Optional</sup> <a name="constraints_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig.property.constraintsResource"></a>

```python
constraints_resource: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource</a>

The baseline constraints resource for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#constraints_resource SagemakerDataQualityJobDefinition#constraints_resource}

---

##### `statistics_resource`<sup>Optional</sup> <a name="statistics_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig.property.statisticsResource"></a>

```python
statistics_resource: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource</a>

The baseline statistics resource for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#statistics_resource SagemakerDataQualityJobDefinition#statistics_resource}

---

### SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource <a name="SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource(
  s3_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource.property.s3Uri">s3_uri</a></code> | <code>str</code> | The Amazon S3 URI for baseline constraint file in Amazon S3 that the current monitoring job should validated against. |

---

##### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

The Amazon S3 URI for baseline constraint file in Amazon S3 that the current monitoring job should validated against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#s3_uri SagemakerDataQualityJobDefinition#s3_uri}

---

### SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource <a name="SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource(
  s3_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource.property.s3Uri">s3_uri</a></code> | <code>str</code> | The Amazon S3 URI for the baseline statistics file in Amazon S3 that the current monitoring job should be validated against. |

---

##### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

The Amazon S3 URI for the baseline statistics file in Amazon S3 that the current monitoring job should be validated against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#s3_uri SagemakerDataQualityJobDefinition#s3_uri}

---

### SagemakerDataQualityJobDefinitionDataQualityJobInput <a name="SagemakerDataQualityJobDefinitionDataQualityJobInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput(
  batch_transform_input: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput = None,
  endpoint_input: SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput.property.batchTransformInput">batch_transform_input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput</a></code> | The batch transform input for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput.property.endpointInput">endpoint_input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput</a></code> | The endpoint for a monitoring job. |

---

##### `batch_transform_input`<sup>Optional</sup> <a name="batch_transform_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput.property.batchTransformInput"></a>

```python
batch_transform_input: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput</a>

The batch transform input for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#batch_transform_input SagemakerDataQualityJobDefinition#batch_transform_input}

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput.property.endpointInput"></a>

```python
endpoint_input: SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput</a>

The endpoint for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#endpoint_input SagemakerDataQualityJobDefinition#endpoint_input}

---

### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput(
  data_captured_destination_s3_uri: str = None,
  dataset_format: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat = None,
  exclude_features_attribute: str = None,
  local_path: str = None,
  s3_data_distribution_type: str = None,
  s3_input_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.dataCapturedDestinationS3Uri">data_captured_destination_s3_uri</a></code> | <code>str</code> | A URI that identifies the Amazon S3 storage location where Batch Transform Job captures data. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.datasetFormat">dataset_format</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat</a></code> | The dataset format of the data to monitor. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.excludeFeaturesAttribute">exclude_features_attribute</a></code> | <code>str</code> | Indexes or names of the features to be excluded from analysis. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.localPath">local_path</a></code> | <code>str</code> | Path to the filesystem where the endpoint data is available to the container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.s3DataDistributionType">s3_data_distribution_type</a></code> | <code>str</code> | Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.s3InputMode">s3_input_mode</a></code> | <code>str</code> | Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. |

---

##### `data_captured_destination_s3_uri`<sup>Optional</sup> <a name="data_captured_destination_s3_uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.dataCapturedDestinationS3Uri"></a>

```python
data_captured_destination_s3_uri: str
```

- *Type:* str

A URI that identifies the Amazon S3 storage location where Batch Transform Job captures data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#data_captured_destination_s3_uri SagemakerDataQualityJobDefinition#data_captured_destination_s3_uri}

---

##### `dataset_format`<sup>Optional</sup> <a name="dataset_format" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.datasetFormat"></a>

```python
dataset_format: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat</a>

The dataset format of the data to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#dataset_format SagemakerDataQualityJobDefinition#dataset_format}

---

##### `exclude_features_attribute`<sup>Optional</sup> <a name="exclude_features_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.excludeFeaturesAttribute"></a>

```python
exclude_features_attribute: str
```

- *Type:* str

Indexes or names of the features to be excluded from analysis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#exclude_features_attribute SagemakerDataQualityJobDefinition#exclude_features_attribute}

---

##### `local_path`<sup>Optional</sup> <a name="local_path" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

Path to the filesystem where the endpoint data is available to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#local_path SagemakerDataQualityJobDefinition#local_path}

---

##### `s3_data_distribution_type`<sup>Optional</sup> <a name="s3_data_distribution_type" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.s3DataDistributionType"></a>

```python
s3_data_distribution_type: str
```

- *Type:* str

Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#s3_data_distribution_type SagemakerDataQualityJobDefinition#s3_data_distribution_type}

---

##### `s3_input_mode`<sup>Optional</sup> <a name="s3_input_mode" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.s3InputMode"></a>

```python
s3_input_mode: str
```

- *Type:* str

Whether the Pipe or File is used as the input mode for transfering data for the monitoring job.

Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#s3_input_mode SagemakerDataQualityJobDefinition#s3_input_mode}

---

### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat(
  csv: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv = None,
  json: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson = None,
  parquet: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv</a></code> | The CSV format. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat.property.json">json</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson</a></code> | The Json format. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat.property.parquet">parquet</a></code> | <code>bool \| cdktn.IResolvable</code> | A flag indicate if the dataset format is Parquet. |

---

##### `csv`<sup>Optional</sup> <a name="csv" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat.property.csv"></a>

```python
csv: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv</a>

The CSV format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#csv SagemakerDataQualityJobDefinition#csv}

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat.property.json"></a>

```python
json: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson</a>

The Json format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#json SagemakerDataQualityJobDefinition#json}

---

##### `parquet`<sup>Optional</sup> <a name="parquet" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat.property.parquet"></a>

```python
parquet: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A flag indicate if the dataset format is Parquet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#parquet SagemakerDataQualityJobDefinition#parquet}

---

### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv(
  header: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv.property.header">header</a></code> | <code>bool \| cdktn.IResolvable</code> | A boolean flag indicating if given CSV has header. |

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv.property.header"></a>

```python
header: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A boolean flag indicating if given CSV has header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#header SagemakerDataQualityJobDefinition#header}

---

### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson(
  line: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson.property.line">line</a></code> | <code>bool \| cdktn.IResolvable</code> | A boolean flag indicating if it is JSON line format. |

---

##### `line`<sup>Optional</sup> <a name="line" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson.property.line"></a>

```python
line: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A boolean flag indicating if it is JSON line format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#line SagemakerDataQualityJobDefinition#line}

---

### SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput(
  endpoint_name: str = None,
  exclude_features_attribute: str = None,
  local_path: str = None,
  s3_data_distribution_type: str = None,
  s3_input_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.endpointName">endpoint_name</a></code> | <code>str</code> | The name of the endpoint used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.excludeFeaturesAttribute">exclude_features_attribute</a></code> | <code>str</code> | Indexes or names of the features to be excluded from analysis. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.localPath">local_path</a></code> | <code>str</code> | Path to the filesystem where the endpoint data is available to the container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.s3DataDistributionType">s3_data_distribution_type</a></code> | <code>str</code> | Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.s3InputMode">s3_input_mode</a></code> | <code>str</code> | Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. |

---

##### `endpoint_name`<sup>Optional</sup> <a name="endpoint_name" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

The name of the endpoint used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#endpoint_name SagemakerDataQualityJobDefinition#endpoint_name}

---

##### `exclude_features_attribute`<sup>Optional</sup> <a name="exclude_features_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.excludeFeaturesAttribute"></a>

```python
exclude_features_attribute: str
```

- *Type:* str

Indexes or names of the features to be excluded from analysis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#exclude_features_attribute SagemakerDataQualityJobDefinition#exclude_features_attribute}

---

##### `local_path`<sup>Optional</sup> <a name="local_path" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

Path to the filesystem where the endpoint data is available to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#local_path SagemakerDataQualityJobDefinition#local_path}

---

##### `s3_data_distribution_type`<sup>Optional</sup> <a name="s3_data_distribution_type" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.s3DataDistributionType"></a>

```python
s3_data_distribution_type: str
```

- *Type:* str

Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#s3_data_distribution_type SagemakerDataQualityJobDefinition#s3_data_distribution_type}

---

##### `s3_input_mode`<sup>Optional</sup> <a name="s3_input_mode" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.s3InputMode"></a>

```python
s3_input_mode: str
```

- *Type:* str

Whether the Pipe or File is used as the input mode for transfering data for the monitoring job.

Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#s3_input_mode SagemakerDataQualityJobDefinition#s3_input_mode}

---

### SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig <a name="SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig(
  monitoring_outputs: IResolvable | typing.List[SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs],
  kms_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig.property.monitoringOutputs">monitoring_outputs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs</a>]</code> | Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption. |

---

##### `monitoring_outputs`<sup>Required</sup> <a name="monitoring_outputs" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig.property.monitoringOutputs"></a>

```python
monitoring_outputs: IResolvable | typing.List[SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs</a>]

Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#monitoring_outputs SagemakerDataQualityJobDefinition#monitoring_outputs}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#kms_key_id SagemakerDataQualityJobDefinition#kms_key_id}

---

### SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs <a name="SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs(
  s3_output: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs.property.s3Output">s3_output</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output</a></code> | Information about where and how to store the results of a monitoring job. |

---

##### `s3_output`<sup>Required</sup> <a name="s3_output" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs.property.s3Output"></a>

```python
s3_output: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output</a>

Information about where and how to store the results of a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#s3_output SagemakerDataQualityJobDefinition#s3_output}

---

### SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output <a name="SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output(
  local_path: str,
  s3_uri: str,
  s3_upload_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output.property.localPath">local_path</a></code> | <code>str</code> | The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output.property.s3Uri">s3_uri</a></code> | <code>str</code> | A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output.property.s3UploadMode">s3_upload_mode</a></code> | <code>str</code> | Whether to upload the results of the monitoring job continuously or after the job completes. |

---

##### `local_path`<sup>Required</sup> <a name="local_path" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.

LocalPath is an absolute path for the output data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#local_path SagemakerDataQualityJobDefinition#local_path}

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#s3_uri SagemakerDataQualityJobDefinition#s3_uri}

---

##### `s3_upload_mode`<sup>Optional</sup> <a name="s3_upload_mode" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output.property.s3UploadMode"></a>

```python
s3_upload_mode: str
```

- *Type:* str

Whether to upload the results of the monitoring job continuously or after the job completes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#s3_upload_mode SagemakerDataQualityJobDefinition#s3_upload_mode}

---

### SagemakerDataQualityJobDefinitionJobResources <a name="SagemakerDataQualityJobDefinitionJobResources" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources(
  cluster_config: SagemakerDataQualityJobDefinitionJobResourcesClusterConfig
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources.property.clusterConfig">cluster_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig">SagemakerDataQualityJobDefinitionJobResourcesClusterConfig</a></code> | Configuration for the cluster used to run model monitoring jobs. |

---

##### `cluster_config`<sup>Required</sup> <a name="cluster_config" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources.property.clusterConfig"></a>

```python
cluster_config: SagemakerDataQualityJobDefinitionJobResourcesClusterConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig">SagemakerDataQualityJobDefinitionJobResourcesClusterConfig</a>

Configuration for the cluster used to run model monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#cluster_config SagemakerDataQualityJobDefinition#cluster_config}

---

### SagemakerDataQualityJobDefinitionJobResourcesClusterConfig <a name="SagemakerDataQualityJobDefinitionJobResourcesClusterConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig(
  instance_count: typing.Union[int, float],
  instance_type: str,
  volume_size_in_gb: typing.Union[int, float],
  volume_kms_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | The number of ML compute instances to use in the model monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.instanceType">instance_type</a></code> | <code>str</code> | The ML compute instance type for the processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.volumeSizeInGb">volume_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | The size of the ML storage volume, in gigabytes, that you want to provision. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.volumeKmsKeyId">volume_kms_key_id</a></code> | <code>str</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job. |

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of ML compute instances to use in the model monitoring job.

For distributed processing jobs, specify a value greater than 1. The default value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#instance_count SagemakerDataQualityJobDefinition#instance_count}

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

The ML compute instance type for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#instance_type SagemakerDataQualityJobDefinition#instance_type}

---

##### `volume_size_in_gb`<sup>Required</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.volumeSizeInGb"></a>

```python
volume_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size of the ML storage volume, in gigabytes, that you want to provision.

You must specify sufficient ML storage for your scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#volume_size_in_gb SagemakerDataQualityJobDefinition#volume_size_in_gb}

---

##### `volume_kms_key_id`<sup>Optional</sup> <a name="volume_kms_key_id" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.volumeKmsKeyId"></a>

```python
volume_kms_key_id: str
```

- *Type:* str

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#volume_kms_key_id SagemakerDataQualityJobDefinition#volume_kms_key_id}

---

### SagemakerDataQualityJobDefinitionNetworkConfig <a name="SagemakerDataQualityJobDefinitionNetworkConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig(
  enable_inter_container_traffic_encryption: bool | IResolvable = None,
  enable_network_isolation: bool | IResolvable = None,
  vpc_config: SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig.property.enableInterContainerTrafficEncryption">enable_inter_container_traffic_encryption</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to encrypt all communications between distributed processing jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig.property.enableNetworkIsolation">enable_network_isolation</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to allow inbound and outbound network calls to and from the containers used for the processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig</a></code> | Specifies a VPC that your training jobs and hosted models have access to. |

---

##### `enable_inter_container_traffic_encryption`<sup>Optional</sup> <a name="enable_inter_container_traffic_encryption" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig.property.enableInterContainerTrafficEncryption"></a>

```python
enable_inter_container_traffic_encryption: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to encrypt all communications between distributed processing jobs.

Choose True to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#enable_inter_container_traffic_encryption SagemakerDataQualityJobDefinition#enable_inter_container_traffic_encryption}

---

##### `enable_network_isolation`<sup>Optional</sup> <a name="enable_network_isolation" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig.property.enableNetworkIsolation"></a>

```python
enable_network_isolation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to allow inbound and outbound network calls to and from the containers used for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#enable_network_isolation SagemakerDataQualityJobDefinition#enable_network_isolation}

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig.property.vpcConfig"></a>

```python
vpc_config: SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig</a>

Specifies a VPC that your training jobs and hosted models have access to.

Control access to and from your training and model containers by configuring the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#vpc_config SagemakerDataQualityJobDefinition#vpc_config}

---

### SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig <a name="SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig(
  security_group_ids: typing.List[str] = None,
  subnets: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The VPC security group IDs, in the form sg-xxxxxxxx. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | The ID of the subnets in the VPC to which you want to connect to your monitoring jobs. |

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

The VPC security group IDs, in the form sg-xxxxxxxx.

Specify the security groups for the VPC that is specified in the Subnets field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#security_group_ids SagemakerDataQualityJobDefinition#security_group_ids}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

The ID of the subnets in the VPC to which you want to connect to your monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#subnets SagemakerDataQualityJobDefinition#subnets}

---

### SagemakerDataQualityJobDefinitionStoppingCondition <a name="SagemakerDataQualityJobDefinitionStoppingCondition" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition(
  max_runtime_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition.property.maxRuntimeInSeconds">max_runtime_in_seconds</a></code> | <code>typing.Union[int, float]</code> | The maximum runtime allowed in seconds. |

---

##### `max_runtime_in_seconds`<sup>Optional</sup> <a name="max_runtime_in_seconds" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition.property.maxRuntimeInSeconds"></a>

```python
max_runtime_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum runtime allowed in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#max_runtime_in_seconds SagemakerDataQualityJobDefinition#max_runtime_in_seconds}

---

### SagemakerDataQualityJobDefinitionTags <a name="SagemakerDataQualityJobDefinitionTags" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#key SagemakerDataQualityJobDefinition#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#value SagemakerDataQualityJobDefinition#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetContainerArguments">reset_container_arguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetContainerEntrypoint">reset_container_entrypoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetPostAnalyticsProcessorSourceUri">reset_post_analytics_processor_source_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetRecordPreprocessorSourceUri">reset_record_preprocessor_source_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_container_arguments` <a name="reset_container_arguments" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetContainerArguments"></a>

```python
def reset_container_arguments() -> None
```

##### `reset_container_entrypoint` <a name="reset_container_entrypoint" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetContainerEntrypoint"></a>

```python
def reset_container_entrypoint() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_post_analytics_processor_source_uri` <a name="reset_post_analytics_processor_source_uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetPostAnalyticsProcessorSourceUri"></a>

```python
def reset_post_analytics_processor_source_uri() -> None
```

##### `reset_record_preprocessor_source_uri` <a name="reset_record_preprocessor_source_uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetRecordPreprocessorSourceUri"></a>

```python
def reset_record_preprocessor_source_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.containerArgumentsInput">container_arguments_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.containerEntrypointInput">container_entrypoint_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.environmentInput">environment_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.imageUriInput">image_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUriInput">post_analytics_processor_source_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUriInput">record_preprocessor_source_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.containerArguments">container_arguments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.containerEntrypoint">container_entrypoint</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.environment">environment</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUri">post_analytics_processor_source_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUri">record_preprocessor_source_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification">SagemakerDataQualityJobDefinitionDataQualityAppSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_arguments_input`<sup>Optional</sup> <a name="container_arguments_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.containerArgumentsInput"></a>

```python
container_arguments_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_entrypoint_input`<sup>Optional</sup> <a name="container_entrypoint_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.containerEntrypointInput"></a>

```python
container_entrypoint_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.environmentInput"></a>

```python
environment_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `image_uri_input`<sup>Optional</sup> <a name="image_uri_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.imageUriInput"></a>

```python
image_uri_input: str
```

- *Type:* str

---

##### `post_analytics_processor_source_uri_input`<sup>Optional</sup> <a name="post_analytics_processor_source_uri_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUriInput"></a>

```python
post_analytics_processor_source_uri_input: str
```

- *Type:* str

---

##### `record_preprocessor_source_uri_input`<sup>Optional</sup> <a name="record_preprocessor_source_uri_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUriInput"></a>

```python
record_preprocessor_source_uri_input: str
```

- *Type:* str

---

##### `container_arguments`<sup>Required</sup> <a name="container_arguments" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.containerArguments"></a>

```python
container_arguments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_entrypoint`<sup>Required</sup> <a name="container_entrypoint" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.containerEntrypoint"></a>

```python
container_entrypoint: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.environment"></a>

```python
environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `post_analytics_processor_source_uri`<sup>Required</sup> <a name="post_analytics_processor_source_uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUri"></a>

```python
post_analytics_processor_source_uri: str
```

- *Type:* str

---

##### `record_preprocessor_source_uri`<sup>Required</sup> <a name="record_preprocessor_source_uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUri"></a>

```python
record_preprocessor_source_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerDataQualityJobDefinitionDataQualityAppSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification">SagemakerDataQualityJobDefinitionDataQualityAppSpecification</a>

---


### SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.resetS3Uri">reset_s3_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_uri` <a name="reset_s3_uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.resetS3Uri"></a>

```python
def reset_s3_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.s3UriInput">s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_uri_input`<sup>Optional</sup> <a name="s3_uri_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.s3UriInput"></a>

```python
s3_uri_input: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource</a>

---


### SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.putConstraintsResource">put_constraints_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.putStatisticsResource">put_statistics_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resetBaseliningJobName">reset_baselining_job_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resetConstraintsResource">reset_constraints_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resetStatisticsResource">reset_statistics_resource</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_constraints_resource` <a name="put_constraints_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.putConstraintsResource"></a>

```python
def put_constraints_resource(
  s3_uri: str = None
) -> None
```

###### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.putConstraintsResource.parameter.s3Uri"></a>

- *Type:* str

The Amazon S3 URI for baseline constraint file in Amazon S3 that the current monitoring job should validated against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#s3_uri SagemakerDataQualityJobDefinition#s3_uri}

---

##### `put_statistics_resource` <a name="put_statistics_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.putStatisticsResource"></a>

```python
def put_statistics_resource(
  s3_uri: str = None
) -> None
```

###### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.putStatisticsResource.parameter.s3Uri"></a>

- *Type:* str

The Amazon S3 URI for the baseline statistics file in Amazon S3 that the current monitoring job should be validated against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#s3_uri SagemakerDataQualityJobDefinition#s3_uri}

---

##### `reset_baselining_job_name` <a name="reset_baselining_job_name" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resetBaseliningJobName"></a>

```python
def reset_baselining_job_name() -> None
```

##### `reset_constraints_resource` <a name="reset_constraints_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resetConstraintsResource"></a>

```python
def reset_constraints_resource() -> None
```

##### `reset_statistics_resource` <a name="reset_statistics_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resetStatisticsResource"></a>

```python
def reset_statistics_resource() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.constraintsResource">constraints_resource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.statisticsResource">statistics_resource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.baseliningJobNameInput">baselining_job_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.constraintsResourceInput">constraints_resource_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.statisticsResourceInput">statistics_resource_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.baseliningJobName">baselining_job_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig">SagemakerDataQualityJobDefinitionDataQualityBaselineConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `constraints_resource`<sup>Required</sup> <a name="constraints_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.constraintsResource"></a>

```python
constraints_resource: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference</a>

---

##### `statistics_resource`<sup>Required</sup> <a name="statistics_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.statisticsResource"></a>

```python
statistics_resource: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference</a>

---

##### `baselining_job_name_input`<sup>Optional</sup> <a name="baselining_job_name_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.baseliningJobNameInput"></a>

```python
baselining_job_name_input: str
```

- *Type:* str

---

##### `constraints_resource_input`<sup>Optional</sup> <a name="constraints_resource_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.constraintsResourceInput"></a>

```python
constraints_resource_input: IResolvable | SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource</a>

---

##### `statistics_resource_input`<sup>Optional</sup> <a name="statistics_resource_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.statisticsResourceInput"></a>

```python
statistics_resource_input: IResolvable | SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource</a>

---

##### `baselining_job_name`<sup>Required</sup> <a name="baselining_job_name" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.baseliningJobName"></a>

```python
baselining_job_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerDataQualityJobDefinitionDataQualityBaselineConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig">SagemakerDataQualityJobDefinitionDataQualityBaselineConfig</a>

---


### SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.resetS3Uri">reset_s3_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_uri` <a name="reset_s3_uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.resetS3Uri"></a>

```python
def reset_s3_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.s3UriInput">s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_uri_input`<sup>Optional</sup> <a name="s3_uri_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.s3UriInput"></a>

```python
s3_uri_input: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource</a>

---


### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resetHeader">reset_header</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_header` <a name="reset_header" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resetHeader"></a>

```python
def reset_header() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.headerInput">header_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header">header</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.headerInput"></a>

```python
header_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header"></a>

```python
header: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv</a>

---


### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resetLine">reset_line</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_line` <a name="reset_line" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resetLine"></a>

```python
def reset_line() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.lineInput">line_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line">line</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `line_input`<sup>Optional</sup> <a name="line_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.lineInput"></a>

```python
line_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `line`<sup>Required</sup> <a name="line" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line"></a>

```python
line: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson</a>

---


### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.putCsv">put_csv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.putJson">put_json</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetCsv">reset_csv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetJson">reset_json</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetParquet">reset_parquet</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_csv` <a name="put_csv" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.putCsv"></a>

```python
def put_csv(
  header: bool | IResolvable = None
) -> None
```

###### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.putCsv.parameter.header"></a>

- *Type:* bool | cdktn.IResolvable

A boolean flag indicating if given CSV has header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#header SagemakerDataQualityJobDefinition#header}

---

##### `put_json` <a name="put_json" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.putJson"></a>

```python
def put_json(
  line: bool | IResolvable = None
) -> None
```

###### `line`<sup>Optional</sup> <a name="line" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.putJson.parameter.line"></a>

- *Type:* bool | cdktn.IResolvable

A boolean flag indicating if it is JSON line format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#line SagemakerDataQualityJobDefinition#line}

---

##### `reset_csv` <a name="reset_csv" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetCsv"></a>

```python
def reset_csv() -> None
```

##### `reset_json` <a name="reset_json" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetJson"></a>

```python
def reset_json() -> None
```

##### `reset_parquet` <a name="reset_parquet" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetParquet"></a>

```python
def reset_parquet() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.json">json</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csvInput">csv_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.jsonInput">json_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquetInput">parquet_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquet">parquet</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csv"></a>

```python
csv: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference</a>

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.json"></a>

```python
json: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference</a>

---

##### `csv_input`<sup>Optional</sup> <a name="csv_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csvInput"></a>

```python
csv_input: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv</a>

---

##### `json_input`<sup>Optional</sup> <a name="json_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.jsonInput"></a>

```python
json_input: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson</a>

---

##### `parquet_input`<sup>Optional</sup> <a name="parquet_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquetInput"></a>

```python
parquet_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `parquet`<sup>Required</sup> <a name="parquet" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquet"></a>

```python
parquet: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat</a>

---


### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.putDatasetFormat">put_dataset_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetDataCapturedDestinationS3Uri">reset_data_captured_destination_s3_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetDatasetFormat">reset_dataset_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetExcludeFeaturesAttribute">reset_exclude_features_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetLocalPath">reset_local_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetS3DataDistributionType">reset_s3_data_distribution_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetS3InputMode">reset_s3_input_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dataset_format` <a name="put_dataset_format" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.putDatasetFormat"></a>

```python
def put_dataset_format(
  csv: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv = None,
  json: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson = None,
  parquet: bool | IResolvable = None
) -> None
```

###### `csv`<sup>Optional</sup> <a name="csv" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.putDatasetFormat.parameter.csv"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv</a>

The CSV format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#csv SagemakerDataQualityJobDefinition#csv}

---

###### `json`<sup>Optional</sup> <a name="json" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.putDatasetFormat.parameter.json"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson</a>

The Json format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#json SagemakerDataQualityJobDefinition#json}

---

###### `parquet`<sup>Optional</sup> <a name="parquet" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.putDatasetFormat.parameter.parquet"></a>

- *Type:* bool | cdktn.IResolvable

A flag indicate if the dataset format is Parquet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#parquet SagemakerDataQualityJobDefinition#parquet}

---

##### `reset_data_captured_destination_s3_uri` <a name="reset_data_captured_destination_s3_uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetDataCapturedDestinationS3Uri"></a>

```python
def reset_data_captured_destination_s3_uri() -> None
```

##### `reset_dataset_format` <a name="reset_dataset_format" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetDatasetFormat"></a>

```python
def reset_dataset_format() -> None
```

##### `reset_exclude_features_attribute` <a name="reset_exclude_features_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetExcludeFeaturesAttribute"></a>

```python
def reset_exclude_features_attribute() -> None
```

##### `reset_local_path` <a name="reset_local_path" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetLocalPath"></a>

```python
def reset_local_path() -> None
```

##### `reset_s3_data_distribution_type` <a name="reset_s3_data_distribution_type" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetS3DataDistributionType"></a>

```python
def reset_s3_data_distribution_type() -> None
```

##### `reset_s3_input_mode` <a name="reset_s3_input_mode" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetS3InputMode"></a>

```python
def reset_s3_input_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.datasetFormat">dataset_format</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3UriInput">data_captured_destination_s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.datasetFormatInput">dataset_format_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.excludeFeaturesAttributeInput">exclude_features_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.localPathInput">local_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionTypeInput">s3_data_distribution_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3InputModeInput">s3_input_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri">data_captured_destination_s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.excludeFeaturesAttribute">exclude_features_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.localPath">local_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionType">s3_data_distribution_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3InputMode">s3_input_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_format`<sup>Required</sup> <a name="dataset_format" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.datasetFormat"></a>

```python
dataset_format: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference</a>

---

##### `data_captured_destination_s3_uri_input`<sup>Optional</sup> <a name="data_captured_destination_s3_uri_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3UriInput"></a>

```python
data_captured_destination_s3_uri_input: str
```

- *Type:* str

---

##### `dataset_format_input`<sup>Optional</sup> <a name="dataset_format_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.datasetFormatInput"></a>

```python
dataset_format_input: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat</a>

---

##### `exclude_features_attribute_input`<sup>Optional</sup> <a name="exclude_features_attribute_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.excludeFeaturesAttributeInput"></a>

```python
exclude_features_attribute_input: str
```

- *Type:* str

---

##### `local_path_input`<sup>Optional</sup> <a name="local_path_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.localPathInput"></a>

```python
local_path_input: str
```

- *Type:* str

---

##### `s3_data_distribution_type_input`<sup>Optional</sup> <a name="s3_data_distribution_type_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionTypeInput"></a>

```python
s3_data_distribution_type_input: str
```

- *Type:* str

---

##### `s3_input_mode_input`<sup>Optional</sup> <a name="s3_input_mode_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3InputModeInput"></a>

```python
s3_input_mode_input: str
```

- *Type:* str

---

##### `data_captured_destination_s3_uri`<sup>Required</sup> <a name="data_captured_destination_s3_uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri"></a>

```python
data_captured_destination_s3_uri: str
```

- *Type:* str

---

##### `exclude_features_attribute`<sup>Required</sup> <a name="exclude_features_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.excludeFeaturesAttribute"></a>

```python
exclude_features_attribute: str
```

- *Type:* str

---

##### `local_path`<sup>Required</sup> <a name="local_path" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

---

##### `s3_data_distribution_type`<sup>Required</sup> <a name="s3_data_distribution_type" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionType"></a>

```python
s3_data_distribution_type: str
```

- *Type:* str

---

##### `s3_input_mode`<sup>Required</sup> <a name="s3_input_mode" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3InputMode"></a>

```python
s3_input_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput</a>

---


### SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetEndpointName">reset_endpoint_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetExcludeFeaturesAttribute">reset_exclude_features_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetLocalPath">reset_local_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetS3DataDistributionType">reset_s3_data_distribution_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetS3InputMode">reset_s3_input_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_endpoint_name` <a name="reset_endpoint_name" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetEndpointName"></a>

```python
def reset_endpoint_name() -> None
```

##### `reset_exclude_features_attribute` <a name="reset_exclude_features_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetExcludeFeaturesAttribute"></a>

```python
def reset_exclude_features_attribute() -> None
```

##### `reset_local_path` <a name="reset_local_path" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetLocalPath"></a>

```python
def reset_local_path() -> None
```

##### `reset_s3_data_distribution_type` <a name="reset_s3_data_distribution_type" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetS3DataDistributionType"></a>

```python
def reset_s3_data_distribution_type() -> None
```

##### `reset_s3_input_mode` <a name="reset_s3_input_mode" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetS3InputMode"></a>

```python
def reset_s3_input_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.endpointNameInput">endpoint_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.excludeFeaturesAttributeInput">exclude_features_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.localPathInput">local_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3DataDistributionTypeInput">s3_data_distribution_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3InputModeInput">s3_input_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.endpointName">endpoint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.excludeFeaturesAttribute">exclude_features_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.localPath">local_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3DataDistributionType">s3_data_distribution_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3InputMode">s3_input_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_name_input`<sup>Optional</sup> <a name="endpoint_name_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.endpointNameInput"></a>

```python
endpoint_name_input: str
```

- *Type:* str

---

##### `exclude_features_attribute_input`<sup>Optional</sup> <a name="exclude_features_attribute_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.excludeFeaturesAttributeInput"></a>

```python
exclude_features_attribute_input: str
```

- *Type:* str

---

##### `local_path_input`<sup>Optional</sup> <a name="local_path_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.localPathInput"></a>

```python
local_path_input: str
```

- *Type:* str

---

##### `s3_data_distribution_type_input`<sup>Optional</sup> <a name="s3_data_distribution_type_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3DataDistributionTypeInput"></a>

```python
s3_data_distribution_type_input: str
```

- *Type:* str

---

##### `s3_input_mode_input`<sup>Optional</sup> <a name="s3_input_mode_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3InputModeInput"></a>

```python
s3_input_mode_input: str
```

- *Type:* str

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

---

##### `exclude_features_attribute`<sup>Required</sup> <a name="exclude_features_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.excludeFeaturesAttribute"></a>

```python
exclude_features_attribute: str
```

- *Type:* str

---

##### `local_path`<sup>Required</sup> <a name="local_path" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

---

##### `s3_data_distribution_type`<sup>Required</sup> <a name="s3_data_distribution_type" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3DataDistributionType"></a>

```python
s3_data_distribution_type: str
```

- *Type:* str

---

##### `s3_input_mode`<sup>Required</sup> <a name="s3_input_mode" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3InputMode"></a>

```python
s3_input_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput</a>

---


### SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putBatchTransformInput">put_batch_transform_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putEndpointInput">put_endpoint_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.resetBatchTransformInput">reset_batch_transform_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.resetEndpointInput">reset_endpoint_input</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_batch_transform_input` <a name="put_batch_transform_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putBatchTransformInput"></a>

```python
def put_batch_transform_input(
  data_captured_destination_s3_uri: str = None,
  dataset_format: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat = None,
  exclude_features_attribute: str = None,
  local_path: str = None,
  s3_data_distribution_type: str = None,
  s3_input_mode: str = None
) -> None
```

###### `data_captured_destination_s3_uri`<sup>Optional</sup> <a name="data_captured_destination_s3_uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putBatchTransformInput.parameter.dataCapturedDestinationS3Uri"></a>

- *Type:* str

A URI that identifies the Amazon S3 storage location where Batch Transform Job captures data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#data_captured_destination_s3_uri SagemakerDataQualityJobDefinition#data_captured_destination_s3_uri}

---

###### `dataset_format`<sup>Optional</sup> <a name="dataset_format" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putBatchTransformInput.parameter.datasetFormat"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat</a>

The dataset format of the data to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#dataset_format SagemakerDataQualityJobDefinition#dataset_format}

---

###### `exclude_features_attribute`<sup>Optional</sup> <a name="exclude_features_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putBatchTransformInput.parameter.excludeFeaturesAttribute"></a>

- *Type:* str

Indexes or names of the features to be excluded from analysis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#exclude_features_attribute SagemakerDataQualityJobDefinition#exclude_features_attribute}

---

###### `local_path`<sup>Optional</sup> <a name="local_path" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putBatchTransformInput.parameter.localPath"></a>

- *Type:* str

Path to the filesystem where the endpoint data is available to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#local_path SagemakerDataQualityJobDefinition#local_path}

---

###### `s3_data_distribution_type`<sup>Optional</sup> <a name="s3_data_distribution_type" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putBatchTransformInput.parameter.s3DataDistributionType"></a>

- *Type:* str

Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#s3_data_distribution_type SagemakerDataQualityJobDefinition#s3_data_distribution_type}

---

###### `s3_input_mode`<sup>Optional</sup> <a name="s3_input_mode" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putBatchTransformInput.parameter.s3InputMode"></a>

- *Type:* str

Whether the Pipe or File is used as the input mode for transfering data for the monitoring job.

Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#s3_input_mode SagemakerDataQualityJobDefinition#s3_input_mode}

---

##### `put_endpoint_input` <a name="put_endpoint_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putEndpointInput"></a>

```python
def put_endpoint_input(
  endpoint_name: str = None,
  exclude_features_attribute: str = None,
  local_path: str = None,
  s3_data_distribution_type: str = None,
  s3_input_mode: str = None
) -> None
```

###### `endpoint_name`<sup>Optional</sup> <a name="endpoint_name" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putEndpointInput.parameter.endpointName"></a>

- *Type:* str

The name of the endpoint used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#endpoint_name SagemakerDataQualityJobDefinition#endpoint_name}

---

###### `exclude_features_attribute`<sup>Optional</sup> <a name="exclude_features_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putEndpointInput.parameter.excludeFeaturesAttribute"></a>

- *Type:* str

Indexes or names of the features to be excluded from analysis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#exclude_features_attribute SagemakerDataQualityJobDefinition#exclude_features_attribute}

---

###### `local_path`<sup>Optional</sup> <a name="local_path" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putEndpointInput.parameter.localPath"></a>

- *Type:* str

Path to the filesystem where the endpoint data is available to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#local_path SagemakerDataQualityJobDefinition#local_path}

---

###### `s3_data_distribution_type`<sup>Optional</sup> <a name="s3_data_distribution_type" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putEndpointInput.parameter.s3DataDistributionType"></a>

- *Type:* str

Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#s3_data_distribution_type SagemakerDataQualityJobDefinition#s3_data_distribution_type}

---

###### `s3_input_mode`<sup>Optional</sup> <a name="s3_input_mode" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putEndpointInput.parameter.s3InputMode"></a>

- *Type:* str

Whether the Pipe or File is used as the input mode for transfering data for the monitoring job.

Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#s3_input_mode SagemakerDataQualityJobDefinition#s3_input_mode}

---

##### `reset_batch_transform_input` <a name="reset_batch_transform_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.resetBatchTransformInput"></a>

```python
def reset_batch_transform_input() -> None
```

##### `reset_endpoint_input` <a name="reset_endpoint_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.resetEndpointInput"></a>

```python
def reset_endpoint_input() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.batchTransformInput">batch_transform_input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.endpointInput">endpoint_input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.batchTransformInputInput">batch_transform_input_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.endpointInputInput">endpoint_input_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput">SagemakerDataQualityJobDefinitionDataQualityJobInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_transform_input`<sup>Required</sup> <a name="batch_transform_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.batchTransformInput"></a>

```python
batch_transform_input: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference</a>

---

##### `endpoint_input`<sup>Required</sup> <a name="endpoint_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.endpointInput"></a>

```python
endpoint_input: SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference</a>

---

##### `batch_transform_input_input`<sup>Optional</sup> <a name="batch_transform_input_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.batchTransformInputInput"></a>

```python
batch_transform_input_input: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput</a>

---

##### `endpoint_input_input`<sup>Optional</sup> <a name="endpoint_input_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.endpointInputInput"></a>

```python
endpoint_input_input: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput">SagemakerDataQualityJobDefinitionDataQualityJobInput</a>

---


### SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList <a name="SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs</a>]

---


### SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.putS3Output">put_s3_output</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_output` <a name="put_s3_output" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.putS3Output"></a>

```python
def put_s3_output(
  local_path: str,
  s3_uri: str,
  s3_upload_mode: str = None
) -> None
```

###### `local_path`<sup>Required</sup> <a name="local_path" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.putS3Output.parameter.localPath"></a>

- *Type:* str

The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.

LocalPath is an absolute path for the output data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#local_path SagemakerDataQualityJobDefinition#local_path}

---

###### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.putS3Output.parameter.s3Uri"></a>

- *Type:* str

A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#s3_uri SagemakerDataQualityJobDefinition#s3_uri}

---

###### `s3_upload_mode`<sup>Optional</sup> <a name="s3_upload_mode" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.putS3Output.parameter.s3UploadMode"></a>

- *Type:* str

Whether to upload the results of the monitoring job continuously or after the job completes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#s3_upload_mode SagemakerDataQualityJobDefinition#s3_upload_mode}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3Output">s3_output</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3OutputInput">s3_output_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_output`<sup>Required</sup> <a name="s3_output" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3Output"></a>

```python
s3_output: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference</a>

---

##### `s3_output_input`<sup>Optional</sup> <a name="s3_output_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3OutputInput"></a>

```python
s3_output_input: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs</a>

---


### SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resetS3UploadMode">reset_s3_upload_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_upload_mode` <a name="reset_s3_upload_mode" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resetS3UploadMode"></a>

```python
def reset_s3_upload_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPathInput">local_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadModeInput">s3_upload_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UriInput">s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath">local_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode">s3_upload_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_path_input`<sup>Optional</sup> <a name="local_path_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPathInput"></a>

```python
local_path_input: str
```

- *Type:* str

---

##### `s3_upload_mode_input`<sup>Optional</sup> <a name="s3_upload_mode_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadModeInput"></a>

```python
s3_upload_mode_input: str
```

- *Type:* str

---

##### `s3_uri_input`<sup>Optional</sup> <a name="s3_uri_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UriInput"></a>

```python
s3_uri_input: str
```

- *Type:* str

---

##### `local_path`<sup>Required</sup> <a name="local_path" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

---

##### `s3_upload_mode`<sup>Required</sup> <a name="s3_upload_mode" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode"></a>

```python
s3_upload_mode: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output</a>

---


### SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.putMonitoringOutputs">put_monitoring_outputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_monitoring_outputs` <a name="put_monitoring_outputs" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.putMonitoringOutputs"></a>

```python
def put_monitoring_outputs(
  value: IResolvable | typing.List[SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.putMonitoringOutputs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs</a>]

---

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.monitoringOutputs">monitoring_outputs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.monitoringOutputsInput">monitoring_outputs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `monitoring_outputs`<sup>Required</sup> <a name="monitoring_outputs" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.monitoringOutputs"></a>

```python
monitoring_outputs: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList</a>

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `monitoring_outputs_input`<sup>Optional</sup> <a name="monitoring_outputs_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.monitoringOutputsInput"></a>

```python
monitoring_outputs_input: IResolvable | typing.List[SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs</a>]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig</a>

---


### SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference <a name="SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.resetVolumeKmsKeyId">reset_volume_kms_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_volume_kms_key_id` <a name="reset_volume_kms_key_id" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.resetVolumeKmsKeyId"></a>

```python
def reset_volume_kms_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCountInput">instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyIdInput">volume_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGbInput">volume_size_in_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId">volume_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb">volume_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig">SagemakerDataQualityJobDefinitionJobResourcesClusterConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_count_input`<sup>Optional</sup> <a name="instance_count_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCountInput"></a>

```python
instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `volume_kms_key_id_input`<sup>Optional</sup> <a name="volume_kms_key_id_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyIdInput"></a>

```python
volume_kms_key_id_input: str
```

- *Type:* str

---

##### `volume_size_in_gb_input`<sup>Optional</sup> <a name="volume_size_in_gb_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGbInput"></a>

```python
volume_size_in_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `volume_kms_key_id`<sup>Required</sup> <a name="volume_kms_key_id" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId"></a>

```python
volume_kms_key_id: str
```

- *Type:* str

---

##### `volume_size_in_gb`<sup>Required</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb"></a>

```python
volume_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerDataQualityJobDefinitionJobResourcesClusterConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig">SagemakerDataQualityJobDefinitionJobResourcesClusterConfig</a>

---


### SagemakerDataQualityJobDefinitionJobResourcesOutputReference <a name="SagemakerDataQualityJobDefinitionJobResourcesOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.putClusterConfig">put_cluster_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cluster_config` <a name="put_cluster_config" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.putClusterConfig"></a>

```python
def put_cluster_config(
  instance_count: typing.Union[int, float],
  instance_type: str,
  volume_size_in_gb: typing.Union[int, float],
  volume_kms_key_id: str = None
) -> None
```

###### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.putClusterConfig.parameter.instanceCount"></a>

- *Type:* typing.Union[int, float]

The number of ML compute instances to use in the model monitoring job.

For distributed processing jobs, specify a value greater than 1. The default value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#instance_count SagemakerDataQualityJobDefinition#instance_count}

---

###### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.putClusterConfig.parameter.instanceType"></a>

- *Type:* str

The ML compute instance type for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#instance_type SagemakerDataQualityJobDefinition#instance_type}

---

###### `volume_size_in_gb`<sup>Required</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.putClusterConfig.parameter.volumeSizeInGb"></a>

- *Type:* typing.Union[int, float]

The size of the ML storage volume, in gigabytes, that you want to provision.

You must specify sufficient ML storage for your scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#volume_size_in_gb SagemakerDataQualityJobDefinition#volume_size_in_gb}

---

###### `volume_kms_key_id`<sup>Optional</sup> <a name="volume_kms_key_id" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.putClusterConfig.parameter.volumeKmsKeyId"></a>

- *Type:* str

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#volume_kms_key_id SagemakerDataQualityJobDefinition#volume_kms_key_id}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.clusterConfig">cluster_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference">SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.clusterConfigInput">cluster_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig">SagemakerDataQualityJobDefinitionJobResourcesClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources">SagemakerDataQualityJobDefinitionJobResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_config`<sup>Required</sup> <a name="cluster_config" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.clusterConfig"></a>

```python
cluster_config: SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference">SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference</a>

---

##### `cluster_config_input`<sup>Optional</sup> <a name="cluster_config_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.clusterConfigInput"></a>

```python
cluster_config_input: IResolvable | SagemakerDataQualityJobDefinitionJobResourcesClusterConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig">SagemakerDataQualityJobDefinitionJobResourcesClusterConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerDataQualityJobDefinitionJobResources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources">SagemakerDataQualityJobDefinitionJobResources</a>

---


### SagemakerDataQualityJobDefinitionNetworkConfigOutputReference <a name="SagemakerDataQualityJobDefinitionNetworkConfigOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.putVpcConfig">put_vpc_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resetEnableInterContainerTrafficEncryption">reset_enable_inter_container_traffic_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resetEnableNetworkIsolation">reset_enable_network_isolation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resetVpcConfig">reset_vpc_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_vpc_config` <a name="put_vpc_config" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.putVpcConfig"></a>

```python
def put_vpc_config(
  security_group_ids: typing.List[str] = None,
  subnets: typing.List[str] = None
) -> None
```

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.putVpcConfig.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

The VPC security group IDs, in the form sg-xxxxxxxx.

Specify the security groups for the VPC that is specified in the Subnets field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#security_group_ids SagemakerDataQualityJobDefinition#security_group_ids}

---

###### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.putVpcConfig.parameter.subnets"></a>

- *Type:* typing.List[str]

The ID of the subnets in the VPC to which you want to connect to your monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_data_quality_job_definition#subnets SagemakerDataQualityJobDefinition#subnets}

---

##### `reset_enable_inter_container_traffic_encryption` <a name="reset_enable_inter_container_traffic_encryption" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resetEnableInterContainerTrafficEncryption"></a>

```python
def reset_enable_inter_container_traffic_encryption() -> None
```

##### `reset_enable_network_isolation` <a name="reset_enable_network_isolation" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resetEnableNetworkIsolation"></a>

```python
def reset_enable_network_isolation() -> None
```

##### `reset_vpc_config` <a name="reset_vpc_config" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resetVpcConfig"></a>

```python
def reset_vpc_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryptionInput">enable_inter_container_traffic_encryption_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolationInput">enable_network_isolation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfigInput">vpc_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption">enable_inter_container_traffic_encryption</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation">enable_network_isolation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig">SagemakerDataQualityJobDefinitionNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfig"></a>

```python
vpc_config: SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference</a>

---

##### `enable_inter_container_traffic_encryption_input`<sup>Optional</sup> <a name="enable_inter_container_traffic_encryption_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryptionInput"></a>

```python
enable_inter_container_traffic_encryption_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_network_isolation_input`<sup>Optional</sup> <a name="enable_network_isolation_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolationInput"></a>

```python
enable_network_isolation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `vpc_config_input`<sup>Optional</sup> <a name="vpc_config_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfigInput"></a>

```python
vpc_config_input: IResolvable | SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig</a>

---

##### `enable_inter_container_traffic_encryption`<sup>Required</sup> <a name="enable_inter_container_traffic_encryption" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption"></a>

```python
enable_inter_container_traffic_encryption: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_network_isolation`<sup>Required</sup> <a name="enable_network_isolation" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation"></a>

```python
enable_network_isolation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerDataQualityJobDefinitionNetworkConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig">SagemakerDataQualityJobDefinitionNetworkConfig</a>

---


### SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference <a name="SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resetSubnets">reset_subnets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnets` <a name="reset_subnets" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resetSubnets"></a>

```python
def reset_subnets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig</a>

---


### SagemakerDataQualityJobDefinitionStoppingConditionOutputReference <a name="SagemakerDataQualityJobDefinitionStoppingConditionOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.resetMaxRuntimeInSeconds">reset_max_runtime_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_runtime_in_seconds` <a name="reset_max_runtime_in_seconds" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.resetMaxRuntimeInSeconds"></a>

```python
def reset_max_runtime_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSecondsInput">max_runtime_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds">max_runtime_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition">SagemakerDataQualityJobDefinitionStoppingCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_runtime_in_seconds_input`<sup>Optional</sup> <a name="max_runtime_in_seconds_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSecondsInput"></a>

```python
max_runtime_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_runtime_in_seconds`<sup>Required</sup> <a name="max_runtime_in_seconds" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds"></a>

```python
max_runtime_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerDataQualityJobDefinitionStoppingCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition">SagemakerDataQualityJobDefinitionStoppingCondition</a>

---


### SagemakerDataQualityJobDefinitionTagsList <a name="SagemakerDataQualityJobDefinitionTagsList" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerDataQualityJobDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags">SagemakerDataQualityJobDefinitionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerDataQualityJobDefinitionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags">SagemakerDataQualityJobDefinitionTags</a>]

---


### SagemakerDataQualityJobDefinitionTagsOutputReference <a name="SagemakerDataQualityJobDefinitionTagsOutputReference" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_data_quality_job_definition

sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags">SagemakerDataQualityJobDefinitionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerDataQualityJobDefinitionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionTags">SagemakerDataQualityJobDefinitionTags</a>

---



