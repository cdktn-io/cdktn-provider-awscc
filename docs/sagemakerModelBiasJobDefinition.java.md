# `sagemakerModelBiasJobDefinition` Submodule <a name="`sagemakerModelBiasJobDefinition` Submodule" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerModelBiasJobDefinition <a name="SagemakerModelBiasJobDefinition" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition awscc_sagemaker_model_bias_job_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinition;

SagemakerModelBiasJobDefinition.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .jobResources(SagemakerModelBiasJobDefinitionJobResources)
    .modelBiasAppSpecification(SagemakerModelBiasJobDefinitionModelBiasAppSpecification)
    .modelBiasJobInput(SagemakerModelBiasJobDefinitionModelBiasJobInput)
    .modelBiasJobOutputConfig(SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig)
    .roleArn(java.lang.String)
//  .endpointName(java.lang.String)
//  .jobDefinitionName(java.lang.String)
//  .modelBiasBaselineConfig(SagemakerModelBiasJobDefinitionModelBiasBaselineConfig)
//  .networkConfig(SagemakerModelBiasJobDefinitionNetworkConfig)
//  .stoppingCondition(SagemakerModelBiasJobDefinitionStoppingCondition)
//  .tags(IResolvable|java.util.List<SagemakerModelBiasJobDefinitionTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.jobResources">jobResources</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResources">SagemakerModelBiasJobDefinitionJobResources</a></code> | Identifies the resources to deploy for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.modelBiasAppSpecification">modelBiasAppSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecification">SagemakerModelBiasJobDefinitionModelBiasAppSpecification</a></code> | Container image configuration object for the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.modelBiasJobInput">modelBiasJobInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInput">SagemakerModelBiasJobDefinitionModelBiasJobInput</a></code> | The inputs for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.modelBiasJobOutputConfig">modelBiasJobOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig</a></code> | The output configuration for monitoring jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.endpointName">endpointName</a></code> | <code>java.lang.String</code> | The name of the endpoint used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.jobDefinitionName">jobDefinitionName</a></code> | <code>java.lang.String</code> | The name of the job definition. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.modelBiasBaselineConfig">modelBiasBaselineConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfig">SagemakerModelBiasJobDefinitionModelBiasBaselineConfig</a></code> | Baseline configuration used to validate that the data conforms to the specified constraints and statistics. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.networkConfig">networkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfig">SagemakerModelBiasJobDefinitionNetworkConfig</a></code> | Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.stoppingCondition">stoppingCondition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingCondition">SagemakerModelBiasJobDefinitionStoppingCondition</a></code> | Specifies a time limit for how long the monitoring job is allowed to run. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTags">SagemakerModelBiasJobDefinitionTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `jobResources`<sup>Required</sup> <a name="jobResources" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.jobResources"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResources">SagemakerModelBiasJobDefinitionJobResources</a>

Identifies the resources to deploy for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#job_resources SagemakerModelBiasJobDefinition#job_resources}

---

##### `modelBiasAppSpecification`<sup>Required</sup> <a name="modelBiasAppSpecification" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.modelBiasAppSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecification">SagemakerModelBiasJobDefinitionModelBiasAppSpecification</a>

Container image configuration object for the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#model_bias_app_specification SagemakerModelBiasJobDefinition#model_bias_app_specification}

---

##### `modelBiasJobInput`<sup>Required</sup> <a name="modelBiasJobInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.modelBiasJobInput"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInput">SagemakerModelBiasJobDefinitionModelBiasJobInput</a>

The inputs for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#model_bias_job_input SagemakerModelBiasJobDefinition#model_bias_job_input}

---

##### `modelBiasJobOutputConfig`<sup>Required</sup> <a name="modelBiasJobOutputConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.modelBiasJobOutputConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig</a>

The output configuration for monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#model_bias_job_output_config SagemakerModelBiasJobDefinition#model_bias_job_output_config}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#role_arn SagemakerModelBiasJobDefinition#role_arn}

---

##### `endpointName`<sup>Optional</sup> <a name="endpointName" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.endpointName"></a>

- *Type:* java.lang.String

The name of the endpoint used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#endpoint_name SagemakerModelBiasJobDefinition#endpoint_name}

---

##### `jobDefinitionName`<sup>Optional</sup> <a name="jobDefinitionName" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.jobDefinitionName"></a>

- *Type:* java.lang.String

The name of the job definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#job_definition_name SagemakerModelBiasJobDefinition#job_definition_name}

---

##### `modelBiasBaselineConfig`<sup>Optional</sup> <a name="modelBiasBaselineConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.modelBiasBaselineConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfig">SagemakerModelBiasJobDefinitionModelBiasBaselineConfig</a>

Baseline configuration used to validate that the data conforms to the specified constraints and statistics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#model_bias_baseline_config SagemakerModelBiasJobDefinition#model_bias_baseline_config}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.networkConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfig">SagemakerModelBiasJobDefinitionNetworkConfig</a>

Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#network_config SagemakerModelBiasJobDefinition#network_config}

---

##### `stoppingCondition`<sup>Optional</sup> <a name="stoppingCondition" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.stoppingCondition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingCondition">SagemakerModelBiasJobDefinitionStoppingCondition</a>

Specifies a time limit for how long the monitoring job is allowed to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#stopping_condition SagemakerModelBiasJobDefinition#stopping_condition}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTags">SagemakerModelBiasJobDefinitionTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#tags SagemakerModelBiasJobDefinition#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putJobResources">putJobResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putModelBiasAppSpecification">putModelBiasAppSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putModelBiasBaselineConfig">putModelBiasBaselineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putModelBiasJobInput">putModelBiasJobInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putModelBiasJobOutputConfig">putModelBiasJobOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putNetworkConfig">putNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putStoppingCondition">putStoppingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.resetEndpointName">resetEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.resetJobDefinitionName">resetJobDefinitionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.resetModelBiasBaselineConfig">resetModelBiasBaselineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.resetNetworkConfig">resetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.resetStoppingCondition">resetStoppingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putJobResources` <a name="putJobResources" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putJobResources"></a>

