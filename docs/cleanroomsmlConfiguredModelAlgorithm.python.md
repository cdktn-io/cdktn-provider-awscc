# `cleanroomsmlConfiguredModelAlgorithm` Submodule <a name="`cleanroomsmlConfiguredModelAlgorithm` Submodule" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsmlConfiguredModelAlgorithm <a name="CleanroomsmlConfiguredModelAlgorithm" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm awscc_cleanroomsml_configured_model_algorithm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer"></a>

```python
from cdktn_provider_awscc import cleanroomsml_configured_model_algorithm

cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  role_arn: str,
  description: str = None,
  inference_container_config: CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig = None,
  kms_key_arn: str = None,
  tags: IResolvable | typing.List[CleanroomsmlConfiguredModelAlgorithmTags] = None,
  training_container_config: CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#name CleanroomsmlConfiguredModelAlgorithm#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#role_arn CleanroomsmlConfiguredModelAlgorithm#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#description CleanroomsmlConfiguredModelAlgorithm#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.inferenceContainerConfig">inference_container_config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig">CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#inference_container_config CleanroomsmlConfiguredModelAlgorithm#inference_container_config}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#kms_key_arn CleanroomsmlConfiguredModelAlgorithm#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags">CleanroomsmlConfiguredModelAlgorithmTags</a>]</code> | An arbitrary set of tags (key-value pairs) for this cleanrooms-ml configured model algorithm. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.trainingContainerConfig">training_container_config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#training_container_config CleanroomsmlConfiguredModelAlgorithm#training_container_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#name CleanroomsmlConfiguredModelAlgorithm#name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#role_arn CleanroomsmlConfiguredModelAlgorithm#role_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#description CleanroomsmlConfiguredModelAlgorithm#description}.

---

##### `inference_container_config`<sup>Optional</sup> <a name="inference_container_config" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.inferenceContainerConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig">CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#inference_container_config CleanroomsmlConfiguredModelAlgorithm#inference_container_config}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#kms_key_arn CleanroomsmlConfiguredModelAlgorithm#kms_key_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags">CleanroomsmlConfiguredModelAlgorithmTags</a>]

An arbitrary set of tags (key-value pairs) for this cleanrooms-ml configured model algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#tags CleanroomsmlConfiguredModelAlgorithm#tags}

---

##### `training_container_config`<sup>Optional</sup> <a name="training_container_config" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.Initializer.parameter.trainingContainerConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#training_container_config CleanroomsmlConfiguredModelAlgorithm#training_container_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.putInferenceContainerConfig">put_inference_container_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.putTrainingContainerConfig">put_training_container_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetInferenceContainerConfig">reset_inference_container_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetTrainingContainerConfig">reset_training_container_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_inference_container_config` <a name="put_inference_container_config" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.putInferenceContainerConfig"></a>

```python
def put_inference_container_config(
  image_uri: str = None
) -> None
```

###### `image_uri`<sup>Optional</sup> <a name="image_uri" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.putInferenceContainerConfig.parameter.imageUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#image_uri CleanroomsmlConfiguredModelAlgorithm#image_uri}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CleanroomsmlConfiguredModelAlgorithmTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags">CleanroomsmlConfiguredModelAlgorithmTags</a>]

---

##### `put_training_container_config` <a name="put_training_container_config" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.putTrainingContainerConfig"></a>

```python
def put_training_container_config(
  arguments: typing.List[str] = None,
  entrypoint: typing.List[str] = None,
  image_uri: str = None,
  metric_definitions: IResolvable | typing.List[CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions] = None
) -> None
```

###### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.putTrainingContainerConfig.parameter.arguments"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#arguments CleanroomsmlConfiguredModelAlgorithm#arguments}.

---

###### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.putTrainingContainerConfig.parameter.entrypoint"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#entrypoint CleanroomsmlConfiguredModelAlgorithm#entrypoint}.

---

