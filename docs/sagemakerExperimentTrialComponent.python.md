# `sagemakerExperimentTrialComponent` Submodule <a name="`sagemakerExperimentTrialComponent` Submodule" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerExperimentTrialComponent <a name="SagemakerExperimentTrialComponent" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component awscc_sagemaker_experiment_trial_component}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_experiment_trial_component

sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent(
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
  end_time: str = None,
  metadata_properties: SagemakerExperimentTrialComponentMetadataProperties = None,
  start_time: str = None,
  status: SagemakerExperimentTrialComponentStatus = None,
  tags: IResolvable | typing.List[SagemakerExperimentTrialComponentTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.trialComponentName">trial_component_name</a></code> | <code>str</code> | The name of the trial component. The name must be unique in your AWS account and is not case-sensitive. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The name of the component as displayed. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.endTime">end_time</a></code> | <code>str</code> | When the component ended. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.metadataProperties">metadata_properties</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties">SagemakerExperimentTrialComponentMetadataProperties</a></code> | Metadata properties of the tracking entity, trial, or trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.startTime">start_time</a></code> | <code>str</code> | When the component started. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.status">status</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus">SagemakerExperimentTrialComponentStatus</a></code> | The status of the trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags">SagemakerExperimentTrialComponentTags</a>]</code> | A list of tags to associate with the component. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `trial_component_name`<sup>Required</sup> <a name="trial_component_name" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.trialComponentName"></a>

- *Type:* str

The name of the trial component. The name must be unique in your AWS account and is not case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#trial_component_name SagemakerExperimentTrialComponent#trial_component_name}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.displayName"></a>

- *Type:* str

The name of the component as displayed.

The name doesn't need to be unique. If DisplayName isn't specified, TrialComponentName is displayed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#display_name SagemakerExperimentTrialComponent#display_name}

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.endTime"></a>

- *Type:* str

When the component ended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#end_time SagemakerExperimentTrialComponent#end_time}

---

##### `metadata_properties`<sup>Optional</sup> <a name="metadata_properties" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.metadataProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties">SagemakerExperimentTrialComponentMetadataProperties</a>

Metadata properties of the tracking entity, trial, or trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#metadata_properties SagemakerExperimentTrialComponent#metadata_properties}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.startTime"></a>

- *Type:* str

When the component started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#start_time SagemakerExperimentTrialComponent#start_time}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.status"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus">SagemakerExperimentTrialComponentStatus</a>

The status of the trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#status SagemakerExperimentTrialComponent#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags">SagemakerExperimentTrialComponentTags</a>]

A list of tags to associate with the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#tags SagemakerExperimentTrialComponent#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putMetadataProperties">put_metadata_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putStatus">put_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetMetadataProperties">reset_metadata_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetStartTime">reset_start_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_metadata_properties` <a name="put_metadata_properties" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putMetadataProperties"></a>

```python
def put_metadata_properties(
  commit_id: str = None,
  generated_by: str = None,
  project_id: str = None,
  repository: str = None
) -> None
```

###### `commit_id`<sup>Optional</sup> <a name="commit_id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putMetadataProperties.parameter.commitId"></a>

- *Type:* str

The commit ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#commit_id SagemakerExperimentTrialComponent#commit_id}

---

###### `generated_by`<sup>Optional</sup> <a name="generated_by" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putMetadataProperties.parameter.generatedBy"></a>

- *Type:* str

The entity this entity was generated by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#generated_by SagemakerExperimentTrialComponent#generated_by}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putMetadataProperties.parameter.projectId"></a>

- *Type:* str

The project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#project_id SagemakerExperimentTrialComponent#project_id}

---

###### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putMetadataProperties.parameter.repository"></a>

- *Type:* str

The repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#repository SagemakerExperimentTrialComponent#repository}

---

##### `put_status` <a name="put_status" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putStatus"></a>

```python
def put_status(
  message: str = None,
  primary_status: str = None
) -> None
```

###### `message`<sup>Optional</sup> <a name="message" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putStatus.parameter.message"></a>

- *Type:* str

If the component failed, a message describing why.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#message SagemakerExperimentTrialComponent#message}

---

###### `primary_status`<sup>Optional</sup> <a name="primary_status" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putStatus.parameter.primaryStatus"></a>

- *Type:* str

The status of the trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#primary_status SagemakerExperimentTrialComponent#primary_status}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SagemakerExperimentTrialComponentTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags">SagemakerExperimentTrialComponentTags</a>]

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_end_time` <a name="reset_end_time" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_metadata_properties` <a name="reset_metadata_properties" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetMetadataProperties"></a>

```python
def reset_metadata_properties() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetStartTime"></a>

```python
def reset_start_time() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SagemakerExperimentTrialComponent resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isConstruct"></a>

```python
from cdktn_provider_awscc import sagemaker_experiment_trial_component

sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isTerraformElement"></a>

```python
from cdktn_provider_awscc import sagemaker_experiment_trial_component

sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isTerraformResource"></a>

```python
from cdktn_provider_awscc import sagemaker_experiment_trial_component

sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import sagemaker_experiment_trial_component

sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SagemakerExperimentTrialComponent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerExperimentTrialComponent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerExperimentTrialComponent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerExperimentTrialComponent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.lineageGroupArn">lineage_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.metadataProperties">metadata_properties</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference">SagemakerExperimentTrialComponentMetadataPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.status">status</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference">SagemakerExperimentTrialComponentStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList">SagemakerExperimentTrialComponentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.metadataPropertiesInput">metadata_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties">SagemakerExperimentTrialComponentMetadataProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.statusInput">status_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus">SagemakerExperimentTrialComponentStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags">SagemakerExperimentTrialComponentTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.trialComponentNameInput">trial_component_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.trialComponentName">trial_component_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `lineage_group_arn`<sup>Required</sup> <a name="lineage_group_arn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.lineageGroupArn"></a>

```python
lineage_group_arn: str
```

- *Type:* str

---

##### `metadata_properties`<sup>Required</sup> <a name="metadata_properties" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.metadataProperties"></a>

```python
metadata_properties: SagemakerExperimentTrialComponentMetadataPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference">SagemakerExperimentTrialComponentMetadataPropertiesOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.status"></a>

```python
status: SagemakerExperimentTrialComponentStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference">SagemakerExperimentTrialComponentStatusOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.tags"></a>

```python
tags: SagemakerExperimentTrialComponentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList">SagemakerExperimentTrialComponentTagsList</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `metadata_properties_input`<sup>Optional</sup> <a name="metadata_properties_input" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.metadataPropertiesInput"></a>

```python
metadata_properties_input: IResolvable | SagemakerExperimentTrialComponentMetadataProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties">SagemakerExperimentTrialComponentMetadataProperties</a>

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.statusInput"></a>

```python
status_input: IResolvable | SagemakerExperimentTrialComponentStatus
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus">SagemakerExperimentTrialComponentStatus</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SagemakerExperimentTrialComponentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags">SagemakerExperimentTrialComponentTags</a>]

