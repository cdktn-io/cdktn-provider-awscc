# `ioteventsAlarmModel` Submodule <a name="`ioteventsAlarmModel` Submodule" id="@cdktn/provider-awscc.ioteventsAlarmModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IoteventsAlarmModel <a name="IoteventsAlarmModel" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model awscc_iotevents_alarm_model}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModel(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  alarm_rule: IoteventsAlarmModelAlarmRule,
  role_arn: str,
  alarm_capabilities: IoteventsAlarmModelAlarmCapabilities = None,
  alarm_event_actions: IoteventsAlarmModelAlarmEventActions = None,
  alarm_model_description: str = None,
  alarm_model_name: str = None,
  key: str = None,
  severity: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[IoteventsAlarmModelTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.alarmRule">alarm_rule</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a></code> | Defines when your alarm is invoked. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.alarmCapabilities">alarm_capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a></code> | Contains the configuration information of alarm state changes. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.alarmEventActions">alarm_event_actions</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a></code> | Contains information about one or more alarm actions. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.alarmModelDescription">alarm_model_description</a></code> | <code>str</code> | The description of the alarm model. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.alarmModelName">alarm_model_name</a></code> | <code>str</code> | The name of the alarm model. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.key">key</a></code> | <code>str</code> | An input attribute used as a key to create an alarm. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.severity">severity</a></code> | <code>typing.Union[int, float]</code> | A non-negative integer that reflects the severity level of the alarm. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>]</code> | A list of key-value pairs that contain metadata for the alarm model. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alarm_rule`<sup>Required</sup> <a name="alarm_rule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.alarmRule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a>

Defines when your alarm is invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#alarm_rule IoteventsAlarmModel#alarm_rule}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.roleArn"></a>

- *Type:* str

The ARN of the IAM role that allows the alarm to perform actions and access AWS resources.

For more information, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *General Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#role_arn IoteventsAlarmModel#role_arn}

---

##### `alarm_capabilities`<sup>Optional</sup> <a name="alarm_capabilities" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.alarmCapabilities"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a>

Contains the configuration information of alarm state changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#alarm_capabilities IoteventsAlarmModel#alarm_capabilities}

---

##### `alarm_event_actions`<sup>Optional</sup> <a name="alarm_event_actions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.alarmEventActions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a>

Contains information about one or more alarm actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#alarm_event_actions IoteventsAlarmModel#alarm_event_actions}

---

##### `alarm_model_description`<sup>Optional</sup> <a name="alarm_model_description" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.alarmModelDescription"></a>

- *Type:* str

The description of the alarm model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#alarm_model_description IoteventsAlarmModel#alarm_model_description}

---

##### `alarm_model_name`<sup>Optional</sup> <a name="alarm_model_name" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.alarmModelName"></a>

- *Type:* str

The name of the alarm model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#alarm_model_name IoteventsAlarmModel#alarm_model_name}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.key"></a>

- *Type:* str

An input attribute used as a key to create an alarm.

ITE routes [inputs](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Input.html) associated with this key to the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#key IoteventsAlarmModel#key}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.severity"></a>

- *Type:* typing.Union[int, float]

A non-negative integer that reflects the severity level of the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#severity IoteventsAlarmModel#severity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>]

A list of key-value pairs that contain metadata for the alarm model.

The tags help you manage the alarm model. For more information, see [Tagging your resources](https://docs.aws.amazon.com/iotevents/latest/developerguide/tagging-iotevents.html) in the *Developer Guide*.
You can create up to 50 tags for one alarm model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#tags IoteventsAlarmModel#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmCapabilities">put_alarm_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmEventActions">put_alarm_event_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmRule">put_alarm_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmCapabilities">reset_alarm_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmEventActions">reset_alarm_event_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmModelDescription">reset_alarm_model_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmModelName">reset_alarm_model_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetSeverity">reset_severity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_alarm_capabilities` <a name="put_alarm_capabilities" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmCapabilities"></a>

```python
def put_alarm_capabilities(
  acknowledge_flow: IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow = None,
  initialization_configuration: IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration = None
) -> None
```

###### `acknowledge_flow`<sup>Optional</sup> <a name="acknowledge_flow" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmCapabilities.parameter.acknowledgeFlow"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a>

Specifies whether to get notified for alarm state changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#acknowledge_flow IoteventsAlarmModel#acknowledge_flow}

---

###### `initialization_configuration`<sup>Optional</sup> <a name="initialization_configuration" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmCapabilities.parameter.initializationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a>

Specifies the default alarm state. The configuration applies to all alarms that were created based on this alarm model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#initialization_configuration IoteventsAlarmModel#initialization_configuration}

---

##### `put_alarm_event_actions` <a name="put_alarm_event_actions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmEventActions"></a>

```python
def put_alarm_event_actions(
  alarm_actions: IResolvable | typing.List[IoteventsAlarmModelAlarmEventActionsAlarmActions] = None
) -> None
```

###### `alarm_actions`<sup>Optional</sup> <a name="alarm_actions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmEventActions.parameter.alarmActions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>]

Specifies one or more supported actions to receive notifications when the alarm state changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#alarm_actions IoteventsAlarmModel#alarm_actions}

---

##### `put_alarm_rule` <a name="put_alarm_rule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmRule"></a>

```python
def put_alarm_rule(
  simple_rule: IoteventsAlarmModelAlarmRuleSimpleRule = None
) -> None
```

###### `simple_rule`<sup>Optional</sup> <a name="simple_rule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmRule.parameter.simpleRule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule">IoteventsAlarmModelAlarmRuleSimpleRule</a>

A rule that compares an input property value to a threshold value with a comparison operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#simple_rule IoteventsAlarmModel#simple_rule}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IoteventsAlarmModelTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>]

---

##### `reset_alarm_capabilities` <a name="reset_alarm_capabilities" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmCapabilities"></a>

```python
def reset_alarm_capabilities() -> None
```

##### `reset_alarm_event_actions` <a name="reset_alarm_event_actions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmEventActions"></a>

```python
def reset_alarm_event_actions() -> None
```

##### `reset_alarm_model_description` <a name="reset_alarm_model_description" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmModelDescription"></a>

```python
def reset_alarm_model_description() -> None
```

##### `reset_alarm_model_name` <a name="reset_alarm_model_name" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmModelName"></a>

```python
def reset_alarm_model_name() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_severity` <a name="reset_severity" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetSeverity"></a>

```python
def reset_severity() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IoteventsAlarmModel resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isConstruct"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IoteventsAlarmModel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IoteventsAlarmModel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IoteventsAlarmModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IoteventsAlarmModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmCapabilities">alarm_capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference">IoteventsAlarmModelAlarmCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmEventActions">alarm_event_actions</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference">IoteventsAlarmModelAlarmEventActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmRule">alarm_rule</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference">IoteventsAlarmModelAlarmRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList">IoteventsAlarmModelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmCapabilitiesInput">alarm_capabilities_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmEventActionsInput">alarm_event_actions_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelDescriptionInput">alarm_model_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelNameInput">alarm_model_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmRuleInput">alarm_rule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.severityInput">severity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelDescription">alarm_model_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelName">alarm_model_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.severity">severity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alarm_capabilities`<sup>Required</sup> <a name="alarm_capabilities" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmCapabilities"></a>

```python
alarm_capabilities: IoteventsAlarmModelAlarmCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference">IoteventsAlarmModelAlarmCapabilitiesOutputReference</a>

---

##### `alarm_event_actions`<sup>Required</sup> <a name="alarm_event_actions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmEventActions"></a>

```python
alarm_event_actions: IoteventsAlarmModelAlarmEventActionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference">IoteventsAlarmModelAlarmEventActionsOutputReference</a>

---

##### `alarm_rule`<sup>Required</sup> <a name="alarm_rule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmRule"></a>

```python
alarm_rule: IoteventsAlarmModelAlarmRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference">IoteventsAlarmModelAlarmRuleOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.tags"></a>

```python
tags: IoteventsAlarmModelTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList">IoteventsAlarmModelTagsList</a>

---

##### `alarm_capabilities_input`<sup>Optional</sup> <a name="alarm_capabilities_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmCapabilitiesInput"></a>

```python
alarm_capabilities_input: IResolvable | IoteventsAlarmModelAlarmCapabilities
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a>

---

##### `alarm_event_actions_input`<sup>Optional</sup> <a name="alarm_event_actions_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmEventActionsInput"></a>

```python
alarm_event_actions_input: IResolvable | IoteventsAlarmModelAlarmEventActions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a>

---

##### `alarm_model_description_input`<sup>Optional</sup> <a name="alarm_model_description_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelDescriptionInput"></a>

```python
alarm_model_description_input: str
```

- *Type:* str

---

##### `alarm_model_name_input`<sup>Optional</sup> <a name="alarm_model_name_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelNameInput"></a>

```python
alarm_model_name_input: str
```

- *Type:* str

---

##### `alarm_rule_input`<sup>Optional</sup> <a name="alarm_rule_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmRuleInput"></a>

```python
alarm_rule_input: IResolvable | IoteventsAlarmModelAlarmRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a>

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.severityInput"></a>

```python
severity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IoteventsAlarmModelTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>]

---

##### `alarm_model_description`<sup>Required</sup> <a name="alarm_model_description" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelDescription"></a>

```python
alarm_model_description: str
```

- *Type:* str

---

##### `alarm_model_name`<sup>Required</sup> <a name="alarm_model_name" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelName"></a>

```python
alarm_model_name: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.severity"></a>

```python
severity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IoteventsAlarmModelAlarmCapabilities <a name="IoteventsAlarmModelAlarmCapabilities" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities(
  acknowledge_flow: IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow = None,
  initialization_configuration: IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities.property.acknowledgeFlow">acknowledge_flow</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a></code> | Specifies whether to get notified for alarm state changes. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities.property.initializationConfiguration">initialization_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a></code> | Specifies the default alarm state. The configuration applies to all alarms that were created based on this alarm model. |

---

##### `acknowledge_flow`<sup>Optional</sup> <a name="acknowledge_flow" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities.property.acknowledgeFlow"></a>

```python
acknowledge_flow: IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a>

Specifies whether to get notified for alarm state changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#acknowledge_flow IoteventsAlarmModel#acknowledge_flow}

---

##### `initialization_configuration`<sup>Optional</sup> <a name="initialization_configuration" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities.property.initializationConfiguration"></a>

```python
initialization_configuration: IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a>

Specifies the default alarm state. The configuration applies to all alarms that were created based on this alarm model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#initialization_configuration IoteventsAlarmModel#initialization_configuration}

---

### IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow <a name="IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | The value must be ``TRUE`` or ``FALSE``. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

The value must be ``TRUE`` or ``FALSE``.

If `TRUE`, you receive a notification when the alarm state changes. You must choose to acknowledge the notification before the alarm state can return to `NORMAL`. If `FALSE`, you won't receive notifications. The alarm automatically changes to the `NORMAL` state when the input property value returns to the specified range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#enabled IoteventsAlarmModel#enabled}

---

### IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration <a name="IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration(
  disabled_on_initialization: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration.property.disabledOnInitialization">disabled_on_initialization</a></code> | <code>bool \| cdktn.IResolvable</code> | The value must be ``TRUE`` or ``FALSE``. |

---

##### `disabled_on_initialization`<sup>Optional</sup> <a name="disabled_on_initialization" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration.property.disabledOnInitialization"></a>

```python
disabled_on_initialization: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

The value must be ``TRUE`` or ``FALSE``.

If `FALSE`, all alarm instances created based on the alarm model are activated. The default value is `TRUE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#disabled_on_initialization IoteventsAlarmModel#disabled_on_initialization}

---

### IoteventsAlarmModelAlarmEventActions <a name="IoteventsAlarmModelAlarmEventActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions(
  alarm_actions: IResolvable | typing.List[IoteventsAlarmModelAlarmEventActionsAlarmActions] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions.property.alarmActions">alarm_actions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>]</code> | Specifies one or more supported actions to receive notifications when the alarm state changes. |

---

##### `alarm_actions`<sup>Optional</sup> <a name="alarm_actions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions.property.alarmActions"></a>

```python
alarm_actions: IResolvable | typing.List[IoteventsAlarmModelAlarmEventActionsAlarmActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>]

Specifies one or more supported actions to receive notifications when the alarm state changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#alarm_actions IoteventsAlarmModel#alarm_actions}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActions <a name="IoteventsAlarmModelAlarmEventActionsAlarmActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions(
  dynamo_db: IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb = None,
  dynamo_d_bv2: IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2 = None,
  firehose: IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose = None,
  iot_events: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents = None,
  iot_site_wise: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise = None,
  iot_topic_publish: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish = None,
  lambda: IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda = None,
  sns: IoteventsAlarmModelAlarmEventActionsAlarmActionsSns = None,
  sqs: IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.dynamoDb">dynamo_db</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb</a></code> | Defines an action to write to the Amazon DynamoDB table that you created. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.dynamoDBv2">dynamo_d_bv2</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2</a></code> | Defines an action to write to the Amazon DynamoDB table that you created. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.firehose">firehose</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a></code> | Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.iotEvents">iot_events</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a></code> | Sends an ITE input, passing in information about the detector model instance and the event that triggered the action. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.iotSiteWise">iot_site_wise</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise</a></code> | Sends information about the detector model instance and the event that triggered the action to a specified asset property in ITSW. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.iotTopicPublish">iot_topic_publish</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a></code> | Information required to publish the MQTT message through the IoT message broker. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.lambda">lambda</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a></code> | Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.sns">sns</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns">IoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a></code> | Information required to publish the Amazon SNS message. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.sqs">sqs</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a></code> | Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue. |

---

##### `dynamo_db`<sup>Optional</sup> <a name="dynamo_db" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.dynamoDb"></a>

```python
dynamo_db: IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb</a>

Defines an action to write to the Amazon DynamoDB table that you created.

The standard action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify.
You must use expressions for all parameters in `DynamoDBAction`. The expressions accept literals, operators, functions, references, and substitution templates.
**Examples**

* For literal values, the expressions must contain single quotes. For example, the value for the `hashKeyType` parameter can be `'STRING'`.
* For references, you must specify either variables or input values. For example, the value for the `hashKeyField` parameter can be `$input.GreenhouseInput.name`.
* For a substitution template, you must use `${}`, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
  In the following example, the value for the `hashKeyValue` parameter uses a substitution template.
  `'${$input.GreenhouseInput.temperature * 6 / 5 + 32} in Fahrenheit'`
* For a string concatenation, you must use `+`. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.
  In the following example, the value for the `tableName` parameter uses a string concatenation.
  `'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date`

For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *Developer Guide*.
If the defined payload type is a string, `DynamoDBAction` writes non-JSON data to the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text. The value for the `payloadField` parameter is `<payload-field>_raw`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#dynamo_db IoteventsAlarmModel#dynamo_db}

---

##### `dynamo_d_bv2`<sup>Optional</sup> <a name="dynamo_d_bv2" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.dynamoDBv2"></a>

```python
dynamo_d_bv2: IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2</a>

Defines an action to write to the Amazon DynamoDB table that you created.

The default action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.
You must use expressions for all parameters in `DynamoDBv2Action`. The expressions accept literals, operators, functions, references, and substitution templates.
**Examples**

* For literal values, the expressions must contain single quotes. For example, the value for the `tableName` parameter can be `'GreenhouseTemperatureTable'`.
* For references, you must specify either variables or input values. For example, the value for the `tableName` parameter can be `$variable.ddbtableName`.
* For a substitution template, you must use `${}`, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
  In the following example, the value for the `contentExpression` parameter in `Payload` uses a substitution template.
  `'{\"sensorID\": \"${$input.GreenhouseInput.sensor_id}\", \"temperature\": \"${$input.GreenhouseInput.temperature * 9 / 5 + 32}\"}'`
* For a string concatenation, you must use `+`. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.
  In the following example, the value for the `tableName` parameter uses a string concatenation.
  `'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date`

For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *Developer Guide*.
The value for the `type` parameter in `Payload` must be `JSON`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#dynamo_d_bv_2 IoteventsAlarmModel#dynamo_d_bv_2}

---

##### `firehose`<sup>Optional</sup> <a name="firehose" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.firehose"></a>

```python
firehose: IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a>

Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#firehose IoteventsAlarmModel#firehose}

---

##### `iot_events`<sup>Optional</sup> <a name="iot_events" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.iotEvents"></a>

```python
iot_events: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a>

Sends an ITE input, passing in information about the detector model instance and the event that triggered the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#iot_events IoteventsAlarmModel#iot_events}

---

##### `iot_site_wise`<sup>Optional</sup> <a name="iot_site_wise" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.iotSiteWise"></a>

```python
iot_site_wise: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise</a>

Sends information about the detector model instance and the event that triggered the action to a specified asset property in ITSW.

You must use expressions for all parameters in `IotSiteWiseAction`. The expressions accept literals, operators, functions, references, and substitutions templates.
**Examples**

* For literal values, the expressions must contain single quotes. For example, the value for the `propertyAlias` parameter can be `'/company/windfarm/3/turbine/7/temperature'`.
* For references, you must specify either variables or input values. For example, the value for the `assetId` parameter can be `$input.TurbineInput.assetId1`.
* For a substitution template, you must use `${}`, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
  In the following example, the value for the `propertyAlias` parameter uses a substitution template.
  `'company/windfarm/${$input.TemperatureInput.sensorData.windfarmID}/turbine/ ${$input.TemperatureInput.sensorData.turbineID}/temperature'`

You must specify either `propertyAlias` or both `assetId` and `propertyId` to identify the target asset property in ITSW.
For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#iot_site_wise IoteventsAlarmModel#iot_site_wise}

---

##### `iot_topic_publish`<sup>Optional</sup> <a name="iot_topic_publish" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.iotTopicPublish"></a>

```python
iot_topic_publish: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a>

Information required to publish the MQTT message through the IoT message broker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#iot_topic_publish IoteventsAlarmModel#iot_topic_publish}

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.lambda"></a>

```python
lambda: IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a>

Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#lambda IoteventsAlarmModel#lambda}

---

##### `sns`<sup>Optional</sup> <a name="sns" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.sns"></a>

```python
sns: IoteventsAlarmModelAlarmEventActionsAlarmActionsSns
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns">IoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a>

Information required to publish the Amazon SNS message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#sns IoteventsAlarmModel#sns}

---

##### `sqs`<sup>Optional</sup> <a name="sqs" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.sqs"></a>

```python
sqs: IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a>

Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#sqs IoteventsAlarmModel#sqs}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb(
  hash_key_field: str = None,
  hash_key_type: str = None,
  hash_key_value: str = None,
  operation: str = None,
  payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload = None,
  payload_field: str = None,
  range_key_field: str = None,
  range_key_type: str = None,
  range_key_value: str = None,
  table_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.hashKeyField">hash_key_field</a></code> | <code>str</code> | The name of the hash key (also called the partition key). |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.hashKeyType">hash_key_type</a></code> | <code>str</code> | The data type for the hash key (also called the partition key). |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.hashKeyValue">hash_key_value</a></code> | <code>str</code> | The value of the hash key (also called the partition key). |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.operation">operation</a></code> | <code>str</code> | The type of operation to perform. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a></code> | Information needed to configure the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.payloadField">payload_field</a></code> | <code>str</code> | The name of the DynamoDB column that receives the action payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.rangeKeyField">range_key_field</a></code> | <code>str</code> | The name of the range key (also called the sort key). |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.rangeKeyType">range_key_type</a></code> | <code>str</code> | The data type for the range key (also called the sort key), You can specify the following values:   +  ``'STRING'`` - The range key is a string. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.rangeKeyValue">range_key_value</a></code> | <code>str</code> | The value of the range key (also called the sort key). |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.tableName">table_name</a></code> | <code>str</code> | The name of the DynamoDB table. The ``tableName`` value must match the table name of the target DynamoDB table. |

---

##### `hash_key_field`<sup>Optional</sup> <a name="hash_key_field" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.hashKeyField"></a>

```python
hash_key_field: str
```

- *Type:* str

The name of the hash key (also called the partition key).

The `hashKeyField` value must match the partition key of the target DynamoDB table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#hash_key_field IoteventsAlarmModel#hash_key_field}

---

##### `hash_key_type`<sup>Optional</sup> <a name="hash_key_type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.hashKeyType"></a>

```python
hash_key_type: str
```

- *Type:* str

The data type for the hash key (also called the partition key).

You can specify the following values:

* `'STRING'` - The hash key is a string.
* `'NUMBER'` - The hash key is a number.

If you don't specify `hashKeyType`, the default value is `'STRING'`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#hash_key_type IoteventsAlarmModel#hash_key_type}

---

##### `hash_key_value`<sup>Optional</sup> <a name="hash_key_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.hashKeyValue"></a>

```python
hash_key_value: str
```

- *Type:* str

The value of the hash key (also called the partition key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#hash_key_value IoteventsAlarmModel#hash_key_value}

---

##### `operation`<sup>Optional</sup> <a name="operation" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.operation"></a>

```python
operation: str
```

- *Type:* str

The type of operation to perform.

You can specify the following values:

* `'INSERT'` - Insert data as a new item into the DynamoDB table. This item uses the specified hash key as a partition key. If you specified a range key, the item uses the range key as a sort key.
* `'UPDATE'` - Update an existing item of the DynamoDB table with new data. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
* `'DELETE'` - Delete an existing item of the DynamoDB table. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.

If you don't specify this parameter, ITE triggers the `'INSERT'` operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#operation IoteventsAlarmModel#operation}

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.payload"></a>

```python
payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a>

Information needed to configure the payload.

By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

##### `payload_field`<sup>Optional</sup> <a name="payload_field" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.payloadField"></a>

```python
payload_field: str
```

- *Type:* str

The name of the DynamoDB column that receives the action payload.

If you don't specify this parameter, the name of the DynamoDB column is `payload`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#payload_field IoteventsAlarmModel#payload_field}

---

##### `range_key_field`<sup>Optional</sup> <a name="range_key_field" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.rangeKeyField"></a>

```python
range_key_field: str
```

- *Type:* str

The name of the range key (also called the sort key).

The `rangeKeyField` value must match the sort key of the target DynamoDB table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#range_key_field IoteventsAlarmModel#range_key_field}

---

##### `range_key_type`<sup>Optional</sup> <a name="range_key_type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.rangeKeyType"></a>

```python
range_key_type: str
```

- *Type:* str

The data type for the range key (also called the sort key), You can specify the following values:   +  ``'STRING'`` - The range key is a string.

* `'NUMBER'` - The range key is number.

If you don't specify `rangeKeyField`, the default value is `'STRING'`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#range_key_type IoteventsAlarmModel#range_key_type}

---

##### `range_key_value`<sup>Optional</sup> <a name="range_key_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.rangeKeyValue"></a>

```python
range_key_value: str
```

- *Type:* str

The value of the range key (also called the sort key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#range_key_value IoteventsAlarmModel#range_key_value}

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

The name of the DynamoDB table. The ``tableName`` value must match the table name of the target DynamoDB table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#table_name IoteventsAlarmModel#table_name}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload(
  content_expression: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload.property.contentExpression">content_expression</a></code> | <code>str</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload.property.type">type</a></code> | <code>str</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `content_expression`<sup>Optional</sup> <a name="content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload.property.contentExpression"></a>

```python
content_expression: str
```

- *Type:* str

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload.property.type"></a>

```python
type: str
```

- *Type:* str

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2 <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2(
  payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload = None,
  table_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a></code> | Information needed to configure the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2.property.tableName">table_name</a></code> | <code>str</code> | The name of the DynamoDB table. |

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2.property.payload"></a>

```python
payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a>

Information needed to configure the payload.

By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

The name of the DynamoDB table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#table_name IoteventsAlarmModel#table_name}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload(
  content_expression: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload.property.contentExpression">content_expression</a></code> | <code>str</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload.property.type">type</a></code> | <code>str</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `content_expression`<sup>Optional</sup> <a name="content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload.property.contentExpression"></a>

```python
content_expression: str
```

- *Type:* str

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload.property.type"></a>

```python
type: str
```

- *Type:* str

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose(
  delivery_stream_name: str = None,
  payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload = None,
  separator: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.property.deliveryStreamName">delivery_stream_name</a></code> | <code>str</code> | The name of the Kinesis Data Firehose delivery stream where the data is written. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a></code> | You can configure the action payload when you send a message to an Amazon Data Firehose delivery stream. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.property.separator">separator</a></code> | <code>str</code> | A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream. |

---

##### `delivery_stream_name`<sup>Optional</sup> <a name="delivery_stream_name" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.property.deliveryStreamName"></a>

```python
delivery_stream_name: str
```

- *Type:* str

The name of the Kinesis Data Firehose delivery stream where the data is written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#delivery_stream_name IoteventsAlarmModel#delivery_stream_name}

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.property.payload"></a>

```python
payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a>

You can configure the action payload when you send a message to an Amazon Data Firehose delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

##### `separator`<sup>Optional</sup> <a name="separator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.property.separator"></a>

```python
separator: str
```

- *Type:* str

A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream.

Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#separator IoteventsAlarmModel#separator}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload(
  content_expression: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload.property.contentExpression">content_expression</a></code> | <code>str</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload.property.type">type</a></code> | <code>str</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `content_expression`<sup>Optional</sup> <a name="content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload.property.contentExpression"></a>

```python
content_expression: str
```

- *Type:* str

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload.property.type"></a>

```python
type: str
```

- *Type:* str

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents(
  input_name: str = None,
  payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents.property.inputName">input_name</a></code> | <code>str</code> | The name of the ITE input where the data is sent. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a></code> | You can configure the action payload when you send a message to an ITE input. |

---

##### `input_name`<sup>Optional</sup> <a name="input_name" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents.property.inputName"></a>

```python
input_name: str
```

- *Type:* str

The name of the ITE input where the data is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#input_name IoteventsAlarmModel#input_name}

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents.property.payload"></a>

```python
payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a>

You can configure the action payload when you send a message to an ITE input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload(
  content_expression: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload.property.contentExpression">content_expression</a></code> | <code>str</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload.property.type">type</a></code> | <code>str</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `content_expression`<sup>Optional</sup> <a name="content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload.property.contentExpression"></a>

```python
content_expression: str
```

- *Type:* str

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload.property.type"></a>

```python
type: str
```

- *Type:* str

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise(
  asset_id: str = None,
  entry_id: str = None,
  property_alias: str = None,
  property_id: str = None,
  property_value: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.assetId">asset_id</a></code> | <code>str</code> | The ID of the asset that has the specified property. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.entryId">entry_id</a></code> | <code>str</code> | A unique identifier for this entry. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.propertyAlias">property_alias</a></code> | <code>str</code> | The alias of the asset property. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.propertyId">property_id</a></code> | <code>str</code> | The ID of the asset property. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.propertyValue">property_value</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a></code> | The value to send to the asset property. This value contains timestamp, quality, and value (TQV) information. |

---

##### `asset_id`<sup>Optional</sup> <a name="asset_id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.assetId"></a>

```python
asset_id: str
```

- *Type:* str

The ID of the asset that has the specified property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#asset_id IoteventsAlarmModel#asset_id}

---

##### `entry_id`<sup>Optional</sup> <a name="entry_id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.entryId"></a>

```python
entry_id: str
```

- *Type:* str

A unique identifier for this entry.

You can use the entry ID to track which data entry causes an error in case of failure. The default is a new unique identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#entry_id IoteventsAlarmModel#entry_id}

---

##### `property_alias`<sup>Optional</sup> <a name="property_alias" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.propertyAlias"></a>

```python
property_alias: str
```

- *Type:* str

The alias of the asset property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#property_alias IoteventsAlarmModel#property_alias}

---

##### `property_id`<sup>Optional</sup> <a name="property_id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.propertyId"></a>

```python
property_id: str
```

- *Type:* str

The ID of the asset property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#property_id IoteventsAlarmModel#property_id}

---

##### `property_value`<sup>Optional</sup> <a name="property_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.propertyValue"></a>

```python
property_value: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a>

The value to send to the asset property. This value contains timestamp, quality, and value (TQV) information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#property_value IoteventsAlarmModel#property_value}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue(
  quality: str = None,
  timestamp: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp = None,
  value: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.property.quality">quality</a></code> | <code>str</code> | The quality of the asset property value. The value must be ``'GOOD'``, ``'BAD'``, or ``'UNCERTAIN'``. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.property.timestamp">timestamp</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a></code> | The timestamp associated with the asset property value. The default is the current event time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a></code> | The value to send to an asset property. |

---

##### `quality`<sup>Optional</sup> <a name="quality" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.property.quality"></a>

```python
quality: str
```

- *Type:* str

The quality of the asset property value. The value must be ``'GOOD'``, ``'BAD'``, or ``'UNCERTAIN'``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#quality IoteventsAlarmModel#quality}

---

##### `timestamp`<sup>Optional</sup> <a name="timestamp" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.property.timestamp"></a>

```python
timestamp: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a>

The timestamp associated with the asset property value. The default is the current event time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#timestamp IoteventsAlarmModel#timestamp}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.property.value"></a>

```python
value: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a>

The value to send to an asset property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#value IoteventsAlarmModel#value}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp(
  offset_in_nanos: str = None,
  time_in_seconds: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp.property.offsetInNanos">offset_in_nanos</a></code> | <code>str</code> | The nanosecond offset converted from ``timeInSeconds``. The valid range is between 0-999999999. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp.property.timeInSeconds">time_in_seconds</a></code> | <code>str</code> | The timestamp, in seconds, in the Unix epoch format. The valid range is between 1-31556889864403199. |

---

##### `offset_in_nanos`<sup>Optional</sup> <a name="offset_in_nanos" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp.property.offsetInNanos"></a>

```python
offset_in_nanos: str
```

- *Type:* str

The nanosecond offset converted from ``timeInSeconds``. The valid range is between 0-999999999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#offset_in_nanos IoteventsAlarmModel#offset_in_nanos}

---

##### `time_in_seconds`<sup>Optional</sup> <a name="time_in_seconds" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp.property.timeInSeconds"></a>

```python
time_in_seconds: str
```

- *Type:* str

The timestamp, in seconds, in the Unix epoch format. The valid range is between 1-31556889864403199.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#time_in_seconds IoteventsAlarmModel#time_in_seconds}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue(
  boolean_value: str = None,
  double_value: str = None,
  integer_value: str = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.booleanValue">boolean_value</a></code> | <code>str</code> | The asset property value is a Boolean value that must be ``'TRUE'`` or ``'FALSE'``. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.doubleValue">double_value</a></code> | <code>str</code> | The asset property value is a double. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.integerValue">integer_value</a></code> | <code>str</code> | The asset property value is an integer. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.stringValue">string_value</a></code> | <code>str</code> | The asset property value is a string. |

---

##### `boolean_value`<sup>Optional</sup> <a name="boolean_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.booleanValue"></a>

```python
boolean_value: str
```

- *Type:* str

The asset property value is a Boolean value that must be ``'TRUE'`` or ``'FALSE'``.

You must use an expression, and the evaluated result should be a Boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#boolean_value IoteventsAlarmModel#boolean_value}

---

##### `double_value`<sup>Optional</sup> <a name="double_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.doubleValue"></a>

```python
double_value: str
```

- *Type:* str

The asset property value is a double.

You must use an expression, and the evaluated result should be a double.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#double_value IoteventsAlarmModel#double_value}

---

##### `integer_value`<sup>Optional</sup> <a name="integer_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.integerValue"></a>

```python
integer_value: str
```

- *Type:* str

The asset property value is an integer.

You must use an expression, and the evaluated result should be an integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#integer_value IoteventsAlarmModel#integer_value}

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

The asset property value is a string.

You must use an expression, and the evaluated result should be a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#string_value IoteventsAlarmModel#string_value}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish(
  mqtt_topic: str = None,
  payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish.property.mqttTopic">mqtt_topic</a></code> | <code>str</code> | The MQTT topic of the message. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a></code> | You can configure the action payload when you publish a message to an IoTCore topic. |

---

##### `mqtt_topic`<sup>Optional</sup> <a name="mqtt_topic" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish.property.mqttTopic"></a>

```python
mqtt_topic: str
```

- *Type:* str

The MQTT topic of the message.

You can use a string expression that includes variables (`$variable.<variable-name>`) and input values (`$input.<input-name>.<path-to-datum>`) as the topic string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#mqtt_topic IoteventsAlarmModel#mqtt_topic}

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish.property.payload"></a>

```python
payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a>

You can configure the action payload when you publish a message to an IoTCore topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload(
  content_expression: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload.property.contentExpression">content_expression</a></code> | <code>str</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload.property.type">type</a></code> | <code>str</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `content_expression`<sup>Optional</sup> <a name="content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload.property.contentExpression"></a>

```python
content_expression: str
```

- *Type:* str

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload.property.type"></a>

```python
type: str
```

- *Type:* str

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda(
  function_arn: str = None,
  payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda.property.functionArn">function_arn</a></code> | <code>str</code> | The ARN of the Lambda function that is executed. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a></code> | You can configure the action payload when you send a message to a Lambda function. |

---

##### `function_arn`<sup>Optional</sup> <a name="function_arn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda.property.functionArn"></a>

```python
function_arn: str
```

- *Type:* str

The ARN of the Lambda function that is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#function_arn IoteventsAlarmModel#function_arn}

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda.property.payload"></a>

```python
payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a>

You can configure the action payload when you send a message to a Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload(
  content_expression: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload.property.contentExpression">content_expression</a></code> | <code>str</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload.property.type">type</a></code> | <code>str</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `content_expression`<sup>Optional</sup> <a name="content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload.property.contentExpression"></a>

```python
content_expression: str
```

- *Type:* str

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload.property.type"></a>

```python
type: str
```

- *Type:* str

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsSns <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSns" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns(
  payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload = None,
  target_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a></code> | You can configure the action payload when you send a message as an Amazon SNS push notification. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns.property.targetArn">target_arn</a></code> | <code>str</code> | The ARN of the Amazon SNS target where the message is sent. |

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns.property.payload"></a>

```python
payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a>

You can configure the action payload when you send a message as an Amazon SNS push notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

##### `target_arn`<sup>Optional</sup> <a name="target_arn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns.property.targetArn"></a>

```python
target_arn: str
```

- *Type:* str

The ARN of the Amazon SNS target where the message is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#target_arn IoteventsAlarmModel#target_arn}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload(
  content_expression: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload.property.contentExpression">content_expression</a></code> | <code>str</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload.property.type">type</a></code> | <code>str</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `content_expression`<sup>Optional</sup> <a name="content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload.property.contentExpression"></a>

```python
content_expression: str
```

- *Type:* str

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload.property.type"></a>

```python
type: str
```

- *Type:* str

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs(
  payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload = None,
  queue_url: str = None,
  use_base64: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a></code> | You can configure the action payload when you send a message to an Amazon SQS queue. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.property.queueUrl">queue_url</a></code> | <code>str</code> | The URL of the SQS queue where the data is written. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.property.useBase64">use_base64</a></code> | <code>bool \| cdktn.IResolvable</code> | Set this to TRUE if you want the data to be base-64 encoded before it is written to the queue. |

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.property.payload"></a>

```python
payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a>

You can configure the action payload when you send a message to an Amazon SQS queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

##### `queue_url`<sup>Optional</sup> <a name="queue_url" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.property.queueUrl"></a>

```python
queue_url: str
```

- *Type:* str

The URL of the SQS queue where the data is written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#queue_url IoteventsAlarmModel#queue_url}

---

##### `use_base64`<sup>Optional</sup> <a name="use_base64" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.property.useBase64"></a>

```python
use_base64: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Set this to TRUE if you want the data to be base-64 encoded before it is written to the queue.

Otherwise, set this to FALSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#use_base_64 IoteventsAlarmModel#use_base_64}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload(
  content_expression: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload.property.contentExpression">content_expression</a></code> | <code>str</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload.property.type">type</a></code> | <code>str</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `content_expression`<sup>Optional</sup> <a name="content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload.property.contentExpression"></a>

```python
content_expression: str
```

- *Type:* str

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload.property.type"></a>

```python
type: str
```

- *Type:* str

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmRule <a name="IoteventsAlarmModelAlarmRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmRule(
  simple_rule: IoteventsAlarmModelAlarmRuleSimpleRule = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule.property.simpleRule">simple_rule</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule">IoteventsAlarmModelAlarmRuleSimpleRule</a></code> | A rule that compares an input property value to a threshold value with a comparison operator. |

---

##### `simple_rule`<sup>Optional</sup> <a name="simple_rule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule.property.simpleRule"></a>

```python
simple_rule: IoteventsAlarmModelAlarmRuleSimpleRule
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule">IoteventsAlarmModelAlarmRuleSimpleRule</a>

A rule that compares an input property value to a threshold value with a comparison operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#simple_rule IoteventsAlarmModel#simple_rule}

---

### IoteventsAlarmModelAlarmRuleSimpleRule <a name="IoteventsAlarmModelAlarmRuleSimpleRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule(
  comparison_operator: str = None,
  input_property: str = None,
  threshold: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | The comparison operator. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.property.inputProperty">input_property</a></code> | <code>str</code> | The value on the left side of the comparison operator. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.property.threshold">threshold</a></code> | <code>str</code> | The value on the right side of the comparison operator. |

---

##### `comparison_operator`<sup>Optional</sup> <a name="comparison_operator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

The comparison operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#comparison_operator IoteventsAlarmModel#comparison_operator}

---

##### `input_property`<sup>Optional</sup> <a name="input_property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.property.inputProperty"></a>

```python
input_property: str
```

- *Type:* str

The value on the left side of the comparison operator.

You can specify an ITE input attribute as an input property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#input_property IoteventsAlarmModel#input_property}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.property.threshold"></a>

```python
threshold: str
```

- *Type:* str

The value on the right side of the comparison operator.

You can enter a number or specify an ITE input attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#threshold IoteventsAlarmModel#threshold}

---

### IoteventsAlarmModelConfig <a name="IoteventsAlarmModelConfig" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  alarm_rule: IoteventsAlarmModelAlarmRule,
  role_arn: str,
  alarm_capabilities: IoteventsAlarmModelAlarmCapabilities = None,
  alarm_event_actions: IoteventsAlarmModelAlarmEventActions = None,
  alarm_model_description: str = None,
  alarm_model_name: str = None,
  key: str = None,
  severity: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[IoteventsAlarmModelTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmRule">alarm_rule</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a></code> | Defines when your alarm is invoked. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmCapabilities">alarm_capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a></code> | Contains the configuration information of alarm state changes. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmEventActions">alarm_event_actions</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a></code> | Contains information about one or more alarm actions. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmModelDescription">alarm_model_description</a></code> | <code>str</code> | The description of the alarm model. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmModelName">alarm_model_name</a></code> | <code>str</code> | The name of the alarm model. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.key">key</a></code> | <code>str</code> | An input attribute used as a key to create an alarm. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.severity">severity</a></code> | <code>typing.Union[int, float]</code> | A non-negative integer that reflects the severity level of the alarm. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>]</code> | A list of key-value pairs that contain metadata for the alarm model. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alarm_rule`<sup>Required</sup> <a name="alarm_rule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmRule"></a>

```python
alarm_rule: IoteventsAlarmModelAlarmRule
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a>

Defines when your alarm is invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#alarm_rule IoteventsAlarmModel#alarm_rule}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The ARN of the IAM role that allows the alarm to perform actions and access AWS resources.

For more information, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *General Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#role_arn IoteventsAlarmModel#role_arn}

---

##### `alarm_capabilities`<sup>Optional</sup> <a name="alarm_capabilities" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmCapabilities"></a>

```python
alarm_capabilities: IoteventsAlarmModelAlarmCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a>

Contains the configuration information of alarm state changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#alarm_capabilities IoteventsAlarmModel#alarm_capabilities}

---

##### `alarm_event_actions`<sup>Optional</sup> <a name="alarm_event_actions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmEventActions"></a>

```python
alarm_event_actions: IoteventsAlarmModelAlarmEventActions
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a>

Contains information about one or more alarm actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#alarm_event_actions IoteventsAlarmModel#alarm_event_actions}

---

##### `alarm_model_description`<sup>Optional</sup> <a name="alarm_model_description" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmModelDescription"></a>

```python
alarm_model_description: str
```

- *Type:* str

The description of the alarm model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#alarm_model_description IoteventsAlarmModel#alarm_model_description}

---

##### `alarm_model_name`<sup>Optional</sup> <a name="alarm_model_name" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmModelName"></a>

```python
alarm_model_name: str
```

- *Type:* str

The name of the alarm model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#alarm_model_name IoteventsAlarmModel#alarm_model_name}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.key"></a>

```python
key: str
```

- *Type:* str

An input attribute used as a key to create an alarm.

ITE routes [inputs](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Input.html) associated with this key to the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#key IoteventsAlarmModel#key}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.severity"></a>

```python
severity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A non-negative integer that reflects the severity level of the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#severity IoteventsAlarmModel#severity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IoteventsAlarmModelTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>]

A list of key-value pairs that contain metadata for the alarm model.

The tags help you manage the alarm model. For more information, see [Tagging your resources](https://docs.aws.amazon.com/iotevents/latest/developerguide/tagging-iotevents.html) in the *Developer Guide*.
You can create up to 50 tags for one alarm model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#tags IoteventsAlarmModel#tags}

---

### IoteventsAlarmModelTags <a name="IoteventsAlarmModelTags" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags.property.key">key</a></code> | <code>str</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags.property.value">value</a></code> | <code>str</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#key IoteventsAlarmModel#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#value IoteventsAlarmModel#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference <a name="IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a>

---


### IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference <a name="IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.resetDisabledOnInitialization">reset_disabled_on_initialization</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disabled_on_initialization` <a name="reset_disabled_on_initialization" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.resetDisabledOnInitialization"></a>

```python
def reset_disabled_on_initialization() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.disabledOnInitializationInput">disabled_on_initialization_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.disabledOnInitialization">disabled_on_initialization</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disabled_on_initialization_input`<sup>Optional</sup> <a name="disabled_on_initialization_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.disabledOnInitializationInput"></a>

```python
disabled_on_initialization_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disabled_on_initialization`<sup>Required</sup> <a name="disabled_on_initialization" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.disabledOnInitialization"></a>

```python
disabled_on_initialization: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a>

---


### IoteventsAlarmModelAlarmCapabilitiesOutputReference <a name="IoteventsAlarmModelAlarmCapabilitiesOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.putAcknowledgeFlow">put_acknowledge_flow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.putInitializationConfiguration">put_initialization_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resetAcknowledgeFlow">reset_acknowledge_flow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resetInitializationConfiguration">reset_initialization_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_acknowledge_flow` <a name="put_acknowledge_flow" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.putAcknowledgeFlow"></a>

```python
def put_acknowledge_flow(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.putAcknowledgeFlow.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

The value must be ``TRUE`` or ``FALSE``.

If `TRUE`, you receive a notification when the alarm state changes. You must choose to acknowledge the notification before the alarm state can return to `NORMAL`. If `FALSE`, you won't receive notifications. The alarm automatically changes to the `NORMAL` state when the input property value returns to the specified range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#enabled IoteventsAlarmModel#enabled}

---

##### `put_initialization_configuration` <a name="put_initialization_configuration" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.putInitializationConfiguration"></a>

```python
def put_initialization_configuration(
  disabled_on_initialization: bool | IResolvable = None
) -> None
```

###### `disabled_on_initialization`<sup>Optional</sup> <a name="disabled_on_initialization" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.putInitializationConfiguration.parameter.disabledOnInitialization"></a>

- *Type:* bool | cdktn.IResolvable

The value must be ``TRUE`` or ``FALSE``.

If `FALSE`, all alarm instances created based on the alarm model are activated. The default value is `TRUE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#disabled_on_initialization IoteventsAlarmModel#disabled_on_initialization}

---

##### `reset_acknowledge_flow` <a name="reset_acknowledge_flow" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resetAcknowledgeFlow"></a>

```python
def reset_acknowledge_flow() -> None
```

##### `reset_initialization_configuration` <a name="reset_initialization_configuration" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resetInitializationConfiguration"></a>

```python
def reset_initialization_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.acknowledgeFlow">acknowledge_flow</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.initializationConfiguration">initialization_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference">IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.acknowledgeFlowInput">acknowledge_flow_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.initializationConfigurationInput">initialization_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `acknowledge_flow`<sup>Required</sup> <a name="acknowledge_flow" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.acknowledgeFlow"></a>

```python
acknowledge_flow: IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference</a>

---

##### `initialization_configuration`<sup>Required</sup> <a name="initialization_configuration" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.initializationConfiguration"></a>

```python
initialization_configuration: IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference">IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference</a>

---

##### `acknowledge_flow_input`<sup>Optional</sup> <a name="acknowledge_flow_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.acknowledgeFlowInput"></a>

```python
acknowledge_flow_input: IResolvable | IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a>

---

##### `initialization_configuration_input`<sup>Optional</sup> <a name="initialization_configuration_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.initializationConfigurationInput"></a>

```python
initialization_configuration_input: IResolvable | IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IoteventsAlarmModelAlarmCapabilities
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.putPayload">put_payload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetHashKeyField">reset_hash_key_field</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetHashKeyType">reset_hash_key_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetHashKeyValue">reset_hash_key_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetOperation">reset_operation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetPayload">reset_payload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetPayloadField">reset_payload_field</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetRangeKeyField">reset_range_key_field</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetRangeKeyType">reset_range_key_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetRangeKeyValue">reset_range_key_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetTableName">reset_table_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_payload` <a name="put_payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.putPayload"></a>

```python
def put_payload(
  content_expression: str = None,
  type: str = None
) -> None
```

###### `content_expression`<sup>Optional</sup> <a name="content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.putPayload.parameter.contentExpression"></a>

- *Type:* str

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.putPayload.parameter.type"></a>

- *Type:* str

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

##### `reset_hash_key_field` <a name="reset_hash_key_field" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetHashKeyField"></a>

```python
def reset_hash_key_field() -> None
```

##### `reset_hash_key_type` <a name="reset_hash_key_type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetHashKeyType"></a>

```python
def reset_hash_key_type() -> None
```

##### `reset_hash_key_value` <a name="reset_hash_key_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetHashKeyValue"></a>

```python
def reset_hash_key_value() -> None
```

##### `reset_operation` <a name="reset_operation" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetOperation"></a>

```python
def reset_operation() -> None
```

##### `reset_payload` <a name="reset_payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetPayload"></a>

```python
def reset_payload() -> None
```

##### `reset_payload_field` <a name="reset_payload_field" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetPayloadField"></a>

```python
def reset_payload_field() -> None
```

##### `reset_range_key_field` <a name="reset_range_key_field" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetRangeKeyField"></a>

```python
def reset_range_key_field() -> None
```

##### `reset_range_key_type` <a name="reset_range_key_type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetRangeKeyType"></a>

```python
def reset_range_key_type() -> None
```

##### `reset_range_key_value` <a name="reset_range_key_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetRangeKeyValue"></a>

```python
def reset_range_key_value() -> None
```

##### `reset_table_name` <a name="reset_table_name" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetTableName"></a>

```python
def reset_table_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyFieldInput">hash_key_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyTypeInput">hash_key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyValueInput">hash_key_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.operationInput">operation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadFieldInput">payload_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadInput">payload_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyFieldInput">range_key_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyTypeInput">range_key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyValueInput">range_key_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyField">hash_key_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyType">hash_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyValue">hash_key_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadField">payload_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyField">range_key_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyType">range_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyValue">range_key_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payload"></a>

```python
payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference</a>

---

##### `hash_key_field_input`<sup>Optional</sup> <a name="hash_key_field_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyFieldInput"></a>

```python
hash_key_field_input: str
```

- *Type:* str

---

##### `hash_key_type_input`<sup>Optional</sup> <a name="hash_key_type_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyTypeInput"></a>

```python
hash_key_type_input: str
```

- *Type:* str

---

##### `hash_key_value_input`<sup>Optional</sup> <a name="hash_key_value_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyValueInput"></a>

```python
hash_key_value_input: str
```

- *Type:* str

---

##### `operation_input`<sup>Optional</sup> <a name="operation_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.operationInput"></a>

```python
operation_input: str
```

- *Type:* str

---

##### `payload_field_input`<sup>Optional</sup> <a name="payload_field_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadFieldInput"></a>

```python
payload_field_input: str
```

- *Type:* str

---

##### `payload_input`<sup>Optional</sup> <a name="payload_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadInput"></a>

```python
payload_input: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a>

---

##### `range_key_field_input`<sup>Optional</sup> <a name="range_key_field_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyFieldInput"></a>

```python
range_key_field_input: str
```

- *Type:* str

---

##### `range_key_type_input`<sup>Optional</sup> <a name="range_key_type_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyTypeInput"></a>

```python
range_key_type_input: str
```

- *Type:* str

---

##### `range_key_value_input`<sup>Optional</sup> <a name="range_key_value_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyValueInput"></a>

```python
range_key_value_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `hash_key_field`<sup>Required</sup> <a name="hash_key_field" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyField"></a>

```python
hash_key_field: str
```

- *Type:* str

---

##### `hash_key_type`<sup>Required</sup> <a name="hash_key_type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyType"></a>

```python
hash_key_type: str
```

- *Type:* str

---

##### `hash_key_value`<sup>Required</sup> <a name="hash_key_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyValue"></a>

```python
hash_key_value: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `payload_field`<sup>Required</sup> <a name="payload_field" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadField"></a>

```python
payload_field: str
```

- *Type:* str

---

##### `range_key_field`<sup>Required</sup> <a name="range_key_field" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyField"></a>

```python
range_key_field: str
```

- *Type:* str

---

##### `range_key_type`<sup>Required</sup> <a name="range_key_type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyType"></a>

```python
range_key_type: str
```

- *Type:* str

---

##### `range_key_value`<sup>Required</sup> <a name="range_key_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyValue"></a>

```python
range_key_value: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resetContentExpression">reset_content_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content_expression` <a name="reset_content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resetContentExpression"></a>

```python
def reset_content_expression() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.contentExpressionInput">content_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.contentExpression">content_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_expression_input`<sup>Optional</sup> <a name="content_expression_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.contentExpressionInput"></a>

```python
content_expression_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `content_expression`<sup>Required</sup> <a name="content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.contentExpression"></a>

```python
content_expression: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.putPayload">put_payload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resetPayload">reset_payload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resetTableName">reset_table_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_payload` <a name="put_payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.putPayload"></a>

```python
def put_payload(
  content_expression: str = None,
  type: str = None
) -> None
```

###### `content_expression`<sup>Optional</sup> <a name="content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.putPayload.parameter.contentExpression"></a>

- *Type:* str

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.putPayload.parameter.type"></a>

- *Type:* str

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

##### `reset_payload` <a name="reset_payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resetPayload"></a>

```python
def reset_payload() -> None
```

##### `reset_table_name` <a name="reset_table_name" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resetTableName"></a>

```python
def reset_table_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.payloadInput">payload_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.payload"></a>

```python
payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference</a>

---

##### `payload_input`<sup>Optional</sup> <a name="payload_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.payloadInput"></a>

```python
payload_input: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a>

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resetContentExpression">reset_content_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content_expression` <a name="reset_content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resetContentExpression"></a>

```python
def reset_content_expression() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.contentExpressionInput">content_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.contentExpression">content_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_expression_input`<sup>Optional</sup> <a name="content_expression_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.contentExpressionInput"></a>

```python
content_expression_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `content_expression`<sup>Required</sup> <a name="content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.contentExpression"></a>

```python
content_expression: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.putPayload">put_payload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resetDeliveryStreamName">reset_delivery_stream_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resetPayload">reset_payload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resetSeparator">reset_separator</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_payload` <a name="put_payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.putPayload"></a>

```python
def put_payload(
  content_expression: str = None,
  type: str = None
) -> None
```

###### `content_expression`<sup>Optional</sup> <a name="content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.putPayload.parameter.contentExpression"></a>

- *Type:* str

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.putPayload.parameter.type"></a>

- *Type:* str

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

##### `reset_delivery_stream_name` <a name="reset_delivery_stream_name" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resetDeliveryStreamName"></a>

```python
def reset_delivery_stream_name() -> None
```

##### `reset_payload` <a name="reset_payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resetPayload"></a>

```python
def reset_payload() -> None
```

##### `reset_separator` <a name="reset_separator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resetSeparator"></a>

```python
def reset_separator() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.deliveryStreamNameInput">delivery_stream_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.payloadInput">payload_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.separatorInput">separator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.deliveryStreamName">delivery_stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.separator">separator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.payload"></a>

```python
payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference</a>

---

##### `delivery_stream_name_input`<sup>Optional</sup> <a name="delivery_stream_name_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.deliveryStreamNameInput"></a>

```python
delivery_stream_name_input: str
```

- *Type:* str

---

##### `payload_input`<sup>Optional</sup> <a name="payload_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.payloadInput"></a>

```python
payload_input: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a>

---

##### `separator_input`<sup>Optional</sup> <a name="separator_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.separatorInput"></a>

```python
separator_input: str
```

- *Type:* str

---

##### `delivery_stream_name`<sup>Required</sup> <a name="delivery_stream_name" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.deliveryStreamName"></a>

```python
delivery_stream_name: str
```

- *Type:* str

---

##### `separator`<sup>Required</sup> <a name="separator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.separator"></a>

```python
separator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resetContentExpression">reset_content_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content_expression` <a name="reset_content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resetContentExpression"></a>

```python
def reset_content_expression() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.contentExpressionInput">content_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.contentExpression">content_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_expression_input`<sup>Optional</sup> <a name="content_expression_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.contentExpressionInput"></a>

```python
content_expression_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `content_expression`<sup>Required</sup> <a name="content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.contentExpression"></a>

```python
content_expression: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.putPayload">put_payload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resetInputName">reset_input_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resetPayload">reset_payload</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_payload` <a name="put_payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.putPayload"></a>

```python
def put_payload(
  content_expression: str = None,
  type: str = None
) -> None
```

###### `content_expression`<sup>Optional</sup> <a name="content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.putPayload.parameter.contentExpression"></a>

- *Type:* str

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.putPayload.parameter.type"></a>

- *Type:* str

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

##### `reset_input_name` <a name="reset_input_name" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resetInputName"></a>

```python
def reset_input_name() -> None
```

##### `reset_payload` <a name="reset_payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resetPayload"></a>

```python
def reset_payload() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.inputNameInput">input_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.payloadInput">payload_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.inputName">input_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.payload"></a>

```python
payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference</a>

---

##### `input_name_input`<sup>Optional</sup> <a name="input_name_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.inputNameInput"></a>

```python
input_name_input: str
```

- *Type:* str

---

##### `payload_input`<sup>Optional</sup> <a name="payload_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.payloadInput"></a>

```python
payload_input: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a>

---

##### `input_name`<sup>Required</sup> <a name="input_name" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.inputName"></a>

```python
input_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resetContentExpression">reset_content_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content_expression` <a name="reset_content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resetContentExpression"></a>

```python
def reset_content_expression() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.contentExpressionInput">content_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.contentExpression">content_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_expression_input`<sup>Optional</sup> <a name="content_expression_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.contentExpressionInput"></a>

```python
content_expression_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `content_expression`<sup>Required</sup> <a name="content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.contentExpression"></a>

```python
content_expression: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.putPropertyValue">put_property_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetAssetId">reset_asset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetEntryId">reset_entry_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetPropertyAlias">reset_property_alias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetPropertyId">reset_property_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetPropertyValue">reset_property_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_property_value` <a name="put_property_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.putPropertyValue"></a>

```python
def put_property_value(
  quality: str = None,
  timestamp: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp = None,
  value: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue = None
) -> None
```

###### `quality`<sup>Optional</sup> <a name="quality" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.putPropertyValue.parameter.quality"></a>

- *Type:* str

The quality of the asset property value. The value must be ``'GOOD'``, ``'BAD'``, or ``'UNCERTAIN'``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#quality IoteventsAlarmModel#quality}

---

###### `timestamp`<sup>Optional</sup> <a name="timestamp" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.putPropertyValue.parameter.timestamp"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a>

The timestamp associated with the asset property value. The default is the current event time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#timestamp IoteventsAlarmModel#timestamp}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.putPropertyValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a>

The value to send to an asset property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#value IoteventsAlarmModel#value}

---

##### `reset_asset_id` <a name="reset_asset_id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetAssetId"></a>

```python
def reset_asset_id() -> None
```

##### `reset_entry_id` <a name="reset_entry_id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetEntryId"></a>

```python
def reset_entry_id() -> None
```

##### `reset_property_alias` <a name="reset_property_alias" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetPropertyAlias"></a>

```python
def reset_property_alias() -> None
```

##### `reset_property_id` <a name="reset_property_id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetPropertyId"></a>

```python
def reset_property_id() -> None
```

##### `reset_property_value` <a name="reset_property_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetPropertyValue"></a>

```python
def reset_property_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyValue">property_value</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.assetIdInput">asset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.entryIdInput">entry_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyAliasInput">property_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyIdInput">property_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyValueInput">property_value_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.assetId">asset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.entryId">entry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyAlias">property_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyId">property_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `property_value`<sup>Required</sup> <a name="property_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyValue"></a>

```python
property_value: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference</a>

---

##### `asset_id_input`<sup>Optional</sup> <a name="asset_id_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.assetIdInput"></a>

```python
asset_id_input: str
```

- *Type:* str

---

##### `entry_id_input`<sup>Optional</sup> <a name="entry_id_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.entryIdInput"></a>

```python
entry_id_input: str
```

- *Type:* str

---

##### `property_alias_input`<sup>Optional</sup> <a name="property_alias_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyAliasInput"></a>

```python
property_alias_input: str
```

- *Type:* str

---

##### `property_id_input`<sup>Optional</sup> <a name="property_id_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyIdInput"></a>

```python
property_id_input: str
```

- *Type:* str

---

##### `property_value_input`<sup>Optional</sup> <a name="property_value_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyValueInput"></a>

```python
property_value_input: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a>

---

##### `asset_id`<sup>Required</sup> <a name="asset_id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.assetId"></a>

```python
asset_id: str
```

- *Type:* str

---

##### `entry_id`<sup>Required</sup> <a name="entry_id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.entryId"></a>

```python
entry_id: str
```

- *Type:* str

---

##### `property_alias`<sup>Required</sup> <a name="property_alias" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyAlias"></a>

```python
property_alias: str
```

- *Type:* str

---

##### `property_id`<sup>Required</sup> <a name="property_id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyId"></a>

```python
property_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putTimestamp">put_timestamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putValue">put_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resetQuality">reset_quality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resetTimestamp">reset_timestamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_timestamp` <a name="put_timestamp" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putTimestamp"></a>

```python
def put_timestamp(
  offset_in_nanos: str = None,
  time_in_seconds: str = None
) -> None
```

###### `offset_in_nanos`<sup>Optional</sup> <a name="offset_in_nanos" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putTimestamp.parameter.offsetInNanos"></a>

- *Type:* str

The nanosecond offset converted from ``timeInSeconds``. The valid range is between 0-999999999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#offset_in_nanos IoteventsAlarmModel#offset_in_nanos}

---

###### `time_in_seconds`<sup>Optional</sup> <a name="time_in_seconds" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putTimestamp.parameter.timeInSeconds"></a>

- *Type:* str

The timestamp, in seconds, in the Unix epoch format. The valid range is between 1-31556889864403199.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#time_in_seconds IoteventsAlarmModel#time_in_seconds}

---

##### `put_value` <a name="put_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putValue"></a>

```python
def put_value(
  boolean_value: str = None,
  double_value: str = None,
  integer_value: str = None,
  string_value: str = None
) -> None
```

###### `boolean_value`<sup>Optional</sup> <a name="boolean_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putValue.parameter.booleanValue"></a>

- *Type:* str

The asset property value is a Boolean value that must be ``'TRUE'`` or ``'FALSE'``.

You must use an expression, and the evaluated result should be a Boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#boolean_value IoteventsAlarmModel#boolean_value}

---

###### `double_value`<sup>Optional</sup> <a name="double_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putValue.parameter.doubleValue"></a>

- *Type:* str

The asset property value is a double.

You must use an expression, and the evaluated result should be a double.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#double_value IoteventsAlarmModel#double_value}

---

###### `integer_value`<sup>Optional</sup> <a name="integer_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putValue.parameter.integerValue"></a>

- *Type:* str

The asset property value is an integer.

You must use an expression, and the evaluated result should be an integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#integer_value IoteventsAlarmModel#integer_value}

---

###### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putValue.parameter.stringValue"></a>

- *Type:* str

The asset property value is a string.

You must use an expression, and the evaluated result should be a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#string_value IoteventsAlarmModel#string_value}

---

##### `reset_quality` <a name="reset_quality" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resetQuality"></a>

```python
def reset_quality() -> None
```

##### `reset_timestamp` <a name="reset_timestamp" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resetTimestamp"></a>

```python
def reset_timestamp() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.timestamp">timestamp</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.qualityInput">quality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.timestampInput">timestamp_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.valueInput">value_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.quality">quality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.timestamp"></a>

```python
timestamp: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.value"></a>

```python
value: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference</a>

---

##### `quality_input`<sup>Optional</sup> <a name="quality_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.qualityInput"></a>

```python
quality_input: str
```

- *Type:* str

---

##### `timestamp_input`<sup>Optional</sup> <a name="timestamp_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.timestampInput"></a>

```python
timestamp_input: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a>

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.valueInput"></a>

```python
value_input: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a>

---

##### `quality`<sup>Required</sup> <a name="quality" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.quality"></a>

```python
quality: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resetOffsetInNanos">reset_offset_in_nanos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resetTimeInSeconds">reset_time_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_offset_in_nanos` <a name="reset_offset_in_nanos" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resetOffsetInNanos"></a>

```python
def reset_offset_in_nanos() -> None
```

##### `reset_time_in_seconds` <a name="reset_time_in_seconds" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resetTimeInSeconds"></a>

```python
def reset_time_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.offsetInNanosInput">offset_in_nanos_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.timeInSecondsInput">time_in_seconds_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.offsetInNanos">offset_in_nanos</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.timeInSeconds">time_in_seconds</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `offset_in_nanos_input`<sup>Optional</sup> <a name="offset_in_nanos_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.offsetInNanosInput"></a>

```python
offset_in_nanos_input: str
```

- *Type:* str

---

##### `time_in_seconds_input`<sup>Optional</sup> <a name="time_in_seconds_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.timeInSecondsInput"></a>

```python
time_in_seconds_input: str
```

- *Type:* str

---

##### `offset_in_nanos`<sup>Required</sup> <a name="offset_in_nanos" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.offsetInNanos"></a>

```python
offset_in_nanos: str
```

- *Type:* str

---

##### `time_in_seconds`<sup>Required</sup> <a name="time_in_seconds" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.timeInSeconds"></a>

```python
time_in_seconds: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetBooleanValue">reset_boolean_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetDoubleValue">reset_double_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetIntegerValue">reset_integer_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_boolean_value` <a name="reset_boolean_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetBooleanValue"></a>

```python
def reset_boolean_value() -> None
```

##### `reset_double_value` <a name="reset_double_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetDoubleValue"></a>

```python
def reset_double_value() -> None
```

##### `reset_integer_value` <a name="reset_integer_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetIntegerValue"></a>

```python
def reset_integer_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.booleanValueInput">boolean_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.doubleValueInput">double_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.integerValueInput">integer_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.booleanValue">boolean_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.doubleValue">double_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.integerValue">integer_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boolean_value_input`<sup>Optional</sup> <a name="boolean_value_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.booleanValueInput"></a>

```python
boolean_value_input: str
```

- *Type:* str

---

##### `double_value_input`<sup>Optional</sup> <a name="double_value_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.doubleValueInput"></a>

```python
double_value_input: str
```

- *Type:* str

---

##### `integer_value_input`<sup>Optional</sup> <a name="integer_value_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.integerValueInput"></a>

```python
integer_value_input: str
```

- *Type:* str

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `boolean_value`<sup>Required</sup> <a name="boolean_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.booleanValue"></a>

```python
boolean_value: str
```

- *Type:* str

---

##### `double_value`<sup>Required</sup> <a name="double_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.doubleValue"></a>

```python
double_value: str
```

- *Type:* str

---

##### `integer_value`<sup>Required</sup> <a name="integer_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.integerValue"></a>

```python
integer_value: str
```

- *Type:* str

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.putPayload">put_payload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resetMqttTopic">reset_mqtt_topic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resetPayload">reset_payload</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_payload` <a name="put_payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.putPayload"></a>

```python
def put_payload(
  content_expression: str = None,
  type: str = None
) -> None
```

###### `content_expression`<sup>Optional</sup> <a name="content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.putPayload.parameter.contentExpression"></a>

- *Type:* str

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.putPayload.parameter.type"></a>

- *Type:* str

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

##### `reset_mqtt_topic` <a name="reset_mqtt_topic" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resetMqttTopic"></a>

```python
def reset_mqtt_topic() -> None
```

##### `reset_payload` <a name="reset_payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resetPayload"></a>

```python
def reset_payload() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.mqttTopicInput">mqtt_topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.payloadInput">payload_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.mqttTopic">mqtt_topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.payload"></a>

```python
payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference</a>

---

##### `mqtt_topic_input`<sup>Optional</sup> <a name="mqtt_topic_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.mqttTopicInput"></a>

```python
mqtt_topic_input: str
```

- *Type:* str

---

##### `payload_input`<sup>Optional</sup> <a name="payload_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.payloadInput"></a>

```python
payload_input: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a>

---

##### `mqtt_topic`<sup>Required</sup> <a name="mqtt_topic" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.mqttTopic"></a>

```python
mqtt_topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resetContentExpression">reset_content_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content_expression` <a name="reset_content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resetContentExpression"></a>

```python
def reset_content_expression() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.contentExpressionInput">content_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.contentExpression">content_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_expression_input`<sup>Optional</sup> <a name="content_expression_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.contentExpressionInput"></a>

```python
content_expression_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `content_expression`<sup>Required</sup> <a name="content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.contentExpression"></a>

```python
content_expression: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.putPayload">put_payload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resetFunctionArn">reset_function_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resetPayload">reset_payload</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_payload` <a name="put_payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.putPayload"></a>

```python
def put_payload(
  content_expression: str = None,
  type: str = None
) -> None
```

###### `content_expression`<sup>Optional</sup> <a name="content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.putPayload.parameter.contentExpression"></a>

- *Type:* str

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.putPayload.parameter.type"></a>

- *Type:* str

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

##### `reset_function_arn` <a name="reset_function_arn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resetFunctionArn"></a>

```python
def reset_function_arn() -> None
```

##### `reset_payload` <a name="reset_payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resetPayload"></a>

```python
def reset_payload() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.functionArnInput">function_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.payloadInput">payload_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.functionArn">function_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.payload"></a>

```python
payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference</a>

---

##### `function_arn_input`<sup>Optional</sup> <a name="function_arn_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.functionArnInput"></a>

```python
function_arn_input: str
```

- *Type:* str

---

##### `payload_input`<sup>Optional</sup> <a name="payload_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.payloadInput"></a>

```python
payload_input: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a>

---

##### `function_arn`<sup>Required</sup> <a name="function_arn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.functionArn"></a>

```python
function_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resetContentExpression">reset_content_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content_expression` <a name="reset_content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resetContentExpression"></a>

```python
def reset_content_expression() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.contentExpressionInput">content_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.contentExpression">content_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_expression_input`<sup>Optional</sup> <a name="content_expression_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.contentExpressionInput"></a>

```python
content_expression_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `content_expression`<sup>Required</sup> <a name="content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.contentExpression"></a>

```python
content_expression: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsList <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsList" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IoteventsAlarmModelAlarmEventActionsAlarmActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>]

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDb">put_dynamo_db</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDBv2">put_dynamo_d_bv2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putFirehose">put_firehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotEvents">put_iot_events</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotSiteWise">put_iot_site_wise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotTopicPublish">put_iot_topic_publish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putLambda">put_lambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSns">put_sns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSqs">put_sqs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetDynamoDb">reset_dynamo_db</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetDynamoDBv2">reset_dynamo_d_bv2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetFirehose">reset_firehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetIotEvents">reset_iot_events</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetIotSiteWise">reset_iot_site_wise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetIotTopicPublish">reset_iot_topic_publish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetLambda">reset_lambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetSns">reset_sns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetSqs">reset_sqs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dynamo_db` <a name="put_dynamo_db" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDb"></a>

```python
def put_dynamo_db(
  hash_key_field: str = None,
  hash_key_type: str = None,
  hash_key_value: str = None,
  operation: str = None,
  payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload = None,
  payload_field: str = None,
  range_key_field: str = None,
  range_key_type: str = None,
  range_key_value: str = None,
  table_name: str = None
) -> None
```

###### `hash_key_field`<sup>Optional</sup> <a name="hash_key_field" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDb.parameter.hashKeyField"></a>

- *Type:* str

The name of the hash key (also called the partition key).

The `hashKeyField` value must match the partition key of the target DynamoDB table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#hash_key_field IoteventsAlarmModel#hash_key_field}

---

###### `hash_key_type`<sup>Optional</sup> <a name="hash_key_type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDb.parameter.hashKeyType"></a>

- *Type:* str

The data type for the hash key (also called the partition key).

You can specify the following values:

* `'STRING'` - The hash key is a string.
* `'NUMBER'` - The hash key is a number.

If you don't specify `hashKeyType`, the default value is `'STRING'`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#hash_key_type IoteventsAlarmModel#hash_key_type}

---

###### `hash_key_value`<sup>Optional</sup> <a name="hash_key_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDb.parameter.hashKeyValue"></a>

- *Type:* str

The value of the hash key (also called the partition key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#hash_key_value IoteventsAlarmModel#hash_key_value}

---

###### `operation`<sup>Optional</sup> <a name="operation" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDb.parameter.operation"></a>

- *Type:* str

The type of operation to perform.

You can specify the following values:

* `'INSERT'` - Insert data as a new item into the DynamoDB table. This item uses the specified hash key as a partition key. If you specified a range key, the item uses the range key as a sort key.
* `'UPDATE'` - Update an existing item of the DynamoDB table with new data. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
* `'DELETE'` - Delete an existing item of the DynamoDB table. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.

If you don't specify this parameter, ITE triggers the `'INSERT'` operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#operation IoteventsAlarmModel#operation}

---

###### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDb.parameter.payload"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a>

Information needed to configure the payload.

By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

###### `payload_field`<sup>Optional</sup> <a name="payload_field" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDb.parameter.payloadField"></a>

- *Type:* str

The name of the DynamoDB column that receives the action payload.

If you don't specify this parameter, the name of the DynamoDB column is `payload`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#payload_field IoteventsAlarmModel#payload_field}

---

###### `range_key_field`<sup>Optional</sup> <a name="range_key_field" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDb.parameter.rangeKeyField"></a>

- *Type:* str

The name of the range key (also called the sort key).

The `rangeKeyField` value must match the sort key of the target DynamoDB table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#range_key_field IoteventsAlarmModel#range_key_field}

---

###### `range_key_type`<sup>Optional</sup> <a name="range_key_type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDb.parameter.rangeKeyType"></a>

- *Type:* str

The data type for the range key (also called the sort key), You can specify the following values:   +  ``'STRING'`` - The range key is a string.

* `'NUMBER'` - The range key is number.

If you don't specify `rangeKeyField`, the default value is `'STRING'`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#range_key_type IoteventsAlarmModel#range_key_type}

---

###### `range_key_value`<sup>Optional</sup> <a name="range_key_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDb.parameter.rangeKeyValue"></a>

- *Type:* str

The value of the range key (also called the sort key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#range_key_value IoteventsAlarmModel#range_key_value}

---

###### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDb.parameter.tableName"></a>

- *Type:* str

The name of the DynamoDB table. The ``tableName`` value must match the table name of the target DynamoDB table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#table_name IoteventsAlarmModel#table_name}

---

##### `put_dynamo_d_bv2` <a name="put_dynamo_d_bv2" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDBv2"></a>

```python
def put_dynamo_d_bv2(
  payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload = None,
  table_name: str = None
) -> None
```

###### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDBv2.parameter.payload"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a>

Information needed to configure the payload.

By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

###### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDBv2.parameter.tableName"></a>

- *Type:* str

The name of the DynamoDB table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#table_name IoteventsAlarmModel#table_name}

---

##### `put_firehose` <a name="put_firehose" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putFirehose"></a>

```python
def put_firehose(
  delivery_stream_name: str = None,
  payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload = None,
  separator: str = None
) -> None
```

###### `delivery_stream_name`<sup>Optional</sup> <a name="delivery_stream_name" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putFirehose.parameter.deliveryStreamName"></a>

- *Type:* str

The name of the Kinesis Data Firehose delivery stream where the data is written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#delivery_stream_name IoteventsAlarmModel#delivery_stream_name}

---

###### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putFirehose.parameter.payload"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a>

You can configure the action payload when you send a message to an Amazon Data Firehose delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

###### `separator`<sup>Optional</sup> <a name="separator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putFirehose.parameter.separator"></a>

- *Type:* str

A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream.

Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#separator IoteventsAlarmModel#separator}

---

##### `put_iot_events` <a name="put_iot_events" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotEvents"></a>

```python
def put_iot_events(
  input_name: str = None,
  payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload = None
) -> None
```

###### `input_name`<sup>Optional</sup> <a name="input_name" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotEvents.parameter.inputName"></a>

- *Type:* str

The name of the ITE input where the data is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#input_name IoteventsAlarmModel#input_name}

---

###### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotEvents.parameter.payload"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a>

You can configure the action payload when you send a message to an ITE input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

##### `put_iot_site_wise` <a name="put_iot_site_wise" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotSiteWise"></a>

```python
def put_iot_site_wise(
  asset_id: str = None,
  entry_id: str = None,
  property_alias: str = None,
  property_id: str = None,
  property_value: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue = None
) -> None
```

###### `asset_id`<sup>Optional</sup> <a name="asset_id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotSiteWise.parameter.assetId"></a>

- *Type:* str

The ID of the asset that has the specified property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#asset_id IoteventsAlarmModel#asset_id}

---

###### `entry_id`<sup>Optional</sup> <a name="entry_id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotSiteWise.parameter.entryId"></a>

- *Type:* str

A unique identifier for this entry.

You can use the entry ID to track which data entry causes an error in case of failure. The default is a new unique identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#entry_id IoteventsAlarmModel#entry_id}

---

###### `property_alias`<sup>Optional</sup> <a name="property_alias" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotSiteWise.parameter.propertyAlias"></a>

- *Type:* str

The alias of the asset property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#property_alias IoteventsAlarmModel#property_alias}

---

###### `property_id`<sup>Optional</sup> <a name="property_id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotSiteWise.parameter.propertyId"></a>

- *Type:* str

The ID of the asset property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#property_id IoteventsAlarmModel#property_id}

---

###### `property_value`<sup>Optional</sup> <a name="property_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotSiteWise.parameter.propertyValue"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a>

The value to send to the asset property. This value contains timestamp, quality, and value (TQV) information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#property_value IoteventsAlarmModel#property_value}

---

##### `put_iot_topic_publish` <a name="put_iot_topic_publish" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotTopicPublish"></a>

```python
def put_iot_topic_publish(
  mqtt_topic: str = None,
  payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload = None
) -> None
```

###### `mqtt_topic`<sup>Optional</sup> <a name="mqtt_topic" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotTopicPublish.parameter.mqttTopic"></a>

- *Type:* str

The MQTT topic of the message.

You can use a string expression that includes variables (`$variable.<variable-name>`) and input values (`$input.<input-name>.<path-to-datum>`) as the topic string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#mqtt_topic IoteventsAlarmModel#mqtt_topic}

---

###### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotTopicPublish.parameter.payload"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a>

You can configure the action payload when you publish a message to an IoTCore topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

##### `put_lambda` <a name="put_lambda" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putLambda"></a>

```python
def put_lambda(
  function_arn: str = None,
  payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload = None
) -> None
```

###### `function_arn`<sup>Optional</sup> <a name="function_arn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putLambda.parameter.functionArn"></a>

- *Type:* str

The ARN of the Lambda function that is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#function_arn IoteventsAlarmModel#function_arn}

---

###### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putLambda.parameter.payload"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a>

You can configure the action payload when you send a message to a Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

##### `put_sns` <a name="put_sns" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSns"></a>

```python
def put_sns(
  payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload = None,
  target_arn: str = None
) -> None
```

###### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSns.parameter.payload"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a>

You can configure the action payload when you send a message as an Amazon SNS push notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

###### `target_arn`<sup>Optional</sup> <a name="target_arn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSns.parameter.targetArn"></a>

- *Type:* str

The ARN of the Amazon SNS target where the message is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#target_arn IoteventsAlarmModel#target_arn}

---

##### `put_sqs` <a name="put_sqs" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSqs"></a>

```python
def put_sqs(
  payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload = None,
  queue_url: str = None,
  use_base64: bool | IResolvable = None
) -> None
```

###### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSqs.parameter.payload"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a>

You can configure the action payload when you send a message to an Amazon SQS queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

###### `queue_url`<sup>Optional</sup> <a name="queue_url" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSqs.parameter.queueUrl"></a>

- *Type:* str

The URL of the SQS queue where the data is written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#queue_url IoteventsAlarmModel#queue_url}

---

###### `use_base64`<sup>Optional</sup> <a name="use_base64" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSqs.parameter.useBase64"></a>

- *Type:* bool | cdktn.IResolvable

Set this to TRUE if you want the data to be base-64 encoded before it is written to the queue.

Otherwise, set this to FALSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#use_base_64 IoteventsAlarmModel#use_base_64}

---

##### `reset_dynamo_db` <a name="reset_dynamo_db" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetDynamoDb"></a>

```python
def reset_dynamo_db() -> None
```

##### `reset_dynamo_d_bv2` <a name="reset_dynamo_d_bv2" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetDynamoDBv2"></a>

```python
def reset_dynamo_d_bv2() -> None
```

##### `reset_firehose` <a name="reset_firehose" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetFirehose"></a>

```python
def reset_firehose() -> None
```

##### `reset_iot_events` <a name="reset_iot_events" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetIotEvents"></a>

```python
def reset_iot_events() -> None
```

##### `reset_iot_site_wise` <a name="reset_iot_site_wise" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetIotSiteWise"></a>

```python
def reset_iot_site_wise() -> None
```

##### `reset_iot_topic_publish` <a name="reset_iot_topic_publish" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetIotTopicPublish"></a>

```python
def reset_iot_topic_publish() -> None
```

##### `reset_lambda` <a name="reset_lambda" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetLambda"></a>

```python
def reset_lambda() -> None
```

##### `reset_sns` <a name="reset_sns" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetSns"></a>

```python
def reset_sns() -> None
```

##### `reset_sqs` <a name="reset_sqs" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetSqs"></a>

```python
def reset_sqs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDb">dynamo_db</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDBv2">dynamo_d_bv2</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.firehose">firehose</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotEvents">iot_events</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotSiteWise">iot_site_wise</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotTopicPublish">iot_topic_publish</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.lambda">lambda</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sns">sns</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sqs">sqs</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDbInput">dynamo_db_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDBv2Input">dynamo_d_bv2_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.firehoseInput">firehose_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotEventsInput">iot_events_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotSiteWiseInput">iot_site_wise_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotTopicPublishInput">iot_topic_publish_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.lambdaInput">lambda_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.snsInput">sns_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns">IoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sqsInput">sqs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dynamo_db`<sup>Required</sup> <a name="dynamo_db" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDb"></a>

```python
dynamo_db: IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference</a>

---

##### `dynamo_d_bv2`<sup>Required</sup> <a name="dynamo_d_bv2" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDBv2"></a>

```python
dynamo_d_bv2: IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference</a>

---

##### `firehose`<sup>Required</sup> <a name="firehose" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.firehose"></a>

```python
firehose: IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference</a>

---

##### `iot_events`<sup>Required</sup> <a name="iot_events" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotEvents"></a>

```python
iot_events: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference</a>

---

##### `iot_site_wise`<sup>Required</sup> <a name="iot_site_wise" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotSiteWise"></a>

```python
iot_site_wise: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference</a>

---

##### `iot_topic_publish`<sup>Required</sup> <a name="iot_topic_publish" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotTopicPublish"></a>

```python
iot_topic_publish: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference</a>

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.lambda"></a>

```python
lambda: IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference</a>

---

##### `sns`<sup>Required</sup> <a name="sns" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sns"></a>

```python
sns: IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference</a>

---

##### `sqs`<sup>Required</sup> <a name="sqs" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sqs"></a>

```python
sqs: IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference</a>

---

##### `dynamo_db_input`<sup>Optional</sup> <a name="dynamo_db_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDbInput"></a>

```python
dynamo_db_input: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb</a>

---

##### `dynamo_d_bv2_input`<sup>Optional</sup> <a name="dynamo_d_bv2_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDBv2Input"></a>

```python
dynamo_d_bv2_input: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2</a>

---

##### `firehose_input`<sup>Optional</sup> <a name="firehose_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.firehoseInput"></a>

```python
firehose_input: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a>

---

##### `iot_events_input`<sup>Optional</sup> <a name="iot_events_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotEventsInput"></a>

```python
iot_events_input: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a>

---

##### `iot_site_wise_input`<sup>Optional</sup> <a name="iot_site_wise_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotSiteWiseInput"></a>

```python
iot_site_wise_input: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise</a>

---

##### `iot_topic_publish_input`<sup>Optional</sup> <a name="iot_topic_publish_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotTopicPublishInput"></a>

```python
iot_topic_publish_input: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a>

---

##### `lambda_input`<sup>Optional</sup> <a name="lambda_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.lambdaInput"></a>

```python
lambda_input: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a>

---

##### `sns_input`<sup>Optional</sup> <a name="sns_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.snsInput"></a>

```python
sns_input: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsSns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns">IoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a>

---

##### `sqs_input`<sup>Optional</sup> <a name="sqs_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sqsInput"></a>

```python
sqs_input: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.putPayload">put_payload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resetPayload">reset_payload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resetTargetArn">reset_target_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_payload` <a name="put_payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.putPayload"></a>

```python
def put_payload(
  content_expression: str = None,
  type: str = None
) -> None
```

###### `content_expression`<sup>Optional</sup> <a name="content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.putPayload.parameter.contentExpression"></a>

- *Type:* str

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.putPayload.parameter.type"></a>

- *Type:* str

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

##### `reset_payload` <a name="reset_payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resetPayload"></a>

```python
def reset_payload() -> None
```

##### `reset_target_arn` <a name="reset_target_arn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resetTargetArn"></a>

```python
def reset_target_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.payloadInput">payload_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.targetArnInput">target_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.targetArn">target_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns">IoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.payload"></a>

```python
payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference</a>

---

##### `payload_input`<sup>Optional</sup> <a name="payload_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.payloadInput"></a>

```python
payload_input: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a>

---

##### `target_arn_input`<sup>Optional</sup> <a name="target_arn_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.targetArnInput"></a>

```python
target_arn_input: str
```

- *Type:* str

---

##### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.targetArn"></a>

```python
target_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsSns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns">IoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resetContentExpression">reset_content_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content_expression` <a name="reset_content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resetContentExpression"></a>

```python
def reset_content_expression() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.contentExpressionInput">content_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.contentExpression">content_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_expression_input`<sup>Optional</sup> <a name="content_expression_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.contentExpressionInput"></a>

```python
content_expression_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `content_expression`<sup>Required</sup> <a name="content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.contentExpression"></a>

```python
content_expression: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.putPayload">put_payload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resetPayload">reset_payload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resetQueueUrl">reset_queue_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resetUseBase64">reset_use_base64</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_payload` <a name="put_payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.putPayload"></a>

```python
def put_payload(
  content_expression: str = None,
  type: str = None
) -> None
```

###### `content_expression`<sup>Optional</sup> <a name="content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.putPayload.parameter.contentExpression"></a>

- *Type:* str

The content of the payload.

You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.putPayload.parameter.type"></a>

- *Type:* str

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

##### `reset_payload` <a name="reset_payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resetPayload"></a>

```python
def reset_payload() -> None
```

##### `reset_queue_url` <a name="reset_queue_url" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resetQueueUrl"></a>

```python
def reset_queue_url() -> None
```

##### `reset_use_base64` <a name="reset_use_base64" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resetUseBase64"></a>

```python
def reset_use_base64() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.payloadInput">payload_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.queueUrlInput">queue_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.useBase64Input">use_base64_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.queueUrl">queue_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.useBase64">use_base64</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.payload"></a>

```python
payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference</a>

---

##### `payload_input`<sup>Optional</sup> <a name="payload_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.payloadInput"></a>

```python
payload_input: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a>

---

##### `queue_url_input`<sup>Optional</sup> <a name="queue_url_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.queueUrlInput"></a>

```python
queue_url_input: str
```

- *Type:* str

---

##### `use_base64_input`<sup>Optional</sup> <a name="use_base64_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.useBase64Input"></a>

```python
use_base64_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `queue_url`<sup>Required</sup> <a name="queue_url" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.queueUrl"></a>

```python
queue_url: str
```

- *Type:* str

---

##### `use_base64`<sup>Required</sup> <a name="use_base64" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.useBase64"></a>

```python
use_base64: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resetContentExpression">reset_content_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content_expression` <a name="reset_content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resetContentExpression"></a>

```python
def reset_content_expression() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.contentExpressionInput">content_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.contentExpression">content_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_expression_input`<sup>Optional</sup> <a name="content_expression_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.contentExpressionInput"></a>

```python
content_expression_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `content_expression`<sup>Required</sup> <a name="content_expression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.contentExpression"></a>

```python
content_expression: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a>

---


### IoteventsAlarmModelAlarmEventActionsOutputReference <a name="IoteventsAlarmModelAlarmEventActionsOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.putAlarmActions">put_alarm_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.resetAlarmActions">reset_alarm_actions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_alarm_actions` <a name="put_alarm_actions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.putAlarmActions"></a>

```python
def put_alarm_actions(
  value: IResolvable | typing.List[IoteventsAlarmModelAlarmEventActionsAlarmActions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.putAlarmActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>]

---

##### `reset_alarm_actions` <a name="reset_alarm_actions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.resetAlarmActions"></a>

```python
def reset_alarm_actions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.alarmActions">alarm_actions</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList">IoteventsAlarmModelAlarmEventActionsAlarmActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.alarmActionsInput">alarm_actions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarm_actions`<sup>Required</sup> <a name="alarm_actions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.alarmActions"></a>

```python
alarm_actions: IoteventsAlarmModelAlarmEventActionsAlarmActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList">IoteventsAlarmModelAlarmEventActionsAlarmActionsList</a>

---

##### `alarm_actions_input`<sup>Optional</sup> <a name="alarm_actions_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.alarmActionsInput"></a>

```python
alarm_actions_input: IResolvable | typing.List[IoteventsAlarmModelAlarmEventActionsAlarmActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IoteventsAlarmModelAlarmEventActions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a>

---


### IoteventsAlarmModelAlarmRuleOutputReference <a name="IoteventsAlarmModelAlarmRuleOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.putSimpleRule">put_simple_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.resetSimpleRule">reset_simple_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_simple_rule` <a name="put_simple_rule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.putSimpleRule"></a>

```python
def put_simple_rule(
  comparison_operator: str = None,
  input_property: str = None,
  threshold: str = None
) -> None
```

###### `comparison_operator`<sup>Optional</sup> <a name="comparison_operator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.putSimpleRule.parameter.comparisonOperator"></a>

- *Type:* str

The comparison operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#comparison_operator IoteventsAlarmModel#comparison_operator}

---

###### `input_property`<sup>Optional</sup> <a name="input_property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.putSimpleRule.parameter.inputProperty"></a>

- *Type:* str

The value on the left side of the comparison operator.

You can specify an ITE input attribute as an input property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#input_property IoteventsAlarmModel#input_property}

---

###### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.putSimpleRule.parameter.threshold"></a>

- *Type:* str

The value on the right side of the comparison operator.

You can enter a number or specify an ITE input attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotevents_alarm_model#threshold IoteventsAlarmModel#threshold}

---

##### `reset_simple_rule` <a name="reset_simple_rule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.resetSimpleRule"></a>

```python
def reset_simple_rule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.simpleRule">simple_rule</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference">IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.simpleRuleInput">simple_rule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule">IoteventsAlarmModelAlarmRuleSimpleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `simple_rule`<sup>Required</sup> <a name="simple_rule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.simpleRule"></a>

```python
simple_rule: IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference">IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference</a>

---

##### `simple_rule_input`<sup>Optional</sup> <a name="simple_rule_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.simpleRuleInput"></a>

```python
simple_rule_input: IResolvable | IoteventsAlarmModelAlarmRuleSimpleRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule">IoteventsAlarmModelAlarmRuleSimpleRule</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IoteventsAlarmModelAlarmRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a>

---


### IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference <a name="IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resetComparisonOperator">reset_comparison_operator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resetInputProperty">reset_input_property</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resetThreshold">reset_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comparison_operator` <a name="reset_comparison_operator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resetComparisonOperator"></a>

```python
def reset_comparison_operator() -> None
```

##### `reset_input_property` <a name="reset_input_property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resetInputProperty"></a>

```python
def reset_input_property() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resetThreshold"></a>

```python
def reset_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.inputPropertyInput">input_property_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.thresholdInput">threshold_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.inputProperty">input_property</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.threshold">threshold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule">IoteventsAlarmModelAlarmRuleSimpleRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `input_property_input`<sup>Optional</sup> <a name="input_property_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.inputPropertyInput"></a>

```python
input_property_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.thresholdInput"></a>

```python
threshold_input: str
```

- *Type:* str

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `input_property`<sup>Required</sup> <a name="input_property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.inputProperty"></a>

```python
input_property: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.threshold"></a>

```python
threshold: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IoteventsAlarmModelAlarmRuleSimpleRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule">IoteventsAlarmModelAlarmRuleSimpleRule</a>

---


### IoteventsAlarmModelTagsList <a name="IoteventsAlarmModelTagsList" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IoteventsAlarmModelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IoteventsAlarmModelTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>]

---


### IoteventsAlarmModelTagsOutputReference <a name="IoteventsAlarmModelTagsOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotevents_alarm_model

ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IoteventsAlarmModelTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>

---