###### `image_uri`<sup>Optional</sup> <a name="image_uri" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.putTrainingContainerConfig.parameter.imageUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#image_uri CleanroomsmlConfiguredModelAlgorithm#image_uri}.

---

###### `metric_definitions`<sup>Optional</sup> <a name="metric_definitions" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.putTrainingContainerConfig.parameter.metricDefinitions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#metric_definitions CleanroomsmlConfiguredModelAlgorithm#metric_definitions}.

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_inference_container_config` <a name="reset_inference_container_config" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetInferenceContainerConfig"></a>

```python
def reset_inference_container_config() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_training_container_config` <a name="reset_training_container_config" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.resetTrainingContainerConfig"></a>

```python
def reset_training_container_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CleanroomsmlConfiguredModelAlgorithm resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.isConstruct"></a>

```python
from cdktn_provider_awscc import cleanroomsml_configured_model_algorithm

cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cleanroomsml_configured_model_algorithm

cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cleanroomsml_configured_model_algorithm

cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cleanroomsml_configured_model_algorithm

cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CleanroomsmlConfiguredModelAlgorithm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CleanroomsmlConfiguredModelAlgorithm to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CleanroomsmlConfiguredModelAlgorithm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsmlConfiguredModelAlgorithm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.configuredModelAlgorithmArn">configured_model_algorithm_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.inferenceContainerConfig">inference_container_config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference">CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList">CleanroomsmlConfiguredModelAlgorithmTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.trainingContainerConfig">training_container_config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.inferenceContainerConfigInput">inference_container_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig">CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags">CleanroomsmlConfiguredModelAlgorithmTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.trainingContainerConfigInput">training_container_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configured_model_algorithm_arn`<sup>Required</sup> <a name="configured_model_algorithm_arn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.configuredModelAlgorithmArn"></a>

```python
configured_model_algorithm_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inference_container_config`<sup>Required</sup> <a name="inference_container_config" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.inferenceContainerConfig"></a>

```python
inference_container_config: CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference">CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.tags"></a>

```python
tags: CleanroomsmlConfiguredModelAlgorithmTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList">CleanroomsmlConfiguredModelAlgorithmTagsList</a>

---

##### `training_container_config`<sup>Required</sup> <a name="training_container_config" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.trainingContainerConfig"></a>

```python
training_container_config: CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `inference_container_config_input`<sup>Optional</sup> <a name="inference_container_config_input" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.inferenceContainerConfigInput"></a>

```python
inference_container_config_input: IResolvable | CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig">CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig</a>

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CleanroomsmlConfiguredModelAlgorithmTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags">CleanroomsmlConfiguredModelAlgorithmTags</a>]

---

##### `training_container_config_input`<sup>Optional</sup> <a name="training_container_config_input" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.trainingContainerConfigInput"></a>

```python
training_container_config_input: IResolvable | CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithm.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsmlConfiguredModelAlgorithmConfig <a name="CleanroomsmlConfiguredModelAlgorithmConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cleanroomsml_configured_model_algorithm

cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  role_arn: str,
  description: str = None,
  inference_container_config: CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig = None,
  kms_key_arn: str = None,
  tags: IResolvable | typing.List[CleanroomsmlConfiguredModelAlgorithmTags] = None,
  training_container_config: CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#name CleanroomsmlConfiguredModelAlgorithm#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#role_arn CleanroomsmlConfiguredModelAlgorithm#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#description CleanroomsmlConfiguredModelAlgorithm#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.inferenceContainerConfig">inference_container_config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig">CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#inference_container_config CleanroomsmlConfiguredModelAlgorithm#inference_container_config}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#kms_key_arn CleanroomsmlConfiguredModelAlgorithm#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags">CleanroomsmlConfiguredModelAlgorithmTags</a>]</code> | An arbitrary set of tags (key-value pairs) for this cleanrooms-ml configured model algorithm. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.trainingContainerConfig">training_container_config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#training_container_config CleanroomsmlConfiguredModelAlgorithm#training_container_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#name CleanroomsmlConfiguredModelAlgorithm#name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#role_arn CleanroomsmlConfiguredModelAlgorithm#role_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#description CleanroomsmlConfiguredModelAlgorithm#description}.

---

##### `inference_container_config`<sup>Optional</sup> <a name="inference_container_config" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.inferenceContainerConfig"></a>

```python
inference_container_config: CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig">CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#inference_container_config CleanroomsmlConfiguredModelAlgorithm#inference_container_config}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#kms_key_arn CleanroomsmlConfiguredModelAlgorithm#kms_key_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CleanroomsmlConfiguredModelAlgorithmTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags">CleanroomsmlConfiguredModelAlgorithmTags</a>]