```java
public void putJobResources(SagemakerModelBiasJobDefinitionJobResources value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putJobResources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResources">SagemakerModelBiasJobDefinitionJobResources</a>

---

##### `putModelBiasAppSpecification` <a name="putModelBiasAppSpecification" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putModelBiasAppSpecification"></a>

```java
public void putModelBiasAppSpecification(SagemakerModelBiasJobDefinitionModelBiasAppSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putModelBiasAppSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecification">SagemakerModelBiasJobDefinitionModelBiasAppSpecification</a>

---

##### `putModelBiasBaselineConfig` <a name="putModelBiasBaselineConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putModelBiasBaselineConfig"></a>

```java
public void putModelBiasBaselineConfig(SagemakerModelBiasJobDefinitionModelBiasBaselineConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putModelBiasBaselineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfig">SagemakerModelBiasJobDefinitionModelBiasBaselineConfig</a>

---

##### `putModelBiasJobInput` <a name="putModelBiasJobInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putModelBiasJobInput"></a>

```java
public void putModelBiasJobInput(SagemakerModelBiasJobDefinitionModelBiasJobInput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putModelBiasJobInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInput">SagemakerModelBiasJobDefinitionModelBiasJobInput</a>

---

##### `putModelBiasJobOutputConfig` <a name="putModelBiasJobOutputConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putModelBiasJobOutputConfig"></a>

```java
public void putModelBiasJobOutputConfig(SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putModelBiasJobOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig</a>

---

##### `putNetworkConfig` <a name="putNetworkConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putNetworkConfig"></a>

```java
public void putNetworkConfig(SagemakerModelBiasJobDefinitionNetworkConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfig">SagemakerModelBiasJobDefinitionNetworkConfig</a>

---

##### `putStoppingCondition` <a name="putStoppingCondition" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putStoppingCondition"></a>

```java
public void putStoppingCondition(SagemakerModelBiasJobDefinitionStoppingCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putStoppingCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingCondition">SagemakerModelBiasJobDefinitionStoppingCondition</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SagemakerModelBiasJobDefinitionTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTags">SagemakerModelBiasJobDefinitionTags</a>>

---

##### `resetEndpointName` <a name="resetEndpointName" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.resetEndpointName"></a>

```java
public void resetEndpointName()
```

##### `resetJobDefinitionName` <a name="resetJobDefinitionName" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.resetJobDefinitionName"></a>

```java
public void resetJobDefinitionName()
```

##### `resetModelBiasBaselineConfig` <a name="resetModelBiasBaselineConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.resetModelBiasBaselineConfig"></a>

```java
public void resetModelBiasBaselineConfig()
```

##### `resetNetworkConfig` <a name="resetNetworkConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.resetNetworkConfig"></a>

```java
public void resetNetworkConfig()
```

##### `resetStoppingCondition` <a name="resetStoppingCondition" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.resetStoppingCondition"></a>

```java
public void resetStoppingCondition()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerModelBiasJobDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.isConstruct"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinition;

SagemakerModelBiasJobDefinition.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinition;

SagemakerModelBiasJobDefinition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinition;

SagemakerModelBiasJobDefinition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinition;

SagemakerModelBiasJobDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SagemakerModelBiasJobDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SagemakerModelBiasJobDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SagemakerModelBiasJobDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SagemakerModelBiasJobDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerModelBiasJobDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.jobDefinitionArn">jobDefinitionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.jobResources">jobResources</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference">SagemakerModelBiasJobDefinitionJobResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasAppSpecification">modelBiasAppSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference">SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasBaselineConfig">modelBiasBaselineConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference">SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasJobInput">modelBiasJobInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasJobOutputConfig">modelBiasJobOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference">SagemakerModelBiasJobDefinitionNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.stoppingCondition">stoppingCondition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference">SagemakerModelBiasJobDefinitionStoppingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList">SagemakerModelBiasJobDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.endpointNameInput">endpointNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.jobDefinitionNameInput">jobDefinitionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.jobResourcesInput">jobResourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResources">SagemakerModelBiasJobDefinitionJobResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasAppSpecificationInput">modelBiasAppSpecificationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecification">SagemakerModelBiasJobDefinitionModelBiasAppSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasBaselineConfigInput">modelBiasBaselineConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfig">SagemakerModelBiasJobDefinitionModelBiasBaselineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasJobInputInput">modelBiasJobInputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInput">SagemakerModelBiasJobDefinitionModelBiasJobInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasJobOutputConfigInput">modelBiasJobOutputConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.networkConfigInput">networkConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfig">SagemakerModelBiasJobDefinitionNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.stoppingConditionInput">stoppingConditionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingCondition">SagemakerModelBiasJobDefinitionStoppingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTags">SagemakerModelBiasJobDefinitionTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.endpointName">endpointName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.jobDefinitionName">jobDefinitionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `jobDefinitionArn`<sup>Required</sup> <a name="jobDefinitionArn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.jobDefinitionArn"></a>

```java
public java.lang.String getJobDefinitionArn();
```

- *Type:* java.lang.String

---

##### `jobResources`<sup>Required</sup> <a name="jobResources" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.jobResources"></a>

```java
public SagemakerModelBiasJobDefinitionJobResourcesOutputReference getJobResources();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference">SagemakerModelBiasJobDefinitionJobResourcesOutputReference</a>

---

##### `modelBiasAppSpecification`<sup>Required</sup> <a name="modelBiasAppSpecification" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasAppSpecification"></a>

```java
public SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference getModelBiasAppSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference">SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference</a>

---

##### `modelBiasBaselineConfig`<sup>Required</sup> <a name="modelBiasBaselineConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasBaselineConfig"></a>

```java
public SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference getModelBiasBaselineConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference">SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference</a>

---

##### `modelBiasJobInput`<sup>Required</sup> <a name="modelBiasJobInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasJobInput"></a>

```java
public SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference getModelBiasJobInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference</a>

---

##### `modelBiasJobOutputConfig`<sup>Required</sup> <a name="modelBiasJobOutputConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasJobOutputConfig"></a>

```java
public SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference getModelBiasJobOutputConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference</a>

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.networkConfig"></a>

```java
public SagemakerModelBiasJobDefinitionNetworkConfigOutputReference getNetworkConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference">SagemakerModelBiasJobDefinitionNetworkConfigOutputReference</a>

---

##### `stoppingCondition`<sup>Required</sup> <a name="stoppingCondition" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.stoppingCondition"></a>

```java
public SagemakerModelBiasJobDefinitionStoppingConditionOutputReference getStoppingCondition();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference">SagemakerModelBiasJobDefinitionStoppingConditionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.tags"></a>

```java
public SagemakerModelBiasJobDefinitionTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList">SagemakerModelBiasJobDefinitionTagsList</a>

---

##### `endpointNameInput`<sup>Optional</sup> <a name="endpointNameInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.endpointNameInput"></a>

```java
public java.lang.String getEndpointNameInput();
```

- *Type:* java.lang.String

---

##### `jobDefinitionNameInput`<sup>Optional</sup> <a name="jobDefinitionNameInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.jobDefinitionNameInput"></a>

```java
public java.lang.String getJobDefinitionNameInput();
```

- *Type:* java.lang.String

---

##### `jobResourcesInput`<sup>Optional</sup> <a name="jobResourcesInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.jobResourcesInput"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionJobResources getJobResourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResources">SagemakerModelBiasJobDefinitionJobResources</a>

---

##### `modelBiasAppSpecificationInput`<sup>Optional</sup> <a name="modelBiasAppSpecificationInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasAppSpecificationInput"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionModelBiasAppSpecification getModelBiasAppSpecificationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecification">SagemakerModelBiasJobDefinitionModelBiasAppSpecification</a>

---

##### `modelBiasBaselineConfigInput`<sup>Optional</sup> <a name="modelBiasBaselineConfigInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasBaselineConfigInput"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionModelBiasBaselineConfig getModelBiasBaselineConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfig">SagemakerModelBiasJobDefinitionModelBiasBaselineConfig</a>

---

##### `modelBiasJobInputInput`<sup>Optional</sup> <a name="modelBiasJobInputInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasJobInputInput"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionModelBiasJobInput getModelBiasJobInputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInput">SagemakerModelBiasJobDefinitionModelBiasJobInput</a>

---

##### `modelBiasJobOutputConfigInput`<sup>Optional</sup> <a name="modelBiasJobOutputConfigInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.modelBiasJobOutputConfigInput"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig getModelBiasJobOutputConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig</a>

---

##### `networkConfigInput`<sup>Optional</sup> <a name="networkConfigInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.networkConfigInput"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionNetworkConfig getNetworkConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfig">SagemakerModelBiasJobDefinitionNetworkConfig</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `stoppingConditionInput`<sup>Optional</sup> <a name="stoppingConditionInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.stoppingConditionInput"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionStoppingCondition getStoppingConditionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingCondition">SagemakerModelBiasJobDefinitionStoppingCondition</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SagemakerModelBiasJobDefinitionTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTags">SagemakerModelBiasJobDefinitionTags</a>>

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.endpointName"></a>

```java
public java.lang.String getEndpointName();
```

- *Type:* java.lang.String

---

##### `jobDefinitionName`<sup>Required</sup> <a name="jobDefinitionName" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.jobDefinitionName"></a>

```java
public java.lang.String getJobDefinitionName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerModelBiasJobDefinitionConfig <a name="SagemakerModelBiasJobDefinitionConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionConfig;

SagemakerModelBiasJobDefinitionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .jobResources(SagemakerModelBiasJobDefinitionJobResources)
    .modelBiasAppSpecification(SagemakerModelBiasJobDefinitionModelBiasAppSpecification)
    .modelBiasJobInput(SagemakerModelBiasJobDefinitionModelBiasJobInput)
    .modelBiasJobOutputConfig(SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig)
    .roleArn(java.lang.String)
//  .endpointName(java.lang.String)
//  .jobDefinitionName(java.lang.String)
//  .modelBiasBaselineConfig(SagemakerModelBiasJobDefinitionModelBiasBaselineConfig)
//  .networkConfig(SagemakerModelBiasJobDefinitionNetworkConfig)
//  .stoppingCondition(SagemakerModelBiasJobDefinitionStoppingCondition)
//  .tags(IResolvable|java.util.List<SagemakerModelBiasJobDefinitionTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.jobResources">jobResources</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResources">SagemakerModelBiasJobDefinitionJobResources</a></code> | Identifies the resources to deploy for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.modelBiasAppSpecification">modelBiasAppSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecification">SagemakerModelBiasJobDefinitionModelBiasAppSpecification</a></code> | Container image configuration object for the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.modelBiasJobInput">modelBiasJobInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInput">SagemakerModelBiasJobDefinitionModelBiasJobInput</a></code> | The inputs for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.modelBiasJobOutputConfig">modelBiasJobOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig</a></code> | The output configuration for monitoring jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.endpointName">endpointName</a></code> | <code>java.lang.String</code> | The name of the endpoint used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.jobDefinitionName">jobDefinitionName</a></code> | <code>java.lang.String</code> | The name of the job definition. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.modelBiasBaselineConfig">modelBiasBaselineConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfig">SagemakerModelBiasJobDefinitionModelBiasBaselineConfig</a></code> | Baseline configuration used to validate that the data conforms to the specified constraints and statistics. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfig">SagemakerModelBiasJobDefinitionNetworkConfig</a></code> | Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.stoppingCondition">stoppingCondition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingCondition">SagemakerModelBiasJobDefinitionStoppingCondition</a></code> | Specifies a time limit for how long the monitoring job is allowed to run. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTags">SagemakerModelBiasJobDefinitionTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `jobResources`<sup>Required</sup> <a name="jobResources" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.jobResources"></a>

```java
public SagemakerModelBiasJobDefinitionJobResources getJobResources();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResources">SagemakerModelBiasJobDefinitionJobResources</a>

Identifies the resources to deploy for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#job_resources SagemakerModelBiasJobDefinition#job_resources}

---

##### `modelBiasAppSpecification`<sup>Required</sup> <a name="modelBiasAppSpecification" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.modelBiasAppSpecification"></a>

```java
public SagemakerModelBiasJobDefinitionModelBiasAppSpecification getModelBiasAppSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecification">SagemakerModelBiasJobDefinitionModelBiasAppSpecification</a>

Container image configuration object for the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#model_bias_app_specification SagemakerModelBiasJobDefinition#model_bias_app_specification}

---

##### `modelBiasJobInput`<sup>Required</sup> <a name="modelBiasJobInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.modelBiasJobInput"></a>

```java
public SagemakerModelBiasJobDefinitionModelBiasJobInput getModelBiasJobInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInput">SagemakerModelBiasJobDefinitionModelBiasJobInput</a>

The inputs for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#model_bias_job_input SagemakerModelBiasJobDefinition#model_bias_job_input}

---

##### `modelBiasJobOutputConfig`<sup>Required</sup> <a name="modelBiasJobOutputConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.modelBiasJobOutputConfig"></a>

```java
public SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig getModelBiasJobOutputConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig</a>

The output configuration for monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#model_bias_job_output_config SagemakerModelBiasJobDefinition#model_bias_job_output_config}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#role_arn SagemakerModelBiasJobDefinition#role_arn}

---

##### `endpointName`<sup>Optional</sup> <a name="endpointName" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.endpointName"></a>

```java
public java.lang.String getEndpointName();
```

- *Type:* java.lang.String

The name of the endpoint used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#endpoint_name SagemakerModelBiasJobDefinition#endpoint_name}

---

##### `jobDefinitionName`<sup>Optional</sup> <a name="jobDefinitionName" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.jobDefinitionName"></a>

```java
public java.lang.String getJobDefinitionName();
```

- *Type:* java.lang.String

The name of the job definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#job_definition_name SagemakerModelBiasJobDefinition#job_definition_name}

---

##### `modelBiasBaselineConfig`<sup>Optional</sup> <a name="modelBiasBaselineConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.modelBiasBaselineConfig"></a>

```java
public SagemakerModelBiasJobDefinitionModelBiasBaselineConfig getModelBiasBaselineConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfig">SagemakerModelBiasJobDefinitionModelBiasBaselineConfig</a>

Baseline configuration used to validate that the data conforms to the specified constraints and statistics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#model_bias_baseline_config SagemakerModelBiasJobDefinition#model_bias_baseline_config}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.networkConfig"></a>

```java
public SagemakerModelBiasJobDefinitionNetworkConfig getNetworkConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfig">SagemakerModelBiasJobDefinitionNetworkConfig</a>

Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#network_config SagemakerModelBiasJobDefinition#network_config}

---

##### `stoppingCondition`<sup>Optional</sup> <a name="stoppingCondition" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.stoppingCondition"></a>

```java
public SagemakerModelBiasJobDefinitionStoppingCondition getStoppingCondition();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingCondition">SagemakerModelBiasJobDefinitionStoppingCondition</a>

Specifies a time limit for how long the monitoring job is allowed to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#stopping_condition SagemakerModelBiasJobDefinition#stopping_condition}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SagemakerModelBiasJobDefinitionTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTags">SagemakerModelBiasJobDefinitionTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#tags SagemakerModelBiasJobDefinition#tags}

---

### SagemakerModelBiasJobDefinitionJobResources <a name="SagemakerModelBiasJobDefinitionJobResources" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResources.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionJobResources;

SagemakerModelBiasJobDefinitionJobResources.builder()
    .clusterConfig(SagemakerModelBiasJobDefinitionJobResourcesClusterConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResources.property.clusterConfig">clusterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig">SagemakerModelBiasJobDefinitionJobResourcesClusterConfig</a></code> | Configuration for the cluster used to run model monitoring jobs. |

---

##### `clusterConfig`<sup>Required</sup> <a name="clusterConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResources.property.clusterConfig"></a>

```java
public SagemakerModelBiasJobDefinitionJobResourcesClusterConfig getClusterConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig">SagemakerModelBiasJobDefinitionJobResourcesClusterConfig</a>

Configuration for the cluster used to run model monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#cluster_config SagemakerModelBiasJobDefinition#cluster_config}

---

### SagemakerModelBiasJobDefinitionJobResourcesClusterConfig <a name="SagemakerModelBiasJobDefinitionJobResourcesClusterConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig;

SagemakerModelBiasJobDefinitionJobResourcesClusterConfig.builder()
    .instanceCount(java.lang.Number)
    .instanceType(java.lang.String)
    .volumeSizeInGb(java.lang.Number)
//  .volumeKmsKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | The number of ML compute instances to use in the model monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | The ML compute instance type for the processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>java.lang.Number</code> | The size of the ML storage volume, in gigabytes, that you want to provision. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig.property.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>java.lang.String</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job. |

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

The number of ML compute instances to use in the model monitoring job.

For distributed processing jobs, specify a value greater than 1. The default value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#instance_count SagemakerModelBiasJobDefinition#instance_count}

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

The ML compute instance type for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#instance_type SagemakerModelBiasJobDefinition#instance_type}

---

##### `volumeSizeInGb`<sup>Required</sup> <a name="volumeSizeInGb" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig.property.volumeSizeInGb"></a>

```java
public java.lang.Number getVolumeSizeInGb();
```

- *Type:* java.lang.Number

The size of the ML storage volume, in gigabytes, that you want to provision.

You must specify sufficient ML storage for your scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#volume_size_in_gb SagemakerModelBiasJobDefinition#volume_size_in_gb}

---

##### `volumeKmsKeyId`<sup>Optional</sup> <a name="volumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig.property.volumeKmsKeyId"></a>

```java
public java.lang.String getVolumeKmsKeyId();
```

- *Type:* java.lang.String

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#volume_kms_key_id SagemakerModelBiasJobDefinition#volume_kms_key_id}

---

### SagemakerModelBiasJobDefinitionModelBiasAppSpecification <a name="SagemakerModelBiasJobDefinitionModelBiasAppSpecification" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionModelBiasAppSpecification;

SagemakerModelBiasJobDefinitionModelBiasAppSpecification.builder()
    .configUri(java.lang.String)
    .imageUri(java.lang.String)
//  .environment(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecification.property.configUri">configUri</a></code> | <code>java.lang.String</code> | The S3 URI to an analysis configuration file. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecification.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | The container image to be run by the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecification.property.environment">environment</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Sets the environment variables in the Docker container. |

---

##### `configUri`<sup>Required</sup> <a name="configUri" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecification.property.configUri"></a>

```java
public java.lang.String getConfigUri();
```

- *Type:* java.lang.String

The S3 URI to an analysis configuration file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#config_uri SagemakerModelBiasJobDefinition#config_uri}

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecification.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

The container image to be run by the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#image_uri SagemakerModelBiasJobDefinition#image_uri}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecification.property.environment"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironment();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Sets the environment variables in the Docker container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#environment SagemakerModelBiasJobDefinition#environment}

---

### SagemakerModelBiasJobDefinitionModelBiasBaselineConfig <a name="SagemakerModelBiasJobDefinitionModelBiasBaselineConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfig;

SagemakerModelBiasJobDefinitionModelBiasBaselineConfig.builder()
//  .baseliningJobName(java.lang.String)
//  .constraintsResource(SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfig.property.baseliningJobName">baseliningJobName</a></code> | <code>java.lang.String</code> | The name of a processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfig.property.constraintsResource">constraintsResource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource">SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource</a></code> | The baseline constraints resource for a monitoring job. |

---

##### `baseliningJobName`<sup>Optional</sup> <a name="baseliningJobName" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfig.property.baseliningJobName"></a>

```java
public java.lang.String getBaseliningJobName();
```

- *Type:* java.lang.String

The name of a processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#baselining_job_name SagemakerModelBiasJobDefinition#baselining_job_name}

---

##### `constraintsResource`<sup>Optional</sup> <a name="constraintsResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfig.property.constraintsResource"></a>

```java
public SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource getConstraintsResource();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource">SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource</a>

The baseline constraints resource for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#constraints_resource SagemakerModelBiasJobDefinition#constraints_resource}

---

### SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource <a name="SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource;

SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource.builder()
//  .s3Uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | The Amazon S3 URI for baseline constraint file in Amazon S3 that the current monitoring job should validated against. |

---

##### `s3Uri`<sup>Optional</sup> <a name="s3Uri" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

The Amazon S3 URI for baseline constraint file in Amazon S3 that the current monitoring job should validated against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#s3_uri SagemakerModelBiasJobDefinition#s3_uri}

---

### SagemakerModelBiasJobDefinitionModelBiasJobInput <a name="SagemakerModelBiasJobDefinitionModelBiasJobInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInput.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionModelBiasJobInput;

SagemakerModelBiasJobDefinitionModelBiasJobInput.builder()
    .groundTruthS3Input(SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input)
//  .batchTransformInput(SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput)
//  .endpointInput(SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInput.property.groundTruthS3Input">groundTruthS3Input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input">SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input</a></code> | Ground truth input provided in S3. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInput.property.batchTransformInput">batchTransformInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput</a></code> | The batch transform input for a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInput.property.endpointInput">endpointInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput">SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput</a></code> | The endpoint for a monitoring job. |

---

##### `groundTruthS3Input`<sup>Required</sup> <a name="groundTruthS3Input" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInput.property.groundTruthS3Input"></a>

```java
public SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input getGroundTruthS3Input();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input">SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input</a>

Ground truth input provided in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#ground_truth_s3_input SagemakerModelBiasJobDefinition#ground_truth_s3_input}

---

##### `batchTransformInput`<sup>Optional</sup> <a name="batchTransformInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInput.property.batchTransformInput"></a>

```java
public SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput getBatchTransformInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput</a>

The batch transform input for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#batch_transform_input SagemakerModelBiasJobDefinition#batch_transform_input}

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInput.property.endpointInput"></a>

```java
public SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput getEndpointInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput">SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput</a>

The endpoint for a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#endpoint_input SagemakerModelBiasJobDefinition#endpoint_input}

---

### SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput <a name="SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput;

SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.builder()
//  .dataCapturedDestinationS3Uri(java.lang.String)
//  .datasetFormat(SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat)
//  .endTimeOffset(java.lang.String)
//  .featuresAttribute(java.lang.String)
//  .inferenceAttribute(java.lang.String)
//  .localPath(java.lang.String)
//  .probabilityAttribute(java.lang.String)
//  .probabilityThresholdAttribute(java.lang.Number)
//  .s3DataDistributionType(java.lang.String)
//  .s3InputMode(java.lang.String)
//  .startTimeOffset(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.dataCapturedDestinationS3Uri">dataCapturedDestinationS3Uri</a></code> | <code>java.lang.String</code> | A URI that identifies the Amazon S3 storage location where Batch Transform Job captures data. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.datasetFormat">datasetFormat</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat</a></code> | The dataset format of the data to monitor. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.endTimeOffset">endTimeOffset</a></code> | <code>java.lang.String</code> | Monitoring end time offset, e.g. PT0H. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.featuresAttribute">featuresAttribute</a></code> | <code>java.lang.String</code> | JSONpath to locate features in JSONlines dataset. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.inferenceAttribute">inferenceAttribute</a></code> | <code>java.lang.String</code> | Index or JSONpath to locate predicted label(s). |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.localPath">localPath</a></code> | <code>java.lang.String</code> | Path to the filesystem where the endpoint data is available to the container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.probabilityAttribute">probabilityAttribute</a></code> | <code>java.lang.String</code> | Index or JSONpath to locate probabilities. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.probabilityThresholdAttribute">probabilityThresholdAttribute</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#probability_threshold_attribute SagemakerModelBiasJobDefinition#probability_threshold_attribute}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.s3DataDistributionType">s3DataDistributionType</a></code> | <code>java.lang.String</code> | Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.s3InputMode">s3InputMode</a></code> | <code>java.lang.String</code> | Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.startTimeOffset">startTimeOffset</a></code> | <code>java.lang.String</code> | Monitoring start time offset, e.g. -PT1H. |

---

##### `dataCapturedDestinationS3Uri`<sup>Optional</sup> <a name="dataCapturedDestinationS3Uri" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.dataCapturedDestinationS3Uri"></a>

```java
public java.lang.String getDataCapturedDestinationS3Uri();
```

- *Type:* java.lang.String

A URI that identifies the Amazon S3 storage location where Batch Transform Job captures data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#data_captured_destination_s3_uri SagemakerModelBiasJobDefinition#data_captured_destination_s3_uri}

---

##### `datasetFormat`<sup>Optional</sup> <a name="datasetFormat" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.datasetFormat"></a>

```java
public SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat getDatasetFormat();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat</a>

The dataset format of the data to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#dataset_format SagemakerModelBiasJobDefinition#dataset_format}

---

##### `endTimeOffset`<sup>Optional</sup> <a name="endTimeOffset" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.endTimeOffset"></a>

```java
public java.lang.String getEndTimeOffset();
```

- *Type:* java.lang.String

Monitoring end time offset, e.g. PT0H.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#end_time_offset SagemakerModelBiasJobDefinition#end_time_offset}

---

##### `featuresAttribute`<sup>Optional</sup> <a name="featuresAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.featuresAttribute"></a>

```java
public java.lang.String getFeaturesAttribute();
```

- *Type:* java.lang.String

JSONpath to locate features in JSONlines dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#features_attribute SagemakerModelBiasJobDefinition#features_attribute}

---

##### `inferenceAttribute`<sup>Optional</sup> <a name="inferenceAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.inferenceAttribute"></a>

```java
public java.lang.String getInferenceAttribute();
```

- *Type:* java.lang.String

Index or JSONpath to locate predicted label(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#inference_attribute SagemakerModelBiasJobDefinition#inference_attribute}

---

##### `localPath`<sup>Optional</sup> <a name="localPath" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.localPath"></a>

```java
public java.lang.String getLocalPath();
```

- *Type:* java.lang.String

Path to the filesystem where the endpoint data is available to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#local_path SagemakerModelBiasJobDefinition#local_path}

---

##### `probabilityAttribute`<sup>Optional</sup> <a name="probabilityAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.probabilityAttribute"></a>

```java
public java.lang.String getProbabilityAttribute();
```

- *Type:* java.lang.String

Index or JSONpath to locate probabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#probability_attribute SagemakerModelBiasJobDefinition#probability_attribute}

---

##### `probabilityThresholdAttribute`<sup>Optional</sup> <a name="probabilityThresholdAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.probabilityThresholdAttribute"></a>

```java
public java.lang.Number getProbabilityThresholdAttribute();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#probability_threshold_attribute SagemakerModelBiasJobDefinition#probability_threshold_attribute}.

---

##### `s3DataDistributionType`<sup>Optional</sup> <a name="s3DataDistributionType" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.s3DataDistributionType"></a>

```java
public java.lang.String getS3DataDistributionType();
```

- *Type:* java.lang.String

Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#s3_data_distribution_type SagemakerModelBiasJobDefinition#s3_data_distribution_type}

---

##### `s3InputMode`<sup>Optional</sup> <a name="s3InputMode" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.s3InputMode"></a>

```java
public java.lang.String getS3InputMode();
```

- *Type:* java.lang.String

Whether the Pipe or File is used as the input mode for transfering data for the monitoring job.

Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#s3_input_mode SagemakerModelBiasJobDefinition#s3_input_mode}

---

##### `startTimeOffset`<sup>Optional</sup> <a name="startTimeOffset" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.property.startTimeOffset"></a>

```java
public java.lang.String getStartTimeOffset();
```

- *Type:* java.lang.String

Monitoring start time offset, e.g. -PT1H.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#start_time_offset SagemakerModelBiasJobDefinition#start_time_offset}

---

### SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat <a name="SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat;

SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat.builder()
//  .csv(SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv)
//  .json(SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson)
//  .parquet(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv</a></code> | The CSV format. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat.property.json">json</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson</a></code> | The Json format. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat.property.parquet">parquet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A flag indicate if the dataset format is Parquet. |

---

##### `csv`<sup>Optional</sup> <a name="csv" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat.property.csv"></a>

```java
public SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv getCsv();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv</a>

The CSV format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#csv SagemakerModelBiasJobDefinition#csv}

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat.property.json"></a>

```java
public SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson getJson();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson</a>

The Json format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#json SagemakerModelBiasJobDefinition#json}

---

##### `parquet`<sup>Optional</sup> <a name="parquet" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat.property.parquet"></a>

```java
public java.lang.Boolean|IResolvable getParquet();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A flag indicate if the dataset format is Parquet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#parquet SagemakerModelBiasJobDefinition#parquet}

---

### SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv <a name="SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv;

SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv.builder()
//  .header(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv.property.header">header</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean flag indicating if given CSV has header. |

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv.property.header"></a>

```java
public java.lang.Boolean|IResolvable getHeader();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean flag indicating if given CSV has header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#header SagemakerModelBiasJobDefinition#header}

---

### SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson <a name="SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson;

SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson.builder()
//  .line(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson.property.line">line</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean flag indicating if it is JSON line format. |

---

##### `line`<sup>Optional</sup> <a name="line" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson.property.line"></a>

```java
public java.lang.Boolean|IResolvable getLine();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean flag indicating if it is JSON line format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#line SagemakerModelBiasJobDefinition#line}

---

### SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput <a name="SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput;

SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.builder()
//  .endpointName(java.lang.String)
//  .endTimeOffset(java.lang.String)
//  .featuresAttribute(java.lang.String)
//  .inferenceAttribute(java.lang.String)
//  .localPath(java.lang.String)
//  .probabilityAttribute(java.lang.String)
//  .probabilityThresholdAttribute(java.lang.Number)
//  .s3DataDistributionType(java.lang.String)
//  .s3InputMode(java.lang.String)
//  .startTimeOffset(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.endpointName">endpointName</a></code> | <code>java.lang.String</code> | The name of the endpoint used to run the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.endTimeOffset">endTimeOffset</a></code> | <code>java.lang.String</code> | Monitoring end time offset, e.g. PT0H. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.featuresAttribute">featuresAttribute</a></code> | <code>java.lang.String</code> | JSONpath to locate features in JSONlines dataset. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.inferenceAttribute">inferenceAttribute</a></code> | <code>java.lang.String</code> | Index or JSONpath to locate predicted label(s). |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.localPath">localPath</a></code> | <code>java.lang.String</code> | Path to the filesystem where the endpoint data is available to the container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.probabilityAttribute">probabilityAttribute</a></code> | <code>java.lang.String</code> | Index or JSONpath to locate probabilities. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.probabilityThresholdAttribute">probabilityThresholdAttribute</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#probability_threshold_attribute SagemakerModelBiasJobDefinition#probability_threshold_attribute}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.s3DataDistributionType">s3DataDistributionType</a></code> | <code>java.lang.String</code> | Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.s3InputMode">s3InputMode</a></code> | <code>java.lang.String</code> | Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.startTimeOffset">startTimeOffset</a></code> | <code>java.lang.String</code> | Monitoring start time offset, e.g. -PT1H. |

---

##### `endpointName`<sup>Optional</sup> <a name="endpointName" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.endpointName"></a>

```java
public java.lang.String getEndpointName();
```

- *Type:* java.lang.String

The name of the endpoint used to run the monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#endpoint_name SagemakerModelBiasJobDefinition#endpoint_name}

---

##### `endTimeOffset`<sup>Optional</sup> <a name="endTimeOffset" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.endTimeOffset"></a>

```java
public java.lang.String getEndTimeOffset();
```

- *Type:* java.lang.String

Monitoring end time offset, e.g. PT0H.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#end_time_offset SagemakerModelBiasJobDefinition#end_time_offset}

---

##### `featuresAttribute`<sup>Optional</sup> <a name="featuresAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.featuresAttribute"></a>

```java
public java.lang.String getFeaturesAttribute();
```

- *Type:* java.lang.String

JSONpath to locate features in JSONlines dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#features_attribute SagemakerModelBiasJobDefinition#features_attribute}

---

##### `inferenceAttribute`<sup>Optional</sup> <a name="inferenceAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.inferenceAttribute"></a>

```java
public java.lang.String getInferenceAttribute();
```

- *Type:* java.lang.String

Index or JSONpath to locate predicted label(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#inference_attribute SagemakerModelBiasJobDefinition#inference_attribute}

---

##### `localPath`<sup>Optional</sup> <a name="localPath" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.localPath"></a>

```java
public java.lang.String getLocalPath();
```

- *Type:* java.lang.String

Path to the filesystem where the endpoint data is available to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#local_path SagemakerModelBiasJobDefinition#local_path}

---

##### `probabilityAttribute`<sup>Optional</sup> <a name="probabilityAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.probabilityAttribute"></a>

```java
public java.lang.String getProbabilityAttribute();
```

- *Type:* java.lang.String

Index or JSONpath to locate probabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#probability_attribute SagemakerModelBiasJobDefinition#probability_attribute}

---

##### `probabilityThresholdAttribute`<sup>Optional</sup> <a name="probabilityThresholdAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.probabilityThresholdAttribute"></a>

```java
public java.lang.Number getProbabilityThresholdAttribute();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#probability_threshold_attribute SagemakerModelBiasJobDefinition#probability_threshold_attribute}.

---

##### `s3DataDistributionType`<sup>Optional</sup> <a name="s3DataDistributionType" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.s3DataDistributionType"></a>

```java
public java.lang.String getS3DataDistributionType();
```

- *Type:* java.lang.String

Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#s3_data_distribution_type SagemakerModelBiasJobDefinition#s3_data_distribution_type}

---

##### `s3InputMode`<sup>Optional</sup> <a name="s3InputMode" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.s3InputMode"></a>

```java
public java.lang.String getS3InputMode();
```

- *Type:* java.lang.String

Whether the Pipe or File is used as the input mode for transfering data for the monitoring job.

Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#s3_input_mode SagemakerModelBiasJobDefinition#s3_input_mode}

---

##### `startTimeOffset`<sup>Optional</sup> <a name="startTimeOffset" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.property.startTimeOffset"></a>

```java
public java.lang.String getStartTimeOffset();
```

- *Type:* java.lang.String

Monitoring start time offset, e.g. -PT1H.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#start_time_offset SagemakerModelBiasJobDefinition#start_time_offset}

---

### SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input <a name="SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input;

SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input.builder()
    .s3Uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. |

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#s3_uri SagemakerModelBiasJobDefinition#s3_uri}

---

### SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig <a name="SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig;

SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig.builder()
    .monitoringOutputs(IResolvable|java.util.List<SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs>)
//  .kmsKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig.property.monitoringOutputs">monitoringOutputs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs</a>></code> | Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption. |

---

##### `monitoringOutputs`<sup>Required</sup> <a name="monitoringOutputs" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig.property.monitoringOutputs"></a>

```java
public IResolvable|java.util.List<SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs> getMonitoringOutputs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs</a>>

Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#monitoring_outputs SagemakerModelBiasJobDefinition#monitoring_outputs}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#kms_key_id SagemakerModelBiasJobDefinition#kms_key_id}

---

### SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs <a name="SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs;

SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs.builder()
    .s3Output(SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs.property.s3Output">s3Output</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output</a></code> | Information about where and how to store the results of a monitoring job. |

---

##### `s3Output`<sup>Required</sup> <a name="s3Output" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs.property.s3Output"></a>

```java
public SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output getS3Output();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output</a>

Information about where and how to store the results of a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#s3_output SagemakerModelBiasJobDefinition#s3_output}

---

### SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output <a name="SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output;

SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output.builder()
    .localPath(java.lang.String)
    .s3Uri(java.lang.String)
//  .s3UploadMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output.property.localPath">localPath</a></code> | <code>java.lang.String</code> | The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output.property.s3UploadMode">s3UploadMode</a></code> | <code>java.lang.String</code> | Whether to upload the results of the monitoring job continuously or after the job completes. |

---

##### `localPath`<sup>Required</sup> <a name="localPath" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output.property.localPath"></a>

```java
public java.lang.String getLocalPath();
```

- *Type:* java.lang.String

The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.

LocalPath is an absolute path for the output data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#local_path SagemakerModelBiasJobDefinition#local_path}

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#s3_uri SagemakerModelBiasJobDefinition#s3_uri}

---

##### `s3UploadMode`<sup>Optional</sup> <a name="s3UploadMode" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output.property.s3UploadMode"></a>

```java
public java.lang.String getS3UploadMode();
```

- *Type:* java.lang.String

Whether to upload the results of the monitoring job continuously or after the job completes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#s3_upload_mode SagemakerModelBiasJobDefinition#s3_upload_mode}

---

### SagemakerModelBiasJobDefinitionNetworkConfig <a name="SagemakerModelBiasJobDefinitionNetworkConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionNetworkConfig;

SagemakerModelBiasJobDefinitionNetworkConfig.builder()
//  .enableInterContainerTrafficEncryption(java.lang.Boolean|IResolvable)
//  .enableNetworkIsolation(java.lang.Boolean|IResolvable)
//  .vpcConfig(SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfig.property.enableInterContainerTrafficEncryption">enableInterContainerTrafficEncryption</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to encrypt all communications between distributed processing jobs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfig.property.enableNetworkIsolation">enableNetworkIsolation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to allow inbound and outbound network calls to and from the containers used for the processing job. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfig.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig">SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig</a></code> | Specifies a VPC that your training jobs and hosted models have access to. |

---

##### `enableInterContainerTrafficEncryption`<sup>Optional</sup> <a name="enableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfig.property.enableInterContainerTrafficEncryption"></a>

```java
public java.lang.Boolean|IResolvable getEnableInterContainerTrafficEncryption();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to encrypt all communications between distributed processing jobs.

Choose True to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#enable_inter_container_traffic_encryption SagemakerModelBiasJobDefinition#enable_inter_container_traffic_encryption}

---

##### `enableNetworkIsolation`<sup>Optional</sup> <a name="enableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfig.property.enableNetworkIsolation"></a>

```java
public java.lang.Boolean|IResolvable getEnableNetworkIsolation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to allow inbound and outbound network calls to and from the containers used for the processing job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#enable_network_isolation SagemakerModelBiasJobDefinition#enable_network_isolation}

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfig.property.vpcConfig"></a>

```java
public SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig getVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig">SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig</a>

Specifies a VPC that your training jobs and hosted models have access to.

Control access to and from your training and model containers by configuring the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#vpc_config SagemakerModelBiasJobDefinition#vpc_config}

---

### SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig <a name="SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig;

SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig.builder()
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnets(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | The VPC security group IDs, in the form sg-xxxxxxxx. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | The ID of the subnets in the VPC to which you want to connect to your monitoring jobs. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

The VPC security group IDs, in the form sg-xxxxxxxx.

Specify the security groups for the VPC that is specified in the Subnets field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#security_group_ids SagemakerModelBiasJobDefinition#security_group_ids}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

The ID of the subnets in the VPC to which you want to connect to your monitoring jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#subnets SagemakerModelBiasJobDefinition#subnets}

---

### SagemakerModelBiasJobDefinitionStoppingCondition <a name="SagemakerModelBiasJobDefinitionStoppingCondition" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingCondition.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionStoppingCondition;

SagemakerModelBiasJobDefinitionStoppingCondition.builder()
//  .maxRuntimeInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingCondition.property.maxRuntimeInSeconds">maxRuntimeInSeconds</a></code> | <code>java.lang.Number</code> | The maximum runtime allowed in seconds. |

---

##### `maxRuntimeInSeconds`<sup>Optional</sup> <a name="maxRuntimeInSeconds" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingCondition.property.maxRuntimeInSeconds"></a>

```java
public java.lang.Number getMaxRuntimeInSeconds();
```

- *Type:* java.lang.Number

The maximum runtime allowed in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#max_runtime_in_seconds SagemakerModelBiasJobDefinition#max_runtime_in_seconds}

---

### SagemakerModelBiasJobDefinitionTags <a name="SagemakerModelBiasJobDefinitionTags" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionTags;

SagemakerModelBiasJobDefinitionTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#key SagemakerModelBiasJobDefinition#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_model_bias_job_definition#value SagemakerModelBiasJobDefinition#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference <a name="SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference;

new SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.resetVolumeKmsKeyId">resetVolumeKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVolumeKmsKeyId` <a name="resetVolumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.resetVolumeKmsKeyId"></a>

```java
public void resetVolumeKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyIdInput">volumeKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGbInput">volumeSizeInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig">SagemakerModelBiasJobDefinitionJobResourcesClusterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCountInput"></a>

```java
public java.lang.Number getInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `volumeKmsKeyIdInput`<sup>Optional</sup> <a name="volumeKmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyIdInput"></a>

```java
public java.lang.String getVolumeKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `volumeSizeInGbInput`<sup>Optional</sup> <a name="volumeSizeInGbInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGbInput"></a>

```java
public java.lang.Number getVolumeSizeInGbInput();
```

- *Type:* java.lang.Number

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `volumeKmsKeyId`<sup>Required</sup> <a name="volumeKmsKeyId" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId"></a>

```java
public java.lang.String getVolumeKmsKeyId();
```

- *Type:* java.lang.String

---

##### `volumeSizeInGb`<sup>Required</sup> <a name="volumeSizeInGb" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb"></a>

```java
public java.lang.Number getVolumeSizeInGb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionJobResourcesClusterConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig">SagemakerModelBiasJobDefinitionJobResourcesClusterConfig</a>

---


### SagemakerModelBiasJobDefinitionJobResourcesOutputReference <a name="SagemakerModelBiasJobDefinitionJobResourcesOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference;

new SagemakerModelBiasJobDefinitionJobResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.putClusterConfig">putClusterConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClusterConfig` <a name="putClusterConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.putClusterConfig"></a>

```java
public void putClusterConfig(SagemakerModelBiasJobDefinitionJobResourcesClusterConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.putClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig">SagemakerModelBiasJobDefinitionJobResourcesClusterConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.clusterConfig">clusterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference">SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.clusterConfigInput">clusterConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig">SagemakerModelBiasJobDefinitionJobResourcesClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResources">SagemakerModelBiasJobDefinitionJobResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterConfig`<sup>Required</sup> <a name="clusterConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.clusterConfig"></a>

```java
public SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference getClusterConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference">SagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference</a>

---

##### `clusterConfigInput`<sup>Optional</sup> <a name="clusterConfigInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.clusterConfigInput"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionJobResourcesClusterConfig getClusterConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesClusterConfig">SagemakerModelBiasJobDefinitionJobResourcesClusterConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionJobResources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionJobResources">SagemakerModelBiasJobDefinitionJobResources</a>

---


### SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference <a name="SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference;

new SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.resetEnvironment"></a>

```java
public void resetEnvironment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.configUriInput">configUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.environmentInput">environmentInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.imageUriInput">imageUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.configUri">configUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.environment">environment</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecification">SagemakerModelBiasJobDefinitionModelBiasAppSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configUriInput`<sup>Optional</sup> <a name="configUriInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.configUriInput"></a>

```java
public java.lang.String getConfigUriInput();
```

- *Type:* java.lang.String

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.environmentInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `imageUriInput`<sup>Optional</sup> <a name="imageUriInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.imageUriInput"></a>

```java
public java.lang.String getImageUriInput();
```

- *Type:* java.lang.String

---

##### `configUri`<sup>Required</sup> <a name="configUri" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.configUri"></a>

```java
public java.lang.String getConfigUri();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.environment"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironment();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionModelBiasAppSpecification getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasAppSpecification">SagemakerModelBiasJobDefinitionModelBiasAppSpecification</a>

---


### SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference <a name="SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference;

new SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.resetS3Uri">resetS3Uri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3Uri` <a name="resetS3Uri" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.resetS3Uri"></a>

```java
public void resetS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource">SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.s3UriInput"></a>

```java
public java.lang.String getS3UriInput();
```

- *Type:* java.lang.String

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource">SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource</a>

---


### SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference <a name="SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference;

new SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.putConstraintsResource">putConstraintsResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.resetBaseliningJobName">resetBaseliningJobName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.resetConstraintsResource">resetConstraintsResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConstraintsResource` <a name="putConstraintsResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.putConstraintsResource"></a>

```java
public void putConstraintsResource(SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.putConstraintsResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource">SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource</a>

---

##### `resetBaseliningJobName` <a name="resetBaseliningJobName" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.resetBaseliningJobName"></a>

```java
public void resetBaseliningJobName()
```

##### `resetConstraintsResource` <a name="resetConstraintsResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.resetConstraintsResource"></a>

```java
public void resetConstraintsResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.constraintsResource">constraintsResource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference">SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.baseliningJobNameInput">baseliningJobNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.constraintsResourceInput">constraintsResourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource">SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.baseliningJobName">baseliningJobName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfig">SagemakerModelBiasJobDefinitionModelBiasBaselineConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `constraintsResource`<sup>Required</sup> <a name="constraintsResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.constraintsResource"></a>

```java
public SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference getConstraintsResource();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference">SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference</a>

---

##### `baseliningJobNameInput`<sup>Optional</sup> <a name="baseliningJobNameInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.baseliningJobNameInput"></a>

```java
public java.lang.String getBaseliningJobNameInput();
```

- *Type:* java.lang.String

---

##### `constraintsResourceInput`<sup>Optional</sup> <a name="constraintsResourceInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.constraintsResourceInput"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource getConstraintsResourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource">SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource</a>

---

##### `baseliningJobName`<sup>Required</sup> <a name="baseliningJobName" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.baseliningJobName"></a>

```java
public java.lang.String getBaseliningJobName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionModelBiasBaselineConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasBaselineConfig">SagemakerModelBiasJobDefinitionModelBiasBaselineConfig</a>

---


### SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference <a name="SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference;

new SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.resetHeader">resetHeader</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeader` <a name="resetHeader" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.resetHeader"></a>

```java
public void resetHeader()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.headerInput">headerInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header">header</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.headerInput"></a>

```java
public java.lang.Boolean|IResolvable getHeaderInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header"></a>

```java
public java.lang.Boolean|IResolvable getHeader();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv</a>

---


### SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference <a name="SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference;

new SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.resetLine">resetLine</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLine` <a name="resetLine" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.resetLine"></a>

```java
public void resetLine()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.lineInput">lineInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line">line</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lineInput`<sup>Optional</sup> <a name="lineInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.lineInput"></a>

```java
public java.lang.Boolean|IResolvable getLineInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `line`<sup>Required</sup> <a name="line" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line"></a>

```java
public java.lang.Boolean|IResolvable getLine();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson</a>

---


### SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference <a name="SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference;

new SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.putCsv">putCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.putJson">putJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.resetCsv">resetCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.resetJson">resetJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.resetParquet">resetParquet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCsv` <a name="putCsv" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.putCsv"></a>

```java
public void putCsv(SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.putCsv.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv</a>

---

##### `putJson` <a name="putJson" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.putJson"></a>

```java
public void putJson(SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.putJson.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson</a>

---

##### `resetCsv` <a name="resetCsv" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.resetCsv"></a>

```java
public void resetCsv()
```

##### `resetJson` <a name="resetJson" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.resetJson"></a>

```java
public void resetJson()
```

##### `resetParquet` <a name="resetParquet" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.resetParquet"></a>

```java
public void resetParquet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.json">json</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.csvInput">csvInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.jsonInput">jsonInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.parquetInput">parquetInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.parquet">parquet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.csv"></a>

```java
public SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference getCsv();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference</a>

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.json"></a>

```java
public SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference getJson();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference</a>

---

##### `csvInput`<sup>Optional</sup> <a name="csvInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.csvInput"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv getCsvInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv</a>

---

##### `jsonInput`<sup>Optional</sup> <a name="jsonInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.jsonInput"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson getJsonInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson</a>

---

##### `parquetInput`<sup>Optional</sup> <a name="parquetInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.parquetInput"></a>

```java
public java.lang.Boolean|IResolvable getParquetInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `parquet`<sup>Required</sup> <a name="parquet" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.parquet"></a>

```java
public java.lang.Boolean|IResolvable getParquet();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat</a>

---


### SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference <a name="SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference;

new SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.putDatasetFormat">putDatasetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetDataCapturedDestinationS3Uri">resetDataCapturedDestinationS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetDatasetFormat">resetDatasetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetEndTimeOffset">resetEndTimeOffset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetFeaturesAttribute">resetFeaturesAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetInferenceAttribute">resetInferenceAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetLocalPath">resetLocalPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetProbabilityAttribute">resetProbabilityAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetProbabilityThresholdAttribute">resetProbabilityThresholdAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetS3DataDistributionType">resetS3DataDistributionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetS3InputMode">resetS3InputMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetStartTimeOffset">resetStartTimeOffset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatasetFormat` <a name="putDatasetFormat" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.putDatasetFormat"></a>

```java
public void putDatasetFormat(SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.putDatasetFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat</a>

---

##### `resetDataCapturedDestinationS3Uri` <a name="resetDataCapturedDestinationS3Uri" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetDataCapturedDestinationS3Uri"></a>

```java
public void resetDataCapturedDestinationS3Uri()
```

##### `resetDatasetFormat` <a name="resetDatasetFormat" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetDatasetFormat"></a>

```java
public void resetDatasetFormat()
```

##### `resetEndTimeOffset` <a name="resetEndTimeOffset" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetEndTimeOffset"></a>

```java
public void resetEndTimeOffset()
```

##### `resetFeaturesAttribute` <a name="resetFeaturesAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetFeaturesAttribute"></a>

```java
public void resetFeaturesAttribute()
```

##### `resetInferenceAttribute` <a name="resetInferenceAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetInferenceAttribute"></a>

```java
public void resetInferenceAttribute()
```

##### `resetLocalPath` <a name="resetLocalPath" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetLocalPath"></a>

```java
public void resetLocalPath()
```

##### `resetProbabilityAttribute` <a name="resetProbabilityAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetProbabilityAttribute"></a>

```java
public void resetProbabilityAttribute()
```

##### `resetProbabilityThresholdAttribute` <a name="resetProbabilityThresholdAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetProbabilityThresholdAttribute"></a>

```java
public void resetProbabilityThresholdAttribute()
```

##### `resetS3DataDistributionType` <a name="resetS3DataDistributionType" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetS3DataDistributionType"></a>

```java
public void resetS3DataDistributionType()
```

##### `resetS3InputMode` <a name="resetS3InputMode" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetS3InputMode"></a>

```java
public void resetS3InputMode()
```

##### `resetStartTimeOffset` <a name="resetStartTimeOffset" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resetStartTimeOffset"></a>

```java
public void resetStartTimeOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.datasetFormat">datasetFormat</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3UriInput">dataCapturedDestinationS3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.datasetFormatInput">datasetFormatInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.endTimeOffsetInput">endTimeOffsetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.featuresAttributeInput">featuresAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.inferenceAttributeInput">inferenceAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.localPathInput">localPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.probabilityAttributeInput">probabilityAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.probabilityThresholdAttributeInput">probabilityThresholdAttributeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.s3DataDistributionTypeInput">s3DataDistributionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.s3InputModeInput">s3InputModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.startTimeOffsetInput">startTimeOffsetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri">dataCapturedDestinationS3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.endTimeOffset">endTimeOffset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.featuresAttribute">featuresAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.inferenceAttribute">inferenceAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.localPath">localPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.probabilityAttribute">probabilityAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.probabilityThresholdAttribute">probabilityThresholdAttribute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.s3DataDistributionType">s3DataDistributionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.s3InputMode">s3InputMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.startTimeOffset">startTimeOffset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetFormat`<sup>Required</sup> <a name="datasetFormat" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.datasetFormat"></a>

```java
public SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference getDatasetFormat();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference</a>

---

##### `dataCapturedDestinationS3UriInput`<sup>Optional</sup> <a name="dataCapturedDestinationS3UriInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3UriInput"></a>

```java
public java.lang.String getDataCapturedDestinationS3UriInput();
```

- *Type:* java.lang.String

---

##### `datasetFormatInput`<sup>Optional</sup> <a name="datasetFormatInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.datasetFormatInput"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat getDatasetFormatInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat</a>

---

##### `endTimeOffsetInput`<sup>Optional</sup> <a name="endTimeOffsetInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.endTimeOffsetInput"></a>

```java
public java.lang.String getEndTimeOffsetInput();
```

- *Type:* java.lang.String

---

##### `featuresAttributeInput`<sup>Optional</sup> <a name="featuresAttributeInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.featuresAttributeInput"></a>

```java
public java.lang.String getFeaturesAttributeInput();
```

- *Type:* java.lang.String

---

##### `inferenceAttributeInput`<sup>Optional</sup> <a name="inferenceAttributeInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.inferenceAttributeInput"></a>

```java
public java.lang.String getInferenceAttributeInput();
```

- *Type:* java.lang.String

---

##### `localPathInput`<sup>Optional</sup> <a name="localPathInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.localPathInput"></a>

```java
public java.lang.String getLocalPathInput();
```

- *Type:* java.lang.String

---

##### `probabilityAttributeInput`<sup>Optional</sup> <a name="probabilityAttributeInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.probabilityAttributeInput"></a>

```java
public java.lang.String getProbabilityAttributeInput();
```

- *Type:* java.lang.String

---

##### `probabilityThresholdAttributeInput`<sup>Optional</sup> <a name="probabilityThresholdAttributeInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.probabilityThresholdAttributeInput"></a>

```java
public java.lang.Number getProbabilityThresholdAttributeInput();
```

- *Type:* java.lang.Number

---

##### `s3DataDistributionTypeInput`<sup>Optional</sup> <a name="s3DataDistributionTypeInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.s3DataDistributionTypeInput"></a>

```java
public java.lang.String getS3DataDistributionTypeInput();
```

- *Type:* java.lang.String

---

##### `s3InputModeInput`<sup>Optional</sup> <a name="s3InputModeInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.s3InputModeInput"></a>

```java
public java.lang.String getS3InputModeInput();
```

- *Type:* java.lang.String

---

##### `startTimeOffsetInput`<sup>Optional</sup> <a name="startTimeOffsetInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.startTimeOffsetInput"></a>

```java
public java.lang.String getStartTimeOffsetInput();
```

- *Type:* java.lang.String

---

##### `dataCapturedDestinationS3Uri`<sup>Required</sup> <a name="dataCapturedDestinationS3Uri" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri"></a>

```java
public java.lang.String getDataCapturedDestinationS3Uri();
```

- *Type:* java.lang.String

---

##### `endTimeOffset`<sup>Required</sup> <a name="endTimeOffset" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.endTimeOffset"></a>

```java
public java.lang.String getEndTimeOffset();
```

- *Type:* java.lang.String

---

##### `featuresAttribute`<sup>Required</sup> <a name="featuresAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.featuresAttribute"></a>

```java
public java.lang.String getFeaturesAttribute();
```

- *Type:* java.lang.String

---

##### `inferenceAttribute`<sup>Required</sup> <a name="inferenceAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.inferenceAttribute"></a>

```java
public java.lang.String getInferenceAttribute();
```

- *Type:* java.lang.String

---

##### `localPath`<sup>Required</sup> <a name="localPath" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.localPath"></a>

```java
public java.lang.String getLocalPath();
```

- *Type:* java.lang.String

---

##### `probabilityAttribute`<sup>Required</sup> <a name="probabilityAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.probabilityAttribute"></a>

```java
public java.lang.String getProbabilityAttribute();
```

- *Type:* java.lang.String

---

##### `probabilityThresholdAttribute`<sup>Required</sup> <a name="probabilityThresholdAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.probabilityThresholdAttribute"></a>

```java
public java.lang.Number getProbabilityThresholdAttribute();
```

- *Type:* java.lang.Number

---

##### `s3DataDistributionType`<sup>Required</sup> <a name="s3DataDistributionType" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.s3DataDistributionType"></a>

```java
public java.lang.String getS3DataDistributionType();
```

- *Type:* java.lang.String

---

##### `s3InputMode`<sup>Required</sup> <a name="s3InputMode" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.s3InputMode"></a>

```java
public java.lang.String getS3InputMode();
```

- *Type:* java.lang.String

---

##### `startTimeOffset`<sup>Required</sup> <a name="startTimeOffset" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.startTimeOffset"></a>

```java
public java.lang.String getStartTimeOffset();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput</a>

---


### SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference <a name="SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference;

new SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetEndpointName">resetEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetEndTimeOffset">resetEndTimeOffset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetFeaturesAttribute">resetFeaturesAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetInferenceAttribute">resetInferenceAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetLocalPath">resetLocalPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetProbabilityAttribute">resetProbabilityAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetProbabilityThresholdAttribute">resetProbabilityThresholdAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetS3DataDistributionType">resetS3DataDistributionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetS3InputMode">resetS3InputMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetStartTimeOffset">resetStartTimeOffset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpointName` <a name="resetEndpointName" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetEndpointName"></a>

```java
public void resetEndpointName()
```

##### `resetEndTimeOffset` <a name="resetEndTimeOffset" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetEndTimeOffset"></a>

```java
public void resetEndTimeOffset()
```

##### `resetFeaturesAttribute` <a name="resetFeaturesAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetFeaturesAttribute"></a>

```java
public void resetFeaturesAttribute()
```

##### `resetInferenceAttribute` <a name="resetInferenceAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetInferenceAttribute"></a>

```java
public void resetInferenceAttribute()
```

##### `resetLocalPath` <a name="resetLocalPath" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetLocalPath"></a>

```java
public void resetLocalPath()
```

##### `resetProbabilityAttribute` <a name="resetProbabilityAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetProbabilityAttribute"></a>

```java
public void resetProbabilityAttribute()
```

##### `resetProbabilityThresholdAttribute` <a name="resetProbabilityThresholdAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetProbabilityThresholdAttribute"></a>

```java
public void resetProbabilityThresholdAttribute()
```

##### `resetS3DataDistributionType` <a name="resetS3DataDistributionType" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetS3DataDistributionType"></a>

```java
public void resetS3DataDistributionType()
```

##### `resetS3InputMode` <a name="resetS3InputMode" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetS3InputMode"></a>

```java
public void resetS3InputMode()
```

##### `resetStartTimeOffset` <a name="resetStartTimeOffset" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resetStartTimeOffset"></a>

```java
public void resetStartTimeOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.endpointNameInput">endpointNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.endTimeOffsetInput">endTimeOffsetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.featuresAttributeInput">featuresAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.inferenceAttributeInput">inferenceAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.localPathInput">localPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.probabilityAttributeInput">probabilityAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.probabilityThresholdAttributeInput">probabilityThresholdAttributeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.s3DataDistributionTypeInput">s3DataDistributionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.s3InputModeInput">s3InputModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.startTimeOffsetInput">startTimeOffsetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.endpointName">endpointName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.endTimeOffset">endTimeOffset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.featuresAttribute">featuresAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.inferenceAttribute">inferenceAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.localPath">localPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.probabilityAttribute">probabilityAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.probabilityThresholdAttribute">probabilityThresholdAttribute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.s3DataDistributionType">s3DataDistributionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.s3InputMode">s3InputMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.startTimeOffset">startTimeOffset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput">SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointNameInput`<sup>Optional</sup> <a name="endpointNameInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.endpointNameInput"></a>

```java
public java.lang.String getEndpointNameInput();
```

- *Type:* java.lang.String

---

##### `endTimeOffsetInput`<sup>Optional</sup> <a name="endTimeOffsetInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.endTimeOffsetInput"></a>

```java
public java.lang.String getEndTimeOffsetInput();
```

- *Type:* java.lang.String

---

##### `featuresAttributeInput`<sup>Optional</sup> <a name="featuresAttributeInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.featuresAttributeInput"></a>

```java
public java.lang.String getFeaturesAttributeInput();
```

- *Type:* java.lang.String

---

##### `inferenceAttributeInput`<sup>Optional</sup> <a name="inferenceAttributeInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.inferenceAttributeInput"></a>

```java
public java.lang.String getInferenceAttributeInput();
```

- *Type:* java.lang.String

---

##### `localPathInput`<sup>Optional</sup> <a name="localPathInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.localPathInput"></a>

```java
public java.lang.String getLocalPathInput();
```

- *Type:* java.lang.String

---

##### `probabilityAttributeInput`<sup>Optional</sup> <a name="probabilityAttributeInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.probabilityAttributeInput"></a>

```java
public java.lang.String getProbabilityAttributeInput();
```

- *Type:* java.lang.String

---

##### `probabilityThresholdAttributeInput`<sup>Optional</sup> <a name="probabilityThresholdAttributeInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.probabilityThresholdAttributeInput"></a>

```java
public java.lang.Number getProbabilityThresholdAttributeInput();
```

- *Type:* java.lang.Number

---

##### `s3DataDistributionTypeInput`<sup>Optional</sup> <a name="s3DataDistributionTypeInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.s3DataDistributionTypeInput"></a>

```java
public java.lang.String getS3DataDistributionTypeInput();
```

- *Type:* java.lang.String

---

##### `s3InputModeInput`<sup>Optional</sup> <a name="s3InputModeInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.s3InputModeInput"></a>

```java
public java.lang.String getS3InputModeInput();
```

- *Type:* java.lang.String

---

##### `startTimeOffsetInput`<sup>Optional</sup> <a name="startTimeOffsetInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.startTimeOffsetInput"></a>

```java
public java.lang.String getStartTimeOffsetInput();
```

- *Type:* java.lang.String

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.endpointName"></a>

```java
public java.lang.String getEndpointName();
```

- *Type:* java.lang.String

---

##### `endTimeOffset`<sup>Required</sup> <a name="endTimeOffset" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.endTimeOffset"></a>

```java
public java.lang.String getEndTimeOffset();
```

- *Type:* java.lang.String

---

##### `featuresAttribute`<sup>Required</sup> <a name="featuresAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.featuresAttribute"></a>

```java
public java.lang.String getFeaturesAttribute();
```

- *Type:* java.lang.String

---

##### `inferenceAttribute`<sup>Required</sup> <a name="inferenceAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.inferenceAttribute"></a>

```java
public java.lang.String getInferenceAttribute();
```

- *Type:* java.lang.String

---

##### `localPath`<sup>Required</sup> <a name="localPath" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.localPath"></a>

```java
public java.lang.String getLocalPath();
```

- *Type:* java.lang.String

---

##### `probabilityAttribute`<sup>Required</sup> <a name="probabilityAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.probabilityAttribute"></a>

```java
public java.lang.String getProbabilityAttribute();
```

- *Type:* java.lang.String

---

##### `probabilityThresholdAttribute`<sup>Required</sup> <a name="probabilityThresholdAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.probabilityThresholdAttribute"></a>

```java
public java.lang.Number getProbabilityThresholdAttribute();
```

- *Type:* java.lang.Number

---

##### `s3DataDistributionType`<sup>Required</sup> <a name="s3DataDistributionType" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.s3DataDistributionType"></a>

```java
public java.lang.String getS3DataDistributionType();
```

- *Type:* java.lang.String

---

##### `s3InputMode`<sup>Required</sup> <a name="s3InputMode" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.s3InputMode"></a>

```java
public java.lang.String getS3InputMode();
```

- *Type:* java.lang.String

---

##### `startTimeOffset`<sup>Required</sup> <a name="startTimeOffset" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.startTimeOffset"></a>

```java
public java.lang.String getStartTimeOffset();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput">SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput</a>

---


### SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference <a name="SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference;

new SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input">SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.s3UriInput"></a>

```java
public java.lang.String getS3UriInput();
```

- *Type:* java.lang.String

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input">SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input</a>

---


### SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference <a name="SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference;

new SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.putBatchTransformInput">putBatchTransformInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.putEndpointInput">putEndpointInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.putGroundTruthS3Input">putGroundTruthS3Input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.resetBatchTransformInput">resetBatchTransformInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.resetEndpointInput">resetEndpointInput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBatchTransformInput` <a name="putBatchTransformInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.putBatchTransformInput"></a>

```java
public void putBatchTransformInput(SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.putBatchTransformInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput</a>

---

##### `putEndpointInput` <a name="putEndpointInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.putEndpointInput"></a>

```java
public void putEndpointInput(SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.putEndpointInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput">SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput</a>

---

##### `putGroundTruthS3Input` <a name="putGroundTruthS3Input" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.putGroundTruthS3Input"></a>

```java
public void putGroundTruthS3Input(SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.putGroundTruthS3Input.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input">SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input</a>

---

##### `resetBatchTransformInput` <a name="resetBatchTransformInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.resetBatchTransformInput"></a>

```java
public void resetBatchTransformInput()
```

##### `resetEndpointInput` <a name="resetEndpointInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.resetEndpointInput"></a>

```java
public void resetEndpointInput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.batchTransformInput">batchTransformInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.endpointInput">endpointInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.groundTruthS3Input">groundTruthS3Input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.batchTransformInputInput">batchTransformInputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.endpointInputInput">endpointInputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput">SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.groundTruthS3InputInput">groundTruthS3InputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input">SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInput">SagemakerModelBiasJobDefinitionModelBiasJobInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `batchTransformInput`<sup>Required</sup> <a name="batchTransformInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.batchTransformInput"></a>

```java
public SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference getBatchTransformInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference</a>

---

##### `endpointInput`<sup>Required</sup> <a name="endpointInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.endpointInput"></a>

```java
public SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference getEndpointInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference</a>

---

##### `groundTruthS3Input`<sup>Required</sup> <a name="groundTruthS3Input" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.groundTruthS3Input"></a>

```java
public SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference getGroundTruthS3Input();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference</a>

---

##### `batchTransformInputInput`<sup>Optional</sup> <a name="batchTransformInputInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.batchTransformInputInput"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput getBatchTransformInputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput">SagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput</a>

---

##### `endpointInputInput`<sup>Optional</sup> <a name="endpointInputInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.endpointInputInput"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput getEndpointInputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput">SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput</a>

---

##### `groundTruthS3InputInput`<sup>Optional</sup> <a name="groundTruthS3InputInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.groundTruthS3InputInput"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input getGroundTruthS3InputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input">SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionModelBiasJobInput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobInput">SagemakerModelBiasJobDefinitionModelBiasJobInput</a>

---


### SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList <a name="SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList;

new SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.get"></a>

```java
public SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs</a>>

---


### SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference <a name="SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference;

new SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.putS3Output">putS3Output</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Output` <a name="putS3Output" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.putS3Output"></a>

```java
public void putS3Output(SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.putS3Output.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.s3Output">s3Output</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.s3OutputInput">s3OutputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3Output`<sup>Required</sup> <a name="s3Output" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.s3Output"></a>

```java
public SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference getS3Output();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference</a>

---

##### `s3OutputInput`<sup>Optional</sup> <a name="s3OutputInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.s3OutputInput"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output getS3OutputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs</a>

---


### SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference <a name="SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference;

new SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.resetS3UploadMode">resetS3UploadMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3UploadMode` <a name="resetS3UploadMode" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.resetS3UploadMode"></a>

```java
public void resetS3UploadMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPathInput">localPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadModeInput">s3UploadModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath">localPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode">s3UploadMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `localPathInput`<sup>Optional</sup> <a name="localPathInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPathInput"></a>

```java
public java.lang.String getLocalPathInput();
```

- *Type:* java.lang.String

---

##### `s3UploadModeInput`<sup>Optional</sup> <a name="s3UploadModeInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadModeInput"></a>

```java
public java.lang.String getS3UploadModeInput();
```

- *Type:* java.lang.String

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UriInput"></a>

```java
public java.lang.String getS3UriInput();
```

- *Type:* java.lang.String

---

##### `localPath`<sup>Required</sup> <a name="localPath" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath"></a>

```java
public java.lang.String getLocalPath();
```

- *Type:* java.lang.String

---

##### `s3UploadMode`<sup>Required</sup> <a name="s3UploadMode" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode"></a>

```java
public java.lang.String getS3UploadMode();
```

- *Type:* java.lang.String

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output</a>

---


### SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference <a name="SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference;

new SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.putMonitoringOutputs">putMonitoringOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMonitoringOutputs` <a name="putMonitoringOutputs" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.putMonitoringOutputs"></a>

```java
public void putMonitoringOutputs(IResolvable|java.util.List<SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.putMonitoringOutputs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs</a>>

---

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.monitoringOutputs">monitoringOutputs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.monitoringOutputsInput">monitoringOutputsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `monitoringOutputs`<sup>Required</sup> <a name="monitoringOutputs" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.monitoringOutputs"></a>

```java
public SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList getMonitoringOutputs();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList</a>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `monitoringOutputsInput`<sup>Optional</sup> <a name="monitoringOutputsInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.monitoringOutputsInput"></a>

```java
public IResolvable|java.util.List<SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs> getMonitoringOutputsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs</a>>

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig">SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig</a>

---


### SagemakerModelBiasJobDefinitionNetworkConfigOutputReference <a name="SagemakerModelBiasJobDefinitionNetworkConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference;

new SagemakerModelBiasJobDefinitionNetworkConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.resetEnableInterContainerTrafficEncryption">resetEnableInterContainerTrafficEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.resetEnableNetworkIsolation">resetEnableNetworkIsolation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.putVpcConfig"></a>

```java
public void putVpcConfig(SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig">SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig</a>

---

##### `resetEnableInterContainerTrafficEncryption` <a name="resetEnableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.resetEnableInterContainerTrafficEncryption"></a>

```java
public void resetEnableInterContainerTrafficEncryption()
```

##### `resetEnableNetworkIsolation` <a name="resetEnableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.resetEnableNetworkIsolation"></a>

```java
public void resetEnableNetworkIsolation()
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.resetVpcConfig"></a>

```java
public void resetVpcConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference">SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryptionInput">enableInterContainerTrafficEncryptionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolationInput">enableNetworkIsolationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.vpcConfigInput">vpcConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig">SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption">enableInterContainerTrafficEncryption</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation">enableNetworkIsolation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfig">SagemakerModelBiasJobDefinitionNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.vpcConfig"></a>

```java
public SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference getVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference">SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference</a>

---

##### `enableInterContainerTrafficEncryptionInput`<sup>Optional</sup> <a name="enableInterContainerTrafficEncryptionInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryptionInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableInterContainerTrafficEncryptionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableNetworkIsolationInput`<sup>Optional</sup> <a name="enableNetworkIsolationInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolationInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableNetworkIsolationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.vpcConfigInput"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig getVpcConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig">SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig</a>

---

##### `enableInterContainerTrafficEncryption`<sup>Required</sup> <a name="enableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption"></a>

```java
public java.lang.Boolean|IResolvable getEnableInterContainerTrafficEncryption();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableNetworkIsolation`<sup>Required</sup> <a name="enableNetworkIsolation" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation"></a>

```java
public java.lang.Boolean|IResolvable getEnableNetworkIsolation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionNetworkConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfig">SagemakerModelBiasJobDefinitionNetworkConfig</a>

---


### SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference <a name="SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference;

new SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.resetSubnets"></a>

```java
public void resetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig">SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig">SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig</a>

---


### SagemakerModelBiasJobDefinitionStoppingConditionOutputReference <a name="SagemakerModelBiasJobDefinitionStoppingConditionOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference;

new SagemakerModelBiasJobDefinitionStoppingConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.resetMaxRuntimeInSeconds">resetMaxRuntimeInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxRuntimeInSeconds` <a name="resetMaxRuntimeInSeconds" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.resetMaxRuntimeInSeconds"></a>

```java
public void resetMaxRuntimeInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSecondsInput">maxRuntimeInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds">maxRuntimeInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingCondition">SagemakerModelBiasJobDefinitionStoppingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxRuntimeInSecondsInput`<sup>Optional</sup> <a name="maxRuntimeInSecondsInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSecondsInput"></a>

```java
public java.lang.Number getMaxRuntimeInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `maxRuntimeInSeconds`<sup>Required</sup> <a name="maxRuntimeInSeconds" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds"></a>

```java
public java.lang.Number getMaxRuntimeInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionStoppingCondition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionStoppingCondition">SagemakerModelBiasJobDefinitionStoppingCondition</a>

---


### SagemakerModelBiasJobDefinitionTagsList <a name="SagemakerModelBiasJobDefinitionTagsList" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionTagsList;

new SagemakerModelBiasJobDefinitionTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.get"></a>

```java
public SagemakerModelBiasJobDefinitionTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTags">SagemakerModelBiasJobDefinitionTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerModelBiasJobDefinitionTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTags">SagemakerModelBiasJobDefinitionTags</a>>

---


### SagemakerModelBiasJobDefinitionTagsOutputReference <a name="SagemakerModelBiasJobDefinitionTagsOutputReference" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_model_bias_job_definition.SagemakerModelBiasJobDefinitionTagsOutputReference;

new SagemakerModelBiasJobDefinitionTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTags">SagemakerModelBiasJobDefinitionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerModelBiasJobDefinitionTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerModelBiasJobDefinition.SagemakerModelBiasJobDefinitionTags">SagemakerModelBiasJobDefinitionTags</a>

---



