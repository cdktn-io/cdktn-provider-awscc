# `evidentlyExperiment` Submodule <a name="`evidentlyExperiment` Submodule" id="@cdktn/provider-awscc.evidentlyExperiment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EvidentlyExperiment <a name="EvidentlyExperiment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment awscc_evidently_experiment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_experiment

evidentlyExperiment.EvidentlyExperiment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  metric_goals: IResolvable | typing.List[EvidentlyExperimentMetricGoals],
  name: str,
  online_ab_config: EvidentlyExperimentOnlineAbConfig,
  project: str,
  treatments: IResolvable | typing.List[EvidentlyExperimentTreatments],
  description: str = None,
  randomization_salt: str = None,
  remove_segment: bool | IResolvable = None,
  running_status: EvidentlyExperimentRunningStatus = None,
  sampling_rate: typing.Union[int, float] = None,
  segment: str = None,
  tags: IResolvable | typing.List[EvidentlyExperimentTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.metricGoals">metric_goals</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals">EvidentlyExperimentMetricGoals</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#metric_goals EvidentlyExperiment#metric_goals}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#name EvidentlyExperiment#name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.onlineAbConfig">online_ab_config</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig">EvidentlyExperimentOnlineAbConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#online_ab_config EvidentlyExperiment#online_ab_config}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#project EvidentlyExperiment#project}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.treatments">treatments</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments">EvidentlyExperimentTreatments</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#treatments EvidentlyExperiment#treatments}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#description EvidentlyExperiment#description}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.randomizationSalt">randomization_salt</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#randomization_salt EvidentlyExperiment#randomization_salt}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.removeSegment">remove_segment</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#remove_segment EvidentlyExperiment#remove_segment}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.runningStatus">running_status</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus">EvidentlyExperimentRunningStatus</a></code> | Start Experiment. Default is False. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.samplingRate">sampling_rate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#sampling_rate EvidentlyExperiment#sampling_rate}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.segment">segment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#segment EvidentlyExperiment#segment}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags">EvidentlyExperimentTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `metric_goals`<sup>Required</sup> <a name="metric_goals" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.metricGoals"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals">EvidentlyExperimentMetricGoals</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#metric_goals EvidentlyExperiment#metric_goals}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#name EvidentlyExperiment#name}.

---

##### `online_ab_config`<sup>Required</sup> <a name="online_ab_config" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.onlineAbConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig">EvidentlyExperimentOnlineAbConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#online_ab_config EvidentlyExperiment#online_ab_config}.

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#project EvidentlyExperiment#project}.

---

##### `treatments`<sup>Required</sup> <a name="treatments" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.treatments"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments">EvidentlyExperimentTreatments</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#treatments EvidentlyExperiment#treatments}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#description EvidentlyExperiment#description}.

---

##### `randomization_salt`<sup>Optional</sup> <a name="randomization_salt" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.randomizationSalt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#randomization_salt EvidentlyExperiment#randomization_salt}.

---

##### `remove_segment`<sup>Optional</sup> <a name="remove_segment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.removeSegment"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#remove_segment EvidentlyExperiment#remove_segment}.

---

##### `running_status`<sup>Optional</sup> <a name="running_status" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.runningStatus"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus">EvidentlyExperimentRunningStatus</a>

Start Experiment. Default is False.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#running_status EvidentlyExperiment#running_status}

---

##### `sampling_rate`<sup>Optional</sup> <a name="sampling_rate" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.samplingRate"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#sampling_rate EvidentlyExperiment#sampling_rate}.

---

##### `segment`<sup>Optional</sup> <a name="segment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.segment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#segment EvidentlyExperiment#segment}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags">EvidentlyExperimentTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#tags EvidentlyExperiment#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putMetricGoals">put_metric_goals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putOnlineAbConfig">put_online_ab_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putRunningStatus">put_running_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putTreatments">put_treatments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetRandomizationSalt">reset_randomization_salt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetRemoveSegment">reset_remove_segment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetRunningStatus">reset_running_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetSamplingRate">reset_sampling_rate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetSegment">reset_segment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_metric_goals` <a name="put_metric_goals" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putMetricGoals"></a>

```python
def put_metric_goals(
  value: IResolvable | typing.List[EvidentlyExperimentMetricGoals]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putMetricGoals.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals">EvidentlyExperimentMetricGoals</a>]

---

##### `put_online_ab_config` <a name="put_online_ab_config" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putOnlineAbConfig"></a>

```python
def put_online_ab_config(
  control_treatment_name: str = None,
  treatment_weights: IResolvable | typing.List[EvidentlyExperimentOnlineAbConfigTreatmentWeights] = None
) -> None
```

###### `control_treatment_name`<sup>Optional</sup> <a name="control_treatment_name" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putOnlineAbConfig.parameter.controlTreatmentName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#control_treatment_name EvidentlyExperiment#control_treatment_name}.

---

###### `treatment_weights`<sup>Optional</sup> <a name="treatment_weights" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putOnlineAbConfig.parameter.treatmentWeights"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights">EvidentlyExperimentOnlineAbConfigTreatmentWeights</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#treatment_weights EvidentlyExperiment#treatment_weights}.

---

##### `put_running_status` <a name="put_running_status" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putRunningStatus"></a>

```python
def put_running_status(
  analysis_complete_time: str = None,
  desired_state: str = None,
  reason: str = None,
  status: str = None
) -> None
```

###### `analysis_complete_time`<sup>Optional</sup> <a name="analysis_complete_time" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putRunningStatus.parameter.analysisCompleteTime"></a>

- *Type:* str

Provide the analysis Completion time for an experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#analysis_complete_time EvidentlyExperiment#analysis_complete_time}

---

###### `desired_state`<sup>Optional</sup> <a name="desired_state" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putRunningStatus.parameter.desiredState"></a>

- *Type:* str

Provide CANCELLED or COMPLETED desired state when stopping an experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#desired_state EvidentlyExperiment#desired_state}

---

###### `reason`<sup>Optional</sup> <a name="reason" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putRunningStatus.parameter.reason"></a>

- *Type:* str

Reason is a required input for stopping the experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#reason EvidentlyExperiment#reason}

---

###### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putRunningStatus.parameter.status"></a>

- *Type:* str

Provide START or STOP action to apply on an experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#status EvidentlyExperiment#status}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[EvidentlyExperimentTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags">EvidentlyExperimentTags</a>]

---

##### `put_treatments` <a name="put_treatments" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putTreatments"></a>

```python
def put_treatments(
  value: IResolvable | typing.List[EvidentlyExperimentTreatments]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.putTreatments.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments">EvidentlyExperimentTreatments</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_randomization_salt` <a name="reset_randomization_salt" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetRandomizationSalt"></a>

```python
def reset_randomization_salt() -> None
```

##### `reset_remove_segment` <a name="reset_remove_segment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetRemoveSegment"></a>

```python
def reset_remove_segment() -> None
```

##### `reset_running_status` <a name="reset_running_status" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetRunningStatus"></a>

```python
def reset_running_status() -> None
```

##### `reset_sampling_rate` <a name="reset_sampling_rate" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetSamplingRate"></a>

```python
def reset_sampling_rate() -> None
```

##### `reset_segment` <a name="reset_segment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetSegment"></a>

```python
def reset_segment() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EvidentlyExperiment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isConstruct"></a>

```python
from cdktn_provider_awscc import evidently_experiment

evidentlyExperiment.EvidentlyExperiment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import evidently_experiment

evidentlyExperiment.EvidentlyExperiment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isTerraformResource"></a>

```python
from cdktn_provider_awscc import evidently_experiment

evidentlyExperiment.EvidentlyExperiment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import evidently_experiment

evidentlyExperiment.EvidentlyExperiment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EvidentlyExperiment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EvidentlyExperiment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EvidentlyExperiment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EvidentlyExperiment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.metricGoals">metric_goals</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList">EvidentlyExperimentMetricGoalsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.onlineAbConfig">online_ab_config</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference">EvidentlyExperimentOnlineAbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.runningStatus">running_status</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference">EvidentlyExperimentRunningStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList">EvidentlyExperimentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.treatments">treatments</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList">EvidentlyExperimentTreatmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.metricGoalsInput">metric_goals_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals">EvidentlyExperimentMetricGoals</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.onlineAbConfigInput">online_ab_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig">EvidentlyExperimentOnlineAbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.randomizationSaltInput">randomization_salt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.removeSegmentInput">remove_segment_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.runningStatusInput">running_status_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus">EvidentlyExperimentRunningStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.samplingRateInput">sampling_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.segmentInput">segment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags">EvidentlyExperimentTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.treatmentsInput">treatments_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments">EvidentlyExperimentTreatments</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.randomizationSalt">randomization_salt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.removeSegment">remove_segment</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.samplingRate">sampling_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.segment">segment</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metric_goals`<sup>Required</sup> <a name="metric_goals" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.metricGoals"></a>

```python
metric_goals: EvidentlyExperimentMetricGoalsList
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList">EvidentlyExperimentMetricGoalsList</a>

---

##### `online_ab_config`<sup>Required</sup> <a name="online_ab_config" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.onlineAbConfig"></a>

```python
online_ab_config: EvidentlyExperimentOnlineAbConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference">EvidentlyExperimentOnlineAbConfigOutputReference</a>

---

##### `running_status`<sup>Required</sup> <a name="running_status" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.runningStatus"></a>

```python
running_status: EvidentlyExperimentRunningStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference">EvidentlyExperimentRunningStatusOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.tags"></a>

```python
tags: EvidentlyExperimentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList">EvidentlyExperimentTagsList</a>

---

##### `treatments`<sup>Required</sup> <a name="treatments" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.treatments"></a>

```python
treatments: EvidentlyExperimentTreatmentsList
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList">EvidentlyExperimentTreatmentsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `metric_goals_input`<sup>Optional</sup> <a name="metric_goals_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.metricGoalsInput"></a>

```python
metric_goals_input: IResolvable | typing.List[EvidentlyExperimentMetricGoals]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals">EvidentlyExperimentMetricGoals</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `online_ab_config_input`<sup>Optional</sup> <a name="online_ab_config_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.onlineAbConfigInput"></a>

```python
online_ab_config_input: IResolvable | EvidentlyExperimentOnlineAbConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig">EvidentlyExperimentOnlineAbConfig</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `randomization_salt_input`<sup>Optional</sup> <a name="randomization_salt_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.randomizationSaltInput"></a>

```python
randomization_salt_input: str
```

- *Type:* str

---

##### `remove_segment_input`<sup>Optional</sup> <a name="remove_segment_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.removeSegmentInput"></a>

```python
remove_segment_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `running_status_input`<sup>Optional</sup> <a name="running_status_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.runningStatusInput"></a>

```python
running_status_input: IResolvable | EvidentlyExperimentRunningStatus
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus">EvidentlyExperimentRunningStatus</a>

---

##### `sampling_rate_input`<sup>Optional</sup> <a name="sampling_rate_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.samplingRateInput"></a>

```python
sampling_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segment_input`<sup>Optional</sup> <a name="segment_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.segmentInput"></a>

```python
segment_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[EvidentlyExperimentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags">EvidentlyExperimentTags</a>]

---

##### `treatments_input`<sup>Optional</sup> <a name="treatments_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.treatmentsInput"></a>

```python
treatments_input: IResolvable | typing.List[EvidentlyExperimentTreatments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments">EvidentlyExperimentTreatments</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `randomization_salt`<sup>Required</sup> <a name="randomization_salt" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.randomizationSalt"></a>

```python
randomization_salt: str
```

- *Type:* str

---

##### `remove_segment`<sup>Required</sup> <a name="remove_segment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.removeSegment"></a>

```python
remove_segment: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `sampling_rate`<sup>Required</sup> <a name="sampling_rate" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.samplingRate"></a>

```python
sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segment`<sup>Required</sup> <a name="segment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.segment"></a>

```python
segment: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperiment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EvidentlyExperimentConfig <a name="EvidentlyExperimentConfig" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_experiment

evidentlyExperiment.EvidentlyExperimentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  metric_goals: IResolvable | typing.List[EvidentlyExperimentMetricGoals],
  name: str,
  online_ab_config: EvidentlyExperimentOnlineAbConfig,
  project: str,
  treatments: IResolvable | typing.List[EvidentlyExperimentTreatments],
  description: str = None,
  randomization_salt: str = None,
  remove_segment: bool | IResolvable = None,
  running_status: EvidentlyExperimentRunningStatus = None,
  sampling_rate: typing.Union[int, float] = None,
  segment: str = None,
  tags: IResolvable | typing.List[EvidentlyExperimentTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.metricGoals">metric_goals</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals">EvidentlyExperimentMetricGoals</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#metric_goals EvidentlyExperiment#metric_goals}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#name EvidentlyExperiment#name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.onlineAbConfig">online_ab_config</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig">EvidentlyExperimentOnlineAbConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#online_ab_config EvidentlyExperiment#online_ab_config}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#project EvidentlyExperiment#project}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.treatments">treatments</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments">EvidentlyExperimentTreatments</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#treatments EvidentlyExperiment#treatments}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#description EvidentlyExperiment#description}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.randomizationSalt">randomization_salt</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#randomization_salt EvidentlyExperiment#randomization_salt}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.removeSegment">remove_segment</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#remove_segment EvidentlyExperiment#remove_segment}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.runningStatus">running_status</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus">EvidentlyExperimentRunningStatus</a></code> | Start Experiment. Default is False. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.samplingRate">sampling_rate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#sampling_rate EvidentlyExperiment#sampling_rate}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.segment">segment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#segment EvidentlyExperiment#segment}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags">EvidentlyExperimentTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `metric_goals`<sup>Required</sup> <a name="metric_goals" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.metricGoals"></a>

```python
metric_goals: IResolvable | typing.List[EvidentlyExperimentMetricGoals]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals">EvidentlyExperimentMetricGoals</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#metric_goals EvidentlyExperiment#metric_goals}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#name EvidentlyExperiment#name}.

---

##### `online_ab_config`<sup>Required</sup> <a name="online_ab_config" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.onlineAbConfig"></a>

```python
online_ab_config: EvidentlyExperimentOnlineAbConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig">EvidentlyExperimentOnlineAbConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#online_ab_config EvidentlyExperiment#online_ab_config}.

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#project EvidentlyExperiment#project}.

---

##### `treatments`<sup>Required</sup> <a name="treatments" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.treatments"></a>

```python
treatments: IResolvable | typing.List[EvidentlyExperimentTreatments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments">EvidentlyExperimentTreatments</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#treatments EvidentlyExperiment#treatments}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#description EvidentlyExperiment#description}.

---

##### `randomization_salt`<sup>Optional</sup> <a name="randomization_salt" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.randomizationSalt"></a>

```python
randomization_salt: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#randomization_salt EvidentlyExperiment#randomization_salt}.

---

##### `remove_segment`<sup>Optional</sup> <a name="remove_segment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.removeSegment"></a>

```python
remove_segment: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#remove_segment EvidentlyExperiment#remove_segment}.

---

##### `running_status`<sup>Optional</sup> <a name="running_status" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.runningStatus"></a>

```python
running_status: EvidentlyExperimentRunningStatus
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus">EvidentlyExperimentRunningStatus</a>

Start Experiment. Default is False.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#running_status EvidentlyExperiment#running_status}

---

##### `sampling_rate`<sup>Optional</sup> <a name="sampling_rate" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.samplingRate"></a>

```python
sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#sampling_rate EvidentlyExperiment#sampling_rate}.

---

##### `segment`<sup>Optional</sup> <a name="segment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.segment"></a>

```python
segment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#segment EvidentlyExperiment#segment}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[EvidentlyExperimentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags">EvidentlyExperimentTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#tags EvidentlyExperiment#tags}

---

### EvidentlyExperimentMetricGoals <a name="EvidentlyExperimentMetricGoals" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_experiment

evidentlyExperiment.EvidentlyExperimentMetricGoals(
  desired_change: str,
  entity_id_key: str,
  metric_name: str,
  value_key: str,
  event_pattern: str = None,
  unit_label: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.desiredChange">desired_change</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#desired_change EvidentlyExperiment#desired_change}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.entityIdKey">entity_id_key</a></code> | <code>str</code> | The JSON path to reference the entity id in the event. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#metric_name EvidentlyExperiment#metric_name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.valueKey">value_key</a></code> | <code>str</code> | The JSON path to reference the numerical metric value in the event. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.eventPattern">event_pattern</a></code> | <code>str</code> | Event patterns have the same structure as the events they match. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.unitLabel">unit_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#unit_label EvidentlyExperiment#unit_label}. |

---

##### `desired_change`<sup>Required</sup> <a name="desired_change" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.desiredChange"></a>

```python
desired_change: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#desired_change EvidentlyExperiment#desired_change}.

---

##### `entity_id_key`<sup>Required</sup> <a name="entity_id_key" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.entityIdKey"></a>

```python
entity_id_key: str
```

- *Type:* str

The JSON path to reference the entity id in the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#entity_id_key EvidentlyExperiment#entity_id_key}

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#metric_name EvidentlyExperiment#metric_name}.

---

##### `value_key`<sup>Required</sup> <a name="value_key" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.valueKey"></a>

```python
value_key: str
```

- *Type:* str

The JSON path to reference the numerical metric value in the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#value_key EvidentlyExperiment#value_key}

---

##### `event_pattern`<sup>Optional</sup> <a name="event_pattern" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.eventPattern"></a>

```python
event_pattern: str
```

- *Type:* str

Event patterns have the same structure as the events they match.

Rules use event patterns to select events. An event pattern either matches an event or it doesn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#event_pattern EvidentlyExperiment#event_pattern}

---

##### `unit_label`<sup>Optional</sup> <a name="unit_label" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals.property.unitLabel"></a>

```python
unit_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#unit_label EvidentlyExperiment#unit_label}.

---

### EvidentlyExperimentOnlineAbConfig <a name="EvidentlyExperimentOnlineAbConfig" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_experiment

evidentlyExperiment.EvidentlyExperimentOnlineAbConfig(
  control_treatment_name: str = None,
  treatment_weights: IResolvable | typing.List[EvidentlyExperimentOnlineAbConfigTreatmentWeights] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig.property.controlTreatmentName">control_treatment_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#control_treatment_name EvidentlyExperiment#control_treatment_name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig.property.treatmentWeights">treatment_weights</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights">EvidentlyExperimentOnlineAbConfigTreatmentWeights</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#treatment_weights EvidentlyExperiment#treatment_weights}. |

---

##### `control_treatment_name`<sup>Optional</sup> <a name="control_treatment_name" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig.property.controlTreatmentName"></a>

```python
control_treatment_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#control_treatment_name EvidentlyExperiment#control_treatment_name}.

---

##### `treatment_weights`<sup>Optional</sup> <a name="treatment_weights" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig.property.treatmentWeights"></a>

```python
treatment_weights: IResolvable | typing.List[EvidentlyExperimentOnlineAbConfigTreatmentWeights]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights">EvidentlyExperimentOnlineAbConfigTreatmentWeights</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#treatment_weights EvidentlyExperiment#treatment_weights}.

---

### EvidentlyExperimentOnlineAbConfigTreatmentWeights <a name="EvidentlyExperimentOnlineAbConfigTreatmentWeights" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_experiment

evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights(
  split_weight: typing.Union[int, float] = None,
  treatment: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights.property.splitWeight">split_weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#split_weight EvidentlyExperiment#split_weight}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights.property.treatment">treatment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#treatment EvidentlyExperiment#treatment}. |

---

##### `split_weight`<sup>Optional</sup> <a name="split_weight" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights.property.splitWeight"></a>

```python
split_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#split_weight EvidentlyExperiment#split_weight}.

---

##### `treatment`<sup>Optional</sup> <a name="treatment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights.property.treatment"></a>

```python
treatment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#treatment EvidentlyExperiment#treatment}.

---

### EvidentlyExperimentRunningStatus <a name="EvidentlyExperimentRunningStatus" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_experiment

evidentlyExperiment.EvidentlyExperimentRunningStatus(
  analysis_complete_time: str = None,
  desired_state: str = None,
  reason: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.analysisCompleteTime">analysis_complete_time</a></code> | <code>str</code> | Provide the analysis Completion time for an experiment. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.desiredState">desired_state</a></code> | <code>str</code> | Provide CANCELLED or COMPLETED desired state when stopping an experiment. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.reason">reason</a></code> | <code>str</code> | Reason is a required input for stopping the experiment. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.status">status</a></code> | <code>str</code> | Provide START or STOP action to apply on an experiment. |

---

##### `analysis_complete_time`<sup>Optional</sup> <a name="analysis_complete_time" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.analysisCompleteTime"></a>

```python
analysis_complete_time: str
```

- *Type:* str

Provide the analysis Completion time for an experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#analysis_complete_time EvidentlyExperiment#analysis_complete_time}

---

##### `desired_state`<sup>Optional</sup> <a name="desired_state" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

Provide CANCELLED or COMPLETED desired state when stopping an experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#desired_state EvidentlyExperiment#desired_state}

---

##### `reason`<sup>Optional</sup> <a name="reason" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.reason"></a>

```python
reason: str
```

- *Type:* str

Reason is a required input for stopping the experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#reason EvidentlyExperiment#reason}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus.property.status"></a>

```python
status: str
```

- *Type:* str

Provide START or STOP action to apply on an experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#status EvidentlyExperiment#status}

---

### EvidentlyExperimentTags <a name="EvidentlyExperimentTags" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_experiment

evidentlyExperiment.EvidentlyExperimentTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#key EvidentlyExperiment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#value EvidentlyExperiment#value}

---

### EvidentlyExperimentTreatments <a name="EvidentlyExperimentTreatments" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_experiment

evidentlyExperiment.EvidentlyExperimentTreatments(
  feature: str,
  treatment_name: str,
  variation: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.feature">feature</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#feature EvidentlyExperiment#feature}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.treatmentName">treatment_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#treatment_name EvidentlyExperiment#treatment_name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.variation">variation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#variation EvidentlyExperiment#variation}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#description EvidentlyExperiment#description}. |

---

##### `feature`<sup>Required</sup> <a name="feature" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.feature"></a>

```python
feature: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#feature EvidentlyExperiment#feature}.

---

##### `treatment_name`<sup>Required</sup> <a name="treatment_name" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.treatmentName"></a>

```python
treatment_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#treatment_name EvidentlyExperiment#treatment_name}.

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.variation"></a>

```python
variation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#variation EvidentlyExperiment#variation}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_experiment#description EvidentlyExperiment#description}.

---

## Classes <a name="Classes" id="Classes"></a>

### EvidentlyExperimentMetricGoalsList <a name="EvidentlyExperimentMetricGoalsList" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_experiment

evidentlyExperiment.EvidentlyExperimentMetricGoalsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EvidentlyExperimentMetricGoalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals">EvidentlyExperimentMetricGoals</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EvidentlyExperimentMetricGoals]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals">EvidentlyExperimentMetricGoals</a>]

---


### EvidentlyExperimentMetricGoalsOutputReference <a name="EvidentlyExperimentMetricGoalsOutputReference" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_experiment

evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.resetEventPattern">reset_event_pattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.resetUnitLabel">reset_unit_label</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_event_pattern` <a name="reset_event_pattern" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.resetEventPattern"></a>

```python
def reset_event_pattern() -> None
```

##### `reset_unit_label` <a name="reset_unit_label" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.resetUnitLabel"></a>

```python
def reset_unit_label() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.desiredChangeInput">desired_change_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.entityIdKeyInput">entity_id_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.eventPatternInput">event_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.unitLabelInput">unit_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.valueKeyInput">value_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.desiredChange">desired_change</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.entityIdKey">entity_id_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.eventPattern">event_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.unitLabel">unit_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.valueKey">value_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals">EvidentlyExperimentMetricGoals</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `desired_change_input`<sup>Optional</sup> <a name="desired_change_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.desiredChangeInput"></a>

```python
desired_change_input: str
```

- *Type:* str

---

##### `entity_id_key_input`<sup>Optional</sup> <a name="entity_id_key_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.entityIdKeyInput"></a>

```python
entity_id_key_input: str
```

- *Type:* str

---

##### `event_pattern_input`<sup>Optional</sup> <a name="event_pattern_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.eventPatternInput"></a>

```python
event_pattern_input: str
```

- *Type:* str

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `unit_label_input`<sup>Optional</sup> <a name="unit_label_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.unitLabelInput"></a>

```python
unit_label_input: str
```

- *Type:* str

---

##### `value_key_input`<sup>Optional</sup> <a name="value_key_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.valueKeyInput"></a>

```python
value_key_input: str
```

- *Type:* str

---

##### `desired_change`<sup>Required</sup> <a name="desired_change" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.desiredChange"></a>

```python
desired_change: str
```

- *Type:* str

---

##### `entity_id_key`<sup>Required</sup> <a name="entity_id_key" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.entityIdKey"></a>

```python
entity_id_key: str
```

- *Type:* str

---

##### `event_pattern`<sup>Required</sup> <a name="event_pattern" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.eventPattern"></a>

```python
event_pattern: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `unit_label`<sup>Required</sup> <a name="unit_label" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.unitLabel"></a>

```python
unit_label: str
```

- *Type:* str

---

##### `value_key`<sup>Required</sup> <a name="value_key" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.valueKey"></a>

```python
value_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoalsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvidentlyExperimentMetricGoals
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentMetricGoals">EvidentlyExperimentMetricGoals</a>

---


### EvidentlyExperimentOnlineAbConfigOutputReference <a name="EvidentlyExperimentOnlineAbConfigOutputReference" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_experiment

evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.putTreatmentWeights">put_treatment_weights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.resetControlTreatmentName">reset_control_treatment_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.resetTreatmentWeights">reset_treatment_weights</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_treatment_weights` <a name="put_treatment_weights" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.putTreatmentWeights"></a>

```python
def put_treatment_weights(
  value: IResolvable | typing.List[EvidentlyExperimentOnlineAbConfigTreatmentWeights]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.putTreatmentWeights.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights">EvidentlyExperimentOnlineAbConfigTreatmentWeights</a>]

---

##### `reset_control_treatment_name` <a name="reset_control_treatment_name" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.resetControlTreatmentName"></a>

```python
def reset_control_treatment_name() -> None
```

##### `reset_treatment_weights` <a name="reset_treatment_weights" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.resetTreatmentWeights"></a>

```python
def reset_treatment_weights() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.treatmentWeights">treatment_weights</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList">EvidentlyExperimentOnlineAbConfigTreatmentWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.controlTreatmentNameInput">control_treatment_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.treatmentWeightsInput">treatment_weights_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights">EvidentlyExperimentOnlineAbConfigTreatmentWeights</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.controlTreatmentName">control_treatment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig">EvidentlyExperimentOnlineAbConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `treatment_weights`<sup>Required</sup> <a name="treatment_weights" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.treatmentWeights"></a>

```python
treatment_weights: EvidentlyExperimentOnlineAbConfigTreatmentWeightsList
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList">EvidentlyExperimentOnlineAbConfigTreatmentWeightsList</a>

---

##### `control_treatment_name_input`<sup>Optional</sup> <a name="control_treatment_name_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.controlTreatmentNameInput"></a>

```python
control_treatment_name_input: str
```

- *Type:* str

---

##### `treatment_weights_input`<sup>Optional</sup> <a name="treatment_weights_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.treatmentWeightsInput"></a>

```python
treatment_weights_input: IResolvable | typing.List[EvidentlyExperimentOnlineAbConfigTreatmentWeights]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights">EvidentlyExperimentOnlineAbConfigTreatmentWeights</a>]

---

##### `control_treatment_name`<sup>Required</sup> <a name="control_treatment_name" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.controlTreatmentName"></a>

```python
control_treatment_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvidentlyExperimentOnlineAbConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfig">EvidentlyExperimentOnlineAbConfig</a>

---


### EvidentlyExperimentOnlineAbConfigTreatmentWeightsList <a name="EvidentlyExperimentOnlineAbConfigTreatmentWeightsList" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_experiment

evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights">EvidentlyExperimentOnlineAbConfigTreatmentWeights</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EvidentlyExperimentOnlineAbConfigTreatmentWeights]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights">EvidentlyExperimentOnlineAbConfigTreatmentWeights</a>]

---


### EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference <a name="EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_experiment

evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.resetSplitWeight">reset_split_weight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.resetTreatment">reset_treatment</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_split_weight` <a name="reset_split_weight" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.resetSplitWeight"></a>

```python
def reset_split_weight() -> None
```

##### `reset_treatment` <a name="reset_treatment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.resetTreatment"></a>

```python
def reset_treatment() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.splitWeightInput">split_weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.treatmentInput">treatment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.splitWeight">split_weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.treatment">treatment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights">EvidentlyExperimentOnlineAbConfigTreatmentWeights</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `split_weight_input`<sup>Optional</sup> <a name="split_weight_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.splitWeightInput"></a>

```python
split_weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `treatment_input`<sup>Optional</sup> <a name="treatment_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.treatmentInput"></a>

```python
treatment_input: str
```

- *Type:* str

---

##### `split_weight`<sup>Required</sup> <a name="split_weight" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.splitWeight"></a>

```python
split_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `treatment`<sup>Required</sup> <a name="treatment" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.treatment"></a>

```python
treatment: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeightsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvidentlyExperimentOnlineAbConfigTreatmentWeights
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentOnlineAbConfigTreatmentWeights">EvidentlyExperimentOnlineAbConfigTreatmentWeights</a>

---


### EvidentlyExperimentRunningStatusOutputReference <a name="EvidentlyExperimentRunningStatusOutputReference" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_experiment

evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetAnalysisCompleteTime">reset_analysis_complete_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetDesiredState">reset_desired_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetReason">reset_reason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_analysis_complete_time` <a name="reset_analysis_complete_time" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetAnalysisCompleteTime"></a>

```python
def reset_analysis_complete_time() -> None
```

##### `reset_desired_state` <a name="reset_desired_state" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetDesiredState"></a>

```python
def reset_desired_state() -> None
```

##### `reset_reason` <a name="reset_reason" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetReason"></a>

```python
def reset_reason() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.analysisCompleteTimeInput">analysis_complete_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.desiredStateInput">desired_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.reasonInput">reason_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.analysisCompleteTime">analysis_complete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.desiredState">desired_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus">EvidentlyExperimentRunningStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `analysis_complete_time_input`<sup>Optional</sup> <a name="analysis_complete_time_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.analysisCompleteTimeInput"></a>

```python
analysis_complete_time_input: str
```

- *Type:* str

---

##### `desired_state_input`<sup>Optional</sup> <a name="desired_state_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.desiredStateInput"></a>

```python
desired_state_input: str
```

- *Type:* str

---

##### `reason_input`<sup>Optional</sup> <a name="reason_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.reasonInput"></a>

```python
reason_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `analysis_complete_time`<sup>Required</sup> <a name="analysis_complete_time" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.analysisCompleteTime"></a>

```python
analysis_complete_time: str
```

- *Type:* str

---

##### `desired_state`<sup>Required</sup> <a name="desired_state" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatusOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvidentlyExperimentRunningStatus
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentRunningStatus">EvidentlyExperimentRunningStatus</a>

---


### EvidentlyExperimentTagsList <a name="EvidentlyExperimentTagsList" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_experiment

evidentlyExperiment.EvidentlyExperimentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EvidentlyExperimentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags">EvidentlyExperimentTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EvidentlyExperimentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags">EvidentlyExperimentTags</a>]

---


### EvidentlyExperimentTagsOutputReference <a name="EvidentlyExperimentTagsOutputReference" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_experiment

evidentlyExperiment.EvidentlyExperimentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags">EvidentlyExperimentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvidentlyExperimentTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTags">EvidentlyExperimentTags</a>

---


### EvidentlyExperimentTreatmentsList <a name="EvidentlyExperimentTreatmentsList" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_experiment

evidentlyExperiment.EvidentlyExperimentTreatmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EvidentlyExperimentTreatmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments">EvidentlyExperimentTreatments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EvidentlyExperimentTreatments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments">EvidentlyExperimentTreatments</a>]

---


### EvidentlyExperimentTreatmentsOutputReference <a name="EvidentlyExperimentTreatmentsOutputReference" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_experiment

evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.featureInput">feature_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.treatmentNameInput">treatment_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.variationInput">variation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.feature">feature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.treatmentName">treatment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.variation">variation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments">EvidentlyExperimentTreatments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `feature_input`<sup>Optional</sup> <a name="feature_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.featureInput"></a>

```python
feature_input: str
```

- *Type:* str

---

##### `treatment_name_input`<sup>Optional</sup> <a name="treatment_name_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.treatmentNameInput"></a>

```python
treatment_name_input: str
```

- *Type:* str

---

##### `variation_input`<sup>Optional</sup> <a name="variation_input" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.variationInput"></a>

```python
variation_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `feature`<sup>Required</sup> <a name="feature" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.feature"></a>

```python
feature: str
```

- *Type:* str

---

##### `treatment_name`<sup>Required</sup> <a name="treatment_name" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.treatmentName"></a>

```python
treatment_name: str
```

- *Type:* str

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.variation"></a>

```python
variation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatmentsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvidentlyExperimentTreatments
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyExperiment.EvidentlyExperimentTreatments">EvidentlyExperimentTreatments</a>

---