An arbitrary set of tags (key-value pairs) for this cleanrooms-ml configured model algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#tags CleanroomsmlConfiguredModelAlgorithm#tags}

---

##### `training_container_config`<sup>Optional</sup> <a name="training_container_config" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmConfig.property.trainingContainerConfig"></a>

```python
training_container_config: CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#training_container_config CleanroomsmlConfiguredModelAlgorithm#training_container_config}.

---

### CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig <a name="CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cleanroomsml_configured_model_algorithm

cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig(
  image_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig.property.imageUri">image_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#image_uri CleanroomsmlConfiguredModelAlgorithm#image_uri}. |

---

##### `image_uri`<sup>Optional</sup> <a name="image_uri" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#image_uri CleanroomsmlConfiguredModelAlgorithm#image_uri}.

---

### CleanroomsmlConfiguredModelAlgorithmTags <a name="CleanroomsmlConfiguredModelAlgorithmTags" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags.Initializer"></a>

```python
from cdktn_provider_awscc import cleanroomsml_configured_model_algorithm

cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#key CleanroomsmlConfiguredModelAlgorithm#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#value CleanroomsmlConfiguredModelAlgorithm#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#key CleanroomsmlConfiguredModelAlgorithm#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#value CleanroomsmlConfiguredModelAlgorithm#value}.

---

### CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig <a name="CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cleanroomsml_configured_model_algorithm

cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig(
  arguments: typing.List[str] = None,
  entrypoint: typing.List[str] = None,
  image_uri: str = None,
  metric_definitions: IResolvable | typing.List[CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig.property.arguments">arguments</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#arguments CleanroomsmlConfiguredModelAlgorithm#arguments}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig.property.entrypoint">entrypoint</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#entrypoint CleanroomsmlConfiguredModelAlgorithm#entrypoint}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig.property.imageUri">image_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#image_uri CleanroomsmlConfiguredModelAlgorithm#image_uri}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig.property.metricDefinitions">metric_definitions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#metric_definitions CleanroomsmlConfiguredModelAlgorithm#metric_definitions}. |

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig.property.arguments"></a>

```python
arguments: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#arguments CleanroomsmlConfiguredModelAlgorithm#arguments}.

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig.property.entrypoint"></a>

```python
entrypoint: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#entrypoint CleanroomsmlConfiguredModelAlgorithm#entrypoint}.

---

##### `image_uri`<sup>Optional</sup> <a name="image_uri" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#image_uri CleanroomsmlConfiguredModelAlgorithm#image_uri}.

---

##### `metric_definitions`<sup>Optional</sup> <a name="metric_definitions" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig.property.metricDefinitions"></a>

```python
metric_definitions: IResolvable | typing.List[CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#metric_definitions CleanroomsmlConfiguredModelAlgorithm#metric_definitions}.

---

### CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions <a name="CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions.Initializer"></a>

```python
from cdktn_provider_awscc import cleanroomsml_configured_model_algorithm

cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions(
  name: str = None,
  regex: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#name CleanroomsmlConfiguredModelAlgorithm#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions.property.regex">regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#regex CleanroomsmlConfiguredModelAlgorithm#regex}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#name CleanroomsmlConfiguredModelAlgorithm#name}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions.property.regex"></a>

```python
regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanroomsml_configured_model_algorithm#regex CleanroomsmlConfiguredModelAlgorithm#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanroomsml_configured_model_algorithm

cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.resetImageUri">reset_image_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_image_uri` <a name="reset_image_uri" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.resetImageUri"></a>

```python
def reset_image_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.imageUriInput">image_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig">CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_uri_input`<sup>Optional</sup> <a name="image_uri_input" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.imageUriInput"></a>

```python
image_uri_input: str
```

- *Type:* str

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig">CleanroomsmlConfiguredModelAlgorithmInferenceContainerConfig</a>

---


### CleanroomsmlConfiguredModelAlgorithmTagsList <a name="CleanroomsmlConfiguredModelAlgorithmTagsList" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cleanroomsml_configured_model_algorithm

cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CleanroomsmlConfiguredModelAlgorithmTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags">CleanroomsmlConfiguredModelAlgorithmTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CleanroomsmlConfiguredModelAlgorithmTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags">CleanroomsmlConfiguredModelAlgorithmTags</a>]

---


### CleanroomsmlConfiguredModelAlgorithmTagsOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanroomsml_configured_model_algorithm

cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags">CleanroomsmlConfiguredModelAlgorithmTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsmlConfiguredModelAlgorithmTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTags">CleanroomsmlConfiguredModelAlgorithmTags</a>

---


### CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList <a name="CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer"></a>

```python
from cdktn_provider_awscc import cleanroomsml_configured_model_algorithm

cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a>]

---


### CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanroomsml_configured_model_algorithm

cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_regex` <a name="reset_regex" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.regexInput">regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.regexInput"></a>

```python
regex_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a>

---


### CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanroomsml_configured_model_algorithm

cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.putMetricDefinitions">put_metric_definitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resetArguments">reset_arguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resetEntrypoint">reset_entrypoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resetImageUri">reset_image_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resetMetricDefinitions">reset_metric_definitions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metric_definitions` <a name="put_metric_definitions" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.putMetricDefinitions"></a>

```python
def put_metric_definitions(
  value: IResolvable | typing.List[CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.putMetricDefinitions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a>]

---

##### `reset_arguments` <a name="reset_arguments" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resetArguments"></a>

```python
def reset_arguments() -> None
```

##### `reset_entrypoint` <a name="reset_entrypoint" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resetEntrypoint"></a>

```python
def reset_entrypoint() -> None
```

##### `reset_image_uri` <a name="reset_image_uri" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resetImageUri"></a>

```python
def reset_image_uri() -> None
```

##### `reset_metric_definitions` <a name="reset_metric_definitions" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.resetMetricDefinitions"></a>

```python
def reset_metric_definitions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.metricDefinitions">metric_definitions</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.argumentsInput">arguments_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.entrypointInput">entrypoint_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.imageUriInput">image_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.metricDefinitionsInput">metric_definitions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.arguments">arguments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.entrypoint">entrypoint</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_definitions`<sup>Required</sup> <a name="metric_definitions" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.metricDefinitions"></a>

```python
metric_definitions: CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitionsList</a>

---

##### `arguments_input`<sup>Optional</sup> <a name="arguments_input" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.argumentsInput"></a>

```python
arguments_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `entrypoint_input`<sup>Optional</sup> <a name="entrypoint_input" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.entrypointInput"></a>

```python
entrypoint_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `image_uri_input`<sup>Optional</sup> <a name="image_uri_input" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.imageUriInput"></a>

```python
image_uri_input: str
```

- *Type:* str

---

##### `metric_definitions_input`<sup>Optional</sup> <a name="metric_definitions_input" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.metricDefinitionsInput"></a>

```python
metric_definitions_input: IResolvable | typing.List[CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigMetricDefinitions</a>]

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.arguments"></a>

```python
arguments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.entrypoint"></a>

```python
entrypoint: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithm.CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig">CleanroomsmlConfiguredModelAlgorithmTrainingContainerConfig</a>

---



