# `cloudwatchCompositeAlarm` Submodule <a name="`cloudwatchCompositeAlarm` Submodule" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchCompositeAlarm <a name="CloudwatchCompositeAlarm" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_composite_alarm awscc_cloudwatch_composite_alarm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_composite_alarm

cloudwatchCompositeAlarm.CloudwatchCompositeAlarm(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  alarm_rule: str,
  actions_enabled: bool | IResolvable = None,
  actions_suppressor: str = None,
  actions_suppressor_extension_period: typing.Union[int, float] = None,
  actions_suppressor_wait_period: typing.Union[int, float] = None,
  alarm_actions: typing.List[str] = None,
  alarm_description: str = None,
  alarm_name: str = None,
  insufficient_data_actions: typing.List[str] = None,
  ok_actions: typing.List[str] = None,
  tags: IResolvable | typing.List[CloudwatchCompositeAlarmTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.alarmRule">alarm_rule</a></code> | <code>str</code> | Expression which aggregates the state of other Alarms (Metric or Composite Alarms). |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.actionsEnabled">actions_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.actionsSuppressor">actions_suppressor</a></code> | <code>str</code> | Actions will be suppressed if the suppressor alarm is in the ALARM state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.actionsSuppressorExtensionPeriod">actions_suppressor_extension_period</a></code> | <code>typing.Union[int, float]</code> | Actions will be suppressed if WaitPeriod is active. The length of time that actions are suppressed is in seconds. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.actionsSuppressorWaitPeriod">actions_suppressor_wait_period</a></code> | <code>typing.Union[int, float]</code> | Actions will be suppressed if ExtensionPeriod is active. The length of time that actions are suppressed is in seconds. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.alarmActions">alarm_actions</a></code> | <code>typing.List[str]</code> | The list of actions to execute when this alarm transitions into an ALARM state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.alarmDescription">alarm_description</a></code> | <code>str</code> | The description of the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.alarmName">alarm_name</a></code> | <code>str</code> | The name of the Composite Alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.insufficientDataActions">insufficient_data_actions</a></code> | <code>typing.List[str]</code> | The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.okActions">ok_actions</a></code> | <code>typing.List[str]</code> | The actions to execute when this alarm transitions to the OK state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags">CloudwatchCompositeAlarmTags</a>]</code> | A list of key-value pairs to associate with the composite alarm. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alarm_rule`<sup>Required</sup> <a name="alarm_rule" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.alarmRule"></a>

- *Type:* str

Expression which aggregates the state of other Alarms (Metric or Composite Alarms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_composite_alarm#alarm_rule CloudwatchCompositeAlarm#alarm_rule}

---

##### `actions_enabled`<sup>Optional</sup> <a name="actions_enabled" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.actionsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_composite_alarm#actions_enabled CloudwatchCompositeAlarm#actions_enabled}

---

##### `actions_suppressor`<sup>Optional</sup> <a name="actions_suppressor" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.actionsSuppressor"></a>

- *Type:* str

Actions will be suppressed if the suppressor alarm is in the ALARM state.

ActionsSuppressor can be an AlarmName or an Amazon Resource Name (ARN) from an existing alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_composite_alarm#actions_suppressor CloudwatchCompositeAlarm#actions_suppressor}

---

##### `actions_suppressor_extension_period`<sup>Optional</sup> <a name="actions_suppressor_extension_period" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.actionsSuppressorExtensionPeriod"></a>

- *Type:* typing.Union[int, float]

Actions will be suppressed if WaitPeriod is active. The length of time that actions are suppressed is in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_composite_alarm#actions_suppressor_extension_period CloudwatchCompositeAlarm#actions_suppressor_extension_period}

---

##### `actions_suppressor_wait_period`<sup>Optional</sup> <a name="actions_suppressor_wait_period" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.actionsSuppressorWaitPeriod"></a>

- *Type:* typing.Union[int, float]

Actions will be suppressed if ExtensionPeriod is active. The length of time that actions are suppressed is in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_composite_alarm#actions_suppressor_wait_period CloudwatchCompositeAlarm#actions_suppressor_wait_period}

---

##### `alarm_actions`<sup>Optional</sup> <a name="alarm_actions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.alarmActions"></a>

- *Type:* typing.List[str]

The list of actions to execute when this alarm transitions into an ALARM state from any other state.

Specify each action as an Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_composite_alarm#alarm_actions CloudwatchCompositeAlarm#alarm_actions}

---

##### `alarm_description`<sup>Optional</sup> <a name="alarm_description" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.alarmDescription"></a>

- *Type:* str

The description of the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_composite_alarm#alarm_description CloudwatchCompositeAlarm#alarm_description}

---

##### `alarm_name`<sup>Optional</sup> <a name="alarm_name" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.alarmName"></a>

- *Type:* str

The name of the Composite Alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_composite_alarm#alarm_name CloudwatchCompositeAlarm#alarm_name}

---

##### `insufficient_data_actions`<sup>Optional</sup> <a name="insufficient_data_actions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.insufficientDataActions"></a>

- *Type:* typing.List[str]

The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state.

Each action is specified as an Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_composite_alarm#insufficient_data_actions CloudwatchCompositeAlarm#insufficient_data_actions}

---

##### `ok_actions`<sup>Optional</sup> <a name="ok_actions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.okActions"></a>

- *Type:* typing.List[str]

The actions to execute when this alarm transitions to the OK state from any other state.

Each action is specified as an Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_composite_alarm#ok_actions CloudwatchCompositeAlarm#ok_actions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags">CloudwatchCompositeAlarmTags</a>]

A list of key-value pairs to associate with the composite alarm.

You can associate as many as 50 tags with an alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_composite_alarm#tags CloudwatchCompositeAlarm#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetActionsEnabled">reset_actions_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetActionsSuppressor">reset_actions_suppressor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetActionsSuppressorExtensionPeriod">reset_actions_suppressor_extension_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetActionsSuppressorWaitPeriod">reset_actions_suppressor_wait_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetAlarmActions">reset_alarm_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetAlarmDescription">reset_alarm_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetAlarmName">reset_alarm_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetInsufficientDataActions">reset_insufficient_data_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetOkActions">reset_ok_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CloudwatchCompositeAlarmTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags">CloudwatchCompositeAlarmTags</a>]

---

##### `reset_actions_enabled` <a name="reset_actions_enabled" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetActionsEnabled"></a>

```python
def reset_actions_enabled() -> None
```

##### `reset_actions_suppressor` <a name="reset_actions_suppressor" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetActionsSuppressor"></a>

```python
def reset_actions_suppressor() -> None
```

##### `reset_actions_suppressor_extension_period` <a name="reset_actions_suppressor_extension_period" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetActionsSuppressorExtensionPeriod"></a>

```python
def reset_actions_suppressor_extension_period() -> None
```

##### `reset_actions_suppressor_wait_period` <a name="reset_actions_suppressor_wait_period" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetActionsSuppressorWaitPeriod"></a>

```python
def reset_actions_suppressor_wait_period() -> None
```

##### `reset_alarm_actions` <a name="reset_alarm_actions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetAlarmActions"></a>

```python
def reset_alarm_actions() -> None
```

##### `reset_alarm_description` <a name="reset_alarm_description" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetAlarmDescription"></a>

```python
def reset_alarm_description() -> None
```

##### `reset_alarm_name` <a name="reset_alarm_name" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetAlarmName"></a>

```python
def reset_alarm_name() -> None
```

##### `reset_insufficient_data_actions` <a name="reset_insufficient_data_actions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetInsufficientDataActions"></a>

```python
def reset_insufficient_data_actions() -> None
```

##### `reset_ok_actions` <a name="reset_ok_actions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetOkActions"></a>

```python
def reset_ok_actions() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudwatchCompositeAlarm resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isConstruct"></a>

```python
from cdktn_provider_awscc import cloudwatch_composite_alarm

cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cloudwatch_composite_alarm

cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cloudwatch_composite_alarm

cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cloudwatch_composite_alarm

cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudwatchCompositeAlarm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudwatchCompositeAlarm to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudwatchCompositeAlarm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_composite_alarm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchCompositeAlarm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList">CloudwatchCompositeAlarmTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsEnabledInput">actions_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorExtensionPeriodInput">actions_suppressor_extension_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorInput">actions_suppressor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorWaitPeriodInput">actions_suppressor_wait_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmActionsInput">alarm_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmDescriptionInput">alarm_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmNameInput">alarm_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmRuleInput">alarm_rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.insufficientDataActionsInput">insufficient_data_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.okActionsInput">ok_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags">CloudwatchCompositeAlarmTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsEnabled">actions_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressor">actions_suppressor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorExtensionPeriod">actions_suppressor_extension_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorWaitPeriod">actions_suppressor_wait_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmActions">alarm_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmDescription">alarm_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmName">alarm_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmRule">alarm_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.insufficientDataActions">insufficient_data_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.okActions">ok_actions</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tags"></a>

```python
tags: CloudwatchCompositeAlarmTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList">CloudwatchCompositeAlarmTagsList</a>

---

##### `actions_enabled_input`<sup>Optional</sup> <a name="actions_enabled_input" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsEnabledInput"></a>

```python
actions_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `actions_suppressor_extension_period_input`<sup>Optional</sup> <a name="actions_suppressor_extension_period_input" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorExtensionPeriodInput"></a>

```python
actions_suppressor_extension_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `actions_suppressor_input`<sup>Optional</sup> <a name="actions_suppressor_input" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorInput"></a>

```python
actions_suppressor_input: str
```

- *Type:* str

---

##### `actions_suppressor_wait_period_input`<sup>Optional</sup> <a name="actions_suppressor_wait_period_input" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorWaitPeriodInput"></a>

```python
actions_suppressor_wait_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `alarm_actions_input`<sup>Optional</sup> <a name="alarm_actions_input" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmActionsInput"></a>

```python
alarm_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alarm_description_input`<sup>Optional</sup> <a name="alarm_description_input" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmDescriptionInput"></a>

```python
alarm_description_input: str
```

- *Type:* str

---

##### `alarm_name_input`<sup>Optional</sup> <a name="alarm_name_input" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmNameInput"></a>

```python
alarm_name_input: str
```

- *Type:* str

---

##### `alarm_rule_input`<sup>Optional</sup> <a name="alarm_rule_input" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmRuleInput"></a>

```python
alarm_rule_input: str
```

- *Type:* str

---

##### `insufficient_data_actions_input`<sup>Optional</sup> <a name="insufficient_data_actions_input" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.insufficientDataActionsInput"></a>

```python
insufficient_data_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ok_actions_input`<sup>Optional</sup> <a name="ok_actions_input" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.okActionsInput"></a>

```python
ok_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CloudwatchCompositeAlarmTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags">CloudwatchCompositeAlarmTags</a>]

---

##### `actions_enabled`<sup>Required</sup> <a name="actions_enabled" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsEnabled"></a>

```python
actions_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `actions_suppressor`<sup>Required</sup> <a name="actions_suppressor" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressor"></a>

```python
actions_suppressor: str
```

- *Type:* str

---

##### `actions_suppressor_extension_period`<sup>Required</sup> <a name="actions_suppressor_extension_period" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorExtensionPeriod"></a>

```python
actions_suppressor_extension_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `actions_suppressor_wait_period`<sup>Required</sup> <a name="actions_suppressor_wait_period" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorWaitPeriod"></a>

```python
actions_suppressor_wait_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `alarm_actions`<sup>Required</sup> <a name="alarm_actions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmActions"></a>

```python
alarm_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alarm_description`<sup>Required</sup> <a name="alarm_description" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmDescription"></a>

```python
alarm_description: str
```

- *Type:* str

---

##### `alarm_name`<sup>Required</sup> <a name="alarm_name" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmName"></a>

```python
alarm_name: str
```

- *Type:* str

---

##### `alarm_rule`<sup>Required</sup> <a name="alarm_rule" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmRule"></a>

```python
alarm_rule: str
```

- *Type:* str

---

##### `insufficient_data_actions`<sup>Required</sup> <a name="insufficient_data_actions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.insufficientDataActions"></a>

```python
insufficient_data_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ok_actions`<sup>Required</sup> <a name="ok_actions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.okActions"></a>

```python
ok_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchCompositeAlarmConfig <a name="CloudwatchCompositeAlarmConfig" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_composite_alarm

cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  alarm_rule: str,
  actions_enabled: bool | IResolvable = None,
  actions_suppressor: str = None,
  actions_suppressor_extension_period: typing.Union[int, float] = None,
  actions_suppressor_wait_period: typing.Union[int, float] = None,
  alarm_actions: typing.List[str] = None,
  alarm_description: str = None,
  alarm_name: str = None,
  insufficient_data_actions: typing.List[str] = None,
  ok_actions: typing.List[str] = None,
  tags: IResolvable | typing.List[CloudwatchCompositeAlarmTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmRule">alarm_rule</a></code> | <code>str</code> | Expression which aggregates the state of other Alarms (Metric or Composite Alarms). |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.actionsEnabled">actions_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.actionsSuppressor">actions_suppressor</a></code> | <code>str</code> | Actions will be suppressed if the suppressor alarm is in the ALARM state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.actionsSuppressorExtensionPeriod">actions_suppressor_extension_period</a></code> | <code>typing.Union[int, float]</code> | Actions will be suppressed if WaitPeriod is active. The length of time that actions are suppressed is in seconds. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.actionsSuppressorWaitPeriod">actions_suppressor_wait_period</a></code> | <code>typing.Union[int, float]</code> | Actions will be suppressed if ExtensionPeriod is active. The length of time that actions are suppressed is in seconds. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmActions">alarm_actions</a></code> | <code>typing.List[str]</code> | The list of actions to execute when this alarm transitions into an ALARM state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmDescription">alarm_description</a></code> | <code>str</code> | The description of the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmName">alarm_name</a></code> | <code>str</code> | The name of the Composite Alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.insufficientDataActions">insufficient_data_actions</a></code> | <code>typing.List[str]</code> | The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.okActions">ok_actions</a></code> | <code>typing.List[str]</code> | The actions to execute when this alarm transitions to the OK state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags">CloudwatchCompositeAlarmTags</a>]</code> | A list of key-value pairs to associate with the composite alarm. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alarm_rule`<sup>Required</sup> <a name="alarm_rule" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmRule"></a>

```python
alarm_rule: str
```

- *Type:* str

Expression which aggregates the state of other Alarms (Metric or Composite Alarms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_composite_alarm#alarm_rule CloudwatchCompositeAlarm#alarm_rule}

---

##### `actions_enabled`<sup>Optional</sup> <a name="actions_enabled" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.actionsEnabled"></a>

```python
actions_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_composite_alarm#actions_enabled CloudwatchCompositeAlarm#actions_enabled}

---

##### `actions_suppressor`<sup>Optional</sup> <a name="actions_suppressor" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.actionsSuppressor"></a>

```python
actions_suppressor: str
```

- *Type:* str

Actions will be suppressed if the suppressor alarm is in the ALARM state.

ActionsSuppressor can be an AlarmName or an Amazon Resource Name (ARN) from an existing alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_composite_alarm#actions_suppressor CloudwatchCompositeAlarm#actions_suppressor}

---

##### `actions_suppressor_extension_period`<sup>Optional</sup> <a name="actions_suppressor_extension_period" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.actionsSuppressorExtensionPeriod"></a>

```python
actions_suppressor_extension_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Actions will be suppressed if WaitPeriod is active. The length of time that actions are suppressed is in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_composite_alarm#actions_suppressor_extension_period CloudwatchCompositeAlarm#actions_suppressor_extension_period}

---

##### `actions_suppressor_wait_period`<sup>Optional</sup> <a name="actions_suppressor_wait_period" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.actionsSuppressorWaitPeriod"></a>

```python
actions_suppressor_wait_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Actions will be suppressed if ExtensionPeriod is active. The length of time that actions are suppressed is in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_composite_alarm#actions_suppressor_wait_period CloudwatchCompositeAlarm#actions_suppressor_wait_period}

---

##### `alarm_actions`<sup>Optional</sup> <a name="alarm_actions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmActions"></a>

```python
alarm_actions: typing.List[str]
```

- *Type:* typing.List[str]

The list of actions to execute when this alarm transitions into an ALARM state from any other state.

Specify each action as an Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_composite_alarm#alarm_actions CloudwatchCompositeAlarm#alarm_actions}

---

##### `alarm_description`<sup>Optional</sup> <a name="alarm_description" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmDescription"></a>

```python
alarm_description: str
```

- *Type:* str

The description of the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_composite_alarm#alarm_description CloudwatchCompositeAlarm#alarm_description}

---

##### `alarm_name`<sup>Optional</sup> <a name="alarm_name" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmName"></a>

```python
alarm_name: str
```

- *Type:* str

The name of the Composite Alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_composite_alarm#alarm_name CloudwatchCompositeAlarm#alarm_name}

---

##### `insufficient_data_actions`<sup>Optional</sup> <a name="insufficient_data_actions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.insufficientDataActions"></a>

```python
insufficient_data_actions: typing.List[str]
```

- *Type:* typing.List[str]

The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state.

Each action is specified as an Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_composite_alarm#insufficient_data_actions CloudwatchCompositeAlarm#insufficient_data_actions}

---

##### `ok_actions`<sup>Optional</sup> <a name="ok_actions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.okActions"></a>

```python
ok_actions: typing.List[str]
```

- *Type:* typing.List[str]

The actions to execute when this alarm transitions to the OK state from any other state.

Each action is specified as an Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_composite_alarm#ok_actions CloudwatchCompositeAlarm#ok_actions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CloudwatchCompositeAlarmTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags">CloudwatchCompositeAlarmTags</a>]

A list of key-value pairs to associate with the composite alarm.

You can associate as many as 50 tags with an alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_composite_alarm#tags CloudwatchCompositeAlarm#tags}

---

### CloudwatchCompositeAlarmTags <a name="CloudwatchCompositeAlarmTags" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_composite_alarm

cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags.property.key">key</a></code> | <code>str</code> | A unique identifier for the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags.property.value">value</a></code> | <code>str</code> | The value for the specified tag key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags.property.key"></a>

```python
key: str
```

- *Type:* str

A unique identifier for the tag.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_composite_alarm#key CloudwatchCompositeAlarm#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_composite_alarm#value CloudwatchCompositeAlarm#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchCompositeAlarmTagsList <a name="CloudwatchCompositeAlarmTagsList" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_composite_alarm

cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchCompositeAlarmTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags">CloudwatchCompositeAlarmTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchCompositeAlarmTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags">CloudwatchCompositeAlarmTags</a>]

---


### CloudwatchCompositeAlarmTagsOutputReference <a name="CloudwatchCompositeAlarmTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_composite_alarm

cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags">CloudwatchCompositeAlarmTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchCompositeAlarmTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags">CloudwatchCompositeAlarmTags</a>

---



