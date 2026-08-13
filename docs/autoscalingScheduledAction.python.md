# `autoscalingScheduledAction` Submodule <a name="`autoscalingScheduledAction` Submodule" id="@cdktn/provider-awscc.autoscalingScheduledAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingScheduledAction <a name="AutoscalingScheduledAction" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_scheduled_action awscc_autoscaling_scheduled_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer"></a>

```python
from cdktn_provider_awscc import autoscaling_scheduled_action

autoscalingScheduledAction.AutoscalingScheduledAction(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auto_scaling_group_name: str,
  desired_capacity: typing.Union[int, float] = None,
  end_time: str = None,
  max_size: typing.Union[int, float] = None,
  min_size: typing.Union[int, float] = None,
  recurrence: str = None,
  start_time: str = None,
  time_zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.autoScalingGroupName">auto_scaling_group_name</a></code> | <code>str</code> | The name of the Auto Scaling group. |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.desiredCapacity">desired_capacity</a></code> | <code>typing.Union[int, float]</code> | The desired capacity is the initial capacity of the Auto Scaling group after the scheduled action runs and the capacity it attempts to maintain. |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.endTime">end_time</a></code> | <code>str</code> | The latest scheduled start time to return. If scheduled action names are provided, this parameter is ignored. |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | The minimum size of the Auto Scaling group. |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | The minimum size of the Auto Scaling group. |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.recurrence">recurrence</a></code> | <code>str</code> | The recurring schedule for the action, in Unix cron syntax format. |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.startTime">start_time</a></code> | <code>str</code> | The earliest scheduled start time to return. If scheduled action names are provided, this parameter is ignored. |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | The time zone for the cron expression. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_scaling_group_name`<sup>Required</sup> <a name="auto_scaling_group_name" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.autoScalingGroupName"></a>

- *Type:* str

The name of the Auto Scaling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_scheduled_action#auto_scaling_group_name AutoscalingScheduledAction#auto_scaling_group_name}

---

##### `desired_capacity`<sup>Optional</sup> <a name="desired_capacity" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.desiredCapacity"></a>

- *Type:* typing.Union[int, float]

The desired capacity is the initial capacity of the Auto Scaling group after the scheduled action runs and the capacity it attempts to maintain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_scheduled_action#desired_capacity AutoscalingScheduledAction#desired_capacity}

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.endTime"></a>

- *Type:* str

The latest scheduled start time to return. If scheduled action names are provided, this parameter is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_scheduled_action#end_time AutoscalingScheduledAction#end_time}

---

##### `max_size`<sup>Optional</sup> <a name="max_size" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.maxSize"></a>

- *Type:* typing.Union[int, float]

The minimum size of the Auto Scaling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_scheduled_action#max_size AutoscalingScheduledAction#max_size}

---

##### `min_size`<sup>Optional</sup> <a name="min_size" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.minSize"></a>

- *Type:* typing.Union[int, float]

The minimum size of the Auto Scaling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_scheduled_action#min_size AutoscalingScheduledAction#min_size}

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.recurrence"></a>

- *Type:* str

The recurring schedule for the action, in Unix cron syntax format.

When StartTime and EndTime are specified with Recurrence , they form the boundaries of when the recurring action starts and stops.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_scheduled_action#recurrence AutoscalingScheduledAction#recurrence}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.startTime"></a>

- *Type:* str

The earliest scheduled start time to return. If scheduled action names are provided, this parameter is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_scheduled_action#start_time AutoscalingScheduledAction#start_time}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.Initializer.parameter.timeZone"></a>

- *Type:* str

The time zone for the cron expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_scheduled_action#time_zone AutoscalingScheduledAction#time_zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.resetDesiredCapacity">reset_desired_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.resetMaxSize">reset_max_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.resetMinSize">reset_min_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.resetRecurrence">reset_recurrence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.resetStartTime">reset_start_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_desired_capacity` <a name="reset_desired_capacity" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.resetDesiredCapacity"></a>

```python
def reset_desired_capacity() -> None
```

##### `reset_end_time` <a name="reset_end_time" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_max_size` <a name="reset_max_size" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.resetMaxSize"></a>

```python
def reset_max_size() -> None
```

##### `reset_min_size` <a name="reset_min_size" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.resetMinSize"></a>

```python
def reset_min_size() -> None
```

##### `reset_recurrence` <a name="reset_recurrence" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.resetRecurrence"></a>

```python
def reset_recurrence() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.resetStartTime"></a>

```python
def reset_start_time() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AutoscalingScheduledAction resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.isConstruct"></a>

```python
from cdktn_provider_awscc import autoscaling_scheduled_action

autoscalingScheduledAction.AutoscalingScheduledAction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.isTerraformElement"></a>

```python
from cdktn_provider_awscc import autoscaling_scheduled_action

autoscalingScheduledAction.AutoscalingScheduledAction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.isTerraformResource"></a>

