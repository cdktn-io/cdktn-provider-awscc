# `sagemakerAlgorithm` Submodule <a name="`sagemakerAlgorithm` Submodule" id="@cdktn/provider-awscc.sagemakerAlgorithm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerAlgorithm <a name="SagemakerAlgorithm" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm awscc_sagemaker_algorithm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithm(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  algorithm_name: str,
  training_specification: SagemakerAlgorithmTrainingSpecification,
  algorithm_description: str = None,
  certify_for_marketplace: bool | IResolvable = None,
  inference_specification: SagemakerAlgorithmInferenceSpecification = None,
  tags: IResolvable | typing.List[SagemakerAlgorithmTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.algorithmName">algorithm_name</a></code> | <code>str</code> | The name of the algorithm. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.trainingSpecification">training_specification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification">SagemakerAlgorithmTrainingSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#training_specification SagemakerAlgorithm#training_specification}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.algorithmDescription">algorithm_description</a></code> | <code>str</code> | A description of the algorithm. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.certifyForMarketplace">certify_for_marketplace</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to certify the algorithm so that it can be listed in AWS Marketplace. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.inferenceSpecification">inference_specification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification">SagemakerAlgorithmInferenceSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#inference_specification SagemakerAlgorithm#inference_specification}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags">SagemakerAlgorithmTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `algorithm_name`<sup>Required</sup> <a name="algorithm_name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.algorithmName"></a>

- *Type:* str

The name of the algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#algorithm_name SagemakerAlgorithm#algorithm_name}

---

##### `training_specification`<sup>Required</sup> <a name="training_specification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.trainingSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification">SagemakerAlgorithmTrainingSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#training_specification SagemakerAlgorithm#training_specification}.

---

##### `algorithm_description`<sup>Optional</sup> <a name="algorithm_description" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.algorithmDescription"></a>

- *Type:* str

A description of the algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#algorithm_description SagemakerAlgorithm#algorithm_description}

---

##### `certify_for_marketplace`<sup>Optional</sup> <a name="certify_for_marketplace" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.certifyForMarketplace"></a>

- *Type:* bool | cdktn.IResolvable

Whether to certify the algorithm so that it can be listed in AWS Marketplace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#certify_for_marketplace SagemakerAlgorithm#certify_for_marketplace}

---

##### `inference_specification`<sup>Optional</sup> <a name="inference_specification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.inferenceSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification">SagemakerAlgorithmInferenceSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#inference_specification SagemakerAlgorithm#inference_specification}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags">SagemakerAlgorithmTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#tags SagemakerAlgorithm#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putInferenceSpecification">put_inference_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putTrainingSpecification">put_training_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.resetAlgorithmDescription">reset_algorithm_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.resetCertifyForMarketplace">reset_certify_for_marketplace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.resetInferenceSpecification">reset_inference_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_inference_specification` <a name="put_inference_specification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putInferenceSpecification"></a>

```python
def put_inference_specification(
  containers: IResolvable | typing.List[SagemakerAlgorithmInferenceSpecificationContainers] = None,
  supported_content_types: typing.List[str] = None,
  supported_realtime_inference_instance_types: typing.List[str] = None,
  supported_response_mime_types: typing.List[str] = None,
  supported_transform_instance_types: typing.List[str] = None
) -> None
```

###### `containers`<sup>Optional</sup> <a name="containers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putInferenceSpecification.parameter.containers"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers">SagemakerAlgorithmInferenceSpecificationContainers</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#containers SagemakerAlgorithm#containers}.

---

###### `supported_content_types`<sup>Optional</sup> <a name="supported_content_types" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putInferenceSpecification.parameter.supportedContentTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#supported_content_types SagemakerAlgorithm#supported_content_types}.

---

###### `supported_realtime_inference_instance_types`<sup>Optional</sup> <a name="supported_realtime_inference_instance_types" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putInferenceSpecification.parameter.supportedRealtimeInferenceInstanceTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#supported_realtime_inference_instance_types SagemakerAlgorithm#supported_realtime_inference_instance_types}.

---

###### `supported_response_mime_types`<sup>Optional</sup> <a name="supported_response_mime_types" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putInferenceSpecification.parameter.supportedResponseMimeTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#supported_response_mime_types SagemakerAlgorithm#supported_response_mime_types}.

---

###### `supported_transform_instance_types`<sup>Optional</sup> <a name="supported_transform_instance_types" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putInferenceSpecification.parameter.supportedTransformInstanceTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#supported_transform_instance_types SagemakerAlgorithm#supported_transform_instance_types}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SagemakerAlgorithmTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags">SagemakerAlgorithmTags</a>]

---

##### `put_training_specification` <a name="put_training_specification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putTrainingSpecification"></a>

```python
def put_training_specification(
  supported_training_instance_types: typing.List[str],
  training_channels: IResolvable | typing.List[SagemakerAlgorithmTrainingSpecificationTrainingChannels],
  training_image: str,
  metric_definitions: IResolvable | typing.List[SagemakerAlgorithmTrainingSpecificationMetricDefinitions] = None,
  supported_hyper_parameters: IResolvable | typing.List[SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters] = None,
  supported_tuning_job_objective_metrics: IResolvable | typing.List[SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics] = None,
  supports_distributed_training: bool | IResolvable = None,
  training_image_digest: str = None
) -> None
```

###### `supported_training_instance_types`<sup>Required</sup> <a name="supported_training_instance_types" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putTrainingSpecification.parameter.supportedTrainingInstanceTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#supported_training_instance_types SagemakerAlgorithm#supported_training_instance_types}.

---

###### `training_channels`<sup>Required</sup> <a name="training_channels" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putTrainingSpecification.parameter.trainingChannels"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels">SagemakerAlgorithmTrainingSpecificationTrainingChannels</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#training_channels SagemakerAlgorithm#training_channels}.

---

###### `training_image`<sup>Required</sup> <a name="training_image" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putTrainingSpecification.parameter.trainingImage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#training_image SagemakerAlgorithm#training_image}.

---

###### `metric_definitions`<sup>Optional</sup> <a name="metric_definitions" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putTrainingSpecification.parameter.metricDefinitions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions">SagemakerAlgorithmTrainingSpecificationMetricDefinitions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#metric_definitions SagemakerAlgorithm#metric_definitions}.

---

###### `supported_hyper_parameters`<sup>Optional</sup> <a name="supported_hyper_parameters" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putTrainingSpecification.parameter.supportedHyperParameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#supported_hyper_parameters SagemakerAlgorithm#supported_hyper_parameters}.

---

###### `supported_tuning_job_objective_metrics`<sup>Optional</sup> <a name="supported_tuning_job_objective_metrics" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putTrainingSpecification.parameter.supportedTuningJobObjectiveMetrics"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#supported_tuning_job_objective_metrics SagemakerAlgorithm#supported_tuning_job_objective_metrics}.

---

###### `supports_distributed_training`<sup>Optional</sup> <a name="supports_distributed_training" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putTrainingSpecification.parameter.supportsDistributedTraining"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#supports_distributed_training SagemakerAlgorithm#supports_distributed_training}.

---

###### `training_image_digest`<sup>Optional</sup> <a name="training_image_digest" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putTrainingSpecification.parameter.trainingImageDigest"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#training_image_digest SagemakerAlgorithm#training_image_digest}.

---

##### `reset_algorithm_description` <a name="reset_algorithm_description" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.resetAlgorithmDescription"></a>

```python
def reset_algorithm_description() -> None
```

##### `reset_certify_for_marketplace` <a name="reset_certify_for_marketplace" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.resetCertifyForMarketplace"></a>

```python
def reset_certify_for_marketplace() -> None
```

##### `reset_inference_specification` <a name="reset_inference_specification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.resetInferenceSpecification"></a>

```python
def reset_inference_specification() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SagemakerAlgorithm resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.isConstruct"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithm.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.isTerraformElement"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithm.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.isTerraformResource"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithm.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithm.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SagemakerAlgorithm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerAlgorithm to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerAlgorithm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerAlgorithm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.algorithmArn">algorithm_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.inferenceSpecification">inference_specification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference">SagemakerAlgorithmInferenceSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList">SagemakerAlgorithmTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.trainingSpecification">training_specification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference">SagemakerAlgorithmTrainingSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.algorithmDescriptionInput">algorithm_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.algorithmNameInput">algorithm_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.certifyForMarketplaceInput">certify_for_marketplace_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.inferenceSpecificationInput">inference_specification_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification">SagemakerAlgorithmInferenceSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags">SagemakerAlgorithmTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.trainingSpecificationInput">training_specification_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification">SagemakerAlgorithmTrainingSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.algorithmDescription">algorithm_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.algorithmName">algorithm_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.certifyForMarketplace">certify_for_marketplace</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `algorithm_arn`<sup>Required</sup> <a name="algorithm_arn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.algorithmArn"></a>

```python
algorithm_arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inference_specification`<sup>Required</sup> <a name="inference_specification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.inferenceSpecification"></a>

```python
inference_specification: SagemakerAlgorithmInferenceSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference">SagemakerAlgorithmInferenceSpecificationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.tags"></a>

```python
tags: SagemakerAlgorithmTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList">SagemakerAlgorithmTagsList</a>

---

##### `training_specification`<sup>Required</sup> <a name="training_specification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.trainingSpecification"></a>

```python
training_specification: SagemakerAlgorithmTrainingSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference">SagemakerAlgorithmTrainingSpecificationOutputReference</a>

---

##### `algorithm_description_input`<sup>Optional</sup> <a name="algorithm_description_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.algorithmDescriptionInput"></a>

```python
algorithm_description_input: str
```

- *Type:* str

---

##### `algorithm_name_input`<sup>Optional</sup> <a name="algorithm_name_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.algorithmNameInput"></a>

```python
algorithm_name_input: str
```

- *Type:* str

---

##### `certify_for_marketplace_input`<sup>Optional</sup> <a name="certify_for_marketplace_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.certifyForMarketplaceInput"></a>

```python
certify_for_marketplace_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `inference_specification_input`<sup>Optional</sup> <a name="inference_specification_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.inferenceSpecificationInput"></a>

```python
inference_specification_input: IResolvable | SagemakerAlgorithmInferenceSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification">SagemakerAlgorithmInferenceSpecification</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SagemakerAlgorithmTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags">SagemakerAlgorithmTags</a>]

