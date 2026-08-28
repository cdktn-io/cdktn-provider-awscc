# `lightsailAlarm` Submodule <a name="`lightsailAlarm` Submodule" id="@cdktn/provider-awscc.lightsailAlarm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailAlarm <a name="LightsailAlarm" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_alarm awscc_lightsail_alarm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_alarm

lightsailAlarm.LightsailAlarm(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  alarm_name: str,
  comparison_operator: str,
  evaluation_periods: typing.Union[int, float],
  metric_name: str,
  monitored_resource_name: str,
  threshold: typing.Union[int, float],
  contact_protocols: typing.List[str] = None,
  datapoints_to_alarm: typing.Union[int, float] = None,
  notification_enabled: bool | IResolvable = None,
  notification_triggers: typing.List[str] = None,
  treat_missing_data: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.alarmName">alarm_name</a></code> | <code>str</code> | The name for the alarm. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.comparisonOperator">comparison_operator</a></code> | <code>str</code> | The arithmetic operation to use when comparing the specified statistic to the threshold. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | The number of most recent periods over which data is compared to the specified threshold. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.metricName">metric_name</a></code> | <code>str</code> | The name of the metric to associate with the alarm. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.monitoredResourceName">monitored_resource_name</a></code> | <code>str</code> | The name of the Lightsail resource that the alarm monitors. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | The value against which the specified statistic is compared. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.contactProtocols">contact_protocols</a></code> | <code>typing.List[str]</code> | The contact protocols to use for the alarm, such as Email, SMS (text messaging), or both. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.datapointsToAlarm">datapoints_to_alarm</a></code> | <code>typing.Union[int, float]</code> | The number of data points that must be not within the specified threshold to trigger the alarm. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.notificationEnabled">notification_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the alarm is enabled. Notifications are enabled by default if you don't specify this parameter. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.notificationTriggers">notification_triggers</a></code> | <code>typing.List[str]</code> | The alarm states that trigger a notification. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.treatMissingData">treat_missing_data</a></code> | <code>str</code> | Sets how this alarm will handle missing data points. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alarm_name`<sup>Required</sup> <a name="alarm_name" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.alarmName"></a>

- *Type:* str

The name for the alarm.

Specify the name of an existing alarm to update, and overwrite the previous configuration of the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_alarm#alarm_name LightsailAlarm#alarm_name}

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.comparisonOperator"></a>

- *Type:* str

The arithmetic operation to use when comparing the specified statistic to the threshold.

The specified statistic value is used as the first operand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_alarm#comparison_operator LightsailAlarm#comparison_operator}

---

##### `evaluation_periods`<sup>Required</sup> <a name="evaluation_periods" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.evaluationPeriods"></a>

- *Type:* typing.Union[int, float]

The number of most recent periods over which data is compared to the specified threshold.

If you are setting an "M out of N" alarm, this value (evaluationPeriods) is the N.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_alarm#evaluation_periods LightsailAlarm#evaluation_periods}

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.metricName"></a>

- *Type:* str

The name of the metric to associate with the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_alarm#metric_name LightsailAlarm#metric_name}

---

##### `monitored_resource_name`<sup>Required</sup> <a name="monitored_resource_name" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.monitoredResourceName"></a>

- *Type:* str

The name of the Lightsail resource that the alarm monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_alarm#monitored_resource_name LightsailAlarm#monitored_resource_name}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.threshold"></a>

- *Type:* typing.Union[int, float]

The value against which the specified statistic is compared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_alarm#threshold LightsailAlarm#threshold}

---

##### `contact_protocols`<sup>Optional</sup> <a name="contact_protocols" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.contactProtocols"></a>

- *Type:* typing.List[str]

The contact protocols to use for the alarm, such as Email, SMS (text messaging), or both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_alarm#contact_protocols LightsailAlarm#contact_protocols}

---

##### `datapoints_to_alarm`<sup>Optional</sup> <a name="datapoints_to_alarm" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.datapointsToAlarm"></a>

- *Type:* typing.Union[int, float]

The number of data points that must be not within the specified threshold to trigger the alarm.

If you are setting an "M out of N" alarm, this value (datapointsToAlarm) is the M.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_alarm#datapoints_to_alarm LightsailAlarm#datapoints_to_alarm}

---

##### `notification_enabled`<sup>Optional</sup> <a name="notification_enabled" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.notificationEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether the alarm is enabled. Notifications are enabled by default if you don't specify this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_alarm#notification_enabled LightsailAlarm#notification_enabled}

---

##### `notification_triggers`<sup>Optional</sup> <a name="notification_triggers" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.notificationTriggers"></a>

- *Type:* typing.List[str]

The alarm states that trigger a notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_alarm#notification_triggers LightsailAlarm#notification_triggers}

---

##### `treat_missing_data`<sup>Optional</sup> <a name="treat_missing_data" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.treatMissingData"></a>

- *Type:* str

Sets how this alarm will handle missing data points.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_alarm#treat_missing_data LightsailAlarm#treat_missing_data}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetContactProtocols">reset_contact_protocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetDatapointsToAlarm">reset_datapoints_to_alarm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetNotificationEnabled">reset_notification_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetNotificationTriggers">reset_notification_triggers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetTreatMissingData">reset_treat_missing_data</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_contact_protocols` <a name="reset_contact_protocols" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetContactProtocols"></a>

```python
def reset_contact_protocols() -> None
```

##### `reset_datapoints_to_alarm` <a name="reset_datapoints_to_alarm" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetDatapointsToAlarm"></a>

```python
def reset_datapoints_to_alarm() -> None
```

##### `reset_notification_enabled` <a name="reset_notification_enabled" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetNotificationEnabled"></a>

```python
def reset_notification_enabled() -> None
```

##### `reset_notification_triggers` <a name="reset_notification_triggers" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetNotificationTriggers"></a>

```python
def reset_notification_triggers() -> None
```

##### `reset_treat_missing_data` <a name="reset_treat_missing_data" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetTreatMissingData"></a>

```python
def reset_treat_missing_data() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LightsailAlarm resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isConstruct"></a>

```python
from cdktn_provider_awscc import lightsail_alarm

lightsailAlarm.LightsailAlarm.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isTerraformElement"></a>

```python
from cdktn_provider_awscc import lightsail_alarm

lightsailAlarm.LightsailAlarm.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isTerraformResource"></a>

```python
from cdktn_provider_awscc import lightsail_alarm

lightsailAlarm.LightsailAlarm.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import lightsail_alarm

lightsailAlarm.LightsailAlarm.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LightsailAlarm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LightsailAlarm to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LightsailAlarm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_alarm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LightsailAlarm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.alarmArn">alarm_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.alarmNameInput">alarm_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.contactProtocolsInput">contact_protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.datapointsToAlarmInput">datapoints_to_alarm_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.evaluationPeriodsInput">evaluation_periods_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.monitoredResourceNameInput">monitored_resource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationEnabledInput">notification_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationTriggersInput">notification_triggers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.treatMissingDataInput">treat_missing_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.alarmName">alarm_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.contactProtocols">contact_protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.datapointsToAlarm">datapoints_to_alarm</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.monitoredResourceName">monitored_resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationEnabled">notification_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationTriggers">notification_triggers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.treatMissingData">treat_missing_data</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alarm_arn`<sup>Required</sup> <a name="alarm_arn" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.alarmArn"></a>

```python
alarm_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `alarm_name_input`<sup>Optional</sup> <a name="alarm_name_input" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.alarmNameInput"></a>

```python
alarm_name_input: str
```

- *Type:* str

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `contact_protocols_input`<sup>Optional</sup> <a name="contact_protocols_input" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.contactProtocolsInput"></a>

```python
contact_protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `datapoints_to_alarm_input`<sup>Optional</sup> <a name="datapoints_to_alarm_input" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.datapointsToAlarmInput"></a>

```python
datapoints_to_alarm_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `evaluation_periods_input`<sup>Optional</sup> <a name="evaluation_periods_input" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.evaluationPeriodsInput"></a>

```python
evaluation_periods_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `monitored_resource_name_input`<sup>Optional</sup> <a name="monitored_resource_name_input" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.monitoredResourceNameInput"></a>

```python
monitored_resource_name_input: str
```

- *Type:* str

---

##### `notification_enabled_input`<sup>Optional</sup> <a name="notification_enabled_input" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationEnabledInput"></a>

```python
notification_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `notification_triggers_input`<sup>Optional</sup> <a name="notification_triggers_input" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationTriggersInput"></a>

```python
notification_triggers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `treat_missing_data_input`<sup>Optional</sup> <a name="treat_missing_data_input" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.treatMissingDataInput"></a>

```python
treat_missing_data_input: str
```

- *Type:* str

---

##### `alarm_name`<sup>Required</sup> <a name="alarm_name" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.alarmName"></a>

```python
alarm_name: str
```

- *Type:* str

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `contact_protocols`<sup>Required</sup> <a name="contact_protocols" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.contactProtocols"></a>

```python
contact_protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `datapoints_to_alarm`<sup>Required</sup> <a name="datapoints_to_alarm" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.datapointsToAlarm"></a>

```python
datapoints_to_alarm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `evaluation_periods`<sup>Required</sup> <a name="evaluation_periods" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `monitored_resource_name`<sup>Required</sup> <a name="monitored_resource_name" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.monitoredResourceName"></a>

```python
monitored_resource_name: str
```

- *Type:* str

---

##### `notification_enabled`<sup>Required</sup> <a name="notification_enabled" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationEnabled"></a>

```python
notification_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `notification_triggers`<sup>Required</sup> <a name="notification_triggers" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationTriggers"></a>

```python
notification_triggers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `treat_missing_data`<sup>Required</sup> <a name="treat_missing_data" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.treatMissingData"></a>

```python
treat_missing_data: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailAlarmConfig <a name="LightsailAlarmConfig" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_alarm

lightsailAlarm.LightsailAlarmConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  alarm_name: str,
  comparison_operator: str,
  evaluation_periods: typing.Union[int, float],
  metric_name: str,
  monitored_resource_name: str,
  threshold: typing.Union[int, float],
  contact_protocols: typing.List[str] = None,
  datapoints_to_alarm: typing.Union[int, float] = None,
  notification_enabled: bool | IResolvable = None,
  notification_triggers: typing.List[str] = None,
  treat_missing_data: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.alarmName">alarm_name</a></code> | <code>str</code> | The name for the alarm. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | The arithmetic operation to use when comparing the specified statistic to the threshold. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | The number of most recent periods over which data is compared to the specified threshold. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.metricName">metric_name</a></code> | <code>str</code> | The name of the metric to associate with the alarm. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.monitoredResourceName">monitored_resource_name</a></code> | <code>str</code> | The name of the Lightsail resource that the alarm monitors. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | The value against which the specified statistic is compared. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.contactProtocols">contact_protocols</a></code> | <code>typing.List[str]</code> | The contact protocols to use for the alarm, such as Email, SMS (text messaging), or both. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.datapointsToAlarm">datapoints_to_alarm</a></code> | <code>typing.Union[int, float]</code> | The number of data points that must be not within the specified threshold to trigger the alarm. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.notificationEnabled">notification_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the alarm is enabled. Notifications are enabled by default if you don't specify this parameter. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.notificationTriggers">notification_triggers</a></code> | <code>typing.List[str]</code> | The alarm states that trigger a notification. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.treatMissingData">treat_missing_data</a></code> | <code>str</code> | Sets how this alarm will handle missing data points. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alarm_name`<sup>Required</sup> <a name="alarm_name" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.alarmName"></a>

```python
alarm_name: str
```

- *Type:* str

The name for the alarm.

Specify the name of an existing alarm to update, and overwrite the previous configuration of the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_alarm#alarm_name LightsailAlarm#alarm_name}

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

The arithmetic operation to use when comparing the specified statistic to the threshold.

The specified statistic value is used as the first operand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_alarm#comparison_operator LightsailAlarm#comparison_operator}

---

##### `evaluation_periods`<sup>Required</sup> <a name="evaluation_periods" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of most recent periods over which data is compared to the specified threshold.

If you are setting an "M out of N" alarm, this value (evaluationPeriods) is the N.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_alarm#evaluation_periods LightsailAlarm#evaluation_periods}

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

The name of the metric to associate with the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_alarm#metric_name LightsailAlarm#metric_name}

---

##### `monitored_resource_name`<sup>Required</sup> <a name="monitored_resource_name" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.monitoredResourceName"></a>

```python
monitored_resource_name: str
```

- *Type:* str

The name of the Lightsail resource that the alarm monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_alarm#monitored_resource_name LightsailAlarm#monitored_resource_name}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value against which the specified statistic is compared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_alarm#threshold LightsailAlarm#threshold}

---

##### `contact_protocols`<sup>Optional</sup> <a name="contact_protocols" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.contactProtocols"></a>

```python
contact_protocols: typing.List[str]
```

- *Type:* typing.List[str]

The contact protocols to use for the alarm, such as Email, SMS (text messaging), or both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_alarm#contact_protocols LightsailAlarm#contact_protocols}

---

##### `datapoints_to_alarm`<sup>Optional</sup> <a name="datapoints_to_alarm" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.datapointsToAlarm"></a>

```python
datapoints_to_alarm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of data points that must be not within the specified threshold to trigger the alarm.

If you are setting an "M out of N" alarm, this value (datapointsToAlarm) is the M.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_alarm#datapoints_to_alarm LightsailAlarm#datapoints_to_alarm}

---

##### `notification_enabled`<sup>Optional</sup> <a name="notification_enabled" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.notificationEnabled"></a>

```python
notification_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the alarm is enabled. Notifications are enabled by default if you don't specify this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_alarm#notification_enabled LightsailAlarm#notification_enabled}

---

##### `notification_triggers`<sup>Optional</sup> <a name="notification_triggers" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.notificationTriggers"></a>

```python
notification_triggers: typing.List[str]
```

- *Type:* typing.List[str]

The alarm states that trigger a notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_alarm#notification_triggers LightsailAlarm#notification_triggers}

---

##### `treat_missing_data`<sup>Optional</sup> <a name="treat_missing_data" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.treatMissingData"></a>

```python
treat_missing_data: str
```

- *Type:* str

Sets how this alarm will handle missing data points.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_alarm#treat_missing_data LightsailAlarm#treat_missing_data}

---



