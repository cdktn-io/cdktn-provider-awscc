# `sagemakerModel` Submodule <a name="`sagemakerModel` Submodule" id="@cdktn/provider-awscc.sagemakerModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerModel <a name="SagemakerModel" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model awscc_sagemaker_model}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModel(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  containers: IResolvable | typing.List[SagemakerModelContainers] = None,
  enable_network_isolation: bool | IResolvable = None,
  execution_role_arn: str = None,
  inference_execution_config: SagemakerModelInferenceExecutionConfig = None,
  model_name: str = None,
  primary_container: SagemakerModelPrimaryContainer = None,
  tags: IResolvable | typing.List[SagemakerModelTags] = None,
  vpc_config: SagemakerModelVpcConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.containers">containers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers">SagemakerModelContainers</a>]</code> | Specifies the containers in the inference pipeline. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.enableNetworkIsolation">enable_network_isolation</a></code> | <code>bool \| cdktn.IResolvable</code> | Isolates the model container. No inbound or outbound network calls can be made to or from the model container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the IAM role that you specified for the model. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.inferenceExecutionConfig">inference_execution_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a></code> | Specifies details about how containers in a multi-container endpoint are run. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.modelName">model_name</a></code> | <code>str</code> | The name of the new model. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.primaryContainer">primary_container</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a></code> | Describes the container, as part of model definition. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTags">SagemakerModelTags</a>]</code> | An array of key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a></code> | Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `containers`<sup>Optional</sup> <a name="containers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.containers"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers">SagemakerModelContainers</a>]

Specifies the containers in the inference pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#containers SagemakerModel#containers}

---

##### `enable_network_isolation`<sup>Optional</sup> <a name="enable_network_isolation" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.enableNetworkIsolation"></a>

- *Type:* bool | cdktn.IResolvable

Isolates the model container. No inbound or outbound network calls can be made to or from the model container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#enable_network_isolation SagemakerModel#enable_network_isolation}

---

##### `execution_role_arn`<sup>Optional</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.executionRoleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the IAM role that you specified for the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#execution_role_arn SagemakerModel#execution_role_arn}

---

##### `inference_execution_config`<sup>Optional</sup> <a name="inference_execution_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.inferenceExecutionConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a>

Specifies details about how containers in a multi-container endpoint are run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#inference_execution_config SagemakerModel#inference_execution_config}

---

##### `model_name`<sup>Optional</sup> <a name="model_name" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.modelName"></a>

- *Type:* str

The name of the new model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#model_name SagemakerModel#model_name}

---

##### `primary_container`<sup>Optional</sup> <a name="primary_container" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.primaryContainer"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a>

Describes the container, as part of model definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#primary_container SagemakerModel#primary_container}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTags">SagemakerModelTags</a>]

An array of key-value pairs.

