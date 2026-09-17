# `sagemakerAiWorkloadConfig` Submodule <a name="`sagemakerAiWorkloadConfig` Submodule" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerAiWorkloadConfig <a name="SagemakerAiWorkloadConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config awscc_sagemaker_ai_workload_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_ai_workload_config

sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ai_workload_config_name: str,
  ai_workload_configs: SagemakerAiWorkloadConfigAiWorkloadConfigs = None,
  dataset_config: SagemakerAiWorkloadConfigDatasetConfig = None,
  tags: IResolvable | typing.List[SagemakerAiWorkloadConfigTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.aiWorkloadConfigName">ai_workload_config_name</a></code> | <code>str</code> | The name of the AI workload configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.aiWorkloadConfigs">ai_workload_configs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs">SagemakerAiWorkloadConfigAiWorkloadConfigs</a></code> | The benchmark tool configuration and workload specification. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.datasetConfig">dataset_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig">SagemakerAiWorkloadConfigDatasetConfig</a></code> | The dataset configuration for the workload. Specify input data channels with their data sources for benchmark workloads. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags">SagemakerAiWorkloadConfigTags</a>]</code> | The metadata that you apply to the AI workload configuration to help you categorize and organize it. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ai_workload_config_name`<sup>Required</sup> <a name="ai_workload_config_name" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.aiWorkloadConfigName"></a>

- *Type:* str

The name of the AI workload configuration.

The name must be unique within your AWS account in the current AWS Region. Only lowercase letters and digits are accepted: DeleteAIWorkloadConfig lowercases the name before looking it up, so a name containing an uppercase letter produces a configuration that can be created and read but never deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#ai_workload_config_name SagemakerAiWorkloadConfig#ai_workload_config_name}

---

##### `ai_workload_configs`<sup>Optional</sup> <a name="ai_workload_configs" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.aiWorkloadConfigs"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs">SagemakerAiWorkloadConfigAiWorkloadConfigs</a>

The benchmark tool configuration and workload specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#ai_workload_configs SagemakerAiWorkloadConfig#ai_workload_configs}

---

##### `dataset_config`<sup>Optional</sup> <a name="dataset_config" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.datasetConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig">SagemakerAiWorkloadConfigDatasetConfig</a>

The dataset configuration for the workload. Specify input data channels with their data sources for benchmark workloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#dataset_config SagemakerAiWorkloadConfig#dataset_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags">SagemakerAiWorkloadConfigTags</a>]

The metadata that you apply to the AI workload configuration to help you categorize and organize it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#tags SagemakerAiWorkloadConfig#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putAiWorkloadConfigs">put_ai_workload_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putDatasetConfig">put_dataset_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetAiWorkloadConfigs">reset_ai_workload_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetDatasetConfig">reset_dataset_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ai_workload_configs` <a name="put_ai_workload_configs" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putAiWorkloadConfigs"></a>

```python
def put_ai_workload_configs(
  workload_spec: SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec = None
) -> None
```

###### `workload_spec`<sup>Optional</sup> <a name="workload_spec" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putAiWorkloadConfigs.parameter.workloadSpec"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec</a>

The workload specification that defines benchmark parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#workload_spec SagemakerAiWorkloadConfig#workload_spec}

---

##### `put_dataset_config` <a name="put_dataset_config" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putDatasetConfig"></a>

```python
def put_dataset_config(
  input_data_config: IResolvable | typing.List[SagemakerAiWorkloadConfigDatasetConfigInputDataConfig] = None
) -> None
```

###### `input_data_config`<sup>Optional</sup> <a name="input_data_config" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putDatasetConfig.parameter.inputDataConfig"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig">SagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a>]

An array of input data channel configurations for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#input_data_config SagemakerAiWorkloadConfig#input_data_config}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SagemakerAiWorkloadConfigTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags">SagemakerAiWorkloadConfigTags</a>]

---

##### `reset_ai_workload_configs` <a name="reset_ai_workload_configs" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetAiWorkloadConfigs"></a>

```python
def reset_ai_workload_configs() -> None
```

##### `reset_dataset_config` <a name="reset_dataset_config" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetDatasetConfig"></a>

