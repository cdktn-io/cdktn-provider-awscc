# `sagemakerTrialComponent` Submodule <a name="`sagemakerTrialComponent` Submodule" id="@cdktn/provider-awscc.sagemakerTrialComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerTrialComponent <a name="SagemakerTrialComponent" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component awscc_sagemaker_trial_component}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_trial_component

sagemakerTrialComponent.SagemakerTrialComponent(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  trial_component_name: str,
  display_name: str = None,
  input_artifacts: IResolvable | typing.Mapping[SagemakerTrialComponentInputArtifacts] = None,
  metadata_properties: SagemakerTrialComponentMetadataProperties = None,
  output_artifacts: IResolvable | typing.Mapping[SagemakerTrialComponentOutputArtifacts] = None,
  parameters: IResolvable | typing.Mapping[SagemakerTrialComponentParameters] = None,
  status: SagemakerTrialComponentStatus = None,
  tags: IResolvable | typing.List[SagemakerTrialComponentTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.trialComponentName">trial_component_name</a></code> | <code>str</code> | The name of the trial component. Must be unique in your AWS account and is not case-sensitive. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The name of the component as displayed. If DisplayName isn't specified, TrialComponentName is displayed. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.inputArtifacts">input_artifacts</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts">SagemakerTrialComponentInputArtifacts</a>]</code> | The input artifacts for the component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.metadataProperties">metadata_properties</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties">SagemakerTrialComponentMetadataProperties</a></code> | Metadata properties of the tracking entity, trial, or trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.outputArtifacts">output_artifacts</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts">SagemakerTrialComponentOutputArtifacts</a>]</code> | The output artifacts for the component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters">SagemakerTrialComponentParameters</a>]</code> | The hyperparameters for the component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.status">status</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus">SagemakerTrialComponentStatus</a></code> | The status of the trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags">SagemakerTrialComponentTags</a>]</code> | A list of tags to associate with the trial component. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `trial_component_name`<sup>Required</sup> <a name="trial_component_name" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.trialComponentName"></a>

- *Type:* str

The name of the trial component. Must be unique in your AWS account and is not case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#trial_component_name SagemakerTrialComponent#trial_component_name}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.displayName"></a>

- *Type:* str

The name of the component as displayed. If DisplayName isn't specified, TrialComponentName is displayed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#display_name SagemakerTrialComponent#display_name}

---

##### `input_artifacts`<sup>Optional</sup> <a name="input_artifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.inputArtifacts"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts">SagemakerTrialComponentInputArtifacts</a>]

The input artifacts for the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#input_artifacts SagemakerTrialComponent#input_artifacts}

---

##### `metadata_properties`<sup>Optional</sup> <a name="metadata_properties" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.metadataProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties">SagemakerTrialComponentMetadataProperties</a>

Metadata properties of the tracking entity, trial, or trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#metadata_properties SagemakerTrialComponent#metadata_properties}

---

##### `output_artifacts`<sup>Optional</sup> <a name="output_artifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.outputArtifacts"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts">SagemakerTrialComponentOutputArtifacts</a>]

The output artifacts for the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#output_artifacts SagemakerTrialComponent#output_artifacts}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.parameters"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters">SagemakerTrialComponentParameters</a>]

The hyperparameters for the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#parameters SagemakerTrialComponent#parameters}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.status"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus">SagemakerTrialComponentStatus</a>

The status of the trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#status SagemakerTrialComponent#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags">SagemakerTrialComponentTags</a>]

A list of tags to associate with the trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#tags SagemakerTrialComponent#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putInputArtifacts">put_input_artifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putMetadataProperties">put_metadata_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putOutputArtifacts">put_output_artifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putStatus">put_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetInputArtifacts">reset_input_artifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetMetadataProperties">reset_metadata_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetOutputArtifacts">reset_output_artifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_input_artifacts` <a name="put_input_artifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putInputArtifacts"></a>

```python
def put_input_artifacts(
  value: IResolvable | typing.Mapping[SagemakerTrialComponentInputArtifacts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putInputArtifacts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts">SagemakerTrialComponentInputArtifacts</a>]

---

##### `put_metadata_properties` <a name="put_metadata_properties" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putMetadataProperties"></a>

```python
def put_metadata_properties(
  commit_id: str = None,
  generated_by: str = None,
  project_id: str = None,
  repository: str = None
) -> None
```

###### `commit_id`<sup>Optional</sup> <a name="commit_id" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putMetadataProperties.parameter.commitId"></a>

- *Type:* str

The commit ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#commit_id SagemakerTrialComponent#commit_id}

---

###### `generated_by`<sup>Optional</sup> <a name="generated_by" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putMetadataProperties.parameter.generatedBy"></a>

- *Type:* str

The entity this entity was generated by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#generated_by SagemakerTrialComponent#generated_by}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putMetadataProperties.parameter.projectId"></a>

- *Type:* str

The project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#project_id SagemakerTrialComponent#project_id}

---

###### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putMetadataProperties.parameter.repository"></a>

- *Type:* str

The repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#repository SagemakerTrialComponent#repository}

---

##### `put_output_artifacts` <a name="put_output_artifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putOutputArtifacts"></a>

```python
def put_output_artifacts(
  value: IResolvable | typing.Mapping[SagemakerTrialComponentOutputArtifacts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putOutputArtifacts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts">SagemakerTrialComponentOutputArtifacts</a>]

---

##### `put_parameters` <a name="put_parameters" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putParameters"></a>

```python
def put_parameters(
  value: IResolvable | typing.Mapping[SagemakerTrialComponentParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters">SagemakerTrialComponentParameters</a>]

---

##### `put_status` <a name="put_status" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putStatus"></a>

```python
def put_status(
  message: str = None,
  primary_status: str = None
) -> None
```

###### `message`<sup>Optional</sup> <a name="message" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putStatus.parameter.message"></a>

- *Type:* str

If the component failed, a message describing why.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#message SagemakerTrialComponent#message}

---

###### `primary_status`<sup>Optional</sup> <a name="primary_status" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putStatus.parameter.primaryStatus"></a>

- *Type:* str

The status of the trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#primary_status SagemakerTrialComponent#primary_status}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SagemakerTrialComponentTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags">SagemakerTrialComponentTags</a>]

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_input_artifacts` <a name="reset_input_artifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetInputArtifacts"></a>

```python
def reset_input_artifacts() -> None
```

##### `reset_metadata_properties` <a name="reset_metadata_properties" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetMetadataProperties"></a>

```python
def reset_metadata_properties() -> None
```

##### `reset_output_artifacts` <a name="reset_output_artifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetOutputArtifacts"></a>

```python
def reset_output_artifacts() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SagemakerTrialComponent resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.isConstruct"></a>

```python
from cdktn_provider_awscc import sagemaker_trial_component

sagemakerTrialComponent.SagemakerTrialComponent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.isTerraformElement"></a>

```python
from cdktn_provider_awscc import sagemaker_trial_component

sagemakerTrialComponent.SagemakerTrialComponent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.isTerraformResource"></a>

```python
from cdktn_provider_awscc import sagemaker_trial_component

sagemakerTrialComponent.SagemakerTrialComponent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import sagemaker_trial_component

sagemakerTrialComponent.SagemakerTrialComponent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SagemakerTrialComponent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerTrialComponent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerTrialComponent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerTrialComponent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.inputArtifacts">input_artifacts</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap">SagemakerTrialComponentInputArtifactsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.lineageGroupArn">lineage_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.metadataProperties">metadata_properties</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference">SagemakerTrialComponentMetadataPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.outputArtifacts">output_artifacts</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap">SagemakerTrialComponentOutputArtifactsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap">SagemakerTrialComponentParametersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.status">status</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference">SagemakerTrialComponentStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList">SagemakerTrialComponentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.trialComponentArn">trial_component_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.inputArtifactsInput">input_artifacts_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts">SagemakerTrialComponentInputArtifacts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.metadataPropertiesInput">metadata_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties">SagemakerTrialComponentMetadataProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.outputArtifactsInput">output_artifacts_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts">SagemakerTrialComponentOutputArtifacts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.parametersInput">parameters_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters">SagemakerTrialComponentParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.statusInput">status_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus">SagemakerTrialComponentStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags">SagemakerTrialComponentTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.trialComponentNameInput">trial_component_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.trialComponentName">trial_component_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input_artifacts`<sup>Required</sup> <a name="input_artifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.inputArtifacts"></a>

```python
input_artifacts: SagemakerTrialComponentInputArtifactsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap">SagemakerTrialComponentInputArtifactsMap</a>

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `lineage_group_arn`<sup>Required</sup> <a name="lineage_group_arn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.lineageGroupArn"></a>

```python
lineage_group_arn: str
```

- *Type:* str

---

##### `metadata_properties`<sup>Required</sup> <a name="metadata_properties" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.metadataProperties"></a>

```python
metadata_properties: SagemakerTrialComponentMetadataPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference">SagemakerTrialComponentMetadataPropertiesOutputReference</a>

---

##### `output_artifacts`<sup>Required</sup> <a name="output_artifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.outputArtifacts"></a>

```python
output_artifacts: SagemakerTrialComponentOutputArtifactsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap">SagemakerTrialComponentOutputArtifactsMap</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.parameters"></a>

```python
parameters: SagemakerTrialComponentParametersMap
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap">SagemakerTrialComponentParametersMap</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.status"></a>

```python
status: SagemakerTrialComponentStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference">SagemakerTrialComponentStatusOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.tags"></a>

```python
tags: SagemakerTrialComponentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList">SagemakerTrialComponentTagsList</a>

---

##### `trial_component_arn`<sup>Required</sup> <a name="trial_component_arn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.trialComponentArn"></a>

```python
trial_component_arn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `input_artifacts_input`<sup>Optional</sup> <a name="input_artifacts_input" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.inputArtifactsInput"></a>

```python
input_artifacts_input: IResolvable | typing.Mapping[SagemakerTrialComponentInputArtifacts]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts">SagemakerTrialComponentInputArtifacts</a>]

---

##### `metadata_properties_input`<sup>Optional</sup> <a name="metadata_properties_input" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.metadataPropertiesInput"></a>

```python
metadata_properties_input: IResolvable | SagemakerTrialComponentMetadataProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties">SagemakerTrialComponentMetadataProperties</a>

---

##### `output_artifacts_input`<sup>Optional</sup> <a name="output_artifacts_input" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.outputArtifactsInput"></a>

```python
output_artifacts_input: IResolvable | typing.Mapping[SagemakerTrialComponentOutputArtifacts]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts">SagemakerTrialComponentOutputArtifacts</a>]

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.parametersInput"></a>

```python
parameters_input: IResolvable | typing.Mapping[SagemakerTrialComponentParameters]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters">SagemakerTrialComponentParameters</a>]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.statusInput"></a>

```python
status_input: IResolvable | SagemakerTrialComponentStatus
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus">SagemakerTrialComponentStatus</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SagemakerTrialComponentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags">SagemakerTrialComponentTags</a>]

---

##### `trial_component_name_input`<sup>Optional</sup> <a name="trial_component_name_input" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.trialComponentNameInput"></a>

```python
trial_component_name_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `trial_component_name`<sup>Required</sup> <a name="trial_component_name" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.trialComponentName"></a>

```python
trial_component_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerTrialComponentConfig <a name="SagemakerTrialComponentConfig" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_trial_component

sagemakerTrialComponent.SagemakerTrialComponentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  trial_component_name: str,
  display_name: str = None,
  input_artifacts: IResolvable | typing.Mapping[SagemakerTrialComponentInputArtifacts] = None,
  metadata_properties: SagemakerTrialComponentMetadataProperties = None,
  output_artifacts: IResolvable | typing.Mapping[SagemakerTrialComponentOutputArtifacts] = None,
  parameters: IResolvable | typing.Mapping[SagemakerTrialComponentParameters] = None,
  status: SagemakerTrialComponentStatus = None,
  tags: IResolvable | typing.List[SagemakerTrialComponentTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.trialComponentName">trial_component_name</a></code> | <code>str</code> | The name of the trial component. Must be unique in your AWS account and is not case-sensitive. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.displayName">display_name</a></code> | <code>str</code> | The name of the component as displayed. If DisplayName isn't specified, TrialComponentName is displayed. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.inputArtifacts">input_artifacts</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts">SagemakerTrialComponentInputArtifacts</a>]</code> | The input artifacts for the component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.metadataProperties">metadata_properties</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties">SagemakerTrialComponentMetadataProperties</a></code> | Metadata properties of the tracking entity, trial, or trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.outputArtifacts">output_artifacts</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts">SagemakerTrialComponentOutputArtifacts</a>]</code> | The output artifacts for the component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters">SagemakerTrialComponentParameters</a>]</code> | The hyperparameters for the component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.status">status</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus">SagemakerTrialComponentStatus</a></code> | The status of the trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags">SagemakerTrialComponentTags</a>]</code> | A list of tags to associate with the trial component. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `trial_component_name`<sup>Required</sup> <a name="trial_component_name" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.trialComponentName"></a>

```python
trial_component_name: str
```

- *Type:* str

The name of the trial component. Must be unique in your AWS account and is not case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#trial_component_name SagemakerTrialComponent#trial_component_name}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The name of the component as displayed. If DisplayName isn't specified, TrialComponentName is displayed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#display_name SagemakerTrialComponent#display_name}

---

##### `input_artifacts`<sup>Optional</sup> <a name="input_artifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.inputArtifacts"></a>

```python
input_artifacts: IResolvable | typing.Mapping[SagemakerTrialComponentInputArtifacts]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts">SagemakerTrialComponentInputArtifacts</a>]

The input artifacts for the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#input_artifacts SagemakerTrialComponent#input_artifacts}

---

##### `metadata_properties`<sup>Optional</sup> <a name="metadata_properties" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.metadataProperties"></a>

```python
metadata_properties: SagemakerTrialComponentMetadataProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties">SagemakerTrialComponentMetadataProperties</a>

Metadata properties of the tracking entity, trial, or trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#metadata_properties SagemakerTrialComponent#metadata_properties}

---

##### `output_artifacts`<sup>Optional</sup> <a name="output_artifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.outputArtifacts"></a>

```python
output_artifacts: IResolvable | typing.Mapping[SagemakerTrialComponentOutputArtifacts]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts">SagemakerTrialComponentOutputArtifacts</a>]

The output artifacts for the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#output_artifacts SagemakerTrialComponent#output_artifacts}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.parameters"></a>

```python
parameters: IResolvable | typing.Mapping[SagemakerTrialComponentParameters]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters">SagemakerTrialComponentParameters</a>]

The hyperparameters for the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#parameters SagemakerTrialComponent#parameters}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.status"></a>

```python
status: SagemakerTrialComponentStatus
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus">SagemakerTrialComponentStatus</a>

The status of the trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#status SagemakerTrialComponent#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SagemakerTrialComponentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags">SagemakerTrialComponentTags</a>]

A list of tags to associate with the trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#tags SagemakerTrialComponent#tags}

---

### SagemakerTrialComponentInputArtifacts <a name="SagemakerTrialComponentInputArtifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_trial_component

sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts(
  media_type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts.property.mediaType">media_type</a></code> | <code>str</code> | The media type of the artifact. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts.property.value">value</a></code> | <code>str</code> | The location of the artifact. |

---

##### `media_type`<sup>Optional</sup> <a name="media_type" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts.property.mediaType"></a>

```python
media_type: str
```

- *Type:* str

The media type of the artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#media_type SagemakerTrialComponent#media_type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts.property.value"></a>

```python
value: str
```

- *Type:* str

The location of the artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#value SagemakerTrialComponent#value}

---

### SagemakerTrialComponentMetadataProperties <a name="SagemakerTrialComponentMetadataProperties" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_trial_component

sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties(
  commit_id: str = None,
  generated_by: str = None,
  project_id: str = None,
  repository: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties.property.commitId">commit_id</a></code> | <code>str</code> | The commit ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties.property.generatedBy">generated_by</a></code> | <code>str</code> | The entity this entity was generated by. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties.property.projectId">project_id</a></code> | <code>str</code> | The project ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties.property.repository">repository</a></code> | <code>str</code> | The repository. |

---

##### `commit_id`<sup>Optional</sup> <a name="commit_id" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties.property.commitId"></a>

```python
commit_id: str
```

- *Type:* str

The commit ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#commit_id SagemakerTrialComponent#commit_id}

---

##### `generated_by`<sup>Optional</sup> <a name="generated_by" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties.property.generatedBy"></a>

```python
generated_by: str
```

- *Type:* str

The entity this entity was generated by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#generated_by SagemakerTrialComponent#generated_by}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#project_id SagemakerTrialComponent#project_id}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties.property.repository"></a>

```python
repository: str
```

- *Type:* str

The repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#repository SagemakerTrialComponent#repository}

---

### SagemakerTrialComponentOutputArtifacts <a name="SagemakerTrialComponentOutputArtifacts" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_trial_component

sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts(
  media_type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts.property.mediaType">media_type</a></code> | <code>str</code> | The media type of the artifact. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts.property.value">value</a></code> | <code>str</code> | The location of the artifact. |

---

##### `media_type`<sup>Optional</sup> <a name="media_type" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts.property.mediaType"></a>

```python
media_type: str
```

- *Type:* str

The media type of the artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#media_type SagemakerTrialComponent#media_type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts.property.value"></a>

```python
value: str
```

- *Type:* str

The location of the artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#value SagemakerTrialComponent#value}

---

### SagemakerTrialComponentParameters <a name="SagemakerTrialComponentParameters" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_trial_component

sagemakerTrialComponent.SagemakerTrialComponentParameters(
  number_value: typing.Union[int, float] = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters.property.numberValue">number_value</a></code> | <code>typing.Union[int, float]</code> | The numeric value of a numeric hyperparameter. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters.property.stringValue">string_value</a></code> | <code>str</code> | The string value of a categorical hyperparameter. |

---

##### `number_value`<sup>Optional</sup> <a name="number_value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters.property.numberValue"></a>

```python
number_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The numeric value of a numeric hyperparameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#number_value SagemakerTrialComponent#number_value}

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

The string value of a categorical hyperparameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#string_value SagemakerTrialComponent#string_value}

---

### SagemakerTrialComponentStatus <a name="SagemakerTrialComponentStatus" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_trial_component

sagemakerTrialComponent.SagemakerTrialComponentStatus(
  message: str = None,
  primary_status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus.property.message">message</a></code> | <code>str</code> | If the component failed, a message describing why. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus.property.primaryStatus">primary_status</a></code> | <code>str</code> | The status of the trial component. |

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus.property.message"></a>

```python
message: str
```

- *Type:* str

If the component failed, a message describing why.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#message SagemakerTrialComponent#message}

---

##### `primary_status`<sup>Optional</sup> <a name="primary_status" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus.property.primaryStatus"></a>

```python
primary_status: str
```

- *Type:* str

The status of the trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#primary_status SagemakerTrialComponent#primary_status}

---

### SagemakerTrialComponentTags <a name="SagemakerTrialComponentTags" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_trial_component

sagemakerTrialComponent.SagemakerTrialComponentTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#key SagemakerTrialComponent#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_trial_component#value SagemakerTrialComponent#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerTrialComponentInputArtifactsMap <a name="SagemakerTrialComponentInputArtifactsMap" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_trial_component

sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.get"></a>

```python
def get(
  key: str
) -> SagemakerTrialComponentInputArtifactsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts">SagemakerTrialComponentInputArtifacts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[SagemakerTrialComponentInputArtifacts]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts">SagemakerTrialComponentInputArtifacts</a>]

---


### SagemakerTrialComponentInputArtifactsOutputReference <a name="SagemakerTrialComponentInputArtifactsOutputReference" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_trial_component

sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.resetMediaType">reset_media_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_media_type` <a name="reset_media_type" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.resetMediaType"></a>

```python
def reset_media_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.mediaTypeInput">media_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.mediaType">media_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts">SagemakerTrialComponentInputArtifacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `media_type_input`<sup>Optional</sup> <a name="media_type_input" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.mediaTypeInput"></a>

```python
media_type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `media_type`<sup>Required</sup> <a name="media_type" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.mediaType"></a>

```python
media_type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifactsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerTrialComponentInputArtifacts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentInputArtifacts">SagemakerTrialComponentInputArtifacts</a>

---


### SagemakerTrialComponentMetadataPropertiesOutputReference <a name="SagemakerTrialComponentMetadataPropertiesOutputReference" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_trial_component

sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resetCommitId">reset_commit_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resetGeneratedBy">reset_generated_by</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resetRepository">reset_repository</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_commit_id` <a name="reset_commit_id" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resetCommitId"></a>

```python
def reset_commit_id() -> None
```

##### `reset_generated_by` <a name="reset_generated_by" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resetGeneratedBy"></a>

```python
def reset_generated_by() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_repository` <a name="reset_repository" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.resetRepository"></a>

```python
def reset_repository() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.commitIdInput">commit_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.generatedByInput">generated_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.commitId">commit_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.generatedBy">generated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties">SagemakerTrialComponentMetadataProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `commit_id_input`<sup>Optional</sup> <a name="commit_id_input" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.commitIdInput"></a>

```python
commit_id_input: str
```

- *Type:* str

---

##### `generated_by_input`<sup>Optional</sup> <a name="generated_by_input" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.generatedByInput"></a>

```python
generated_by_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `commit_id`<sup>Required</sup> <a name="commit_id" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.commitId"></a>

```python
commit_id: str
```

- *Type:* str

---

##### `generated_by`<sup>Required</sup> <a name="generated_by" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.generatedBy"></a>

```python
generated_by: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerTrialComponentMetadataProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentMetadataProperties">SagemakerTrialComponentMetadataProperties</a>

---


### SagemakerTrialComponentOutputArtifactsMap <a name="SagemakerTrialComponentOutputArtifactsMap" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_trial_component

sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.get"></a>

```python
def get(
  key: str
) -> SagemakerTrialComponentOutputArtifactsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts">SagemakerTrialComponentOutputArtifacts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[SagemakerTrialComponentOutputArtifacts]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts">SagemakerTrialComponentOutputArtifacts</a>]

---


### SagemakerTrialComponentOutputArtifactsOutputReference <a name="SagemakerTrialComponentOutputArtifactsOutputReference" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_trial_component

sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.resetMediaType">reset_media_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_media_type` <a name="reset_media_type" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.resetMediaType"></a>

```python
def reset_media_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.mediaTypeInput">media_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.mediaType">media_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts">SagemakerTrialComponentOutputArtifacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `media_type_input`<sup>Optional</sup> <a name="media_type_input" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.mediaTypeInput"></a>

```python
media_type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `media_type`<sup>Required</sup> <a name="media_type" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.mediaType"></a>

```python
media_type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifactsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerTrialComponentOutputArtifacts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentOutputArtifacts">SagemakerTrialComponentOutputArtifacts</a>

---


### SagemakerTrialComponentParametersMap <a name="SagemakerTrialComponentParametersMap" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_trial_component

sagemakerTrialComponent.SagemakerTrialComponentParametersMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.get"></a>

```python
def get(
  key: str
) -> SagemakerTrialComponentParametersOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters">SagemakerTrialComponentParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[SagemakerTrialComponentParameters]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters">SagemakerTrialComponentParameters</a>]

---


### SagemakerTrialComponentParametersOutputReference <a name="SagemakerTrialComponentParametersOutputReference" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_trial_component

sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.resetNumberValue">reset_number_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_number_value` <a name="reset_number_value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.resetNumberValue"></a>

```python
def reset_number_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.numberValueInput">number_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.numberValue">number_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters">SagemakerTrialComponentParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `number_value_input`<sup>Optional</sup> <a name="number_value_input" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.numberValueInput"></a>

```python
number_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `number_value`<sup>Required</sup> <a name="number_value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.numberValue"></a>

```python
number_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerTrialComponentParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentParameters">SagemakerTrialComponentParameters</a>

---


### SagemakerTrialComponentStatusOutputReference <a name="SagemakerTrialComponentStatusOutputReference" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_trial_component

sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.resetMessage">reset_message</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.resetPrimaryStatus">reset_primary_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_message` <a name="reset_message" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.resetMessage"></a>

```python
def reset_message() -> None
```

##### `reset_primary_status` <a name="reset_primary_status" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.resetPrimaryStatus"></a>

```python
def reset_primary_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.primaryStatusInput">primary_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.primaryStatus">primary_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus">SagemakerTrialComponentStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `primary_status_input`<sup>Optional</sup> <a name="primary_status_input" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.primaryStatusInput"></a>

```python
primary_status_input: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `primary_status`<sup>Required</sup> <a name="primary_status" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.primaryStatus"></a>

```python
primary_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatusOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerTrialComponentStatus
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentStatus">SagemakerTrialComponentStatus</a>

---


### SagemakerTrialComponentTagsList <a name="SagemakerTrialComponentTagsList" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_trial_component

sagemakerTrialComponent.SagemakerTrialComponentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerTrialComponentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags">SagemakerTrialComponentTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerTrialComponentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags">SagemakerTrialComponentTags</a>]

---


### SagemakerTrialComponentTagsOutputReference <a name="SagemakerTrialComponentTagsOutputReference" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_trial_component

sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags">SagemakerTrialComponentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerTrialComponentTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerTrialComponent.SagemakerTrialComponentTags">SagemakerTrialComponentTags</a>

---