You can use tags to categorize your AWS resources in different ways, for example, by purpose, owner, or environment. For more information, see [Tagging AWS Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#tags SagemakerModel#tags}

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.Initializer.parameter.vpcConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a>

Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to.

You can control access to and from your resources by configuring a VPC. For more information, see [Give SageMaker Access to Resources in your Amazon VPC](https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#vpc_config SagemakerModel#vpc_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putContainers">put_containers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putInferenceExecutionConfig">put_inference_execution_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putPrimaryContainer">put_primary_container</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putVpcConfig">put_vpc_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetContainers">reset_containers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetEnableNetworkIsolation">reset_enable_network_isolation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetExecutionRoleArn">reset_execution_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetInferenceExecutionConfig">reset_inference_execution_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetModelName">reset_model_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetPrimaryContainer">reset_primary_container</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetVpcConfig">reset_vpc_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_containers` <a name="put_containers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putContainers"></a>

```python
def put_containers(
  value: IResolvable | typing.List[SagemakerModelContainers]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putContainers.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers">SagemakerModelContainers</a>]

---

##### `put_inference_execution_config` <a name="put_inference_execution_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putInferenceExecutionConfig"></a>

```python
def put_inference_execution_config(
  mode: str = None
) -> None
```

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putInferenceExecutionConfig.parameter.mode"></a>

- *Type:* str

How containers in a multi-container are run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#mode SagemakerModel#mode}

---

##### `put_primary_container` <a name="put_primary_container" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putPrimaryContainer"></a>

```python
def put_primary_container(
  container_hostname: str = None,
  environment: str = None,
  image: str = None,
  image_config: SagemakerModelPrimaryContainerImageConfig = None,
  inference_specification_name: str = None,
  mode: str = None,
  model_data_source: SagemakerModelPrimaryContainerModelDataSource = None,
  model_data_url: str = None,
  model_package_name: str = None,
  multi_model_config: SagemakerModelPrimaryContainerMultiModelConfig = None
) -> None
```

###### `container_hostname`<sup>Optional</sup> <a name="container_hostname" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putPrimaryContainer.parameter.containerHostname"></a>

- *Type:* str

This parameter is ignored for models that contain only a PrimaryContainer.

When a ContainerDefinition is part of an inference pipeline, the value of the parameter uniquely identifies the container for the purposes of logging and metrics. For information, see [Use Logs and Metrics to Monitor an Inference Pipeline](https://docs.aws.amazon.com/sagemaker/latest/dg/inference-pipeline-logs-metrics.html). If you don't specify a value for this parameter for a ContainerDefinition that is part of an inference pipeline, a unique name is automatically assigned based on the position of the ContainerDefinition in the pipeline. If you specify a value for the ContainerHostName for any ContainerDefinition that is part of an inference pipeline, you must specify a value for the ContainerHostName parameter of every ContainerDefinition in that pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#container_hostname SagemakerModel#container_hostname}

---

###### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putPrimaryContainer.parameter.environment"></a>

- *Type:* str

The environment variables to set in the Docker container. Don't include any sensitive data in your environment variables.

The maximum length of each key and value in the Environment map is 1024 bytes. The maximum length of all keys and values in the map, combined, is 32 KB. If you pass multiple containers to a CreateModel request, then the maximum length of all of their maps, combined, is also 32 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#environment SagemakerModel#environment}

---

###### `image`<sup>Optional</sup> <a name="image" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putPrimaryContainer.parameter.image"></a>

- *Type:* str

The path where inference code is stored.

This can be either in Amazon EC2 Container Registry or in a Docker registry that is accessible from the same VPC that you configure for your endpoint. If you are using your own custom algorithm instead of an algorithm provided by SageMaker, the inference code must meet SageMaker requirements. SageMaker supports both registry/repository[:tag] and registry/repository[@digest] image path formats. For more information, see [Using Your Own Algorithms with Amazon SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#image SagemakerModel#image}

---

###### `image_config`<sup>Optional</sup> <a name="image_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putPrimaryContainer.parameter.imageConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a>

Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#image_config SagemakerModel#image_config}

---

###### `inference_specification_name`<sup>Optional</sup> <a name="inference_specification_name" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putPrimaryContainer.parameter.inferenceSpecificationName"></a>

- *Type:* str

The inference specification name in the model package version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#inference_specification_name SagemakerModel#inference_specification_name}

---

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putPrimaryContainer.parameter.mode"></a>

- *Type:* str

Whether the container hosts a single model or multiple models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#mode SagemakerModel#mode}

---

###### `model_data_source`<sup>Optional</sup> <a name="model_data_source" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putPrimaryContainer.parameter.modelDataSource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource">SagemakerModelPrimaryContainerModelDataSource</a>

Specifies the location of ML model data to deploy.

If specified, you must specify one and only one of the available data sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#model_data_source SagemakerModel#model_data_source}

---

###### `model_data_url`<sup>Optional</sup> <a name="model_data_url" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putPrimaryContainer.parameter.modelDataUrl"></a>

- *Type:* str

The S3 path where the model artifacts, which result from model training, are stored.

This path must point to a single gzip compressed tar archive (.tar.gz suffix). The S3 path is required for SageMaker built-in algorithms, but not if you use your own algorithms. For more information on built-in algorithms, see [Common Parameters](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-algo-docker-registry-paths.html).

If you provide a value for this parameter, SageMaker uses AWS Security Token Service to download model artifacts from the S3 path you provide. AWS STS is activated in your AWS account by default. If you previously deactivated AWS STS for a region, you need to reactivate AWS STS for that region. For more information, see [Activating and Deactivating AWS STS in an AWS Region](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html) in the AWS Identity and Access Management User Guide

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#model_data_url SagemakerModel#model_data_url}

---

###### `model_package_name`<sup>Optional</sup> <a name="model_package_name" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putPrimaryContainer.parameter.modelPackageName"></a>

- *Type:* str

The name or Amazon Resource Name (ARN) of the model package to use to create the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#model_package_name SagemakerModel#model_package_name}

---

###### `multi_model_config`<sup>Optional</sup> <a name="multi_model_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putPrimaryContainer.parameter.multiModelConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig">SagemakerModelPrimaryContainerMultiModelConfig</a>

Specifies additional configuration for multi-model endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#multi_model_config SagemakerModel#multi_model_config}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SagemakerModelTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTags">SagemakerModelTags</a>]

---

##### `put_vpc_config` <a name="put_vpc_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putVpcConfig"></a>

```python
def put_vpc_config(
  security_group_ids: typing.List[str] = None,
  subnets: typing.List[str] = None
) -> None
```

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putVpcConfig.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

The VPC security group IDs, in the form `sg-xxxxxxxx`.

Specify the security groups for the VPC that is specified in the `Subnets` field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#security_group_ids SagemakerModel#security_group_ids}

---

###### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.putVpcConfig.parameter.subnets"></a>

- *Type:* typing.List[str]

The ID of the subnets in the VPC to which you want to connect your training job or model.

For information about the availability of specific instance types, see [Supported Instance Types and Availability Zones](https://docs.aws.amazon.com/sagemaker/latest/dg/instance-types-az.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#subnets SagemakerModel#subnets}

---

##### `reset_containers` <a name="reset_containers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetContainers"></a>

```python
def reset_containers() -> None
```

##### `reset_enable_network_isolation` <a name="reset_enable_network_isolation" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetEnableNetworkIsolation"></a>

```python
def reset_enable_network_isolation() -> None
```

##### `reset_execution_role_arn` <a name="reset_execution_role_arn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetExecutionRoleArn"></a>

```python
def reset_execution_role_arn() -> None
```

##### `reset_inference_execution_config` <a name="reset_inference_execution_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetInferenceExecutionConfig"></a>

```python
def reset_inference_execution_config() -> None
```

##### `reset_model_name` <a name="reset_model_name" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetModelName"></a>

```python
def reset_model_name() -> None
```

##### `reset_primary_container` <a name="reset_primary_container" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetPrimaryContainer"></a>

```python
def reset_primary_container() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vpc_config` <a name="reset_vpc_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.resetVpcConfig"></a>

```python
def reset_vpc_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SagemakerModel resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.isConstruct"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.isTerraformElement"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.isTerraformResource"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SagemakerModel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerModel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.containers">containers</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList">SagemakerModelContainersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.inferenceExecutionConfig">inference_execution_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference">SagemakerModelInferenceExecutionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.modelArn">model_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.primaryContainer">primary_container</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference">SagemakerModelPrimaryContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList">SagemakerModelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference">SagemakerModelVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.containersInput">containers_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers">SagemakerModelContainers</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.enableNetworkIsolationInput">enable_network_isolation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.executionRoleArnInput">execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.inferenceExecutionConfigInput">inference_execution_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.modelNameInput">model_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.primaryContainerInput">primary_container_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTags">SagemakerModelTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.vpcConfigInput">vpc_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.enableNetworkIsolation">enable_network_isolation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.modelName">model_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.containers"></a>

```python
containers: SagemakerModelContainersList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList">SagemakerModelContainersList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inference_execution_config`<sup>Required</sup> <a name="inference_execution_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.inferenceExecutionConfig"></a>

```python
inference_execution_config: SagemakerModelInferenceExecutionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference">SagemakerModelInferenceExecutionConfigOutputReference</a>

---

##### `model_arn`<sup>Required</sup> <a name="model_arn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.modelArn"></a>

```python
model_arn: str
```

- *Type:* str

---

##### `primary_container`<sup>Required</sup> <a name="primary_container" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.primaryContainer"></a>

```python
primary_container: SagemakerModelPrimaryContainerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference">SagemakerModelPrimaryContainerOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.tags"></a>

```python
tags: SagemakerModelTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList">SagemakerModelTagsList</a>

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.vpcConfig"></a>

```python
vpc_config: SagemakerModelVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference">SagemakerModelVpcConfigOutputReference</a>

---

##### `containers_input`<sup>Optional</sup> <a name="containers_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.containersInput"></a>

```python
containers_input: IResolvable | typing.List[SagemakerModelContainers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers">SagemakerModelContainers</a>]

---

##### `enable_network_isolation_input`<sup>Optional</sup> <a name="enable_network_isolation_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.enableNetworkIsolationInput"></a>

```python
enable_network_isolation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `execution_role_arn_input`<sup>Optional</sup> <a name="execution_role_arn_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.executionRoleArnInput"></a>

```python
execution_role_arn_input: str
```

- *Type:* str

---

##### `inference_execution_config_input`<sup>Optional</sup> <a name="inference_execution_config_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.inferenceExecutionConfigInput"></a>

```python
inference_execution_config_input: IResolvable | SagemakerModelInferenceExecutionConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a>

---

##### `model_name_input`<sup>Optional</sup> <a name="model_name_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.modelNameInput"></a>

```python
model_name_input: str
```

- *Type:* str

---

##### `primary_container_input`<sup>Optional</sup> <a name="primary_container_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.primaryContainerInput"></a>

```python
primary_container_input: IResolvable | SagemakerModelPrimaryContainer
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SagemakerModelTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTags">SagemakerModelTags</a>]

---

##### `vpc_config_input`<sup>Optional</sup> <a name="vpc_config_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.vpcConfigInput"></a>

```python
vpc_config_input: IResolvable | SagemakerModelVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a>

---

##### `enable_network_isolation`<sup>Required</sup> <a name="enable_network_isolation" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.enableNetworkIsolation"></a>

```python
enable_network_isolation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `model_name`<sup>Required</sup> <a name="model_name" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.modelName"></a>

```python
model_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerModelConfig <a name="SagemakerModelConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  containers: IResolvable | typing.List[SagemakerModelContainers] = None,
  enable_network_isolation: bool | IResolvable = None,
  execution_role_arn: str = None,
  inference_execution_config: SagemakerModelInferenceExecutionConfig = None,
  model_name: str = None,
  primary_container: SagemakerModelPrimaryContainer = None,
  tags: IResolvable | typing.List[SagemakerModelTags] = None,
  vpc_config: SagemakerModelVpcConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.containers">containers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers">SagemakerModelContainers</a>]</code> | Specifies the containers in the inference pipeline. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.enableNetworkIsolation">enable_network_isolation</a></code> | <code>bool \| cdktn.IResolvable</code> | Isolates the model container. No inbound or outbound network calls can be made to or from the model container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the IAM role that you specified for the model. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.inferenceExecutionConfig">inference_execution_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a></code> | Specifies details about how containers in a multi-container endpoint are run. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.modelName">model_name</a></code> | <code>str</code> | The name of the new model. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.primaryContainer">primary_container</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a></code> | Describes the container, as part of model definition. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTags">SagemakerModelTags</a>]</code> | An array of key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a></code> | Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `containers`<sup>Optional</sup> <a name="containers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.containers"></a>

```python
containers: IResolvable | typing.List[SagemakerModelContainers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers">SagemakerModelContainers</a>]

Specifies the containers in the inference pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#containers SagemakerModel#containers}

---

##### `enable_network_isolation`<sup>Optional</sup> <a name="enable_network_isolation" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.enableNetworkIsolation"></a>

```python
enable_network_isolation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Isolates the model container. No inbound or outbound network calls can be made to or from the model container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#enable_network_isolation SagemakerModel#enable_network_isolation}

---

##### `execution_role_arn`<sup>Optional</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the IAM role that you specified for the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#execution_role_arn SagemakerModel#execution_role_arn}

---

##### `inference_execution_config`<sup>Optional</sup> <a name="inference_execution_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.inferenceExecutionConfig"></a>

```python
inference_execution_config: SagemakerModelInferenceExecutionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a>

Specifies details about how containers in a multi-container endpoint are run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#inference_execution_config SagemakerModel#inference_execution_config}

---

##### `model_name`<sup>Optional</sup> <a name="model_name" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.modelName"></a>

```python
model_name: str
```

- *Type:* str

The name of the new model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#model_name SagemakerModel#model_name}

---

##### `primary_container`<sup>Optional</sup> <a name="primary_container" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.primaryContainer"></a>

```python
primary_container: SagemakerModelPrimaryContainer
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a>

Describes the container, as part of model definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#primary_container SagemakerModel#primary_container}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SagemakerModelTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTags">SagemakerModelTags</a>]

An array of key-value pairs.

You can use tags to categorize your AWS resources in different ways, for example, by purpose, owner, or environment. For more information, see [Tagging AWS Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#tags SagemakerModel#tags}

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelConfig.property.vpcConfig"></a>

```python
vpc_config: SagemakerModelVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a>

Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to.

You can control access to and from your resources by configuring a VPC. For more information, see [Give SageMaker Access to Resources in your Amazon VPC](https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#vpc_config SagemakerModel#vpc_config}

---

### SagemakerModelContainers <a name="SagemakerModelContainers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelContainers(
  container_hostname: str = None,
  environment: str = None,
  image: str = None,
  image_config: SagemakerModelContainersImageConfig = None,
  inference_specification_name: str = None,
  mode: str = None,
  model_data_source: SagemakerModelContainersModelDataSource = None,
  model_data_url: str = None,
  model_package_name: str = None,
  multi_model_config: SagemakerModelContainersMultiModelConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.containerHostname">container_hostname</a></code> | <code>str</code> | This parameter is ignored for models that contain only a PrimaryContainer. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.environment">environment</a></code> | <code>str</code> | The environment variables to set in the Docker container. Don't include any sensitive data in your environment variables. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.image">image</a></code> | <code>str</code> | The path where inference code is stored. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.imageConfig">image_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfig">SagemakerModelContainersImageConfig</a></code> | Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC). |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.inferenceSpecificationName">inference_specification_name</a></code> | <code>str</code> | The inference specification name in the model package version. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.mode">mode</a></code> | <code>str</code> | Whether the container hosts a single model or multiple models. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.modelDataSource">model_data_source</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSource">SagemakerModelContainersModelDataSource</a></code> | Specifies the location of ML model data to deploy. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.modelDataUrl">model_data_url</a></code> | <code>str</code> | The S3 path where the model artifacts, which result from model training, are stored. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.modelPackageName">model_package_name</a></code> | <code>str</code> | The name or Amazon Resource Name (ARN) of the model package to use to create the model. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.multiModelConfig">multi_model_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfig">SagemakerModelContainersMultiModelConfig</a></code> | Specifies additional configuration for multi-model endpoints. |

---

##### `container_hostname`<sup>Optional</sup> <a name="container_hostname" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.containerHostname"></a>

```python
container_hostname: str
```

- *Type:* str

This parameter is ignored for models that contain only a PrimaryContainer.

When a ContainerDefinition is part of an inference pipeline, the value of the parameter uniquely identifies the container for the purposes of logging and metrics. For information, see [Use Logs and Metrics to Monitor an Inference Pipeline](https://docs.aws.amazon.com/sagemaker/latest/dg/inference-pipeline-logs-metrics.html). If you don't specify a value for this parameter for a ContainerDefinition that is part of an inference pipeline, a unique name is automatically assigned based on the position of the ContainerDefinition in the pipeline. If you specify a value for the ContainerHostName for any ContainerDefinition that is part of an inference pipeline, you must specify a value for the ContainerHostName parameter of every ContainerDefinition in that pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#container_hostname SagemakerModel#container_hostname}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.environment"></a>

```python
environment: str
```

- *Type:* str

The environment variables to set in the Docker container. Don't include any sensitive data in your environment variables.

The maximum length of each key and value in the Environment map is 1024 bytes. The maximum length of all keys and values in the map, combined, is 32 KB. If you pass multiple containers to a CreateModel request, then the maximum length of all of their maps, combined, is also 32 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#environment SagemakerModel#environment}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.image"></a>

```python
image: str
```

- *Type:* str

The path where inference code is stored.

This can be either in Amazon EC2 Container Registry or in a Docker registry that is accessible from the same VPC that you configure for your endpoint. If you are using your own custom algorithm instead of an algorithm provided by SageMaker, the inference code must meet SageMaker requirements. SageMaker supports both registry/repository[:tag] and registry/repository[@digest] image path formats. For more information, see [Using Your Own Algorithms with Amazon SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#image SagemakerModel#image}

---

##### `image_config`<sup>Optional</sup> <a name="image_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.imageConfig"></a>

```python
image_config: SagemakerModelContainersImageConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfig">SagemakerModelContainersImageConfig</a>

Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#image_config SagemakerModel#image_config}

---

##### `inference_specification_name`<sup>Optional</sup> <a name="inference_specification_name" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.inferenceSpecificationName"></a>

```python
inference_specification_name: str
```

- *Type:* str

The inference specification name in the model package version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#inference_specification_name SagemakerModel#inference_specification_name}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.mode"></a>

```python
mode: str
```

- *Type:* str

Whether the container hosts a single model or multiple models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#mode SagemakerModel#mode}

---

##### `model_data_source`<sup>Optional</sup> <a name="model_data_source" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.modelDataSource"></a>

```python
model_data_source: SagemakerModelContainersModelDataSource
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSource">SagemakerModelContainersModelDataSource</a>

Specifies the location of ML model data to deploy.

If specified, you must specify one and only one of the available data sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#model_data_source SagemakerModel#model_data_source}

---

##### `model_data_url`<sup>Optional</sup> <a name="model_data_url" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.modelDataUrl"></a>

```python
model_data_url: str
```

- *Type:* str

The S3 path where the model artifacts, which result from model training, are stored.

This path must point to a single gzip compressed tar archive (.tar.gz suffix). The S3 path is required for SageMaker built-in algorithms, but not if you use your own algorithms. For more information on built-in algorithms, see [Common Parameters](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-algo-docker-registry-paths.html).

If you provide a value for this parameter, SageMaker uses AWS Security Token Service to download model artifacts from the S3 path you provide. AWS STS is activated in your AWS account by default. If you previously deactivated AWS STS for a region, you need to reactivate AWS STS for that region. For more information, see [Activating and Deactivating AWS STS in an AWS Region](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html) in the AWS Identity and Access Management User Guide

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#model_data_url SagemakerModel#model_data_url}

---

##### `model_package_name`<sup>Optional</sup> <a name="model_package_name" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.modelPackageName"></a>

```python
model_package_name: str
```

- *Type:* str

The name or Amazon Resource Name (ARN) of the model package to use to create the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#model_package_name SagemakerModel#model_package_name}

---

##### `multi_model_config`<sup>Optional</sup> <a name="multi_model_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers.property.multiModelConfig"></a>

```python
multi_model_config: SagemakerModelContainersMultiModelConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfig">SagemakerModelContainersMultiModelConfig</a>

Specifies additional configuration for multi-model endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#multi_model_config SagemakerModel#multi_model_config}

---

### SagemakerModelContainersImageConfig <a name="SagemakerModelContainersImageConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelContainersImageConfig(
  repository_access_mode: str = None,
  repository_auth_config: SagemakerModelContainersImageConfigRepositoryAuthConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfig.property.repositoryAccessMode">repository_access_mode</a></code> | <code>str</code> | Set this to one of the following values: Platform - The model image is hosted in Amazon ECR. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfig.property.repositoryAuthConfig">repository_auth_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfig">SagemakerModelContainersImageConfigRepositoryAuthConfig</a></code> | Specifies an authentication configuration for the private docker registry where your model image is hosted. |

---

##### `repository_access_mode`<sup>Optional</sup> <a name="repository_access_mode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfig.property.repositoryAccessMode"></a>

```python
repository_access_mode: str
```

- *Type:* str

Set this to one of the following values: Platform - The model image is hosted in Amazon ECR.

Vpc - The model image is hosted in a private Docker registry in your VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#repository_access_mode SagemakerModel#repository_access_mode}

---

##### `repository_auth_config`<sup>Optional</sup> <a name="repository_auth_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfig.property.repositoryAuthConfig"></a>

```python
repository_auth_config: SagemakerModelContainersImageConfigRepositoryAuthConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfig">SagemakerModelContainersImageConfigRepositoryAuthConfig</a>

Specifies an authentication configuration for the private docker registry where your model image is hosted.

Specify a value for this property only if you specified `Vpc` as the value for the `RepositoryAccessMode` field of the `ImageConfig` object that you passed to a call to `CreateModel` and the private Docker registry where the model image is hosted requires authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#repository_auth_config SagemakerModel#repository_auth_config}

---

### SagemakerModelContainersImageConfigRepositoryAuthConfig <a name="SagemakerModelContainersImageConfigRepositoryAuthConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfig(
  repository_credentials_provider_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfig.property.repositoryCredentialsProviderArn">repository_credentials_provider_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an AWS Lambda function that provides credentials to authenticate to the private Docker registry where your model image is hosted. |

---

##### `repository_credentials_provider_arn`<sup>Optional</sup> <a name="repository_credentials_provider_arn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfig.property.repositoryCredentialsProviderArn"></a>

```python
repository_credentials_provider_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of an AWS Lambda function that provides credentials to authenticate to the private Docker registry where your model image is hosted.

For information about how to create an AWS Lambda function, see [Create a Lambda function with the console](https://docs.aws.amazon.com/lambda/latest/dg/getting-started-create-function.html) in the AWS Lambda Developer Guide

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#repository_credentials_provider_arn SagemakerModel#repository_credentials_provider_arn}

---

### SagemakerModelContainersModelDataSource <a name="SagemakerModelContainersModelDataSource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSource.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelContainersModelDataSource(
  s3_data_source: SagemakerModelContainersModelDataSourceS3DataSource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSource.property.s3DataSource">s3_data_source</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource">SagemakerModelContainersModelDataSourceS3DataSource</a></code> | Specifies the S3 location of ML model data to deploy. |

---

##### `s3_data_source`<sup>Optional</sup> <a name="s3_data_source" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSource.property.s3DataSource"></a>

```python
s3_data_source: SagemakerModelContainersModelDataSourceS3DataSource
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource">SagemakerModelContainersModelDataSourceS3DataSource</a>

Specifies the S3 location of ML model data to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#s3_data_source SagemakerModel#s3_data_source}

---

### SagemakerModelContainersModelDataSourceS3DataSource <a name="SagemakerModelContainersModelDataSourceS3DataSource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource(
  compression_type: str = None,
  hub_access_config: SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig = None,
  model_access_config: SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig = None,
  s3_data_type: str = None,
  s3_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource.property.compressionType">compression_type</a></code> | <code>str</code> | Specifies how the ML model data is prepared. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource.property.hubAccessConfig">hub_access_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig">SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig</a></code> | Configuration information specifying which hub contents have accessible deployment options. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource.property.modelAccessConfig">model_access_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig</a></code> | The access configuration file to control access to the ML model. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource.property.s3DataType">s3_data_type</a></code> | <code>str</code> | Specifies the type of ML model data to deploy. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource.property.s3Uri">s3_uri</a></code> | <code>str</code> | Specifies the S3 path of ML model data to deploy. |

---

##### `compression_type`<sup>Optional</sup> <a name="compression_type" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource.property.compressionType"></a>

```python
compression_type: str
```

- *Type:* str

Specifies how the ML model data is prepared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#compression_type SagemakerModel#compression_type}

---

##### `hub_access_config`<sup>Optional</sup> <a name="hub_access_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource.property.hubAccessConfig"></a>

```python
hub_access_config: SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig">SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig</a>

Configuration information specifying which hub contents have accessible deployment options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#hub_access_config SagemakerModel#hub_access_config}

---

##### `model_access_config`<sup>Optional</sup> <a name="model_access_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource.property.modelAccessConfig"></a>

```python
model_access_config: SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig</a>

The access configuration file to control access to the ML model.

You can explicitly accept the model end-user license agreement (EULA) within the `ModelAccessConfig`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#model_access_config SagemakerModel#model_access_config}

---

##### `s3_data_type`<sup>Optional</sup> <a name="s3_data_type" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource.property.s3DataType"></a>

```python
s3_data_type: str
```

- *Type:* str

Specifies the type of ML model data to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#s3_data_type SagemakerModel#s3_data_type}

---

##### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

Specifies the S3 path of ML model data to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#s3_uri SagemakerModel#s3_uri}

---

### SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig <a name="SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig(
  hub_content_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig.property.hubContentArn">hub_content_arn</a></code> | <code>str</code> | The ARN of the hub content for which deployment access is allowed. |

---

##### `hub_content_arn`<sup>Optional</sup> <a name="hub_content_arn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig.property.hubContentArn"></a>

```python
hub_content_arn: str
```

- *Type:* str

The ARN of the hub content for which deployment access is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#hub_content_arn SagemakerModel#hub_content_arn}

---

### SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig <a name="SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig(
  accept_eula: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig.property.acceptEula">accept_eula</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies agreement to the model end-user license agreement (EULA). |

---

##### `accept_eula`<sup>Optional</sup> <a name="accept_eula" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig.property.acceptEula"></a>

```python
accept_eula: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies agreement to the model end-user license agreement (EULA).

The `AcceptEula` value must be explicitly defined as `True` in order to accept the EULA that this model requires. You are responsible for reviewing and complying with any applicable license terms and making sure they are acceptable for your use case before downloading or using a model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#accept_eula SagemakerModel#accept_eula}

---

### SagemakerModelContainersMultiModelConfig <a name="SagemakerModelContainersMultiModelConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelContainersMultiModelConfig(
  model_cache_setting: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfig.property.modelCacheSetting">model_cache_setting</a></code> | <code>str</code> | Whether to cache models for a multi-model endpoint. |

---

##### `model_cache_setting`<sup>Optional</sup> <a name="model_cache_setting" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfig.property.modelCacheSetting"></a>

```python
model_cache_setting: str
```

- *Type:* str

Whether to cache models for a multi-model endpoint.

By default, multi-model endpoints cache models so that a model does not have to be loaded into memory each time it is invoked. Some use cases do not benefit from model caching. For example, if an endpoint hosts a large number of models that are each invoked infrequently, the endpoint might perform better if you disable model caching. To disable model caching, set the value of this parameter to `Disabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#model_cache_setting SagemakerModel#model_cache_setting}

---

### SagemakerModelInferenceExecutionConfig <a name="SagemakerModelInferenceExecutionConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelInferenceExecutionConfig(
  mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfig.property.mode">mode</a></code> | <code>str</code> | How containers in a multi-container are run. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

How containers in a multi-container are run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#mode SagemakerModel#mode}

---

### SagemakerModelPrimaryContainer <a name="SagemakerModelPrimaryContainer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelPrimaryContainer(
  container_hostname: str = None,
  environment: str = None,
  image: str = None,
  image_config: SagemakerModelPrimaryContainerImageConfig = None,
  inference_specification_name: str = None,
  mode: str = None,
  model_data_source: SagemakerModelPrimaryContainerModelDataSource = None,
  model_data_url: str = None,
  model_package_name: str = None,
  multi_model_config: SagemakerModelPrimaryContainerMultiModelConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.containerHostname">container_hostname</a></code> | <code>str</code> | This parameter is ignored for models that contain only a PrimaryContainer. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.environment">environment</a></code> | <code>str</code> | The environment variables to set in the Docker container. Don't include any sensitive data in your environment variables. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.image">image</a></code> | <code>str</code> | The path where inference code is stored. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.imageConfig">image_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a></code> | Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC). |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.inferenceSpecificationName">inference_specification_name</a></code> | <code>str</code> | The inference specification name in the model package version. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.mode">mode</a></code> | <code>str</code> | Whether the container hosts a single model or multiple models. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.modelDataSource">model_data_source</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource">SagemakerModelPrimaryContainerModelDataSource</a></code> | Specifies the location of ML model data to deploy. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.modelDataUrl">model_data_url</a></code> | <code>str</code> | The S3 path where the model artifacts, which result from model training, are stored. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.modelPackageName">model_package_name</a></code> | <code>str</code> | The name or Amazon Resource Name (ARN) of the model package to use to create the model. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.multiModelConfig">multi_model_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig">SagemakerModelPrimaryContainerMultiModelConfig</a></code> | Specifies additional configuration for multi-model endpoints. |

---

##### `container_hostname`<sup>Optional</sup> <a name="container_hostname" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.containerHostname"></a>

```python
container_hostname: str
```

- *Type:* str

This parameter is ignored for models that contain only a PrimaryContainer.

When a ContainerDefinition is part of an inference pipeline, the value of the parameter uniquely identifies the container for the purposes of logging and metrics. For information, see [Use Logs and Metrics to Monitor an Inference Pipeline](https://docs.aws.amazon.com/sagemaker/latest/dg/inference-pipeline-logs-metrics.html). If you don't specify a value for this parameter for a ContainerDefinition that is part of an inference pipeline, a unique name is automatically assigned based on the position of the ContainerDefinition in the pipeline. If you specify a value for the ContainerHostName for any ContainerDefinition that is part of an inference pipeline, you must specify a value for the ContainerHostName parameter of every ContainerDefinition in that pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#container_hostname SagemakerModel#container_hostname}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.environment"></a>

```python
environment: str
```

- *Type:* str

The environment variables to set in the Docker container. Don't include any sensitive data in your environment variables.

The maximum length of each key and value in the Environment map is 1024 bytes. The maximum length of all keys and values in the map, combined, is 32 KB. If you pass multiple containers to a CreateModel request, then the maximum length of all of their maps, combined, is also 32 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#environment SagemakerModel#environment}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.image"></a>

```python
image: str
```

- *Type:* str

The path where inference code is stored.

This can be either in Amazon EC2 Container Registry or in a Docker registry that is accessible from the same VPC that you configure for your endpoint. If you are using your own custom algorithm instead of an algorithm provided by SageMaker, the inference code must meet SageMaker requirements. SageMaker supports both registry/repository[:tag] and registry/repository[@digest] image path formats. For more information, see [Using Your Own Algorithms with Amazon SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#image SagemakerModel#image}

---

##### `image_config`<sup>Optional</sup> <a name="image_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.imageConfig"></a>

```python
image_config: SagemakerModelPrimaryContainerImageConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a>

Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#image_config SagemakerModel#image_config}

---

##### `inference_specification_name`<sup>Optional</sup> <a name="inference_specification_name" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.inferenceSpecificationName"></a>

```python
inference_specification_name: str
```

- *Type:* str

The inference specification name in the model package version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#inference_specification_name SagemakerModel#inference_specification_name}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.mode"></a>

```python
mode: str
```

- *Type:* str

Whether the container hosts a single model or multiple models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#mode SagemakerModel#mode}

---

##### `model_data_source`<sup>Optional</sup> <a name="model_data_source" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.modelDataSource"></a>

```python
model_data_source: SagemakerModelPrimaryContainerModelDataSource
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource">SagemakerModelPrimaryContainerModelDataSource</a>

Specifies the location of ML model data to deploy.

If specified, you must specify one and only one of the available data sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#model_data_source SagemakerModel#model_data_source}

---

##### `model_data_url`<sup>Optional</sup> <a name="model_data_url" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.modelDataUrl"></a>

```python
model_data_url: str
```

- *Type:* str

The S3 path where the model artifacts, which result from model training, are stored.

This path must point to a single gzip compressed tar archive (.tar.gz suffix). The S3 path is required for SageMaker built-in algorithms, but not if you use your own algorithms. For more information on built-in algorithms, see [Common Parameters](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-algo-docker-registry-paths.html).

If you provide a value for this parameter, SageMaker uses AWS Security Token Service to download model artifacts from the S3 path you provide. AWS STS is activated in your AWS account by default. If you previously deactivated AWS STS for a region, you need to reactivate AWS STS for that region. For more information, see [Activating and Deactivating AWS STS in an AWS Region](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html) in the AWS Identity and Access Management User Guide

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#model_data_url SagemakerModel#model_data_url}

---

##### `model_package_name`<sup>Optional</sup> <a name="model_package_name" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.modelPackageName"></a>

```python
model_package_name: str
```

- *Type:* str

The name or Amazon Resource Name (ARN) of the model package to use to create the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#model_package_name SagemakerModel#model_package_name}

---

##### `multi_model_config`<sup>Optional</sup> <a name="multi_model_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer.property.multiModelConfig"></a>

```python
multi_model_config: SagemakerModelPrimaryContainerMultiModelConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig">SagemakerModelPrimaryContainerMultiModelConfig</a>

Specifies additional configuration for multi-model endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#multi_model_config SagemakerModel#multi_model_config}

---

### SagemakerModelPrimaryContainerImageConfig <a name="SagemakerModelPrimaryContainerImageConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelPrimaryContainerImageConfig(
  repository_access_mode: str = None,
  repository_auth_config: SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfig.property.repositoryAccessMode">repository_access_mode</a></code> | <code>str</code> | Set this to one of the following values: Platform - The model image is hosted in Amazon ECR. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfig.property.repositoryAuthConfig">repository_auth_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a></code> | Specifies an authentication configuration for the private docker registry where your model image is hosted. |

---

##### `repository_access_mode`<sup>Optional</sup> <a name="repository_access_mode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfig.property.repositoryAccessMode"></a>

```python
repository_access_mode: str
```

- *Type:* str

Set this to one of the following values: Platform - The model image is hosted in Amazon ECR.

Vpc - The model image is hosted in a private Docker registry in your VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#repository_access_mode SagemakerModel#repository_access_mode}

---

##### `repository_auth_config`<sup>Optional</sup> <a name="repository_auth_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfig.property.repositoryAuthConfig"></a>

```python
repository_auth_config: SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a>

Specifies an authentication configuration for the private docker registry where your model image is hosted.

Specify a value for this property only if you specified `Vpc` as the value for the `RepositoryAccessMode` field of the `ImageConfig` object that you passed to a call to `CreateModel` and the private Docker registry where the model image is hosted requires authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#repository_auth_config SagemakerModel#repository_auth_config}

---

### SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig <a name="SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig(
  repository_credentials_provider_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig.property.repositoryCredentialsProviderArn">repository_credentials_provider_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an AWS Lambda function that provides credentials to authenticate to the private Docker registry where your model image is hosted. |

---

##### `repository_credentials_provider_arn`<sup>Optional</sup> <a name="repository_credentials_provider_arn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig.property.repositoryCredentialsProviderArn"></a>

```python
repository_credentials_provider_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of an AWS Lambda function that provides credentials to authenticate to the private Docker registry where your model image is hosted.

For information about how to create an AWS Lambda function, see [Create a Lambda function with the console](https://docs.aws.amazon.com/lambda/latest/dg/getting-started-create-function.html) in the AWS Lambda Developer Guide

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#repository_credentials_provider_arn SagemakerModel#repository_credentials_provider_arn}

---

### SagemakerModelPrimaryContainerModelDataSource <a name="SagemakerModelPrimaryContainerModelDataSource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelPrimaryContainerModelDataSource(
  s3_data_source: SagemakerModelPrimaryContainerModelDataSourceS3DataSource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource.property.s3DataSource">s3_data_source</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource">SagemakerModelPrimaryContainerModelDataSourceS3DataSource</a></code> | Specifies the S3 location of ML model data to deploy. |

---

##### `s3_data_source`<sup>Optional</sup> <a name="s3_data_source" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource.property.s3DataSource"></a>

```python
s3_data_source: SagemakerModelPrimaryContainerModelDataSourceS3DataSource
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource">SagemakerModelPrimaryContainerModelDataSourceS3DataSource</a>

Specifies the S3 location of ML model data to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#s3_data_source SagemakerModel#s3_data_source}

---

### SagemakerModelPrimaryContainerModelDataSourceS3DataSource <a name="SagemakerModelPrimaryContainerModelDataSourceS3DataSource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource(
  compression_type: str = None,
  hub_access_config: SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig = None,
  model_access_config: SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig = None,
  s3_data_type: str = None,
  s3_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.compressionType">compression_type</a></code> | <code>str</code> | Specifies how the ML model data is prepared. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.hubAccessConfig">hub_access_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig</a></code> | Configuration information specifying which hub contents have accessible deployment options. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.modelAccessConfig">model_access_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig</a></code> | The access configuration file to control access to the ML model. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.s3DataType">s3_data_type</a></code> | <code>str</code> | Specifies the type of ML model data to deploy. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.s3Uri">s3_uri</a></code> | <code>str</code> | Specifies the S3 path of ML model data to deploy. |

---

##### `compression_type`<sup>Optional</sup> <a name="compression_type" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.compressionType"></a>

```python
compression_type: str
```

- *Type:* str

Specifies how the ML model data is prepared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#compression_type SagemakerModel#compression_type}

---

##### `hub_access_config`<sup>Optional</sup> <a name="hub_access_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.hubAccessConfig"></a>

```python
hub_access_config: SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig</a>

Configuration information specifying which hub contents have accessible deployment options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#hub_access_config SagemakerModel#hub_access_config}

---

##### `model_access_config`<sup>Optional</sup> <a name="model_access_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.modelAccessConfig"></a>

```python
model_access_config: SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig</a>

The access configuration file to control access to the ML model.

You can explicitly accept the model end-user license agreement (EULA) within the `ModelAccessConfig`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#model_access_config SagemakerModel#model_access_config}

---

##### `s3_data_type`<sup>Optional</sup> <a name="s3_data_type" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.s3DataType"></a>

```python
s3_data_type: str
```

- *Type:* str

Specifies the type of ML model data to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#s3_data_type SagemakerModel#s3_data_type}

---

##### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

Specifies the S3 path of ML model data to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#s3_uri SagemakerModel#s3_uri}

---

### SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig <a name="SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig(
  hub_content_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig.property.hubContentArn">hub_content_arn</a></code> | <code>str</code> | The ARN of the hub content for which deployment access is allowed. |

---

##### `hub_content_arn`<sup>Optional</sup> <a name="hub_content_arn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig.property.hubContentArn"></a>

```python
hub_content_arn: str
```

- *Type:* str

The ARN of the hub content for which deployment access is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#hub_content_arn SagemakerModel#hub_content_arn}

---

### SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig <a name="SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig(
  accept_eula: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig.property.acceptEula">accept_eula</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies agreement to the model end-user license agreement (EULA). |

---

##### `accept_eula`<sup>Optional</sup> <a name="accept_eula" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig.property.acceptEula"></a>

```python
accept_eula: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies agreement to the model end-user license agreement (EULA).

The `AcceptEula` value must be explicitly defined as `True` in order to accept the EULA that this model requires. You are responsible for reviewing and complying with any applicable license terms and making sure they are acceptable for your use case before downloading or using a model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#accept_eula SagemakerModel#accept_eula}

---

### SagemakerModelPrimaryContainerMultiModelConfig <a name="SagemakerModelPrimaryContainerMultiModelConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig(
  model_cache_setting: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig.property.modelCacheSetting">model_cache_setting</a></code> | <code>str</code> | Whether to cache models for a multi-model endpoint. |

---

##### `model_cache_setting`<sup>Optional</sup> <a name="model_cache_setting" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig.property.modelCacheSetting"></a>

```python
model_cache_setting: str
```

- *Type:* str

Whether to cache models for a multi-model endpoint.

By default, multi-model endpoints cache models so that a model does not have to be loaded into memory each time it is invoked. Some use cases do not benefit from model caching. For example, if an endpoint hosts a large number of models that are each invoked infrequently, the endpoint might perform better if you disable model caching. To disable model caching, set the value of this parameter to `Disabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#model_cache_setting SagemakerModel#model_cache_setting}

---

### SagemakerModelTags <a name="SagemakerModelTags" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTags.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTags.property.key">key</a></code> | <code>str</code> | The tag value. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTags.property.value">value</a></code> | <code>str</code> | The tag key. Tag keys must be unique per resource. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#key SagemakerModel#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag key. Tag keys must be unique per resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#value SagemakerModel#value}

---

### SagemakerModelVpcConfig <a name="SagemakerModelVpcConfig" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelVpcConfig(
  security_group_ids: typing.List[str] = None,
  subnets: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The VPC security group IDs, in the form `sg-xxxxxxxx`. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfig.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | The ID of the subnets in the VPC to which you want to connect your training job or model. |

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

The VPC security group IDs, in the form `sg-xxxxxxxx`.

Specify the security groups for the VPC that is specified in the `Subnets` field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#security_group_ids SagemakerModel#security_group_ids}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfig.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

The ID of the subnets in the VPC to which you want to connect your training job or model.

For information about the availability of specific instance types, see [Supported Instance Types and Availability Zones](https://docs.aws.amazon.com/sagemaker/latest/dg/instance-types-az.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#subnets SagemakerModel#subnets}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerModelContainersImageConfigOutputReference <a name="SagemakerModelContainersImageConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelContainersImageConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.putRepositoryAuthConfig">put_repository_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.resetRepositoryAccessMode">reset_repository_access_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.resetRepositoryAuthConfig">reset_repository_auth_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_repository_auth_config` <a name="put_repository_auth_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.putRepositoryAuthConfig"></a>

```python
def put_repository_auth_config(
  repository_credentials_provider_arn: str = None
) -> None
```

###### `repository_credentials_provider_arn`<sup>Optional</sup> <a name="repository_credentials_provider_arn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.putRepositoryAuthConfig.parameter.repositoryCredentialsProviderArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of an AWS Lambda function that provides credentials to authenticate to the private Docker registry where your model image is hosted.

For information about how to create an AWS Lambda function, see [Create a Lambda function with the console](https://docs.aws.amazon.com/lambda/latest/dg/getting-started-create-function.html) in the AWS Lambda Developer Guide

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#repository_credentials_provider_arn SagemakerModel#repository_credentials_provider_arn}

---

##### `reset_repository_access_mode` <a name="reset_repository_access_mode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.resetRepositoryAccessMode"></a>

```python
def reset_repository_access_mode() -> None
```

##### `reset_repository_auth_config` <a name="reset_repository_auth_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.resetRepositoryAuthConfig"></a>

```python
def reset_repository_auth_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.property.repositoryAuthConfig">repository_auth_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference">SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.property.repositoryAccessModeInput">repository_access_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.property.repositoryAuthConfigInput">repository_auth_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfig">SagemakerModelContainersImageConfigRepositoryAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.property.repositoryAccessMode">repository_access_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfig">SagemakerModelContainersImageConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_auth_config`<sup>Required</sup> <a name="repository_auth_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.property.repositoryAuthConfig"></a>

```python
repository_auth_config: SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference">SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference</a>

---

##### `repository_access_mode_input`<sup>Optional</sup> <a name="repository_access_mode_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.property.repositoryAccessModeInput"></a>

```python
repository_access_mode_input: str
```

- *Type:* str

---

##### `repository_auth_config_input`<sup>Optional</sup> <a name="repository_auth_config_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.property.repositoryAuthConfigInput"></a>

```python
repository_auth_config_input: IResolvable | SagemakerModelContainersImageConfigRepositoryAuthConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfig">SagemakerModelContainersImageConfigRepositoryAuthConfig</a>

---

##### `repository_access_mode`<sup>Required</sup> <a name="repository_access_mode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.property.repositoryAccessMode"></a>

```python
repository_access_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelContainersImageConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfig">SagemakerModelContainersImageConfig</a>

---


### SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference <a name="SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.resetRepositoryCredentialsProviderArn">reset_repository_credentials_provider_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_repository_credentials_provider_arn` <a name="reset_repository_credentials_provider_arn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.resetRepositoryCredentialsProviderArn"></a>

```python
def reset_repository_credentials_provider_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArnInput">repository_credentials_provider_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArn">repository_credentials_provider_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfig">SagemakerModelContainersImageConfigRepositoryAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_credentials_provider_arn_input`<sup>Optional</sup> <a name="repository_credentials_provider_arn_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArnInput"></a>

```python
repository_credentials_provider_arn_input: str
```

- *Type:* str

---

##### `repository_credentials_provider_arn`<sup>Required</sup> <a name="repository_credentials_provider_arn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArn"></a>

```python
repository_credentials_provider_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelContainersImageConfigRepositoryAuthConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfig">SagemakerModelContainersImageConfigRepositoryAuthConfig</a>

---


### SagemakerModelContainersList <a name="SagemakerModelContainersList" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelContainersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerModelContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers">SagemakerModelContainers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerModelContainers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers">SagemakerModelContainers</a>]

---


### SagemakerModelContainersModelDataSourceOutputReference <a name="SagemakerModelContainersModelDataSourceOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.putS3DataSource">put_s3_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.resetS3DataSource">reset_s3_data_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_data_source` <a name="put_s3_data_source" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.putS3DataSource"></a>

```python
def put_s3_data_source(
  compression_type: str = None,
  hub_access_config: SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig = None,
  model_access_config: SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig = None,
  s3_data_type: str = None,
  s3_uri: str = None
) -> None
```

###### `compression_type`<sup>Optional</sup> <a name="compression_type" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.putS3DataSource.parameter.compressionType"></a>

- *Type:* str

Specifies how the ML model data is prepared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#compression_type SagemakerModel#compression_type}

---

###### `hub_access_config`<sup>Optional</sup> <a name="hub_access_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.putS3DataSource.parameter.hubAccessConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig">SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig</a>

Configuration information specifying which hub contents have accessible deployment options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#hub_access_config SagemakerModel#hub_access_config}

---

###### `model_access_config`<sup>Optional</sup> <a name="model_access_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.putS3DataSource.parameter.modelAccessConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig</a>

The access configuration file to control access to the ML model.

You can explicitly accept the model end-user license agreement (EULA) within the `ModelAccessConfig`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#model_access_config SagemakerModel#model_access_config}

---

###### `s3_data_type`<sup>Optional</sup> <a name="s3_data_type" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.putS3DataSource.parameter.s3DataType"></a>

- *Type:* str

Specifies the type of ML model data to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#s3_data_type SagemakerModel#s3_data_type}

---

###### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.putS3DataSource.parameter.s3Uri"></a>

- *Type:* str

Specifies the S3 path of ML model data to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#s3_uri SagemakerModel#s3_uri}

---

##### `reset_s3_data_source` <a name="reset_s3_data_source" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.resetS3DataSource"></a>

```python
def reset_s3_data_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.property.s3DataSource">s3_data_source</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference">SagemakerModelContainersModelDataSourceS3DataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.property.s3DataSourceInput">s3_data_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource">SagemakerModelContainersModelDataSourceS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSource">SagemakerModelContainersModelDataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_data_source`<sup>Required</sup> <a name="s3_data_source" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.property.s3DataSource"></a>

```python
s3_data_source: SagemakerModelContainersModelDataSourceS3DataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference">SagemakerModelContainersModelDataSourceS3DataSourceOutputReference</a>

---

##### `s3_data_source_input`<sup>Optional</sup> <a name="s3_data_source_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.property.s3DataSourceInput"></a>

```python
s3_data_source_input: IResolvable | SagemakerModelContainersModelDataSourceS3DataSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource">SagemakerModelContainersModelDataSourceS3DataSource</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelContainersModelDataSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSource">SagemakerModelContainersModelDataSource</a>

---


### SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference <a name="SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.resetHubContentArn">reset_hub_content_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hub_content_arn` <a name="reset_hub_content_arn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.resetHubContentArn"></a>

```python
def reset_hub_content_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.hubContentArnInput">hub_content_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.hubContentArn">hub_content_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig">SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hub_content_arn_input`<sup>Optional</sup> <a name="hub_content_arn_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.hubContentArnInput"></a>

```python
hub_content_arn_input: str
```

- *Type:* str

---

##### `hub_content_arn`<sup>Required</sup> <a name="hub_content_arn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.hubContentArn"></a>

```python
hub_content_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig">SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig</a>

---


### SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference <a name="SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.resetAcceptEula">reset_accept_eula</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_accept_eula` <a name="reset_accept_eula" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.resetAcceptEula"></a>

```python
def reset_accept_eula() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEulaInput">accept_eula_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEula">accept_eula</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accept_eula_input`<sup>Optional</sup> <a name="accept_eula_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEulaInput"></a>

```python
accept_eula_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `accept_eula`<sup>Required</sup> <a name="accept_eula" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEula"></a>

```python
accept_eula: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig</a>

---


### SagemakerModelContainersModelDataSourceS3DataSourceOutputReference <a name="SagemakerModelContainersModelDataSourceS3DataSourceOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.putHubAccessConfig">put_hub_access_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.putModelAccessConfig">put_model_access_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resetCompressionType">reset_compression_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resetHubAccessConfig">reset_hub_access_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resetModelAccessConfig">reset_model_access_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resetS3DataType">reset_s3_data_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resetS3Uri">reset_s3_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_hub_access_config` <a name="put_hub_access_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.putHubAccessConfig"></a>

```python
def put_hub_access_config(
  hub_content_arn: str = None
) -> None
```

###### `hub_content_arn`<sup>Optional</sup> <a name="hub_content_arn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.putHubAccessConfig.parameter.hubContentArn"></a>

- *Type:* str

The ARN of the hub content for which deployment access is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#hub_content_arn SagemakerModel#hub_content_arn}

---

##### `put_model_access_config` <a name="put_model_access_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.putModelAccessConfig"></a>

```python
def put_model_access_config(
  accept_eula: bool | IResolvable = None
) -> None
```

###### `accept_eula`<sup>Optional</sup> <a name="accept_eula" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.putModelAccessConfig.parameter.acceptEula"></a>

- *Type:* bool | cdktn.IResolvable

Specifies agreement to the model end-user license agreement (EULA).

The `AcceptEula` value must be explicitly defined as `True` in order to accept the EULA that this model requires. You are responsible for reviewing and complying with any applicable license terms and making sure they are acceptable for your use case before downloading or using a model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#accept_eula SagemakerModel#accept_eula}

---

##### `reset_compression_type` <a name="reset_compression_type" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resetCompressionType"></a>

```python
def reset_compression_type() -> None
```

##### `reset_hub_access_config` <a name="reset_hub_access_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resetHubAccessConfig"></a>

```python
def reset_hub_access_config() -> None
```

##### `reset_model_access_config` <a name="reset_model_access_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resetModelAccessConfig"></a>

```python
def reset_model_access_config() -> None
```

##### `reset_s3_data_type` <a name="reset_s3_data_type" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resetS3DataType"></a>

```python
def reset_s3_data_type() -> None
```

##### `reset_s3_uri` <a name="reset_s3_uri" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resetS3Uri"></a>

```python
def reset_s3_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.hubAccessConfig">hub_access_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference">SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.modelAccessConfig">model_access_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference">SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.compressionTypeInput">compression_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.hubAccessConfigInput">hub_access_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig">SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.modelAccessConfigInput">model_access_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.s3DataTypeInput">s3_data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.s3UriInput">s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.compressionType">compression_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.s3DataType">s3_data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource">SagemakerModelContainersModelDataSourceS3DataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hub_access_config`<sup>Required</sup> <a name="hub_access_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.hubAccessConfig"></a>

```python
hub_access_config: SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference">SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference</a>

---

##### `model_access_config`<sup>Required</sup> <a name="model_access_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.modelAccessConfig"></a>

```python
model_access_config: SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference">SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference</a>

---

##### `compression_type_input`<sup>Optional</sup> <a name="compression_type_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.compressionTypeInput"></a>

```python
compression_type_input: str
```

- *Type:* str

---

##### `hub_access_config_input`<sup>Optional</sup> <a name="hub_access_config_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.hubAccessConfigInput"></a>

```python
hub_access_config_input: IResolvable | SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig">SagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig</a>

---

##### `model_access_config_input`<sup>Optional</sup> <a name="model_access_config_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.modelAccessConfigInput"></a>

```python
model_access_config_input: IResolvable | SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig</a>

---

##### `s3_data_type_input`<sup>Optional</sup> <a name="s3_data_type_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.s3DataTypeInput"></a>

```python
s3_data_type_input: str
```

- *Type:* str

---

##### `s3_uri_input`<sup>Optional</sup> <a name="s3_uri_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.s3UriInput"></a>

```python
s3_uri_input: str
```

- *Type:* str

---

##### `compression_type`<sup>Required</sup> <a name="compression_type" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.compressionType"></a>

```python
compression_type: str
```

- *Type:* str

---

##### `s3_data_type`<sup>Required</sup> <a name="s3_data_type" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.s3DataType"></a>

```python
s3_data_type: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelContainersModelDataSourceS3DataSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource">SagemakerModelContainersModelDataSourceS3DataSource</a>

---


### SagemakerModelContainersMultiModelConfigOutputReference <a name="SagemakerModelContainersMultiModelConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.resetModelCacheSetting">reset_model_cache_setting</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_model_cache_setting` <a name="reset_model_cache_setting" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.resetModelCacheSetting"></a>

```python
def reset_model_cache_setting() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.property.modelCacheSettingInput">model_cache_setting_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.property.modelCacheSetting">model_cache_setting</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfig">SagemakerModelContainersMultiModelConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_cache_setting_input`<sup>Optional</sup> <a name="model_cache_setting_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.property.modelCacheSettingInput"></a>

```python
model_cache_setting_input: str
```

- *Type:* str

---

##### `model_cache_setting`<sup>Required</sup> <a name="model_cache_setting" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.property.modelCacheSetting"></a>

```python
model_cache_setting: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelContainersMultiModelConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfig">SagemakerModelContainersMultiModelConfig</a>

---


### SagemakerModelContainersOutputReference <a name="SagemakerModelContainersOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelContainersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.putImageConfig">put_image_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.putModelDataSource">put_model_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.putMultiModelConfig">put_multi_model_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetContainerHostname">reset_container_hostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetImage">reset_image</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetImageConfig">reset_image_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetInferenceSpecificationName">reset_inference_specification_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetModelDataSource">reset_model_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetModelDataUrl">reset_model_data_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetModelPackageName">reset_model_package_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetMultiModelConfig">reset_multi_model_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_image_config` <a name="put_image_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.putImageConfig"></a>

```python
def put_image_config(
  repository_access_mode: str = None,
  repository_auth_config: SagemakerModelContainersImageConfigRepositoryAuthConfig = None
) -> None
```

###### `repository_access_mode`<sup>Optional</sup> <a name="repository_access_mode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.putImageConfig.parameter.repositoryAccessMode"></a>

- *Type:* str

Set this to one of the following values: Platform - The model image is hosted in Amazon ECR.

Vpc - The model image is hosted in a private Docker registry in your VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#repository_access_mode SagemakerModel#repository_access_mode}

---

###### `repository_auth_config`<sup>Optional</sup> <a name="repository_auth_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.putImageConfig.parameter.repositoryAuthConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigRepositoryAuthConfig">SagemakerModelContainersImageConfigRepositoryAuthConfig</a>

Specifies an authentication configuration for the private docker registry where your model image is hosted.

Specify a value for this property only if you specified `Vpc` as the value for the `RepositoryAccessMode` field of the `ImageConfig` object that you passed to a call to `CreateModel` and the private Docker registry where the model image is hosted requires authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#repository_auth_config SagemakerModel#repository_auth_config}

---

##### `put_model_data_source` <a name="put_model_data_source" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.putModelDataSource"></a>

```python
def put_model_data_source(
  s3_data_source: SagemakerModelContainersModelDataSourceS3DataSource = None
) -> None
```

###### `s3_data_source`<sup>Optional</sup> <a name="s3_data_source" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.putModelDataSource.parameter.s3DataSource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceS3DataSource">SagemakerModelContainersModelDataSourceS3DataSource</a>

Specifies the S3 location of ML model data to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#s3_data_source SagemakerModel#s3_data_source}

---

##### `put_multi_model_config` <a name="put_multi_model_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.putMultiModelConfig"></a>

```python
def put_multi_model_config(
  model_cache_setting: str = None
) -> None
```

###### `model_cache_setting`<sup>Optional</sup> <a name="model_cache_setting" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.putMultiModelConfig.parameter.modelCacheSetting"></a>

- *Type:* str

Whether to cache models for a multi-model endpoint.

By default, multi-model endpoints cache models so that a model does not have to be loaded into memory each time it is invoked. Some use cases do not benefit from model caching. For example, if an endpoint hosts a large number of models that are each invoked infrequently, the endpoint might perform better if you disable model caching. To disable model caching, set the value of this parameter to `Disabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#model_cache_setting SagemakerModel#model_cache_setting}

---

##### `reset_container_hostname` <a name="reset_container_hostname" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetContainerHostname"></a>

```python
def reset_container_hostname() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_image` <a name="reset_image" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetImage"></a>

```python
def reset_image() -> None
```

##### `reset_image_config` <a name="reset_image_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetImageConfig"></a>

```python
def reset_image_config() -> None
```

##### `reset_inference_specification_name` <a name="reset_inference_specification_name" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetInferenceSpecificationName"></a>

```python
def reset_inference_specification_name() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_model_data_source` <a name="reset_model_data_source" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetModelDataSource"></a>

```python
def reset_model_data_source() -> None
```

##### `reset_model_data_url` <a name="reset_model_data_url" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetModelDataUrl"></a>

```python
def reset_model_data_url() -> None
```

##### `reset_model_package_name` <a name="reset_model_package_name" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetModelPackageName"></a>

```python
def reset_model_package_name() -> None
```

##### `reset_multi_model_config` <a name="reset_multi_model_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.resetMultiModelConfig"></a>

```python
def reset_multi_model_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.imageConfig">image_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference">SagemakerModelContainersImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.modelDataSource">model_data_source</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference">SagemakerModelContainersModelDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.multiModelConfig">multi_model_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference">SagemakerModelContainersMultiModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.containerHostnameInput">container_hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.imageConfigInput">image_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfig">SagemakerModelContainersImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.inferenceSpecificationNameInput">inference_specification_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.modelDataSourceInput">model_data_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSource">SagemakerModelContainersModelDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.modelDataUrlInput">model_data_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.modelPackageNameInput">model_package_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.multiModelConfigInput">multi_model_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfig">SagemakerModelContainersMultiModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.containerHostname">container_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.inferenceSpecificationName">inference_specification_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.modelDataUrl">model_data_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.modelPackageName">model_package_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers">SagemakerModelContainers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_config`<sup>Required</sup> <a name="image_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.imageConfig"></a>

```python
image_config: SagemakerModelContainersImageConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfigOutputReference">SagemakerModelContainersImageConfigOutputReference</a>

---

##### `model_data_source`<sup>Required</sup> <a name="model_data_source" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.modelDataSource"></a>

```python
model_data_source: SagemakerModelContainersModelDataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSourceOutputReference">SagemakerModelContainersModelDataSourceOutputReference</a>

---

##### `multi_model_config`<sup>Required</sup> <a name="multi_model_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.multiModelConfig"></a>

```python
multi_model_config: SagemakerModelContainersMultiModelConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfigOutputReference">SagemakerModelContainersMultiModelConfigOutputReference</a>

---

##### `container_hostname_input`<sup>Optional</sup> <a name="container_hostname_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.containerHostnameInput"></a>

```python
container_hostname_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `image_config_input`<sup>Optional</sup> <a name="image_config_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.imageConfigInput"></a>

```python
image_config_input: IResolvable | SagemakerModelContainersImageConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersImageConfig">SagemakerModelContainersImageConfig</a>

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `inference_specification_name_input`<sup>Optional</sup> <a name="inference_specification_name_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.inferenceSpecificationNameInput"></a>

```python
inference_specification_name_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `model_data_source_input`<sup>Optional</sup> <a name="model_data_source_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.modelDataSourceInput"></a>

```python
model_data_source_input: IResolvable | SagemakerModelContainersModelDataSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersModelDataSource">SagemakerModelContainersModelDataSource</a>

---

##### `model_data_url_input`<sup>Optional</sup> <a name="model_data_url_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.modelDataUrlInput"></a>

```python
model_data_url_input: str
```

- *Type:* str

---

##### `model_package_name_input`<sup>Optional</sup> <a name="model_package_name_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.modelPackageNameInput"></a>

```python
model_package_name_input: str
```

- *Type:* str

---

##### `multi_model_config_input`<sup>Optional</sup> <a name="multi_model_config_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.multiModelConfigInput"></a>

```python
multi_model_config_input: IResolvable | SagemakerModelContainersMultiModelConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersMultiModelConfig">SagemakerModelContainersMultiModelConfig</a>

---

##### `container_hostname`<sup>Required</sup> <a name="container_hostname" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.containerHostname"></a>

```python
container_hostname: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `inference_specification_name`<sup>Required</sup> <a name="inference_specification_name" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.inferenceSpecificationName"></a>

```python
inference_specification_name: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `model_data_url`<sup>Required</sup> <a name="model_data_url" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.modelDataUrl"></a>

```python
model_data_url: str
```

- *Type:* str

---

##### `model_package_name`<sup>Required</sup> <a name="model_package_name" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.modelPackageName"></a>

```python
model_package_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelContainers
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelContainers">SagemakerModelContainers</a>

---


### SagemakerModelInferenceExecutionConfigOutputReference <a name="SagemakerModelInferenceExecutionConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.resetMode">reset_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelInferenceExecutionConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a>

---


### SagemakerModelPrimaryContainerImageConfigOutputReference <a name="SagemakerModelPrimaryContainerImageConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.putRepositoryAuthConfig">put_repository_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resetRepositoryAccessMode">reset_repository_access_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resetRepositoryAuthConfig">reset_repository_auth_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_repository_auth_config` <a name="put_repository_auth_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.putRepositoryAuthConfig"></a>

```python
def put_repository_auth_config(
  repository_credentials_provider_arn: str = None
) -> None
```

###### `repository_credentials_provider_arn`<sup>Optional</sup> <a name="repository_credentials_provider_arn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.putRepositoryAuthConfig.parameter.repositoryCredentialsProviderArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of an AWS Lambda function that provides credentials to authenticate to the private Docker registry where your model image is hosted.

For information about how to create an AWS Lambda function, see [Create a Lambda function with the console](https://docs.aws.amazon.com/lambda/latest/dg/getting-started-create-function.html) in the AWS Lambda Developer Guide

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#repository_credentials_provider_arn SagemakerModel#repository_credentials_provider_arn}

---

##### `reset_repository_access_mode` <a name="reset_repository_access_mode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resetRepositoryAccessMode"></a>

```python
def reset_repository_access_mode() -> None
```

##### `reset_repository_auth_config` <a name="reset_repository_auth_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resetRepositoryAuthConfig"></a>

```python
def reset_repository_auth_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAuthConfig">repository_auth_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAccessModeInput">repository_access_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAuthConfigInput">repository_auth_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAccessMode">repository_access_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_auth_config`<sup>Required</sup> <a name="repository_auth_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAuthConfig"></a>

```python
repository_auth_config: SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference</a>

---

##### `repository_access_mode_input`<sup>Optional</sup> <a name="repository_access_mode_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAccessModeInput"></a>

```python
repository_access_mode_input: str
```

- *Type:* str

---

##### `repository_auth_config_input`<sup>Optional</sup> <a name="repository_auth_config_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAuthConfigInput"></a>

```python
repository_auth_config_input: IResolvable | SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a>

---

##### `repository_access_mode`<sup>Required</sup> <a name="repository_access_mode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAccessMode"></a>

```python
repository_access_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelPrimaryContainerImageConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a>

---


### SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference <a name="SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.resetRepositoryCredentialsProviderArn">reset_repository_credentials_provider_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_repository_credentials_provider_arn` <a name="reset_repository_credentials_provider_arn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.resetRepositoryCredentialsProviderArn"></a>

```python
def reset_repository_credentials_provider_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArnInput">repository_credentials_provider_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArn">repository_credentials_provider_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_credentials_provider_arn_input`<sup>Optional</sup> <a name="repository_credentials_provider_arn_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArnInput"></a>

```python
repository_credentials_provider_arn_input: str
```

- *Type:* str

---

##### `repository_credentials_provider_arn`<sup>Required</sup> <a name="repository_credentials_provider_arn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArn"></a>

```python
repository_credentials_provider_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a>

---


### SagemakerModelPrimaryContainerModelDataSourceOutputReference <a name="SagemakerModelPrimaryContainerModelDataSourceOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.putS3DataSource">put_s3_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.resetS3DataSource">reset_s3_data_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_data_source` <a name="put_s3_data_source" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.putS3DataSource"></a>

```python
def put_s3_data_source(
  compression_type: str = None,
  hub_access_config: SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig = None,
  model_access_config: SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig = None,
  s3_data_type: str = None,
  s3_uri: str = None
) -> None
```

###### `compression_type`<sup>Optional</sup> <a name="compression_type" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.putS3DataSource.parameter.compressionType"></a>

- *Type:* str

Specifies how the ML model data is prepared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#compression_type SagemakerModel#compression_type}

---

###### `hub_access_config`<sup>Optional</sup> <a name="hub_access_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.putS3DataSource.parameter.hubAccessConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig</a>

Configuration information specifying which hub contents have accessible deployment options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#hub_access_config SagemakerModel#hub_access_config}

---

###### `model_access_config`<sup>Optional</sup> <a name="model_access_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.putS3DataSource.parameter.modelAccessConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig</a>

The access configuration file to control access to the ML model.

You can explicitly accept the model end-user license agreement (EULA) within the `ModelAccessConfig`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#model_access_config SagemakerModel#model_access_config}

---

###### `s3_data_type`<sup>Optional</sup> <a name="s3_data_type" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.putS3DataSource.parameter.s3DataType"></a>

- *Type:* str

Specifies the type of ML model data to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#s3_data_type SagemakerModel#s3_data_type}

---

###### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.putS3DataSource.parameter.s3Uri"></a>

- *Type:* str

Specifies the S3 path of ML model data to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#s3_uri SagemakerModel#s3_uri}

---

##### `reset_s3_data_source` <a name="reset_s3_data_source" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.resetS3DataSource"></a>

```python
def reset_s3_data_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.s3DataSource">s3_data_source</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.s3DataSourceInput">s3_data_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource">SagemakerModelPrimaryContainerModelDataSourceS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource">SagemakerModelPrimaryContainerModelDataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_data_source`<sup>Required</sup> <a name="s3_data_source" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.s3DataSource"></a>

```python
s3_data_source: SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference</a>

---

##### `s3_data_source_input`<sup>Optional</sup> <a name="s3_data_source_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.s3DataSourceInput"></a>

```python
s3_data_source_input: IResolvable | SagemakerModelPrimaryContainerModelDataSourceS3DataSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource">SagemakerModelPrimaryContainerModelDataSourceS3DataSource</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelPrimaryContainerModelDataSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource">SagemakerModelPrimaryContainerModelDataSource</a>

---


### SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference <a name="SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.resetHubContentArn">reset_hub_content_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hub_content_arn` <a name="reset_hub_content_arn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.resetHubContentArn"></a>

```python
def reset_hub_content_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.hubContentArnInput">hub_content_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.hubContentArn">hub_content_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hub_content_arn_input`<sup>Optional</sup> <a name="hub_content_arn_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.hubContentArnInput"></a>

```python
hub_content_arn_input: str
```

- *Type:* str

---

##### `hub_content_arn`<sup>Required</sup> <a name="hub_content_arn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.hubContentArn"></a>

```python
hub_content_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig</a>

---


### SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference <a name="SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.resetAcceptEula">reset_accept_eula</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_accept_eula` <a name="reset_accept_eula" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.resetAcceptEula"></a>

```python
def reset_accept_eula() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEulaInput">accept_eula_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEula">accept_eula</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accept_eula_input`<sup>Optional</sup> <a name="accept_eula_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEulaInput"></a>

```python
accept_eula_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `accept_eula`<sup>Required</sup> <a name="accept_eula" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEula"></a>

```python
accept_eula: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig</a>

---


### SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference <a name="SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.putHubAccessConfig">put_hub_access_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.putModelAccessConfig">put_model_access_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resetCompressionType">reset_compression_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resetHubAccessConfig">reset_hub_access_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resetModelAccessConfig">reset_model_access_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resetS3DataType">reset_s3_data_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resetS3Uri">reset_s3_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_hub_access_config` <a name="put_hub_access_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.putHubAccessConfig"></a>

```python
def put_hub_access_config(
  hub_content_arn: str = None
) -> None
```

###### `hub_content_arn`<sup>Optional</sup> <a name="hub_content_arn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.putHubAccessConfig.parameter.hubContentArn"></a>

- *Type:* str

The ARN of the hub content for which deployment access is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#hub_content_arn SagemakerModel#hub_content_arn}

---

##### `put_model_access_config` <a name="put_model_access_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.putModelAccessConfig"></a>

```python
def put_model_access_config(
  accept_eula: bool | IResolvable = None
) -> None
```

###### `accept_eula`<sup>Optional</sup> <a name="accept_eula" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.putModelAccessConfig.parameter.acceptEula"></a>

- *Type:* bool | cdktn.IResolvable

Specifies agreement to the model end-user license agreement (EULA).

The `AcceptEula` value must be explicitly defined as `True` in order to accept the EULA that this model requires. You are responsible for reviewing and complying with any applicable license terms and making sure they are acceptable for your use case before downloading or using a model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#accept_eula SagemakerModel#accept_eula}

---

##### `reset_compression_type` <a name="reset_compression_type" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resetCompressionType"></a>

```python
def reset_compression_type() -> None
```

##### `reset_hub_access_config` <a name="reset_hub_access_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resetHubAccessConfig"></a>

```python
def reset_hub_access_config() -> None
```

##### `reset_model_access_config` <a name="reset_model_access_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resetModelAccessConfig"></a>

```python
def reset_model_access_config() -> None
```

##### `reset_s3_data_type` <a name="reset_s3_data_type" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resetS3DataType"></a>

```python
def reset_s3_data_type() -> None
```

##### `reset_s3_uri` <a name="reset_s3_uri" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resetS3Uri"></a>

```python
def reset_s3_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.hubAccessConfig">hub_access_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.modelAccessConfig">model_access_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.compressionTypeInput">compression_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.hubAccessConfigInput">hub_access_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.modelAccessConfigInput">model_access_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3DataTypeInput">s3_data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3UriInput">s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.compressionType">compression_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3DataType">s3_data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource">SagemakerModelPrimaryContainerModelDataSourceS3DataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hub_access_config`<sup>Required</sup> <a name="hub_access_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.hubAccessConfig"></a>

```python
hub_access_config: SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference</a>

---

##### `model_access_config`<sup>Required</sup> <a name="model_access_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.modelAccessConfig"></a>

```python
model_access_config: SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference</a>

---

##### `compression_type_input`<sup>Optional</sup> <a name="compression_type_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.compressionTypeInput"></a>

```python
compression_type_input: str
```

- *Type:* str

---

##### `hub_access_config_input`<sup>Optional</sup> <a name="hub_access_config_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.hubAccessConfigInput"></a>

```python
hub_access_config_input: IResolvable | SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig</a>

---

##### `model_access_config_input`<sup>Optional</sup> <a name="model_access_config_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.modelAccessConfigInput"></a>

```python
model_access_config_input: IResolvable | SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig">SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig</a>

---

##### `s3_data_type_input`<sup>Optional</sup> <a name="s3_data_type_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3DataTypeInput"></a>

```python
s3_data_type_input: str
```

- *Type:* str

---

##### `s3_uri_input`<sup>Optional</sup> <a name="s3_uri_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3UriInput"></a>

```python
s3_uri_input: str
```

- *Type:* str

---

##### `compression_type`<sup>Required</sup> <a name="compression_type" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.compressionType"></a>

```python
compression_type: str
```

- *Type:* str

---

##### `s3_data_type`<sup>Required</sup> <a name="s3_data_type" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3DataType"></a>

```python
s3_data_type: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelPrimaryContainerModelDataSourceS3DataSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource">SagemakerModelPrimaryContainerModelDataSourceS3DataSource</a>

---


### SagemakerModelPrimaryContainerMultiModelConfigOutputReference <a name="SagemakerModelPrimaryContainerMultiModelConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.resetModelCacheSetting">reset_model_cache_setting</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_model_cache_setting` <a name="reset_model_cache_setting" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.resetModelCacheSetting"></a>

```python
def reset_model_cache_setting() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.modelCacheSettingInput">model_cache_setting_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.modelCacheSetting">model_cache_setting</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig">SagemakerModelPrimaryContainerMultiModelConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_cache_setting_input`<sup>Optional</sup> <a name="model_cache_setting_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.modelCacheSettingInput"></a>

```python
model_cache_setting_input: str
```

- *Type:* str

---

##### `model_cache_setting`<sup>Required</sup> <a name="model_cache_setting" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.modelCacheSetting"></a>

```python
model_cache_setting: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelPrimaryContainerMultiModelConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig">SagemakerModelPrimaryContainerMultiModelConfig</a>

---


### SagemakerModelPrimaryContainerOutputReference <a name="SagemakerModelPrimaryContainerOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelPrimaryContainerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putImageConfig">put_image_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putModelDataSource">put_model_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putMultiModelConfig">put_multi_model_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetContainerHostname">reset_container_hostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetImage">reset_image</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetImageConfig">reset_image_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetInferenceSpecificationName">reset_inference_specification_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetModelDataSource">reset_model_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetModelDataUrl">reset_model_data_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetModelPackageName">reset_model_package_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetMultiModelConfig">reset_multi_model_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_image_config` <a name="put_image_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putImageConfig"></a>

```python
def put_image_config(
  repository_access_mode: str = None,
  repository_auth_config: SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig = None
) -> None
```

###### `repository_access_mode`<sup>Optional</sup> <a name="repository_access_mode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putImageConfig.parameter.repositoryAccessMode"></a>

- *Type:* str

Set this to one of the following values: Platform - The model image is hosted in Amazon ECR.

Vpc - The model image is hosted in a private Docker registry in your VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#repository_access_mode SagemakerModel#repository_access_mode}

---

###### `repository_auth_config`<sup>Optional</sup> <a name="repository_auth_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putImageConfig.parameter.repositoryAuthConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a>

Specifies an authentication configuration for the private docker registry where your model image is hosted.

Specify a value for this property only if you specified `Vpc` as the value for the `RepositoryAccessMode` field of the `ImageConfig` object that you passed to a call to `CreateModel` and the private Docker registry where the model image is hosted requires authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#repository_auth_config SagemakerModel#repository_auth_config}

---

##### `put_model_data_source` <a name="put_model_data_source" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putModelDataSource"></a>

```python
def put_model_data_source(
  s3_data_source: SagemakerModelPrimaryContainerModelDataSourceS3DataSource = None
) -> None
```

###### `s3_data_source`<sup>Optional</sup> <a name="s3_data_source" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putModelDataSource.parameter.s3DataSource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceS3DataSource">SagemakerModelPrimaryContainerModelDataSourceS3DataSource</a>

Specifies the S3 location of ML model data to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#s3_data_source SagemakerModel#s3_data_source}

---

##### `put_multi_model_config` <a name="put_multi_model_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putMultiModelConfig"></a>

```python
def put_multi_model_config(
  model_cache_setting: str = None
) -> None
```

###### `model_cache_setting`<sup>Optional</sup> <a name="model_cache_setting" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putMultiModelConfig.parameter.modelCacheSetting"></a>

- *Type:* str

Whether to cache models for a multi-model endpoint.

By default, multi-model endpoints cache models so that a model does not have to be loaded into memory each time it is invoked. Some use cases do not benefit from model caching. For example, if an endpoint hosts a large number of models that are each invoked infrequently, the endpoint might perform better if you disable model caching. To disable model caching, set the value of this parameter to `Disabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model#model_cache_setting SagemakerModel#model_cache_setting}

---

##### `reset_container_hostname` <a name="reset_container_hostname" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetContainerHostname"></a>

```python
def reset_container_hostname() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_image` <a name="reset_image" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetImage"></a>

```python
def reset_image() -> None
```

##### `reset_image_config` <a name="reset_image_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetImageConfig"></a>

```python
def reset_image_config() -> None
```

##### `reset_inference_specification_name` <a name="reset_inference_specification_name" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetInferenceSpecificationName"></a>

```python
def reset_inference_specification_name() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_model_data_source` <a name="reset_model_data_source" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetModelDataSource"></a>

```python
def reset_model_data_source() -> None
```

##### `reset_model_data_url` <a name="reset_model_data_url" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetModelDataUrl"></a>

```python
def reset_model_data_url() -> None
```

##### `reset_model_package_name` <a name="reset_model_package_name" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetModelPackageName"></a>

```python
def reset_model_package_name() -> None
```

##### `reset_multi_model_config` <a name="reset_multi_model_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetMultiModelConfig"></a>

```python
def reset_multi_model_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageConfig">image_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference">SagemakerModelPrimaryContainerImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataSource">model_data_source</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference">SagemakerModelPrimaryContainerModelDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.multiModelConfig">multi_model_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference">SagemakerModelPrimaryContainerMultiModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.containerHostnameInput">container_hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageConfigInput">image_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.inferenceSpecificationNameInput">inference_specification_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataSourceInput">model_data_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource">SagemakerModelPrimaryContainerModelDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataUrlInput">model_data_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelPackageNameInput">model_package_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.multiModelConfigInput">multi_model_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig">SagemakerModelPrimaryContainerMultiModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.containerHostname">container_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.inferenceSpecificationName">inference_specification_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataUrl">model_data_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelPackageName">model_package_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_config`<sup>Required</sup> <a name="image_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageConfig"></a>

```python
image_config: SagemakerModelPrimaryContainerImageConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference">SagemakerModelPrimaryContainerImageConfigOutputReference</a>

---

##### `model_data_source`<sup>Required</sup> <a name="model_data_source" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataSource"></a>

```python
model_data_source: SagemakerModelPrimaryContainerModelDataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSourceOutputReference">SagemakerModelPrimaryContainerModelDataSourceOutputReference</a>

---

##### `multi_model_config`<sup>Required</sup> <a name="multi_model_config" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.multiModelConfig"></a>

```python
multi_model_config: SagemakerModelPrimaryContainerMultiModelConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfigOutputReference">SagemakerModelPrimaryContainerMultiModelConfigOutputReference</a>

---

##### `container_hostname_input`<sup>Optional</sup> <a name="container_hostname_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.containerHostnameInput"></a>

```python
container_hostname_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `image_config_input`<sup>Optional</sup> <a name="image_config_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageConfigInput"></a>

```python
image_config_input: IResolvable | SagemakerModelPrimaryContainerImageConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a>

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `inference_specification_name_input`<sup>Optional</sup> <a name="inference_specification_name_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.inferenceSpecificationNameInput"></a>

```python
inference_specification_name_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `model_data_source_input`<sup>Optional</sup> <a name="model_data_source_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataSourceInput"></a>

```python
model_data_source_input: IResolvable | SagemakerModelPrimaryContainerModelDataSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerModelDataSource">SagemakerModelPrimaryContainerModelDataSource</a>

---

##### `model_data_url_input`<sup>Optional</sup> <a name="model_data_url_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataUrlInput"></a>

```python
model_data_url_input: str
```

- *Type:* str

---

##### `model_package_name_input`<sup>Optional</sup> <a name="model_package_name_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelPackageNameInput"></a>

```python
model_package_name_input: str
```

- *Type:* str

---

##### `multi_model_config_input`<sup>Optional</sup> <a name="multi_model_config_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.multiModelConfigInput"></a>

```python
multi_model_config_input: IResolvable | SagemakerModelPrimaryContainerMultiModelConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerMultiModelConfig">SagemakerModelPrimaryContainerMultiModelConfig</a>

---

##### `container_hostname`<sup>Required</sup> <a name="container_hostname" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.containerHostname"></a>

```python
container_hostname: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `inference_specification_name`<sup>Required</sup> <a name="inference_specification_name" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.inferenceSpecificationName"></a>

```python
inference_specification_name: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `model_data_url`<sup>Required</sup> <a name="model_data_url" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataUrl"></a>

```python
model_data_url: str
```

- *Type:* str

---

##### `model_package_name`<sup>Required</sup> <a name="model_package_name" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelPackageName"></a>

```python
model_package_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelPrimaryContainer
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a>

---


### SagemakerModelTagsList <a name="SagemakerModelTagsList" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerModelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTags">SagemakerModelTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerModelTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTags">SagemakerModelTags</a>]

---


### SagemakerModelTagsOutputReference <a name="SagemakerModelTagsOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTags">SagemakerModelTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelTags">SagemakerModelTags</a>

---


### SagemakerModelVpcConfigOutputReference <a name="SagemakerModelVpcConfigOutputReference" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_model

sagemakerModel.SagemakerModelVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.resetSubnets">reset_subnets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnets` <a name="reset_subnets" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.resetSubnets"></a>

```python
def reset_subnets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerModelVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a>

---