```python
def reset_dataset_config() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SagemakerAiWorkloadConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isConstruct"></a>

```python
from cdktn_provider_awscc import sagemaker_ai_workload_config

sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isTerraformElement"></a>

```python
from cdktn_provider_awscc import sagemaker_ai_workload_config

sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isTerraformResource"></a>

```python
from cdktn_provider_awscc import sagemaker_ai_workload_config

sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import sagemaker_ai_workload_config

sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SagemakerAiWorkloadConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerAiWorkloadConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerAiWorkloadConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerAiWorkloadConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigArn">ai_workload_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigs">ai_workload_configs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference">SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.datasetConfig">dataset_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference">SagemakerAiWorkloadConfigDatasetConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList">SagemakerAiWorkloadConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigNameInput">ai_workload_config_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigsInput">ai_workload_configs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs">SagemakerAiWorkloadConfigAiWorkloadConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.datasetConfigInput">dataset_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig">SagemakerAiWorkloadConfigDatasetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags">SagemakerAiWorkloadConfigTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigName">ai_workload_config_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ai_workload_config_arn`<sup>Required</sup> <a name="ai_workload_config_arn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigArn"></a>

```python
ai_workload_config_arn: str
```

- *Type:* str

---

##### `ai_workload_configs`<sup>Required</sup> <a name="ai_workload_configs" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigs"></a>

```python
ai_workload_configs: SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference">SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference</a>

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `dataset_config`<sup>Required</sup> <a name="dataset_config" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.datasetConfig"></a>

```python
dataset_config: SagemakerAiWorkloadConfigDatasetConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference">SagemakerAiWorkloadConfigDatasetConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.tags"></a>

```python
tags: SagemakerAiWorkloadConfigTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList">SagemakerAiWorkloadConfigTagsList</a>

---

##### `ai_workload_config_name_input`<sup>Optional</sup> <a name="ai_workload_config_name_input" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigNameInput"></a>

```python
ai_workload_config_name_input: str
```

- *Type:* str

---

##### `ai_workload_configs_input`<sup>Optional</sup> <a name="ai_workload_configs_input" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigsInput"></a>

```python
ai_workload_configs_input: IResolvable | SagemakerAiWorkloadConfigAiWorkloadConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs">SagemakerAiWorkloadConfigAiWorkloadConfigs</a>

---

##### `dataset_config_input`<sup>Optional</sup> <a name="dataset_config_input" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.datasetConfigInput"></a>

```python
dataset_config_input: IResolvable | SagemakerAiWorkloadConfigDatasetConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig">SagemakerAiWorkloadConfigDatasetConfig</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SagemakerAiWorkloadConfigTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags">SagemakerAiWorkloadConfigTags</a>]

---

##### `ai_workload_config_name`<sup>Required</sup> <a name="ai_workload_config_name" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigName"></a>

```python
ai_workload_config_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerAiWorkloadConfigAiWorkloadConfigs <a name="SagemakerAiWorkloadConfigAiWorkloadConfigs" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_ai_workload_config

sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs(
  workload_spec: SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs.property.workloadSpec">workload_spec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec</a></code> | The workload specification that defines benchmark parameters. |

---

##### `workload_spec`<sup>Optional</sup> <a name="workload_spec" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs.property.workloadSpec"></a>

```python
workload_spec: SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec</a>

The workload specification that defines benchmark parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#workload_spec SagemakerAiWorkloadConfig#workload_spec}

---

### SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec <a name="SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_ai_workload_config

sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec(
  inline: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec.property.inline">inline</a></code> | <code>str</code> | An inline YAML or JSON string that defines benchmark parameters. |

---

##### `inline`<sup>Optional</sup> <a name="inline" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec.property.inline"></a>

```python
inline: str
```

- *Type:* str

An inline YAML or JSON string that defines benchmark parameters.

The service validates the document against its own benchmark schema: it must declare a benchmark object whose type member matches the pattern ^(aiperf)$.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#inline SagemakerAiWorkloadConfig#inline}

---

### SagemakerAiWorkloadConfigConfig <a name="SagemakerAiWorkloadConfigConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_ai_workload_config

sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ai_workload_config_name: str,
  ai_workload_configs: SagemakerAiWorkloadConfigAiWorkloadConfigs = None,
  dataset_config: SagemakerAiWorkloadConfigDatasetConfig = None,
  tags: IResolvable | typing.List[SagemakerAiWorkloadConfigTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.aiWorkloadConfigName">ai_workload_config_name</a></code> | <code>str</code> | The name of the AI workload configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.aiWorkloadConfigs">ai_workload_configs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs">SagemakerAiWorkloadConfigAiWorkloadConfigs</a></code> | The benchmark tool configuration and workload specification. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.datasetConfig">dataset_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig">SagemakerAiWorkloadConfigDatasetConfig</a></code> | The dataset configuration for the workload. Specify input data channels with their data sources for benchmark workloads. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags">SagemakerAiWorkloadConfigTags</a>]</code> | The metadata that you apply to the AI workload configuration to help you categorize and organize it. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ai_workload_config_name`<sup>Required</sup> <a name="ai_workload_config_name" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.aiWorkloadConfigName"></a>

```python
ai_workload_config_name: str
```

- *Type:* str

The name of the AI workload configuration.

The name must be unique within your AWS account in the current AWS Region. Only lowercase letters and digits are accepted: DeleteAIWorkloadConfig lowercases the name before looking it up, so a name containing an uppercase letter produces a configuration that can be created and read but never deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#ai_workload_config_name SagemakerAiWorkloadConfig#ai_workload_config_name}

---

##### `ai_workload_configs`<sup>Optional</sup> <a name="ai_workload_configs" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.aiWorkloadConfigs"></a>

```python
ai_workload_configs: SagemakerAiWorkloadConfigAiWorkloadConfigs
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs">SagemakerAiWorkloadConfigAiWorkloadConfigs</a>

The benchmark tool configuration and workload specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#ai_workload_configs SagemakerAiWorkloadConfig#ai_workload_configs}

---

##### `dataset_config`<sup>Optional</sup> <a name="dataset_config" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.datasetConfig"></a>

```python
dataset_config: SagemakerAiWorkloadConfigDatasetConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig">SagemakerAiWorkloadConfigDatasetConfig</a>

The dataset configuration for the workload. Specify input data channels with their data sources for benchmark workloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#dataset_config SagemakerAiWorkloadConfig#dataset_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SagemakerAiWorkloadConfigTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags">SagemakerAiWorkloadConfigTags</a>]

The metadata that you apply to the AI workload configuration to help you categorize and organize it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#tags SagemakerAiWorkloadConfig#tags}

---

### SagemakerAiWorkloadConfigDatasetConfig <a name="SagemakerAiWorkloadConfigDatasetConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_ai_workload_config

sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig(
  input_data_config: IResolvable | typing.List[SagemakerAiWorkloadConfigDatasetConfigInputDataConfig] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig.property.inputDataConfig">input_data_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig">SagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a>]</code> | An array of input data channel configurations for the workload. |

---

##### `input_data_config`<sup>Optional</sup> <a name="input_data_config" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig.property.inputDataConfig"></a>

```python
input_data_config: IResolvable | typing.List[SagemakerAiWorkloadConfigDatasetConfigInputDataConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig">SagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a>]

An array of input data channel configurations for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#input_data_config SagemakerAiWorkloadConfig#input_data_config}

---

### SagemakerAiWorkloadConfigDatasetConfigInputDataConfig <a name="SagemakerAiWorkloadConfigDatasetConfigInputDataConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_ai_workload_config

sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig(
  channel_name: str = None,
  data_source: SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig.property.channelName">channel_name</a></code> | <code>str</code> | The logical name for the data channel. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig.property.dataSource">data_source</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource</a></code> | The data source for this channel. |

---

##### `channel_name`<sup>Optional</sup> <a name="channel_name" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

The logical name for the data channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#channel_name SagemakerAiWorkloadConfig#channel_name}

---

##### `data_source`<sup>Optional</sup> <a name="data_source" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig.property.dataSource"></a>

```python
data_source: SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource</a>

The data source for this channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#data_source SagemakerAiWorkloadConfig#data_source}

---

### SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource <a name="SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_ai_workload_config

sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource(
  s3_data_source: SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource.property.s3DataSource">s3_data_source</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource</a></code> | The Amazon S3 data source configuration. |

---

##### `s3_data_source`<sup>Optional</sup> <a name="s3_data_source" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource.property.s3DataSource"></a>

```python
s3_data_source: SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource</a>

The Amazon S3 data source configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#s3_data_source SagemakerAiWorkloadConfig#s3_data_source}

---

### SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource <a name="SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_ai_workload_config

sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource(
  s3_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource.property.s3Uri">s3_uri</a></code> | <code>str</code> | The Amazon S3 URI of the data. |

---

##### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

The Amazon S3 URI of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#s3_uri SagemakerAiWorkloadConfig#s3_uri}

---

### SagemakerAiWorkloadConfigTags <a name="SagemakerAiWorkloadConfigTags" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_ai_workload_config

sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags.property.key">key</a></code> | <code>str</code> | The tag key. Tag keys must be unique per resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key. Tag keys must be unique per resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#key SagemakerAiWorkloadConfig#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#value SagemakerAiWorkloadConfig#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference <a name="SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_ai_workload_config

sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.putWorkloadSpec">put_workload_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.resetWorkloadSpec">reset_workload_spec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_workload_spec` <a name="put_workload_spec" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.putWorkloadSpec"></a>

```python
def put_workload_spec(
  inline: str = None
) -> None
```

###### `inline`<sup>Optional</sup> <a name="inline" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.putWorkloadSpec.parameter.inline"></a>

- *Type:* str

An inline YAML or JSON string that defines benchmark parameters.

The service validates the document against its own benchmark schema: it must declare a benchmark object whose type member matches the pattern ^(aiperf)$.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#inline SagemakerAiWorkloadConfig#inline}

---

##### `reset_workload_spec` <a name="reset_workload_spec" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.resetWorkloadSpec"></a>

```python
def reset_workload_spec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.workloadSpec">workload_spec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.workloadSpecInput">workload_spec_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs">SagemakerAiWorkloadConfigAiWorkloadConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workload_spec`<sup>Required</sup> <a name="workload_spec" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.workloadSpec"></a>

```python
workload_spec: SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference</a>

---

##### `workload_spec_input`<sup>Optional</sup> <a name="workload_spec_input" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.workloadSpecInput"></a>

```python
workload_spec_input: IResolvable | SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerAiWorkloadConfigAiWorkloadConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs">SagemakerAiWorkloadConfigAiWorkloadConfigs</a>

---


### SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference <a name="SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_ai_workload_config

sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.resetInline">reset_inline</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_inline` <a name="reset_inline" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.resetInline"></a>

```python
def reset_inline() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.inlineInput">inline_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.inline">inline</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inline_input`<sup>Optional</sup> <a name="inline_input" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.inlineInput"></a>

```python
inline_input: str
```

- *Type:* str

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.inline"></a>

```python
inline: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec</a>

---


### SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference <a name="SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_ai_workload_config

sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.putS3DataSource">put_s3_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.resetS3DataSource">reset_s3_data_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_data_source` <a name="put_s3_data_source" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.putS3DataSource"></a>

```python
def put_s3_data_source(
  s3_uri: str = None
) -> None
```

###### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.putS3DataSource.parameter.s3Uri"></a>

- *Type:* str

The Amazon S3 URI of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#s3_uri SagemakerAiWorkloadConfig#s3_uri}

---

##### `reset_s3_data_source` <a name="reset_s3_data_source" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.resetS3DataSource"></a>

```python
def reset_s3_data_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.s3DataSource">s3_data_source</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.s3DataSourceInput">s3_data_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_data_source`<sup>Required</sup> <a name="s3_data_source" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.s3DataSource"></a>

```python
s3_data_source: SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference</a>

---

##### `s3_data_source_input`<sup>Optional</sup> <a name="s3_data_source_input" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.s3DataSourceInput"></a>

```python
s3_data_source_input: IResolvable | SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource</a>

---


### SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference <a name="SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_ai_workload_config

sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.resetS3Uri">reset_s3_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_uri` <a name="reset_s3_uri" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.resetS3Uri"></a>

```python
def reset_s3_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.s3UriInput">s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_uri_input`<sup>Optional</sup> <a name="s3_uri_input" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.s3UriInput"></a>

```python
s3_uri_input: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource</a>

---


### SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList <a name="SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_ai_workload_config

sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig">SagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerAiWorkloadConfigDatasetConfigInputDataConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig">SagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a>]

---


### SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference <a name="SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_ai_workload_config

sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.putDataSource">put_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resetChannelName">reset_channel_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resetDataSource">reset_data_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_source` <a name="put_data_source" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.putDataSource"></a>

```python
def put_data_source(
  s3_data_source: SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource = None
) -> None
```

###### `s3_data_source`<sup>Optional</sup> <a name="s3_data_source" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.putDataSource.parameter.s3DataSource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource</a>

The Amazon S3 data source configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#s3_data_source SagemakerAiWorkloadConfig#s3_data_source}

---

##### `reset_channel_name` <a name="reset_channel_name" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resetChannelName"></a>

```python
def reset_channel_name() -> None
```

##### `reset_data_source` <a name="reset_data_source" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resetDataSource"></a>

```python
def reset_data_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.dataSource">data_source</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.channelNameInput">channel_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.dataSourceInput">data_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.channelName">channel_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig">SagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.dataSource"></a>

```python
data_source: SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference</a>

---

##### `channel_name_input`<sup>Optional</sup> <a name="channel_name_input" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.channelNameInput"></a>

```python
channel_name_input: str
```

- *Type:* str

---

##### `data_source_input`<sup>Optional</sup> <a name="data_source_input" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.dataSourceInput"></a>

```python
data_source_input: IResolvable | SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource</a>

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerAiWorkloadConfigDatasetConfigInputDataConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig">SagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a>

---


### SagemakerAiWorkloadConfigDatasetConfigOutputReference <a name="SagemakerAiWorkloadConfigDatasetConfigOutputReference" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_ai_workload_config

sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.putInputDataConfig">put_input_data_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.resetInputDataConfig">reset_input_data_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_input_data_config` <a name="put_input_data_config" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.putInputDataConfig"></a>

```python
def put_input_data_config(
  value: IResolvable | typing.List[SagemakerAiWorkloadConfigDatasetConfigInputDataConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.putInputDataConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig">SagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a>]

---

##### `reset_input_data_config` <a name="reset_input_data_config" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.resetInputDataConfig"></a>

```python
def reset_input_data_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.inputDataConfig">input_data_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.inputDataConfigInput">input_data_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig">SagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig">SagemakerAiWorkloadConfigDatasetConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_data_config`<sup>Required</sup> <a name="input_data_config" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.inputDataConfig"></a>

```python
input_data_config: SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList</a>

---

##### `input_data_config_input`<sup>Optional</sup> <a name="input_data_config_input" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.inputDataConfigInput"></a>

```python
input_data_config_input: IResolvable | typing.List[SagemakerAiWorkloadConfigDatasetConfigInputDataConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig">SagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerAiWorkloadConfigDatasetConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig">SagemakerAiWorkloadConfigDatasetConfig</a>

---


### SagemakerAiWorkloadConfigTagsList <a name="SagemakerAiWorkloadConfigTagsList" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_ai_workload_config

sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerAiWorkloadConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags">SagemakerAiWorkloadConfigTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerAiWorkloadConfigTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags">SagemakerAiWorkloadConfigTags</a>]

---


### SagemakerAiWorkloadConfigTagsOutputReference <a name="SagemakerAiWorkloadConfigTagsOutputReference" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_ai_workload_config

sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags">SagemakerAiWorkloadConfigTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerAiWorkloadConfigTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags">SagemakerAiWorkloadConfigTags</a>

---



