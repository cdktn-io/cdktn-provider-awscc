# `evidentlyLaunch` Submodule <a name="`evidentlyLaunch` Submodule" id="@cdktn/provider-awscc.evidentlyLaunch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EvidentlyLaunch <a name="EvidentlyLaunch" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch awscc_evidently_launch}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_launch

evidentlyLaunch.EvidentlyLaunch(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  groups: IResolvable | typing.List[EvidentlyLaunchGroups],
  name: str,
  project: str,
  scheduled_splits_config: IResolvable | typing.List[EvidentlyLaunchScheduledSplitsConfig],
  description: str = None,
  execution_status: EvidentlyLaunchExecutionStatus = None,
  metric_monitors: IResolvable | typing.List[EvidentlyLaunchMetricMonitors] = None,
  randomization_salt: str = None,
  tags: IResolvable | typing.List[EvidentlyLaunchTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.groups">groups</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#groups EvidentlyLaunch#groups}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#name EvidentlyLaunch#name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#project EvidentlyLaunch#project}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.scheduledSplitsConfig">scheduled_splits_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#scheduled_splits_config EvidentlyLaunch#scheduled_splits_config}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#description EvidentlyLaunch#description}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.executionStatus">execution_status</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus">EvidentlyLaunchExecutionStatus</a></code> | Start or Stop Launch Launch. Default is not started. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.metricMonitors">metric_monitors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#metric_monitors EvidentlyLaunch#metric_monitors}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.randomizationSalt">randomization_salt</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#randomization_salt EvidentlyLaunch#randomization_salt}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags">EvidentlyLaunchTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.groups"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#groups EvidentlyLaunch#groups}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#name EvidentlyLaunch#name}.

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#project EvidentlyLaunch#project}.

---

##### `scheduled_splits_config`<sup>Required</sup> <a name="scheduled_splits_config" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.scheduledSplitsConfig"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#scheduled_splits_config EvidentlyLaunch#scheduled_splits_config}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#description EvidentlyLaunch#description}.

---

##### `execution_status`<sup>Optional</sup> <a name="execution_status" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.executionStatus"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus">EvidentlyLaunchExecutionStatus</a>

Start or Stop Launch Launch. Default is not started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#execution_status EvidentlyLaunch#execution_status}

---

##### `metric_monitors`<sup>Optional</sup> <a name="metric_monitors" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.metricMonitors"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#metric_monitors EvidentlyLaunch#metric_monitors}.

---

##### `randomization_salt`<sup>Optional</sup> <a name="randomization_salt" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.randomizationSalt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#randomization_salt EvidentlyLaunch#randomization_salt}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags">EvidentlyLaunchTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#tags EvidentlyLaunch#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putExecutionStatus">put_execution_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putGroups">put_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putMetricMonitors">put_metric_monitors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putScheduledSplitsConfig">put_scheduled_splits_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetExecutionStatus">reset_execution_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetMetricMonitors">reset_metric_monitors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetRandomizationSalt">reset_randomization_salt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_execution_status` <a name="put_execution_status" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putExecutionStatus"></a>

```python
def put_execution_status(
  desired_state: str = None,
  reason: str = None,
  status: str = None
) -> None
```

###### `desired_state`<sup>Optional</sup> <a name="desired_state" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putExecutionStatus.parameter.desiredState"></a>

- *Type:* str

Provide CANCELLED or COMPLETED as the launch desired state. Defaults to Completed if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#desired_state EvidentlyLaunch#desired_state}

---

###### `reason`<sup>Optional</sup> <a name="reason" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putExecutionStatus.parameter.reason"></a>

- *Type:* str

Provide a reason for stopping the launch. Defaults to empty if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#reason EvidentlyLaunch#reason}

---

###### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putExecutionStatus.parameter.status"></a>

- *Type:* str

Provide START or STOP action to apply on a launch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#status EvidentlyLaunch#status}

---

##### `put_groups` <a name="put_groups" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putGroups"></a>

```python
def put_groups(
  value: IResolvable | typing.List[EvidentlyLaunchGroups]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putGroups.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>]

---

##### `put_metric_monitors` <a name="put_metric_monitors" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putMetricMonitors"></a>

```python
def put_metric_monitors(
  value: IResolvable | typing.List[EvidentlyLaunchMetricMonitors]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putMetricMonitors.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>]

---

##### `put_scheduled_splits_config` <a name="put_scheduled_splits_config" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putScheduledSplitsConfig"></a>

```python
def put_scheduled_splits_config(
  value: IResolvable | typing.List[EvidentlyLaunchScheduledSplitsConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putScheduledSplitsConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[EvidentlyLaunchTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags">EvidentlyLaunchTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_execution_status` <a name="reset_execution_status" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetExecutionStatus"></a>

```python
def reset_execution_status() -> None
```

##### `reset_metric_monitors` <a name="reset_metric_monitors" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetMetricMonitors"></a>

```python
def reset_metric_monitors() -> None
```

##### `reset_randomization_salt` <a name="reset_randomization_salt" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetRandomizationSalt"></a>

```python
def reset_randomization_salt() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EvidentlyLaunch resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.isConstruct"></a>

```python
from cdktn_provider_awscc import evidently_launch

evidentlyLaunch.EvidentlyLaunch.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.isTerraformElement"></a>

```python
from cdktn_provider_awscc import evidently_launch

evidentlyLaunch.EvidentlyLaunch.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.isTerraformResource"></a>

```python
from cdktn_provider_awscc import evidently_launch

evidentlyLaunch.EvidentlyLaunch.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import evidently_launch

evidentlyLaunch.EvidentlyLaunch.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EvidentlyLaunch resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EvidentlyLaunch to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EvidentlyLaunch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EvidentlyLaunch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.executionStatus">execution_status</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference">EvidentlyLaunchExecutionStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.groups">groups</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList">EvidentlyLaunchGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.metricMonitors">metric_monitors</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList">EvidentlyLaunchMetricMonitorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfig">scheduled_splits_config</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList">EvidentlyLaunchScheduledSplitsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList">EvidentlyLaunchTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.executionStatusInput">execution_status_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus">EvidentlyLaunchExecutionStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.groupsInput">groups_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.metricMonitorsInput">metric_monitors_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.randomizationSaltInput">randomization_salt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfigInput">scheduled_splits_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags">EvidentlyLaunchTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.randomizationSalt">randomization_salt</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `execution_status`<sup>Required</sup> <a name="execution_status" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.executionStatus"></a>

```python
execution_status: EvidentlyLaunchExecutionStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference">EvidentlyLaunchExecutionStatusOutputReference</a>

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.groups"></a>

```python
groups: EvidentlyLaunchGroupsList
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList">EvidentlyLaunchGroupsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metric_monitors`<sup>Required</sup> <a name="metric_monitors" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.metricMonitors"></a>

```python
metric_monitors: EvidentlyLaunchMetricMonitorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList">EvidentlyLaunchMetricMonitorsList</a>

---

##### `scheduled_splits_config`<sup>Required</sup> <a name="scheduled_splits_config" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfig"></a>

```python
scheduled_splits_config: EvidentlyLaunchScheduledSplitsConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList">EvidentlyLaunchScheduledSplitsConfigList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.tags"></a>

```python
tags: EvidentlyLaunchTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList">EvidentlyLaunchTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `execution_status_input`<sup>Optional</sup> <a name="execution_status_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.executionStatusInput"></a>

```python
execution_status_input: IResolvable | EvidentlyLaunchExecutionStatus
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus">EvidentlyLaunchExecutionStatus</a>

---

##### `groups_input`<sup>Optional</sup> <a name="groups_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.groupsInput"></a>

```python
groups_input: IResolvable | typing.List[EvidentlyLaunchGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>]

---

##### `metric_monitors_input`<sup>Optional</sup> <a name="metric_monitors_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.metricMonitorsInput"></a>

```python
metric_monitors_input: IResolvable | typing.List[EvidentlyLaunchMetricMonitors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `randomization_salt_input`<sup>Optional</sup> <a name="randomization_salt_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.randomizationSaltInput"></a>

```python
randomization_salt_input: str
```

- *Type:* str

---

##### `scheduled_splits_config_input`<sup>Optional</sup> <a name="scheduled_splits_config_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfigInput"></a>

```python
scheduled_splits_config_input: IResolvable | typing.List[EvidentlyLaunchScheduledSplitsConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[EvidentlyLaunchTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags">EvidentlyLaunchTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `randomization_salt`<sup>Required</sup> <a name="randomization_salt" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.randomizationSalt"></a>

```python
randomization_salt: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EvidentlyLaunchConfig <a name="EvidentlyLaunchConfig" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_launch

evidentlyLaunch.EvidentlyLaunchConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  groups: IResolvable | typing.List[EvidentlyLaunchGroups],
  name: str,
  project: str,
  scheduled_splits_config: IResolvable | typing.List[EvidentlyLaunchScheduledSplitsConfig],
  description: str = None,
  execution_status: EvidentlyLaunchExecutionStatus = None,
  metric_monitors: IResolvable | typing.List[EvidentlyLaunchMetricMonitors] = None,
  randomization_salt: str = None,
  tags: IResolvable | typing.List[EvidentlyLaunchTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.groups">groups</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#groups EvidentlyLaunch#groups}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#name EvidentlyLaunch#name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#project EvidentlyLaunch#project}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.scheduledSplitsConfig">scheduled_splits_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#scheduled_splits_config EvidentlyLaunch#scheduled_splits_config}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#description EvidentlyLaunch#description}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.executionStatus">execution_status</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus">EvidentlyLaunchExecutionStatus</a></code> | Start or Stop Launch Launch. Default is not started. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.metricMonitors">metric_monitors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#metric_monitors EvidentlyLaunch#metric_monitors}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.randomizationSalt">randomization_salt</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#randomization_salt EvidentlyLaunch#randomization_salt}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags">EvidentlyLaunchTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.groups"></a>

```python
groups: IResolvable | typing.List[EvidentlyLaunchGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#groups EvidentlyLaunch#groups}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#name EvidentlyLaunch#name}.

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#project EvidentlyLaunch#project}.

---

##### `scheduled_splits_config`<sup>Required</sup> <a name="scheduled_splits_config" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.scheduledSplitsConfig"></a>

```python
scheduled_splits_config: IResolvable | typing.List[EvidentlyLaunchScheduledSplitsConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#scheduled_splits_config EvidentlyLaunch#scheduled_splits_config}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#description EvidentlyLaunch#description}.

---

##### `execution_status`<sup>Optional</sup> <a name="execution_status" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.executionStatus"></a>

```python
execution_status: EvidentlyLaunchExecutionStatus
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus">EvidentlyLaunchExecutionStatus</a>

Start or Stop Launch Launch. Default is not started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#execution_status EvidentlyLaunch#execution_status}

---

##### `metric_monitors`<sup>Optional</sup> <a name="metric_monitors" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.metricMonitors"></a>

```python
metric_monitors: IResolvable | typing.List[EvidentlyLaunchMetricMonitors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#metric_monitors EvidentlyLaunch#metric_monitors}.

---

##### `randomization_salt`<sup>Optional</sup> <a name="randomization_salt" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.randomizationSalt"></a>

```python
randomization_salt: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#randomization_salt EvidentlyLaunch#randomization_salt}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[EvidentlyLaunchTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags">EvidentlyLaunchTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#tags EvidentlyLaunch#tags}

---

### EvidentlyLaunchExecutionStatus <a name="EvidentlyLaunchExecutionStatus" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_launch

evidentlyLaunch.EvidentlyLaunchExecutionStatus(
  desired_state: str = None,
  reason: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus.property.desiredState">desired_state</a></code> | <code>str</code> | Provide CANCELLED or COMPLETED as the launch desired state. Defaults to Completed if not provided. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus.property.reason">reason</a></code> | <code>str</code> | Provide a reason for stopping the launch. Defaults to empty if not provided. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus.property.status">status</a></code> | <code>str</code> | Provide START or STOP action to apply on a launch. |

---

##### `desired_state`<sup>Optional</sup> <a name="desired_state" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

Provide CANCELLED or COMPLETED as the launch desired state. Defaults to Completed if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#desired_state EvidentlyLaunch#desired_state}

---

##### `reason`<sup>Optional</sup> <a name="reason" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus.property.reason"></a>

```python
reason: str
```

- *Type:* str

Provide a reason for stopping the launch. Defaults to empty if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#reason EvidentlyLaunch#reason}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus.property.status"></a>

```python
status: str
```

- *Type:* str

Provide START or STOP action to apply on a launch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#status EvidentlyLaunch#status}

---

### EvidentlyLaunchGroups <a name="EvidentlyLaunchGroups" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_launch

evidentlyLaunch.EvidentlyLaunchGroups(
  feature: str,
  group_name: str,
  variation: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups.property.feature">feature</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#feature EvidentlyLaunch#feature}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups.property.groupName">group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#group_name EvidentlyLaunch#group_name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups.property.variation">variation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#variation EvidentlyLaunch#variation}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#description EvidentlyLaunch#description}. |

---

##### `feature`<sup>Required</sup> <a name="feature" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups.property.feature"></a>

```python
feature: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#feature EvidentlyLaunch#feature}.

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#group_name EvidentlyLaunch#group_name}.

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups.property.variation"></a>

```python
variation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#variation EvidentlyLaunch#variation}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#description EvidentlyLaunch#description}.

---

### EvidentlyLaunchMetricMonitors <a name="EvidentlyLaunchMetricMonitors" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_launch

evidentlyLaunch.EvidentlyLaunchMetricMonitors(
  entity_id_key: str = None,
  event_pattern: str = None,
  metric_name: str = None,
  unit_label: str = None,
  value_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.entityIdKey">entity_id_key</a></code> | <code>str</code> | The JSON path to reference the entity id in the event. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.eventPattern">event_pattern</a></code> | <code>str</code> | Event patterns have the same structure as the events they match. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#metric_name EvidentlyLaunch#metric_name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.unitLabel">unit_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#unit_label EvidentlyLaunch#unit_label}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.valueKey">value_key</a></code> | <code>str</code> | The JSON path to reference the numerical metric value in the event. |

---

##### `entity_id_key`<sup>Optional</sup> <a name="entity_id_key" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.entityIdKey"></a>

```python
entity_id_key: str
```

- *Type:* str

The JSON path to reference the entity id in the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#entity_id_key EvidentlyLaunch#entity_id_key}

---

##### `event_pattern`<sup>Optional</sup> <a name="event_pattern" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.eventPattern"></a>

```python
event_pattern: str
```

- *Type:* str

Event patterns have the same structure as the events they match.

Rules use event patterns to select events. An event pattern either matches an event or it doesn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#event_pattern EvidentlyLaunch#event_pattern}

---

##### `metric_name`<sup>Optional</sup> <a name="metric_name" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#metric_name EvidentlyLaunch#metric_name}.

---

##### `unit_label`<sup>Optional</sup> <a name="unit_label" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.unitLabel"></a>

```python
unit_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#unit_label EvidentlyLaunch#unit_label}.

---

##### `value_key`<sup>Optional</sup> <a name="value_key" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.valueKey"></a>

```python
value_key: str
```

- *Type:* str

The JSON path to reference the numerical metric value in the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#value_key EvidentlyLaunch#value_key}

---

### EvidentlyLaunchScheduledSplitsConfig <a name="EvidentlyLaunchScheduledSplitsConfig" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_launch

evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig(
  group_weights: IResolvable | typing.List[EvidentlyLaunchScheduledSplitsConfigGroupWeights],
  start_time: str,
  segment_overrides: IResolvable | typing.List[EvidentlyLaunchScheduledSplitsConfigSegmentOverrides] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.property.groupWeights">group_weights</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights">EvidentlyLaunchScheduledSplitsConfigGroupWeights</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#group_weights EvidentlyLaunch#group_weights}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.property.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#start_time EvidentlyLaunch#start_time}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.property.segmentOverrides">segment_overrides</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigSegmentOverrides</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#segment_overrides EvidentlyLaunch#segment_overrides}. |

---

##### `group_weights`<sup>Required</sup> <a name="group_weights" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.property.groupWeights"></a>

```python
group_weights: IResolvable | typing.List[EvidentlyLaunchScheduledSplitsConfigGroupWeights]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights">EvidentlyLaunchScheduledSplitsConfigGroupWeights</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#group_weights EvidentlyLaunch#group_weights}.

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#start_time EvidentlyLaunch#start_time}.

---

##### `segment_overrides`<sup>Optional</sup> <a name="segment_overrides" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.property.segmentOverrides"></a>

```python
segment_overrides: IResolvable | typing.List[EvidentlyLaunchScheduledSplitsConfigSegmentOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigSegmentOverrides</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#segment_overrides EvidentlyLaunch#segment_overrides}.

---

### EvidentlyLaunchScheduledSplitsConfigGroupWeights <a name="EvidentlyLaunchScheduledSplitsConfigGroupWeights" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_launch

evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights(
  group_name: str,
  split_weight: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights.property.groupName">group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#group_name EvidentlyLaunch#group_name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights.property.splitWeight">split_weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#split_weight EvidentlyLaunch#split_weight}. |

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#group_name EvidentlyLaunch#group_name}.

---

##### `split_weight`<sup>Required</sup> <a name="split_weight" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights.property.splitWeight"></a>

```python
split_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#split_weight EvidentlyLaunch#split_weight}.

---

### EvidentlyLaunchScheduledSplitsConfigSegmentOverrides <a name="EvidentlyLaunchScheduledSplitsConfigSegmentOverrides" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_launch

evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides(
  evaluation_order: typing.Union[int, float] = None,
  segment: str = None,
  weights: IResolvable | typing.List[EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides.property.evaluationOrder">evaluation_order</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#evaluation_order EvidentlyLaunch#evaluation_order}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides.property.segment">segment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#segment EvidentlyLaunch#segment}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides.property.weights">weights</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights">EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#weights EvidentlyLaunch#weights}. |

---

##### `evaluation_order`<sup>Optional</sup> <a name="evaluation_order" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides.property.evaluationOrder"></a>

```python
evaluation_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#evaluation_order EvidentlyLaunch#evaluation_order}.

---

##### `segment`<sup>Optional</sup> <a name="segment" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides.property.segment"></a>

```python
segment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#segment EvidentlyLaunch#segment}.

---

##### `weights`<sup>Optional</sup> <a name="weights" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides.property.weights"></a>

```python
weights: IResolvable | typing.List[EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights">EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#weights EvidentlyLaunch#weights}.

---

### EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights <a name="EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_launch

evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights(
  group_name: str = None,
  split_weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights.property.groupName">group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#group_name EvidentlyLaunch#group_name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights.property.splitWeight">split_weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#split_weight EvidentlyLaunch#split_weight}. |

---

##### `group_name`<sup>Optional</sup> <a name="group_name" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#group_name EvidentlyLaunch#group_name}.

---

##### `split_weight`<sup>Optional</sup> <a name="split_weight" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights.property.splitWeight"></a>

```python
split_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#split_weight EvidentlyLaunch#split_weight}.

---

### EvidentlyLaunchTags <a name="EvidentlyLaunchTags" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_launch

evidentlyLaunch.EvidentlyLaunchTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#key EvidentlyLaunch#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evidently_launch#value EvidentlyLaunch#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EvidentlyLaunchExecutionStatusOutputReference <a name="EvidentlyLaunchExecutionStatusOutputReference" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_launch

evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.resetDesiredState">reset_desired_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.resetReason">reset_reason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_desired_state` <a name="reset_desired_state" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.resetDesiredState"></a>

```python
def reset_desired_state() -> None
```

##### `reset_reason` <a name="reset_reason" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.resetReason"></a>

```python
def reset_reason() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.desiredStateInput">desired_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.reasonInput">reason_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.desiredState">desired_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus">EvidentlyLaunchExecutionStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `desired_state_input`<sup>Optional</sup> <a name="desired_state_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.desiredStateInput"></a>

```python
desired_state_input: str
```

- *Type:* str

---

##### `reason_input`<sup>Optional</sup> <a name="reason_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.reasonInput"></a>

```python
reason_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `desired_state`<sup>Required</sup> <a name="desired_state" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvidentlyLaunchExecutionStatus
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus">EvidentlyLaunchExecutionStatus</a>

---


### EvidentlyLaunchGroupsList <a name="EvidentlyLaunchGroupsList" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_launch

evidentlyLaunch.EvidentlyLaunchGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EvidentlyLaunchGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EvidentlyLaunchGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>]

---


### EvidentlyLaunchGroupsOutputReference <a name="EvidentlyLaunchGroupsOutputReference" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_launch

evidentlyLaunch.EvidentlyLaunchGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.featureInput">feature_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.groupNameInput">group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variationInput">variation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.feature">feature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variation">variation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `feature_input`<sup>Optional</sup> <a name="feature_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.featureInput"></a>

```python
feature_input: str
```

- *Type:* str

---

##### `group_name_input`<sup>Optional</sup> <a name="group_name_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.groupNameInput"></a>

```python
group_name_input: str
```

- *Type:* str

---

##### `variation_input`<sup>Optional</sup> <a name="variation_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variationInput"></a>

```python
variation_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `feature`<sup>Required</sup> <a name="feature" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.feature"></a>

```python
feature: str
```

- *Type:* str

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variation"></a>

```python
variation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvidentlyLaunchGroups
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups">EvidentlyLaunchGroups</a>

---


### EvidentlyLaunchMetricMonitorsList <a name="EvidentlyLaunchMetricMonitorsList" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_launch

evidentlyLaunch.EvidentlyLaunchMetricMonitorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EvidentlyLaunchMetricMonitorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EvidentlyLaunchMetricMonitors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>]

---


### EvidentlyLaunchMetricMonitorsOutputReference <a name="EvidentlyLaunchMetricMonitorsOutputReference" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_launch

evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resetEntityIdKey">reset_entity_id_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resetEventPattern">reset_event_pattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resetMetricName">reset_metric_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resetUnitLabel">reset_unit_label</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resetValueKey">reset_value_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_entity_id_key` <a name="reset_entity_id_key" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resetEntityIdKey"></a>

```python
def reset_entity_id_key() -> None
```

##### `reset_event_pattern` <a name="reset_event_pattern" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resetEventPattern"></a>

```python
def reset_event_pattern() -> None
```

##### `reset_metric_name` <a name="reset_metric_name" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resetMetricName"></a>

```python
def reset_metric_name() -> None
```

##### `reset_unit_label` <a name="reset_unit_label" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resetUnitLabel"></a>

```python
def reset_unit_label() -> None
```

##### `reset_value_key` <a name="reset_value_key" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resetValueKey"></a>

```python
def reset_value_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.entityIdKeyInput">entity_id_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.eventPatternInput">event_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.unitLabelInput">unit_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.valueKeyInput">value_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.entityIdKey">entity_id_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.eventPattern">event_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.unitLabel">unit_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.valueKey">value_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_id_key_input`<sup>Optional</sup> <a name="entity_id_key_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.entityIdKeyInput"></a>

```python
entity_id_key_input: str
```

- *Type:* str

---

##### `event_pattern_input`<sup>Optional</sup> <a name="event_pattern_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.eventPatternInput"></a>

```python
event_pattern_input: str
```

- *Type:* str

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `unit_label_input`<sup>Optional</sup> <a name="unit_label_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.unitLabelInput"></a>

```python
unit_label_input: str
```

- *Type:* str

---

##### `value_key_input`<sup>Optional</sup> <a name="value_key_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.valueKeyInput"></a>

```python
value_key_input: str
```

- *Type:* str

---

##### `entity_id_key`<sup>Required</sup> <a name="entity_id_key" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.entityIdKey"></a>

```python
entity_id_key: str
```

- *Type:* str

---

##### `event_pattern`<sup>Required</sup> <a name="event_pattern" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.eventPattern"></a>

```python
event_pattern: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `unit_label`<sup>Required</sup> <a name="unit_label" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.unitLabel"></a>

```python
unit_label: str
```

- *Type:* str

---

##### `value_key`<sup>Required</sup> <a name="value_key" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.valueKey"></a>

```python
value_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvidentlyLaunchMetricMonitors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors">EvidentlyLaunchMetricMonitors</a>

---


### EvidentlyLaunchScheduledSplitsConfigGroupWeightsList <a name="EvidentlyLaunchScheduledSplitsConfigGroupWeightsList" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_launch

evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights">EvidentlyLaunchScheduledSplitsConfigGroupWeights</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EvidentlyLaunchScheduledSplitsConfigGroupWeights]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights">EvidentlyLaunchScheduledSplitsConfigGroupWeights</a>]

---


### EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference <a name="EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_launch

evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.groupNameInput">group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.splitWeightInput">split_weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.splitWeight">split_weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights">EvidentlyLaunchScheduledSplitsConfigGroupWeights</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_name_input`<sup>Optional</sup> <a name="group_name_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.groupNameInput"></a>

```python
group_name_input: str
```

- *Type:* str

---

##### `split_weight_input`<sup>Optional</sup> <a name="split_weight_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.splitWeightInput"></a>

```python
split_weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `split_weight`<sup>Required</sup> <a name="split_weight" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.splitWeight"></a>

```python
split_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvidentlyLaunchScheduledSplitsConfigGroupWeights
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights">EvidentlyLaunchScheduledSplitsConfigGroupWeights</a>

---


### EvidentlyLaunchScheduledSplitsConfigList <a name="EvidentlyLaunchScheduledSplitsConfigList" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_launch

evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EvidentlyLaunchScheduledSplitsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EvidentlyLaunchScheduledSplitsConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>]

---


### EvidentlyLaunchScheduledSplitsConfigOutputReference <a name="EvidentlyLaunchScheduledSplitsConfigOutputReference" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_launch

evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putGroupWeights">put_group_weights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putSegmentOverrides">put_segment_overrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.resetSegmentOverrides">reset_segment_overrides</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_group_weights` <a name="put_group_weights" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putGroupWeights"></a>

```python
def put_group_weights(
  value: IResolvable | typing.List[EvidentlyLaunchScheduledSplitsConfigGroupWeights]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putGroupWeights.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights">EvidentlyLaunchScheduledSplitsConfigGroupWeights</a>]

---

##### `put_segment_overrides` <a name="put_segment_overrides" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putSegmentOverrides"></a>

```python
def put_segment_overrides(
  value: IResolvable | typing.List[EvidentlyLaunchScheduledSplitsConfigSegmentOverrides]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putSegmentOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigSegmentOverrides</a>]

---

##### `reset_segment_overrides` <a name="reset_segment_overrides" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.resetSegmentOverrides"></a>

```python
def reset_segment_overrides() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.groupWeights">group_weights</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList">EvidentlyLaunchScheduledSplitsConfigGroupWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.segmentOverrides">segment_overrides</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList">EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.groupWeightsInput">group_weights_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights">EvidentlyLaunchScheduledSplitsConfigGroupWeights</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.segmentOverridesInput">segment_overrides_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigSegmentOverrides</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_weights`<sup>Required</sup> <a name="group_weights" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.groupWeights"></a>

```python
group_weights: EvidentlyLaunchScheduledSplitsConfigGroupWeightsList
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList">EvidentlyLaunchScheduledSplitsConfigGroupWeightsList</a>

---

##### `segment_overrides`<sup>Required</sup> <a name="segment_overrides" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.segmentOverrides"></a>

```python
segment_overrides: EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList">EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList</a>

---

##### `group_weights_input`<sup>Optional</sup> <a name="group_weights_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.groupWeightsInput"></a>

```python
group_weights_input: IResolvable | typing.List[EvidentlyLaunchScheduledSplitsConfigGroupWeights]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights">EvidentlyLaunchScheduledSplitsConfigGroupWeights</a>]

---

##### `segment_overrides_input`<sup>Optional</sup> <a name="segment_overrides_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.segmentOverridesInput"></a>

```python
segment_overrides_input: IResolvable | typing.List[EvidentlyLaunchScheduledSplitsConfigSegmentOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigSegmentOverrides</a>]

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvidentlyLaunchScheduledSplitsConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig">EvidentlyLaunchScheduledSplitsConfig</a>

---


### EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList <a name="EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_launch

evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigSegmentOverrides</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EvidentlyLaunchScheduledSplitsConfigSegmentOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigSegmentOverrides</a>]

---


### EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference <a name="EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_launch

evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.putWeights">put_weights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resetEvaluationOrder">reset_evaluation_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resetSegment">reset_segment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resetWeights">reset_weights</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_weights` <a name="put_weights" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.putWeights"></a>

```python
def put_weights(
  value: IResolvable | typing.List[EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.putWeights.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights">EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights</a>]

---

##### `reset_evaluation_order` <a name="reset_evaluation_order" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resetEvaluationOrder"></a>

```python
def reset_evaluation_order() -> None
```

##### `reset_segment` <a name="reset_segment" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resetSegment"></a>

```python
def reset_segment() -> None
```

##### `reset_weights` <a name="reset_weights" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resetWeights"></a>

```python
def reset_weights() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.weights">weights</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList">EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.evaluationOrderInput">evaluation_order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.segmentInput">segment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.weightsInput">weights_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights">EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.evaluationOrder">evaluation_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.segment">segment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigSegmentOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `weights`<sup>Required</sup> <a name="weights" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.weights"></a>

```python
weights: EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList">EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList</a>

---

##### `evaluation_order_input`<sup>Optional</sup> <a name="evaluation_order_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.evaluationOrderInput"></a>

```python
evaluation_order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segment_input`<sup>Optional</sup> <a name="segment_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.segmentInput"></a>

```python
segment_input: str
```

- *Type:* str

---

##### `weights_input`<sup>Optional</sup> <a name="weights_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.weightsInput"></a>

```python
weights_input: IResolvable | typing.List[EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights">EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights</a>]

---

##### `evaluation_order`<sup>Required</sup> <a name="evaluation_order" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.evaluationOrder"></a>

```python
evaluation_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segment`<sup>Required</sup> <a name="segment" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.segment"></a>

```python
segment: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvidentlyLaunchScheduledSplitsConfigSegmentOverrides
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides">EvidentlyLaunchScheduledSplitsConfigSegmentOverrides</a>

---


### EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList <a name="EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_launch

evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights">EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights">EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights</a>]

---


### EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference <a name="EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_launch

evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.resetGroupName">reset_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.resetSplitWeight">reset_split_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_name` <a name="reset_group_name" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.resetGroupName"></a>

```python
def reset_group_name() -> None
```

##### `reset_split_weight` <a name="reset_split_weight" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.resetSplitWeight"></a>

```python
def reset_split_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.groupNameInput">group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.splitWeightInput">split_weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.splitWeight">split_weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights">EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_name_input`<sup>Optional</sup> <a name="group_name_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.groupNameInput"></a>

```python
group_name_input: str
```

- *Type:* str

---

##### `split_weight_input`<sup>Optional</sup> <a name="split_weight_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.splitWeightInput"></a>

```python
split_weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `split_weight`<sup>Required</sup> <a name="split_weight" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.splitWeight"></a>

```python
split_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights">EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights</a>

---


### EvidentlyLaunchTagsList <a name="EvidentlyLaunchTagsList" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_launch

evidentlyLaunch.EvidentlyLaunchTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EvidentlyLaunchTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags">EvidentlyLaunchTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EvidentlyLaunchTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags">EvidentlyLaunchTags</a>]

---


### EvidentlyLaunchTagsOutputReference <a name="EvidentlyLaunchTagsOutputReference" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_launch

evidentlyLaunch.EvidentlyLaunchTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags">EvidentlyLaunchTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvidentlyLaunchTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags">EvidentlyLaunchTags</a>

---