---

##### `training_specification_input`<sup>Optional</sup> <a name="training_specification_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.trainingSpecificationInput"></a>

```python
training_specification_input: IResolvable | SagemakerAlgorithmTrainingSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification">SagemakerAlgorithmTrainingSpecification</a>

---

##### `algorithm_description`<sup>Required</sup> <a name="algorithm_description" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.algorithmDescription"></a>

```python
algorithm_description: str
```

- *Type:* str

---

##### `algorithm_name`<sup>Required</sup> <a name="algorithm_name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.algorithmName"></a>

```python
algorithm_name: str
```

- *Type:* str

---

##### `certify_for_marketplace`<sup>Required</sup> <a name="certify_for_marketplace" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.certifyForMarketplace"></a>

```python
certify_for_marketplace: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerAlgorithmConfig <a name="SagemakerAlgorithmConfig" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  algorithm_name: str,
  training_specification: SagemakerAlgorithmTrainingSpecification,
  algorithm_description: str = None,
  certify_for_marketplace: bool | IResolvable = None,
  inference_specification: SagemakerAlgorithmInferenceSpecification = None,
  tags: IResolvable | typing.List[SagemakerAlgorithmTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.algorithmName">algorithm_name</a></code> | <code>str</code> | The name of the algorithm. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.trainingSpecification">training_specification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification">SagemakerAlgorithmTrainingSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#training_specification SagemakerAlgorithm#training_specification}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.algorithmDescription">algorithm_description</a></code> | <code>str</code> | A description of the algorithm. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.certifyForMarketplace">certify_for_marketplace</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to certify the algorithm so that it can be listed in AWS Marketplace. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.inferenceSpecification">inference_specification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification">SagemakerAlgorithmInferenceSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#inference_specification SagemakerAlgorithm#inference_specification}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags">SagemakerAlgorithmTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `algorithm_name`<sup>Required</sup> <a name="algorithm_name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.algorithmName"></a>

```python
algorithm_name: str
```

- *Type:* str

The name of the algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#algorithm_name SagemakerAlgorithm#algorithm_name}

---

##### `training_specification`<sup>Required</sup> <a name="training_specification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.trainingSpecification"></a>

```python
training_specification: SagemakerAlgorithmTrainingSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification">SagemakerAlgorithmTrainingSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#training_specification SagemakerAlgorithm#training_specification}.

---

##### `algorithm_description`<sup>Optional</sup> <a name="algorithm_description" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.algorithmDescription"></a>

```python
algorithm_description: str
```

- *Type:* str

A description of the algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#algorithm_description SagemakerAlgorithm#algorithm_description}

---

##### `certify_for_marketplace`<sup>Optional</sup> <a name="certify_for_marketplace" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.certifyForMarketplace"></a>

```python
certify_for_marketplace: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to certify the algorithm so that it can be listed in AWS Marketplace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#certify_for_marketplace SagemakerAlgorithm#certify_for_marketplace}

---

##### `inference_specification`<sup>Optional</sup> <a name="inference_specification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.inferenceSpecification"></a>

```python
inference_specification: SagemakerAlgorithmInferenceSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification">SagemakerAlgorithmInferenceSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#inference_specification SagemakerAlgorithm#inference_specification}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SagemakerAlgorithmTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags">SagemakerAlgorithmTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#tags SagemakerAlgorithm#tags}

---

### SagemakerAlgorithmInferenceSpecification <a name="SagemakerAlgorithmInferenceSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification(
  containers: IResolvable | typing.List[SagemakerAlgorithmInferenceSpecificationContainers] = None,
  supported_content_types: typing.List[str] = None,
  supported_realtime_inference_instance_types: typing.List[str] = None,
  supported_response_mime_types: typing.List[str] = None,
  supported_transform_instance_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.property.containers">containers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers">SagemakerAlgorithmInferenceSpecificationContainers</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#containers SagemakerAlgorithm#containers}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.property.supportedContentTypes">supported_content_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#supported_content_types SagemakerAlgorithm#supported_content_types}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.property.supportedRealtimeInferenceInstanceTypes">supported_realtime_inference_instance_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#supported_realtime_inference_instance_types SagemakerAlgorithm#supported_realtime_inference_instance_types}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.property.supportedResponseMimeTypes">supported_response_mime_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#supported_response_mime_types SagemakerAlgorithm#supported_response_mime_types}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.property.supportedTransformInstanceTypes">supported_transform_instance_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#supported_transform_instance_types SagemakerAlgorithm#supported_transform_instance_types}. |

---

##### `containers`<sup>Optional</sup> <a name="containers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.property.containers"></a>

```python
containers: IResolvable | typing.List[SagemakerAlgorithmInferenceSpecificationContainers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers">SagemakerAlgorithmInferenceSpecificationContainers</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#containers SagemakerAlgorithm#containers}.

---

##### `supported_content_types`<sup>Optional</sup> <a name="supported_content_types" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.property.supportedContentTypes"></a>

```python
supported_content_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#supported_content_types SagemakerAlgorithm#supported_content_types}.

---

##### `supported_realtime_inference_instance_types`<sup>Optional</sup> <a name="supported_realtime_inference_instance_types" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.property.supportedRealtimeInferenceInstanceTypes"></a>

```python
supported_realtime_inference_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#supported_realtime_inference_instance_types SagemakerAlgorithm#supported_realtime_inference_instance_types}.

---

##### `supported_response_mime_types`<sup>Optional</sup> <a name="supported_response_mime_types" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.property.supportedResponseMimeTypes"></a>

```python
supported_response_mime_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#supported_response_mime_types SagemakerAlgorithm#supported_response_mime_types}.

---

##### `supported_transform_instance_types`<sup>Optional</sup> <a name="supported_transform_instance_types" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.property.supportedTransformInstanceTypes"></a>

```python
supported_transform_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#supported_transform_instance_types SagemakerAlgorithm#supported_transform_instance_types}.

---

### SagemakerAlgorithmInferenceSpecificationContainers <a name="SagemakerAlgorithmInferenceSpecificationContainers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers(
  container_hostname: str = None,
  environment: typing.Mapping[str] = None,
  framework: str = None,
  framework_version: str = None,
  image: str = None,
  image_digest: str = None,
  is_checkpoint: bool | IResolvable = None,
  model_input: SagemakerAlgorithmInferenceSpecificationContainersModelInput = None,
  nearest_model_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.containerHostname">container_hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#container_hostname SagemakerAlgorithm#container_hostname}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.environment">environment</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#environment SagemakerAlgorithm#environment}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.framework">framework</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#framework SagemakerAlgorithm#framework}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.frameworkVersion">framework_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#framework_version SagemakerAlgorithm#framework_version}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.image">image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#image SagemakerAlgorithm#image}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.imageDigest">image_digest</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#image_digest SagemakerAlgorithm#image_digest}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.isCheckpoint">is_checkpoint</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#is_checkpoint SagemakerAlgorithm#is_checkpoint}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.modelInput">model_input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput">SagemakerAlgorithmInferenceSpecificationContainersModelInput</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#model_input SagemakerAlgorithm#model_input}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.nearestModelName">nearest_model_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#nearest_model_name SagemakerAlgorithm#nearest_model_name}. |

---

##### `container_hostname`<sup>Optional</sup> <a name="container_hostname" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.containerHostname"></a>

```python
container_hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#container_hostname SagemakerAlgorithm#container_hostname}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.environment"></a>

```python
environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#environment SagemakerAlgorithm#environment}.

---

##### `framework`<sup>Optional</sup> <a name="framework" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.framework"></a>

```python
framework: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#framework SagemakerAlgorithm#framework}.

---

##### `framework_version`<sup>Optional</sup> <a name="framework_version" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.frameworkVersion"></a>

```python
framework_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#framework_version SagemakerAlgorithm#framework_version}.

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.image"></a>

```python
image: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#image SagemakerAlgorithm#image}.

---

##### `image_digest`<sup>Optional</sup> <a name="image_digest" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.imageDigest"></a>

```python
image_digest: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#image_digest SagemakerAlgorithm#image_digest}.

---

##### `is_checkpoint`<sup>Optional</sup> <a name="is_checkpoint" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.isCheckpoint"></a>

```python
is_checkpoint: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#is_checkpoint SagemakerAlgorithm#is_checkpoint}.

---

##### `model_input`<sup>Optional</sup> <a name="model_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.modelInput"></a>

```python
model_input: SagemakerAlgorithmInferenceSpecificationContainersModelInput
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput">SagemakerAlgorithmInferenceSpecificationContainersModelInput</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#model_input SagemakerAlgorithm#model_input}.

---

##### `nearest_model_name`<sup>Optional</sup> <a name="nearest_model_name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.nearestModelName"></a>

```python
nearest_model_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#nearest_model_name SagemakerAlgorithm#nearest_model_name}.

---

### SagemakerAlgorithmInferenceSpecificationContainersModelInput <a name="SagemakerAlgorithmInferenceSpecificationContainersModelInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput(
  data_input_config: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput.property.dataInputConfig">data_input_config</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#data_input_config SagemakerAlgorithm#data_input_config}. |

---

##### `data_input_config`<sup>Optional</sup> <a name="data_input_config" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput.property.dataInputConfig"></a>

```python
data_input_config: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#data_input_config SagemakerAlgorithm#data_input_config}.

---

### SagemakerAlgorithmTags <a name="SagemakerAlgorithmTags" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#key SagemakerAlgorithm#key}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#value SagemakerAlgorithm#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#key SagemakerAlgorithm#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#value SagemakerAlgorithm#value}.

---

### SagemakerAlgorithmTrainingSpecification <a name="SagemakerAlgorithmTrainingSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification(
  supported_training_instance_types: typing.List[str],
  training_channels: IResolvable | typing.List[SagemakerAlgorithmTrainingSpecificationTrainingChannels],
  training_image: str,
  metric_definitions: IResolvable | typing.List[SagemakerAlgorithmTrainingSpecificationMetricDefinitions] = None,
  supported_hyper_parameters: IResolvable | typing.List[SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters] = None,
  supported_tuning_job_objective_metrics: IResolvable | typing.List[SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics] = None,
  supports_distributed_training: bool | IResolvable = None,
  training_image_digest: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.supportedTrainingInstanceTypes">supported_training_instance_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#supported_training_instance_types SagemakerAlgorithm#supported_training_instance_types}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.trainingChannels">training_channels</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels">SagemakerAlgorithmTrainingSpecificationTrainingChannels</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#training_channels SagemakerAlgorithm#training_channels}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.trainingImage">training_image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#training_image SagemakerAlgorithm#training_image}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.metricDefinitions">metric_definitions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions">SagemakerAlgorithmTrainingSpecificationMetricDefinitions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#metric_definitions SagemakerAlgorithm#metric_definitions}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.supportedHyperParameters">supported_hyper_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#supported_hyper_parameters SagemakerAlgorithm#supported_hyper_parameters}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.supportedTuningJobObjectiveMetrics">supported_tuning_job_objective_metrics</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#supported_tuning_job_objective_metrics SagemakerAlgorithm#supported_tuning_job_objective_metrics}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.supportsDistributedTraining">supports_distributed_training</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#supports_distributed_training SagemakerAlgorithm#supports_distributed_training}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.trainingImageDigest">training_image_digest</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#training_image_digest SagemakerAlgorithm#training_image_digest}. |

---

##### `supported_training_instance_types`<sup>Required</sup> <a name="supported_training_instance_types" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.supportedTrainingInstanceTypes"></a>

```python
supported_training_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#supported_training_instance_types SagemakerAlgorithm#supported_training_instance_types}.

---

##### `training_channels`<sup>Required</sup> <a name="training_channels" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.trainingChannels"></a>

```python
training_channels: IResolvable | typing.List[SagemakerAlgorithmTrainingSpecificationTrainingChannels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels">SagemakerAlgorithmTrainingSpecificationTrainingChannels</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#training_channels SagemakerAlgorithm#training_channels}.

---

##### `training_image`<sup>Required</sup> <a name="training_image" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.trainingImage"></a>

```python
training_image: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#training_image SagemakerAlgorithm#training_image}.

---

##### `metric_definitions`<sup>Optional</sup> <a name="metric_definitions" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.metricDefinitions"></a>

```python
metric_definitions: IResolvable | typing.List[SagemakerAlgorithmTrainingSpecificationMetricDefinitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions">SagemakerAlgorithmTrainingSpecificationMetricDefinitions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#metric_definitions SagemakerAlgorithm#metric_definitions}.

---

##### `supported_hyper_parameters`<sup>Optional</sup> <a name="supported_hyper_parameters" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.supportedHyperParameters"></a>

```python
supported_hyper_parameters: IResolvable | typing.List[SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#supported_hyper_parameters SagemakerAlgorithm#supported_hyper_parameters}.

---

##### `supported_tuning_job_objective_metrics`<sup>Optional</sup> <a name="supported_tuning_job_objective_metrics" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.supportedTuningJobObjectiveMetrics"></a>

```python
supported_tuning_job_objective_metrics: IResolvable | typing.List[SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#supported_tuning_job_objective_metrics SagemakerAlgorithm#supported_tuning_job_objective_metrics}.

---

##### `supports_distributed_training`<sup>Optional</sup> <a name="supports_distributed_training" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.supportsDistributedTraining"></a>

```python
supports_distributed_training: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#supports_distributed_training SagemakerAlgorithm#supports_distributed_training}.

---

##### `training_image_digest`<sup>Optional</sup> <a name="training_image_digest" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.trainingImageDigest"></a>

```python
training_image_digest: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#training_image_digest SagemakerAlgorithm#training_image_digest}.

---

### SagemakerAlgorithmTrainingSpecificationMetricDefinitions <a name="SagemakerAlgorithmTrainingSpecificationMetricDefinitions" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions(
  name: str = None,
  regex: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#name SagemakerAlgorithm#name}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions.property.regex">regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#regex SagemakerAlgorithm#regex}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#name SagemakerAlgorithm#name}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions.property.regex"></a>

```python
regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#regex SagemakerAlgorithm#regex}.

---

### SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters(
  default_value: str = None,
  description: str = None,
  is_required: bool | IResolvable = None,
  is_tunable: bool | IResolvable = None,
  name: str = None,
  range: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.defaultValue">default_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#default_value SagemakerAlgorithm#default_value}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#description SagemakerAlgorithm#description}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.isRequired">is_required</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#is_required SagemakerAlgorithm#is_required}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.isTunable">is_tunable</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#is_tunable SagemakerAlgorithm#is_tunable}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#name SagemakerAlgorithm#name}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.range">range</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#range SagemakerAlgorithm#range}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#type SagemakerAlgorithm#type}. |

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#default_value SagemakerAlgorithm#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#description SagemakerAlgorithm#description}.

---

##### `is_required`<sup>Optional</sup> <a name="is_required" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.isRequired"></a>

```python
is_required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#is_required SagemakerAlgorithm#is_required}.

---

##### `is_tunable`<sup>Optional</sup> <a name="is_tunable" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.isTunable"></a>

```python
is_tunable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#is_tunable SagemakerAlgorithm#is_tunable}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#name SagemakerAlgorithm#name}.

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.range"></a>

```python
range: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#range SagemakerAlgorithm#range}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#type SagemakerAlgorithm#type}.

---

### SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange(
  categorical_parameter_range_specification: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification = None,
  continuous_parameter_range_specification: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification = None,
  integer_parameter_range_specification: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange.property.categoricalParameterRangeSpecification">categorical_parameter_range_specification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#categorical_parameter_range_specification SagemakerAlgorithm#categorical_parameter_range_specification}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange.property.continuousParameterRangeSpecification">continuous_parameter_range_specification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#continuous_parameter_range_specification SagemakerAlgorithm#continuous_parameter_range_specification}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange.property.integerParameterRangeSpecification">integer_parameter_range_specification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#integer_parameter_range_specification SagemakerAlgorithm#integer_parameter_range_specification}. |

---

##### `categorical_parameter_range_specification`<sup>Optional</sup> <a name="categorical_parameter_range_specification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange.property.categoricalParameterRangeSpecification"></a>

```python
categorical_parameter_range_specification: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#categorical_parameter_range_specification SagemakerAlgorithm#categorical_parameter_range_specification}.

---

##### `continuous_parameter_range_specification`<sup>Optional</sup> <a name="continuous_parameter_range_specification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange.property.continuousParameterRangeSpecification"></a>

```python
continuous_parameter_range_specification: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#continuous_parameter_range_specification SagemakerAlgorithm#continuous_parameter_range_specification}.

---

##### `integer_parameter_range_specification`<sup>Optional</sup> <a name="integer_parameter_range_specification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange.property.integerParameterRangeSpecification"></a>

```python
integer_parameter_range_specification: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#integer_parameter_range_specification SagemakerAlgorithm#integer_parameter_range_specification}.

---

### SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification(
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#values SagemakerAlgorithm#values}. |

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#values SagemakerAlgorithm#values}.

---

### SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification(
  max_value: str = None,
  min_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification.property.maxValue">max_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#max_value SagemakerAlgorithm#max_value}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification.property.minValue">min_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#min_value SagemakerAlgorithm#min_value}. |

---

##### `max_value`<sup>Optional</sup> <a name="max_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification.property.maxValue"></a>

```python
max_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#max_value SagemakerAlgorithm#max_value}.

---

##### `min_value`<sup>Optional</sup> <a name="min_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification.property.minValue"></a>

```python
min_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#min_value SagemakerAlgorithm#min_value}.

---

### SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification(
  max_value: str = None,
  min_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification.property.maxValue">max_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#max_value SagemakerAlgorithm#max_value}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification.property.minValue">min_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#min_value SagemakerAlgorithm#min_value}. |

---

##### `max_value`<sup>Optional</sup> <a name="max_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification.property.maxValue"></a>

```python
max_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#max_value SagemakerAlgorithm#max_value}.

---

##### `min_value`<sup>Optional</sup> <a name="min_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification.property.minValue"></a>

```python
min_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#min_value SagemakerAlgorithm#min_value}.

---

### SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics <a name="SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics(
  metric_name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#metric_name SagemakerAlgorithm#metric_name}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#type SagemakerAlgorithm#type}. |

---

##### `metric_name`<sup>Optional</sup> <a name="metric_name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#metric_name SagemakerAlgorithm#metric_name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#type SagemakerAlgorithm#type}.

---

### SagemakerAlgorithmTrainingSpecificationTrainingChannels <a name="SagemakerAlgorithmTrainingSpecificationTrainingChannels" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels(
  name: str,
  supported_content_types: typing.List[str],
  supported_input_modes: typing.List[str],
  description: str = None,
  is_required: bool | IResolvable = None,
  supported_compression_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#name SagemakerAlgorithm#name}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.supportedContentTypes">supported_content_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#supported_content_types SagemakerAlgorithm#supported_content_types}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.supportedInputModes">supported_input_modes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#supported_input_modes SagemakerAlgorithm#supported_input_modes}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#description SagemakerAlgorithm#description}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.isRequired">is_required</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#is_required SagemakerAlgorithm#is_required}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.supportedCompressionTypes">supported_compression_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#supported_compression_types SagemakerAlgorithm#supported_compression_types}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#name SagemakerAlgorithm#name}.

---

##### `supported_content_types`<sup>Required</sup> <a name="supported_content_types" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.supportedContentTypes"></a>

```python
supported_content_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#supported_content_types SagemakerAlgorithm#supported_content_types}.

---

##### `supported_input_modes`<sup>Required</sup> <a name="supported_input_modes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.supportedInputModes"></a>

```python
supported_input_modes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#supported_input_modes SagemakerAlgorithm#supported_input_modes}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#description SagemakerAlgorithm#description}.

---

##### `is_required`<sup>Optional</sup> <a name="is_required" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.isRequired"></a>

```python
is_required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#is_required SagemakerAlgorithm#is_required}.

---

##### `supported_compression_types`<sup>Optional</sup> <a name="supported_compression_types" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.supportedCompressionTypes"></a>

```python
supported_compression_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#supported_compression_types SagemakerAlgorithm#supported_compression_types}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerAlgorithmInferenceSpecificationContainersList <a name="SagemakerAlgorithmInferenceSpecificationContainersList" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerAlgorithmInferenceSpecificationContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers">SagemakerAlgorithmInferenceSpecificationContainers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerAlgorithmInferenceSpecificationContainers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers">SagemakerAlgorithmInferenceSpecificationContainers</a>]

---


### SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference <a name="SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.resetDataInputConfig">reset_data_input_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_input_config` <a name="reset_data_input_config" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.resetDataInputConfig"></a>

```python
def reset_data_input_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.dataInputConfigInput">data_input_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.dataInputConfig">data_input_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput">SagemakerAlgorithmInferenceSpecificationContainersModelInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_input_config_input`<sup>Optional</sup> <a name="data_input_config_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.dataInputConfigInput"></a>

```python
data_input_config_input: str
```

- *Type:* str

---

##### `data_input_config`<sup>Required</sup> <a name="data_input_config" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.dataInputConfig"></a>

```python
data_input_config: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerAlgorithmInferenceSpecificationContainersModelInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput">SagemakerAlgorithmInferenceSpecificationContainersModelInput</a>

---


### SagemakerAlgorithmInferenceSpecificationContainersOutputReference <a name="SagemakerAlgorithmInferenceSpecificationContainersOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.putModelInput">put_model_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetContainerHostname">reset_container_hostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetFramework">reset_framework</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetFrameworkVersion">reset_framework_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetImage">reset_image</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetImageDigest">reset_image_digest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetIsCheckpoint">reset_is_checkpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetModelInput">reset_model_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetNearestModelName">reset_nearest_model_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_model_input` <a name="put_model_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.putModelInput"></a>

```python
def put_model_input(
  data_input_config: str = None
) -> None
```

###### `data_input_config`<sup>Optional</sup> <a name="data_input_config" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.putModelInput.parameter.dataInputConfig"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#data_input_config SagemakerAlgorithm#data_input_config}.

---

##### `reset_container_hostname` <a name="reset_container_hostname" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetContainerHostname"></a>

```python
def reset_container_hostname() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_framework` <a name="reset_framework" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetFramework"></a>

```python
def reset_framework() -> None
```

##### `reset_framework_version` <a name="reset_framework_version" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetFrameworkVersion"></a>

```python
def reset_framework_version() -> None
```

##### `reset_image` <a name="reset_image" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetImage"></a>

```python
def reset_image() -> None
```

##### `reset_image_digest` <a name="reset_image_digest" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetImageDigest"></a>

```python
def reset_image_digest() -> None
```

##### `reset_is_checkpoint` <a name="reset_is_checkpoint" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetIsCheckpoint"></a>

```python
def reset_is_checkpoint() -> None
```

##### `reset_model_input` <a name="reset_model_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetModelInput"></a>

```python
def reset_model_input() -> None
```

##### `reset_nearest_model_name` <a name="reset_nearest_model_name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetNearestModelName"></a>

```python
def reset_nearest_model_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.modelInput">model_input</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference">SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.containerHostnameInput">container_hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.environmentInput">environment_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.frameworkInput">framework_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.frameworkVersionInput">framework_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.imageDigestInput">image_digest_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.isCheckpointInput">is_checkpoint_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.modelInputInput">model_input_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput">SagemakerAlgorithmInferenceSpecificationContainersModelInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.nearestModelNameInput">nearest_model_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.containerHostname">container_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.environment">environment</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.framework">framework</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.frameworkVersion">framework_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.imageDigest">image_digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.isCheckpoint">is_checkpoint</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.nearestModelName">nearest_model_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers">SagemakerAlgorithmInferenceSpecificationContainers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_input`<sup>Required</sup> <a name="model_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.modelInput"></a>

```python
model_input: SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference">SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference</a>

---

##### `container_hostname_input`<sup>Optional</sup> <a name="container_hostname_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.containerHostnameInput"></a>

```python
container_hostname_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.environmentInput"></a>

```python
environment_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `framework_input`<sup>Optional</sup> <a name="framework_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.frameworkInput"></a>

```python
framework_input: str
```

- *Type:* str

---

##### `framework_version_input`<sup>Optional</sup> <a name="framework_version_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.frameworkVersionInput"></a>

```python
framework_version_input: str
```

- *Type:* str

---

##### `image_digest_input`<sup>Optional</sup> <a name="image_digest_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.imageDigestInput"></a>

```python
image_digest_input: str
```

- *Type:* str

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `is_checkpoint_input`<sup>Optional</sup> <a name="is_checkpoint_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.isCheckpointInput"></a>

```python
is_checkpoint_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `model_input_input`<sup>Optional</sup> <a name="model_input_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.modelInputInput"></a>

```python
model_input_input: IResolvable | SagemakerAlgorithmInferenceSpecificationContainersModelInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput">SagemakerAlgorithmInferenceSpecificationContainersModelInput</a>

---

##### `nearest_model_name_input`<sup>Optional</sup> <a name="nearest_model_name_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.nearestModelNameInput"></a>

```python
nearest_model_name_input: str
```

- *Type:* str

---

##### `container_hostname`<sup>Required</sup> <a name="container_hostname" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.containerHostname"></a>

```python
container_hostname: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.environment"></a>

```python
environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.framework"></a>

```python
framework: str
```

- *Type:* str

---

##### `framework_version`<sup>Required</sup> <a name="framework_version" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.frameworkVersion"></a>

```python
framework_version: str
```

- *Type:* str

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `image_digest`<sup>Required</sup> <a name="image_digest" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.imageDigest"></a>

```python
image_digest: str
```

- *Type:* str

---

##### `is_checkpoint`<sup>Required</sup> <a name="is_checkpoint" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.isCheckpoint"></a>

```python
is_checkpoint: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `nearest_model_name`<sup>Required</sup> <a name="nearest_model_name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.nearestModelName"></a>

```python
nearest_model_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerAlgorithmInferenceSpecificationContainers
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers">SagemakerAlgorithmInferenceSpecificationContainers</a>

---


### SagemakerAlgorithmInferenceSpecificationOutputReference <a name="SagemakerAlgorithmInferenceSpecificationOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.putContainers">put_containers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resetContainers">reset_containers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resetSupportedContentTypes">reset_supported_content_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resetSupportedRealtimeInferenceInstanceTypes">reset_supported_realtime_inference_instance_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resetSupportedResponseMimeTypes">reset_supported_response_mime_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resetSupportedTransformInstanceTypes">reset_supported_transform_instance_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_containers` <a name="put_containers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.putContainers"></a>

```python
def put_containers(
  value: IResolvable | typing.List[SagemakerAlgorithmInferenceSpecificationContainers]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.putContainers.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers">SagemakerAlgorithmInferenceSpecificationContainers</a>]

---

##### `reset_containers` <a name="reset_containers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resetContainers"></a>

```python
def reset_containers() -> None
```

##### `reset_supported_content_types` <a name="reset_supported_content_types" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resetSupportedContentTypes"></a>

```python
def reset_supported_content_types() -> None
```

##### `reset_supported_realtime_inference_instance_types` <a name="reset_supported_realtime_inference_instance_types" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resetSupportedRealtimeInferenceInstanceTypes"></a>

```python
def reset_supported_realtime_inference_instance_types() -> None
```

##### `reset_supported_response_mime_types` <a name="reset_supported_response_mime_types" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resetSupportedResponseMimeTypes"></a>

```python
def reset_supported_response_mime_types() -> None
```

##### `reset_supported_transform_instance_types` <a name="reset_supported_transform_instance_types" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resetSupportedTransformInstanceTypes"></a>

```python
def reset_supported_transform_instance_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.containers">containers</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList">SagemakerAlgorithmInferenceSpecificationContainersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.containersInput">containers_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers">SagemakerAlgorithmInferenceSpecificationContainers</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedContentTypesInput">supported_content_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedRealtimeInferenceInstanceTypesInput">supported_realtime_inference_instance_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedResponseMimeTypesInput">supported_response_mime_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedTransformInstanceTypesInput">supported_transform_instance_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedContentTypes">supported_content_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedRealtimeInferenceInstanceTypes">supported_realtime_inference_instance_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedResponseMimeTypes">supported_response_mime_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedTransformInstanceTypes">supported_transform_instance_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification">SagemakerAlgorithmInferenceSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.containers"></a>

```python
containers: SagemakerAlgorithmInferenceSpecificationContainersList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList">SagemakerAlgorithmInferenceSpecificationContainersList</a>

---

##### `containers_input`<sup>Optional</sup> <a name="containers_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.containersInput"></a>

```python
containers_input: IResolvable | typing.List[SagemakerAlgorithmInferenceSpecificationContainers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers">SagemakerAlgorithmInferenceSpecificationContainers</a>]

---

##### `supported_content_types_input`<sup>Optional</sup> <a name="supported_content_types_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedContentTypesInput"></a>

```python
supported_content_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_realtime_inference_instance_types_input`<sup>Optional</sup> <a name="supported_realtime_inference_instance_types_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedRealtimeInferenceInstanceTypesInput"></a>

```python
supported_realtime_inference_instance_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_response_mime_types_input`<sup>Optional</sup> <a name="supported_response_mime_types_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedResponseMimeTypesInput"></a>

```python
supported_response_mime_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_transform_instance_types_input`<sup>Optional</sup> <a name="supported_transform_instance_types_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedTransformInstanceTypesInput"></a>

```python
supported_transform_instance_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_content_types`<sup>Required</sup> <a name="supported_content_types" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedContentTypes"></a>

```python
supported_content_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_realtime_inference_instance_types`<sup>Required</sup> <a name="supported_realtime_inference_instance_types" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedRealtimeInferenceInstanceTypes"></a>

```python
supported_realtime_inference_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_response_mime_types`<sup>Required</sup> <a name="supported_response_mime_types" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedResponseMimeTypes"></a>

```python
supported_response_mime_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_transform_instance_types`<sup>Required</sup> <a name="supported_transform_instance_types" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedTransformInstanceTypes"></a>

```python
supported_transform_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerAlgorithmInferenceSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification">SagemakerAlgorithmInferenceSpecification</a>

---


### SagemakerAlgorithmTagsList <a name="SagemakerAlgorithmTagsList" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerAlgorithmTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags">SagemakerAlgorithmTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerAlgorithmTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags">SagemakerAlgorithmTags</a>]

---


### SagemakerAlgorithmTagsOutputReference <a name="SagemakerAlgorithmTagsOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags">SagemakerAlgorithmTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerAlgorithmTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags">SagemakerAlgorithmTags</a>

---


### SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList <a name="SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions">SagemakerAlgorithmTrainingSpecificationMetricDefinitions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerAlgorithmTrainingSpecificationMetricDefinitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions">SagemakerAlgorithmTrainingSpecificationMetricDefinitions</a>]

---


### SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference <a name="SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_regex` <a name="reset_regex" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.regexInput">regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions">SagemakerAlgorithmTrainingSpecificationMetricDefinitions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.regexInput"></a>

```python
regex_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerAlgorithmTrainingSpecificationMetricDefinitions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions">SagemakerAlgorithmTrainingSpecificationMetricDefinitions</a>

---


### SagemakerAlgorithmTrainingSpecificationOutputReference <a name="SagemakerAlgorithmTrainingSpecificationOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putMetricDefinitions">put_metric_definitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putSupportedHyperParameters">put_supported_hyper_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putSupportedTuningJobObjectiveMetrics">put_supported_tuning_job_objective_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putTrainingChannels">put_training_channels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resetMetricDefinitions">reset_metric_definitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resetSupportedHyperParameters">reset_supported_hyper_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resetSupportedTuningJobObjectiveMetrics">reset_supported_tuning_job_objective_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resetSupportsDistributedTraining">reset_supports_distributed_training</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resetTrainingImageDigest">reset_training_image_digest</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metric_definitions` <a name="put_metric_definitions" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putMetricDefinitions"></a>

```python
def put_metric_definitions(
  value: IResolvable | typing.List[SagemakerAlgorithmTrainingSpecificationMetricDefinitions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putMetricDefinitions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions">SagemakerAlgorithmTrainingSpecificationMetricDefinitions</a>]

---

##### `put_supported_hyper_parameters` <a name="put_supported_hyper_parameters" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putSupportedHyperParameters"></a>

```python
def put_supported_hyper_parameters(
  value: IResolvable | typing.List[SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putSupportedHyperParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a>]

---

##### `put_supported_tuning_job_objective_metrics` <a name="put_supported_tuning_job_objective_metrics" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putSupportedTuningJobObjectiveMetrics"></a>

```python
def put_supported_tuning_job_objective_metrics(
  value: IResolvable | typing.List[SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putSupportedTuningJobObjectiveMetrics.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a>]

---

##### `put_training_channels` <a name="put_training_channels" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putTrainingChannels"></a>

```python
def put_training_channels(
  value: IResolvable | typing.List[SagemakerAlgorithmTrainingSpecificationTrainingChannels]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putTrainingChannels.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels">SagemakerAlgorithmTrainingSpecificationTrainingChannels</a>]

---

##### `reset_metric_definitions` <a name="reset_metric_definitions" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resetMetricDefinitions"></a>

```python
def reset_metric_definitions() -> None
```

##### `reset_supported_hyper_parameters` <a name="reset_supported_hyper_parameters" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resetSupportedHyperParameters"></a>

```python
def reset_supported_hyper_parameters() -> None
```

##### `reset_supported_tuning_job_objective_metrics` <a name="reset_supported_tuning_job_objective_metrics" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resetSupportedTuningJobObjectiveMetrics"></a>

```python
def reset_supported_tuning_job_objective_metrics() -> None
```

##### `reset_supports_distributed_training` <a name="reset_supports_distributed_training" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resetSupportsDistributedTraining"></a>

```python
def reset_supports_distributed_training() -> None
```

##### `reset_training_image_digest` <a name="reset_training_image_digest" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resetTrainingImageDigest"></a>

```python
def reset_training_image_digest() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.metricDefinitions">metric_definitions</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList">SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedHyperParameters">supported_hyper_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTuningJobObjectiveMetrics">supported_tuning_job_objective_metrics</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingChannels">training_channels</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList">SagemakerAlgorithmTrainingSpecificationTrainingChannelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.metricDefinitionsInput">metric_definitions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions">SagemakerAlgorithmTrainingSpecificationMetricDefinitions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedHyperParametersInput">supported_hyper_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTrainingInstanceTypesInput">supported_training_instance_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTuningJobObjectiveMetricsInput">supported_tuning_job_objective_metrics_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportsDistributedTrainingInput">supports_distributed_training_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingChannelsInput">training_channels_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels">SagemakerAlgorithmTrainingSpecificationTrainingChannels</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImageDigestInput">training_image_digest_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImageInput">training_image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTrainingInstanceTypes">supported_training_instance_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportsDistributedTraining">supports_distributed_training</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImage">training_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImageDigest">training_image_digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification">SagemakerAlgorithmTrainingSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_definitions`<sup>Required</sup> <a name="metric_definitions" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.metricDefinitions"></a>

```python
metric_definitions: SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList">SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList</a>

---

##### `supported_hyper_parameters`<sup>Required</sup> <a name="supported_hyper_parameters" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedHyperParameters"></a>

```python
supported_hyper_parameters: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList</a>

---

##### `supported_tuning_job_objective_metrics`<sup>Required</sup> <a name="supported_tuning_job_objective_metrics" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTuningJobObjectiveMetrics"></a>

```python
supported_tuning_job_objective_metrics: SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList</a>

---

##### `training_channels`<sup>Required</sup> <a name="training_channels" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingChannels"></a>

```python
training_channels: SagemakerAlgorithmTrainingSpecificationTrainingChannelsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList">SagemakerAlgorithmTrainingSpecificationTrainingChannelsList</a>

---

##### `metric_definitions_input`<sup>Optional</sup> <a name="metric_definitions_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.metricDefinitionsInput"></a>

```python
metric_definitions_input: IResolvable | typing.List[SagemakerAlgorithmTrainingSpecificationMetricDefinitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions">SagemakerAlgorithmTrainingSpecificationMetricDefinitions</a>]

---

##### `supported_hyper_parameters_input`<sup>Optional</sup> <a name="supported_hyper_parameters_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedHyperParametersInput"></a>

```python
supported_hyper_parameters_input: IResolvable | typing.List[SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a>]

---

##### `supported_training_instance_types_input`<sup>Optional</sup> <a name="supported_training_instance_types_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTrainingInstanceTypesInput"></a>

```python
supported_training_instance_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_tuning_job_objective_metrics_input`<sup>Optional</sup> <a name="supported_tuning_job_objective_metrics_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTuningJobObjectiveMetricsInput"></a>

```python
supported_tuning_job_objective_metrics_input: IResolvable | typing.List[SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a>]

---

##### `supports_distributed_training_input`<sup>Optional</sup> <a name="supports_distributed_training_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportsDistributedTrainingInput"></a>

```python
supports_distributed_training_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `training_channels_input`<sup>Optional</sup> <a name="training_channels_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingChannelsInput"></a>

```python
training_channels_input: IResolvable | typing.List[SagemakerAlgorithmTrainingSpecificationTrainingChannels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels">SagemakerAlgorithmTrainingSpecificationTrainingChannels</a>]

---

##### `training_image_digest_input`<sup>Optional</sup> <a name="training_image_digest_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImageDigestInput"></a>

```python
training_image_digest_input: str
```

- *Type:* str

---

##### `training_image_input`<sup>Optional</sup> <a name="training_image_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImageInput"></a>

```python
training_image_input: str
```

- *Type:* str

---

##### `supported_training_instance_types`<sup>Required</sup> <a name="supported_training_instance_types" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTrainingInstanceTypes"></a>

```python
supported_training_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supports_distributed_training`<sup>Required</sup> <a name="supports_distributed_training" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportsDistributedTraining"></a>

```python
supports_distributed_training: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `training_image`<sup>Required</sup> <a name="training_image" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImage"></a>

```python
training_image: str
```

- *Type:* str

---

##### `training_image_digest`<sup>Required</sup> <a name="training_image_digest" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImageDigest"></a>

```python
training_image_digest: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerAlgorithmTrainingSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification">SagemakerAlgorithmTrainingSpecification</a>

---


### SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a>]

---


### SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.putRange">put_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetDefaultValue">reset_default_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetIsRequired">reset_is_required</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetIsTunable">reset_is_tunable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetRange">reset_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_range` <a name="put_range" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.putRange"></a>

```python
def put_range(
  categorical_parameter_range_specification: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification = None,
  continuous_parameter_range_specification: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification = None,
  integer_parameter_range_specification: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification = None
) -> None
```

###### `categorical_parameter_range_specification`<sup>Optional</sup> <a name="categorical_parameter_range_specification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.putRange.parameter.categoricalParameterRangeSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#categorical_parameter_range_specification SagemakerAlgorithm#categorical_parameter_range_specification}.

---

###### `continuous_parameter_range_specification`<sup>Optional</sup> <a name="continuous_parameter_range_specification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.putRange.parameter.continuousParameterRangeSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#continuous_parameter_range_specification SagemakerAlgorithm#continuous_parameter_range_specification}.

---

###### `integer_parameter_range_specification`<sup>Optional</sup> <a name="integer_parameter_range_specification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.putRange.parameter.integerParameterRangeSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#integer_parameter_range_specification SagemakerAlgorithm#integer_parameter_range_specification}.

---

##### `reset_default_value` <a name="reset_default_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_is_required` <a name="reset_is_required" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetIsRequired"></a>

```python
def reset_is_required() -> None
```

##### `reset_is_tunable` <a name="reset_is_tunable" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetIsTunable"></a>

```python
def reset_is_tunable() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_range` <a name="reset_range" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetRange"></a>

```python
def reset_range() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.range">range</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.defaultValueInput">default_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isRequiredInput">is_required_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isTunableInput">is_tunable_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.rangeInput">range_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isRequired">is_required</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isTunable">is_tunable</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.range"></a>

```python
range: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference</a>

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.defaultValueInput"></a>

```python
default_value_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `is_required_input`<sup>Optional</sup> <a name="is_required_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isRequiredInput"></a>

```python
is_required_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_tunable_input`<sup>Optional</sup> <a name="is_tunable_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isTunableInput"></a>

```python
is_tunable_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `range_input`<sup>Optional</sup> <a name="range_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.rangeInput"></a>

```python
range_input: IResolvable | SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `is_required`<sup>Required</sup> <a name="is_required" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isRequired"></a>

```python
is_required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_tunable`<sup>Required</sup> <a name="is_tunable" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isTunable"></a>

```python
is_tunable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a>

---


### SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification</a>

---


### SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.resetMaxValue">reset_max_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.resetMinValue">reset_min_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_value` <a name="reset_max_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.resetMaxValue"></a>

```python
def reset_max_value() -> None
```

##### `reset_min_value` <a name="reset_min_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.resetMinValue"></a>

```python
def reset_min_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.maxValueInput">max_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.minValueInput">min_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.maxValue">max_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.minValue">min_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_value_input`<sup>Optional</sup> <a name="max_value_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.maxValueInput"></a>

```python
max_value_input: str
```

- *Type:* str

---

##### `min_value_input`<sup>Optional</sup> <a name="min_value_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.minValueInput"></a>

```python
min_value_input: str
```

- *Type:* str

---

##### `max_value`<sup>Required</sup> <a name="max_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.maxValue"></a>

```python
max_value: str
```

- *Type:* str

---

##### `min_value`<sup>Required</sup> <a name="min_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.minValue"></a>

```python
min_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification</a>

---


### SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.resetMaxValue">reset_max_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.resetMinValue">reset_min_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_value` <a name="reset_max_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.resetMaxValue"></a>

```python
def reset_max_value() -> None
```

##### `reset_min_value` <a name="reset_min_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.resetMinValue"></a>

```python
def reset_min_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.maxValueInput">max_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.minValueInput">min_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.maxValue">max_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.minValue">min_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_value_input`<sup>Optional</sup> <a name="max_value_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.maxValueInput"></a>

```python
max_value_input: str
```

- *Type:* str

---

##### `min_value_input`<sup>Optional</sup> <a name="min_value_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.minValueInput"></a>

```python
min_value_input: str
```

- *Type:* str

---

##### `max_value`<sup>Required</sup> <a name="max_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.maxValue"></a>

```python
max_value: str
```

- *Type:* str

---

##### `min_value`<sup>Required</sup> <a name="min_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.minValue"></a>

```python
min_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification</a>

---


### SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.putCategoricalParameterRangeSpecification">put_categorical_parameter_range_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.putContinuousParameterRangeSpecification">put_continuous_parameter_range_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.putIntegerParameterRangeSpecification">put_integer_parameter_range_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resetCategoricalParameterRangeSpecification">reset_categorical_parameter_range_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resetContinuousParameterRangeSpecification">reset_continuous_parameter_range_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resetIntegerParameterRangeSpecification">reset_integer_parameter_range_specification</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_categorical_parameter_range_specification` <a name="put_categorical_parameter_range_specification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.putCategoricalParameterRangeSpecification"></a>

```python
def put_categorical_parameter_range_specification(
  values: typing.List[str] = None
) -> None
```

###### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.putCategoricalParameterRangeSpecification.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#values SagemakerAlgorithm#values}.

---

##### `put_continuous_parameter_range_specification` <a name="put_continuous_parameter_range_specification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.putContinuousParameterRangeSpecification"></a>

```python
def put_continuous_parameter_range_specification(
  max_value: str = None,
  min_value: str = None
) -> None
```

###### `max_value`<sup>Optional</sup> <a name="max_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.putContinuousParameterRangeSpecification.parameter.maxValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#max_value SagemakerAlgorithm#max_value}.

---

###### `min_value`<sup>Optional</sup> <a name="min_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.putContinuousParameterRangeSpecification.parameter.minValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#min_value SagemakerAlgorithm#min_value}.

---

##### `put_integer_parameter_range_specification` <a name="put_integer_parameter_range_specification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.putIntegerParameterRangeSpecification"></a>

```python
def put_integer_parameter_range_specification(
  max_value: str = None,
  min_value: str = None
) -> None
```

###### `max_value`<sup>Optional</sup> <a name="max_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.putIntegerParameterRangeSpecification.parameter.maxValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#max_value SagemakerAlgorithm#max_value}.

---

###### `min_value`<sup>Optional</sup> <a name="min_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.putIntegerParameterRangeSpecification.parameter.minValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_algorithm#min_value SagemakerAlgorithm#min_value}.

---

##### `reset_categorical_parameter_range_specification` <a name="reset_categorical_parameter_range_specification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resetCategoricalParameterRangeSpecification"></a>

```python
def reset_categorical_parameter_range_specification() -> None
```

##### `reset_continuous_parameter_range_specification` <a name="reset_continuous_parameter_range_specification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resetContinuousParameterRangeSpecification"></a>

```python
def reset_continuous_parameter_range_specification() -> None
```

##### `reset_integer_parameter_range_specification` <a name="reset_integer_parameter_range_specification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resetIntegerParameterRangeSpecification"></a>

```python
def reset_integer_parameter_range_specification() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.categoricalParameterRangeSpecification">categorical_parameter_range_specification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.continuousParameterRangeSpecification">continuous_parameter_range_specification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.integerParameterRangeSpecification">integer_parameter_range_specification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.categoricalParameterRangeSpecificationInput">categorical_parameter_range_specification_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.continuousParameterRangeSpecificationInput">continuous_parameter_range_specification_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.integerParameterRangeSpecificationInput">integer_parameter_range_specification_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `categorical_parameter_range_specification`<sup>Required</sup> <a name="categorical_parameter_range_specification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.categoricalParameterRangeSpecification"></a>

```python
categorical_parameter_range_specification: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference</a>

---

##### `continuous_parameter_range_specification`<sup>Required</sup> <a name="continuous_parameter_range_specification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.continuousParameterRangeSpecification"></a>

```python
continuous_parameter_range_specification: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference</a>

---

##### `integer_parameter_range_specification`<sup>Required</sup> <a name="integer_parameter_range_specification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.integerParameterRangeSpecification"></a>

```python
integer_parameter_range_specification: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference</a>

---

##### `categorical_parameter_range_specification_input`<sup>Optional</sup> <a name="categorical_parameter_range_specification_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.categoricalParameterRangeSpecificationInput"></a>

```python
categorical_parameter_range_specification_input: IResolvable | SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification</a>

---

##### `continuous_parameter_range_specification_input`<sup>Optional</sup> <a name="continuous_parameter_range_specification_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.continuousParameterRangeSpecificationInput"></a>

```python
continuous_parameter_range_specification_input: IResolvable | SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification</a>

---

##### `integer_parameter_range_specification_input`<sup>Optional</sup> <a name="integer_parameter_range_specification_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.integerParameterRangeSpecificationInput"></a>

```python
integer_parameter_range_specification_input: IResolvable | SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange</a>

---


### SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList <a name="SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a>]

---


### SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference <a name="SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.resetMetricName">reset_metric_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metric_name` <a name="reset_metric_name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.resetMetricName"></a>

```python
def reset_metric_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a>

---


### SagemakerAlgorithmTrainingSpecificationTrainingChannelsList <a name="SagemakerAlgorithmTrainingSpecificationTrainingChannelsList" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels">SagemakerAlgorithmTrainingSpecificationTrainingChannels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerAlgorithmTrainingSpecificationTrainingChannels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels">SagemakerAlgorithmTrainingSpecificationTrainingChannels</a>]

---


### SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference <a name="SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_algorithm

sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resetIsRequired">reset_is_required</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resetSupportedCompressionTypes">reset_supported_compression_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_is_required` <a name="reset_is_required" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resetIsRequired"></a>

```python
def reset_is_required() -> None
```

##### `reset_supported_compression_types` <a name="reset_supported_compression_types" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resetSupportedCompressionTypes"></a>

```python
def reset_supported_compression_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.isRequiredInput">is_required_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedCompressionTypesInput">supported_compression_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedContentTypesInput">supported_content_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedInputModesInput">supported_input_modes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.isRequired">is_required</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedCompressionTypes">supported_compression_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedContentTypes">supported_content_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedInputModes">supported_input_modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels">SagemakerAlgorithmTrainingSpecificationTrainingChannels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `is_required_input`<sup>Optional</sup> <a name="is_required_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.isRequiredInput"></a>

```python
is_required_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `supported_compression_types_input`<sup>Optional</sup> <a name="supported_compression_types_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedCompressionTypesInput"></a>

```python
supported_compression_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_content_types_input`<sup>Optional</sup> <a name="supported_content_types_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedContentTypesInput"></a>

```python
supported_content_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_input_modes_input`<sup>Optional</sup> <a name="supported_input_modes_input" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedInputModesInput"></a>

```python
supported_input_modes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `is_required`<sup>Required</sup> <a name="is_required" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.isRequired"></a>

```python
is_required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `supported_compression_types`<sup>Required</sup> <a name="supported_compression_types" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedCompressionTypes"></a>

```python
supported_compression_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_content_types`<sup>Required</sup> <a name="supported_content_types" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedContentTypes"></a>

```python
supported_content_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_input_modes`<sup>Required</sup> <a name="supported_input_modes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedInputModes"></a>

```python
supported_input_modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerAlgorithmTrainingSpecificationTrainingChannels
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels">SagemakerAlgorithmTrainingSpecificationTrainingChannels</a>

---