```python
from cdktn_provider_awscc import autoscaling_scheduled_action

autoscalingScheduledAction.AutoscalingScheduledAction.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import autoscaling_scheduled_action

autoscalingScheduledAction.AutoscalingScheduledAction.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AutoscalingScheduledAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AutoscalingScheduledAction to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AutoscalingScheduledAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_scheduled_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AutoscalingScheduledAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.scheduledActionName">scheduled_action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.autoScalingGroupNameInput">auto_scaling_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.desiredCapacityInput">desired_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.maxSizeInput">max_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.minSizeInput">min_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.recurrenceInput">recurrence_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.autoScalingGroupName">auto_scaling_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.desiredCapacity">desired_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.recurrence">recurrence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `scheduled_action_name`<sup>Required</sup> <a name="scheduled_action_name" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.scheduledActionName"></a>

```python
scheduled_action_name: str
```

- *Type:* str

---

##### `auto_scaling_group_name_input`<sup>Optional</sup> <a name="auto_scaling_group_name_input" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.autoScalingGroupNameInput"></a>

```python
auto_scaling_group_name_input: str
```

- *Type:* str

---

##### `desired_capacity_input`<sup>Optional</sup> <a name="desired_capacity_input" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.desiredCapacityInput"></a>

```python
desired_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `max_size_input`<sup>Optional</sup> <a name="max_size_input" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.maxSizeInput"></a>

```python
max_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_size_input`<sup>Optional</sup> <a name="min_size_input" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.minSizeInput"></a>

```python
min_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recurrence_input`<sup>Optional</sup> <a name="recurrence_input" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.recurrenceInput"></a>

```python
recurrence_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `auto_scaling_group_name`<sup>Required</sup> <a name="auto_scaling_group_name" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.autoScalingGroupName"></a>

```python
auto_scaling_group_name: str
```

- *Type:* str

---

##### `desired_capacity`<sup>Required</sup> <a name="desired_capacity" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.desiredCapacity"></a>

```python
desired_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `max_size`<sup>Required</sup> <a name="max_size" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.maxSize"></a>

```python
max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_size`<sup>Required</sup> <a name="min_size" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.minSize"></a>

```python
min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.recurrence"></a>

```python
recurrence: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledAction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingScheduledActionConfig <a name="AutoscalingScheduledActionConfig" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import autoscaling_scheduled_action

autoscalingScheduledAction.AutoscalingScheduledActionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auto_scaling_group_name: str,
  desired_capacity: typing.Union[int, float] = None,
  end_time: str = None,
  max_size: typing.Union[int, float] = None,
  min_size: typing.Union[int, float] = None,
  recurrence: str = None,
  start_time: str = None,
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig.property.autoScalingGroupName">auto_scaling_group_name</a></code> | <code>str</code> | The name of the Auto Scaling group. |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig.property.desiredCapacity">desired_capacity</a></code> | <code>typing.Union[int, float]</code> | The desired capacity is the initial capacity of the Auto Scaling group after the scheduled action runs and the capacity it attempts to maintain. |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig.property.endTime">end_time</a></code> | <code>str</code> | The latest scheduled start time to return. If scheduled action names are provided, this parameter is ignored. |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig.property.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | The minimum size of the Auto Scaling group. |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig.property.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | The minimum size of the Auto Scaling group. |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig.property.recurrence">recurrence</a></code> | <code>str</code> | The recurring schedule for the action, in Unix cron syntax format. |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig.property.startTime">start_time</a></code> | <code>str</code> | The earliest scheduled start time to return. If scheduled action names are provided, this parameter is ignored. |
| <code><a href="#@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig.property.timeZone">time_zone</a></code> | <code>str</code> | The time zone for the cron expression. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_scaling_group_name`<sup>Required</sup> <a name="auto_scaling_group_name" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig.property.autoScalingGroupName"></a>

```python
auto_scaling_group_name: str
```

- *Type:* str

The name of the Auto Scaling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_scheduled_action#auto_scaling_group_name AutoscalingScheduledAction#auto_scaling_group_name}

---

##### `desired_capacity`<sup>Optional</sup> <a name="desired_capacity" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig.property.desiredCapacity"></a>

```python
desired_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The desired capacity is the initial capacity of the Auto Scaling group after the scheduled action runs and the capacity it attempts to maintain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_scheduled_action#desired_capacity AutoscalingScheduledAction#desired_capacity}

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

The latest scheduled start time to return. If scheduled action names are provided, this parameter is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_scheduled_action#end_time AutoscalingScheduledAction#end_time}

---

##### `max_size`<sup>Optional</sup> <a name="max_size" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig.property.maxSize"></a>

```python
max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum size of the Auto Scaling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_scheduled_action#max_size AutoscalingScheduledAction#max_size}

---

##### `min_size`<sup>Optional</sup> <a name="min_size" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig.property.minSize"></a>

```python
min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum size of the Auto Scaling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_scheduled_action#min_size AutoscalingScheduledAction#min_size}

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig.property.recurrence"></a>

```python
recurrence: str
```

- *Type:* str

The recurring schedule for the action, in Unix cron syntax format.

When StartTime and EndTime are specified with Recurrence , they form the boundaries of when the recurring action starts and stops.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_scheduled_action#recurrence AutoscalingScheduledAction#recurrence}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

The earliest scheduled start time to return. If scheduled action names are provided, this parameter is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_scheduled_action#start_time AutoscalingScheduledAction#start_time}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktn/provider-awscc.autoscalingScheduledAction.AutoscalingScheduledActionConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

The time zone for the cron expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_scheduled_action#time_zone AutoscalingScheduledAction#time_zone}

---