---

##### `trial_component_name_input`<sup>Optional</sup> <a name="trial_component_name_input" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.trialComponentNameInput"></a>

```python
trial_component_name_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `trial_component_name`<sup>Required</sup> <a name="trial_component_name" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.trialComponentName"></a>

```python
trial_component_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerExperimentTrialComponentConfig <a name="SagemakerExperimentTrialComponentConfig" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_experiment_trial_component

sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  trial_component_name: str,
  display_name: str = None,
  end_time: str = None,
  metadata_properties: SagemakerExperimentTrialComponentMetadataProperties = None,
  start_time: str = None,
  status: SagemakerExperimentTrialComponentStatus = None,
  tags: IResolvable | typing.List[SagemakerExperimentTrialComponentTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.trialComponentName">trial_component_name</a></code> | <code>str</code> | The name of the trial component. The name must be unique in your AWS account and is not case-sensitive. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.displayName">display_name</a></code> | <code>str</code> | The name of the component as displayed. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.endTime">end_time</a></code> | <code>str</code> | When the component ended. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.metadataProperties">metadata_properties</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties">SagemakerExperimentTrialComponentMetadataProperties</a></code> | Metadata properties of the tracking entity, trial, or trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.startTime">start_time</a></code> | <code>str</code> | When the component started. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.status">status</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus">SagemakerExperimentTrialComponentStatus</a></code> | The status of the trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags">SagemakerExperimentTrialComponentTags</a>]</code> | A list of tags to associate with the component. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `trial_component_name`<sup>Required</sup> <a name="trial_component_name" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.trialComponentName"></a>

```python
trial_component_name: str
```

- *Type:* str

The name of the trial component. The name must be unique in your AWS account and is not case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#trial_component_name SagemakerExperimentTrialComponent#trial_component_name}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The name of the component as displayed.

The name doesn't need to be unique. If DisplayName isn't specified, TrialComponentName is displayed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#display_name SagemakerExperimentTrialComponent#display_name}

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

When the component ended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#end_time SagemakerExperimentTrialComponent#end_time}

---

##### `metadata_properties`<sup>Optional</sup> <a name="metadata_properties" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.metadataProperties"></a>

```python
metadata_properties: SagemakerExperimentTrialComponentMetadataProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties">SagemakerExperimentTrialComponentMetadataProperties</a>

Metadata properties of the tracking entity, trial, or trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#metadata_properties SagemakerExperimentTrialComponent#metadata_properties}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

When the component started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#start_time SagemakerExperimentTrialComponent#start_time}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.status"></a>

```python
status: SagemakerExperimentTrialComponentStatus
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus">SagemakerExperimentTrialComponentStatus</a>

The status of the trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#status SagemakerExperimentTrialComponent#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SagemakerExperimentTrialComponentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags">SagemakerExperimentTrialComponentTags</a>]

A list of tags to associate with the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#tags SagemakerExperimentTrialComponent#tags}

---

### SagemakerExperimentTrialComponentMetadataProperties <a name="SagemakerExperimentTrialComponentMetadataProperties" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_experiment_trial_component

sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties(
  commit_id: str = None,
  generated_by: str = None,
  project_id: str = None,
  repository: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.commitId">commit_id</a></code> | <code>str</code> | The commit ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.generatedBy">generated_by</a></code> | <code>str</code> | The entity this entity was generated by. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.projectId">project_id</a></code> | <code>str</code> | The project ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.repository">repository</a></code> | <code>str</code> | The repository. |

---

##### `commit_id`<sup>Optional</sup> <a name="commit_id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.commitId"></a>

```python
commit_id: str
```

- *Type:* str

The commit ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#commit_id SagemakerExperimentTrialComponent#commit_id}

---

##### `generated_by`<sup>Optional</sup> <a name="generated_by" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.generatedBy"></a>

```python
generated_by: str
```

- *Type:* str

The entity this entity was generated by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#generated_by SagemakerExperimentTrialComponent#generated_by}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#project_id SagemakerExperimentTrialComponent#project_id}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties.property.repository"></a>

```python
repository: str
```

- *Type:* str

The repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#repository SagemakerExperimentTrialComponent#repository}

---

### SagemakerExperimentTrialComponentStatus <a name="SagemakerExperimentTrialComponentStatus" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_experiment_trial_component

sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus(
  message: str = None,
  primary_status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus.property.message">message</a></code> | <code>str</code> | If the component failed, a message describing why. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus.property.primaryStatus">primary_status</a></code> | <code>str</code> | The status of the trial component. |

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus.property.message"></a>

```python
message: str
```

- *Type:* str

If the component failed, a message describing why.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#message SagemakerExperimentTrialComponent#message}

---

##### `primary_status`<sup>Optional</sup> <a name="primary_status" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus.property.primaryStatus"></a>

```python
primary_status: str
```

- *Type:* str

The status of the trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#primary_status SagemakerExperimentTrialComponent#primary_status}

---

### SagemakerExperimentTrialComponentTags <a name="SagemakerExperimentTrialComponentTags" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_experiment_trial_component

sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#key SagemakerExperimentTrialComponent#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_experiment_trial_component#value SagemakerExperimentTrialComponent#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerExperimentTrialComponentMetadataPropertiesOutputReference <a name="SagemakerExperimentTrialComponentMetadataPropertiesOutputReference" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_experiment_trial_component

sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetCommitId">reset_commit_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetGeneratedBy">reset_generated_by</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetRepository">reset_repository</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_commit_id` <a name="reset_commit_id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetCommitId"></a>

```python
def reset_commit_id() -> None
```

##### `reset_generated_by` <a name="reset_generated_by" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetGeneratedBy"></a>

```python
def reset_generated_by() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_repository` <a name="reset_repository" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.resetRepository"></a>

```python
def reset_repository() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.commitIdInput">commit_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.generatedByInput">generated_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.commitId">commit_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.generatedBy">generated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties">SagemakerExperimentTrialComponentMetadataProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `commit_id_input`<sup>Optional</sup> <a name="commit_id_input" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.commitIdInput"></a>

```python
commit_id_input: str
```

- *Type:* str

---

##### `generated_by_input`<sup>Optional</sup> <a name="generated_by_input" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.generatedByInput"></a>

```python
generated_by_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `commit_id`<sup>Required</sup> <a name="commit_id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.commitId"></a>

```python
commit_id: str
```

- *Type:* str

---

##### `generated_by`<sup>Required</sup> <a name="generated_by" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.generatedBy"></a>

```python
generated_by: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerExperimentTrialComponentMetadataProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentMetadataProperties">SagemakerExperimentTrialComponentMetadataProperties</a>

---


### SagemakerExperimentTrialComponentStatusOutputReference <a name="SagemakerExperimentTrialComponentStatusOutputReference" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_experiment_trial_component

sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.resetMessage">reset_message</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.resetPrimaryStatus">reset_primary_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_message` <a name="reset_message" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.resetMessage"></a>

```python
def reset_message() -> None
```

##### `reset_primary_status` <a name="reset_primary_status" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.resetPrimaryStatus"></a>

```python
def reset_primary_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.primaryStatusInput">primary_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.primaryStatus">primary_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus">SagemakerExperimentTrialComponentStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `primary_status_input`<sup>Optional</sup> <a name="primary_status_input" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.primaryStatusInput"></a>

```python
primary_status_input: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `primary_status`<sup>Required</sup> <a name="primary_status" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.primaryStatus"></a>

```python
primary_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatusOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerExperimentTrialComponentStatus
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentStatus">SagemakerExperimentTrialComponentStatus</a>

---


### SagemakerExperimentTrialComponentTagsList <a name="SagemakerExperimentTrialComponentTagsList" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_experiment_trial_component

sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerExperimentTrialComponentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags">SagemakerExperimentTrialComponentTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerExperimentTrialComponentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags">SagemakerExperimentTrialComponentTags</a>]

---


### SagemakerExperimentTrialComponentTagsOutputReference <a name="SagemakerExperimentTrialComponentTagsOutputReference" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_experiment_trial_component

sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags">SagemakerExperimentTrialComponentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerExperimentTrialComponentTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerExperimentTrialComponent.SagemakerExperimentTrialComponentTags">SagemakerExperimentTrialComponentTags</a>

---



