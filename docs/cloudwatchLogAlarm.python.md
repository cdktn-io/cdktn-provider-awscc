# `cloudwatchLogAlarm` Submodule <a name="`cloudwatchLogAlarm` Submodule" id="@cdktn/provider-awscc.cloudwatchLogAlarm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchLogAlarm <a name="CloudwatchLogAlarm" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm awscc_cloudwatch_log_alarm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_log_alarm

cloudwatchLogAlarm.CloudwatchLogAlarm(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  comparison_operator: str,
  query_results_to_alarm: typing.Union[int, float],
  query_results_to_evaluate: typing.Union[int, float],
  scheduled_query_configuration: CloudwatchLogAlarmScheduledQueryConfiguration,
  threshold: typing.Union[int, float],
  action_log_line_count: typing.Union[int, float] = None,
  action_log_line_role_arn: str = None,
  actions_enabled: bool | IResolvable = None,
  alarm_actions: typing.List[str] = None,
  alarm_description: str = None,
  alarm_name: str = None,
  insufficient_data_actions: typing.List[str] = None,
  ok_actions: typing.List[str] = None,
  tags: IResolvable | typing.List[CloudwatchLogAlarmTags] = None,
  treat_missing_data: str = None,
  warm_up_configuration: CloudwatchLogAlarmWarmUpConfiguration = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.comparisonOperator">comparison_operator</a></code> | <code>str</code> | The arithmetic operation to use when comparing the specified threshold and the query results. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.queryResultsToAlarm">query_results_to_alarm</a></code> | <code>typing.Union[int, float]</code> | The number of query results that must be breaching to trigger the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.queryResultsToEvaluate">query_results_to_evaluate</a></code> | <code>typing.Union[int, float]</code> | The number of query results over which data is compared to the specified threshold. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.scheduledQueryConfiguration">scheduled_query_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a></code> | The scheduled query configuration for the log alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | The value to compare against the results of the scheduled query evaluation. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.actionLogLineCount">action_log_line_count</a></code> | <code>typing.Union[int, float]</code> | The number of log lines to include in alarm notifications. Valid values are 0 to 50. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.actionLogLineRoleArn">action_log_line_role_arn</a></code> | <code>str</code> | The ARN of the IAM role that grants CloudWatch permissions to fetch log lines for alarm notifications. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.actionsEnabled">actions_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.alarmActions">alarm_actions</a></code> | <code>typing.List[str]</code> | The list of actions to execute when this alarm transitions into an ALARM state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.alarmDescription">alarm_description</a></code> | <code>str</code> | The description of the log alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.alarmName">alarm_name</a></code> | <code>str</code> | The name of the log alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.insufficientDataActions">insufficient_data_actions</a></code> | <code>typing.List[str]</code> | The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.okActions">ok_actions</a></code> | <code>typing.List[str]</code> | The actions to execute when this alarm transitions to the OK state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>]</code> | A list of key-value pairs to associate with the log alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.treatMissingData">treat_missing_data</a></code> | <code>str</code> | Sets how this alarm is to handle missing data points. Valid values are breaching, notBreaching, ignore, and missing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.warmUpConfiguration">warm_up_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration">CloudwatchLogAlarmWarmUpConfiguration</a></code> | The warm-up configuration for the alarm. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.comparisonOperator"></a>

- *Type:* str

The arithmetic operation to use when comparing the specified threshold and the query results.

Valid values are GreaterThanOrEqualToThreshold, GreaterThanThreshold, LessThanThreshold, and LessThanOrEqualToThreshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#comparison_operator CloudwatchLogAlarm#comparison_operator}

---

##### `query_results_to_alarm`<sup>Required</sup> <a name="query_results_to_alarm" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.queryResultsToAlarm"></a>

- *Type:* typing.Union[int, float]

The number of query results that must be breaching to trigger the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#query_results_to_alarm CloudwatchLogAlarm#query_results_to_alarm}

---

##### `query_results_to_evaluate`<sup>Required</sup> <a name="query_results_to_evaluate" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.queryResultsToEvaluate"></a>

- *Type:* typing.Union[int, float]

The number of query results over which data is compared to the specified threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#query_results_to_evaluate CloudwatchLogAlarm#query_results_to_evaluate}

---

##### `scheduled_query_configuration`<sup>Required</sup> <a name="scheduled_query_configuration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.scheduledQueryConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a>

The scheduled query configuration for the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#scheduled_query_configuration CloudwatchLogAlarm#scheduled_query_configuration}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.threshold"></a>

- *Type:* typing.Union[int, float]

The value to compare against the results of the scheduled query evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#threshold CloudwatchLogAlarm#threshold}

---

##### `action_log_line_count`<sup>Optional</sup> <a name="action_log_line_count" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.actionLogLineCount"></a>

- *Type:* typing.Union[int, float]

The number of log lines to include in alarm notifications. Valid values are 0 to 50.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#action_log_line_count CloudwatchLogAlarm#action_log_line_count}

---

##### `action_log_line_role_arn`<sup>Optional</sup> <a name="action_log_line_role_arn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.actionLogLineRoleArn"></a>

- *Type:* str

The ARN of the IAM role that grants CloudWatch permissions to fetch log lines for alarm notifications.

Required when ActionLogLineCount is greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#action_log_line_role_arn CloudwatchLogAlarm#action_log_line_role_arn}

---

##### `actions_enabled`<sup>Optional</sup> <a name="actions_enabled" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.actionsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#actions_enabled CloudwatchLogAlarm#actions_enabled}

---

##### `alarm_actions`<sup>Optional</sup> <a name="alarm_actions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.alarmActions"></a>

- *Type:* typing.List[str]

The list of actions to execute when this alarm transitions into an ALARM state from any other state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#alarm_actions CloudwatchLogAlarm#alarm_actions}

---

##### `alarm_description`<sup>Optional</sup> <a name="alarm_description" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.alarmDescription"></a>

- *Type:* str

The description of the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#alarm_description CloudwatchLogAlarm#alarm_description}

---

##### `alarm_name`<sup>Optional</sup> <a name="alarm_name" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.alarmName"></a>

- *Type:* str

The name of the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#alarm_name CloudwatchLogAlarm#alarm_name}

---

##### `insufficient_data_actions`<sup>Optional</sup> <a name="insufficient_data_actions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.insufficientDataActions"></a>

- *Type:* typing.List[str]

The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#insufficient_data_actions CloudwatchLogAlarm#insufficient_data_actions}

---

##### `ok_actions`<sup>Optional</sup> <a name="ok_actions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.okActions"></a>

- *Type:* typing.List[str]

The actions to execute when this alarm transitions to the OK state from any other state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#ok_actions CloudwatchLogAlarm#ok_actions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>]

A list of key-value pairs to associate with the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#tags CloudwatchLogAlarm#tags}

---

##### `treat_missing_data`<sup>Optional</sup> <a name="treat_missing_data" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.treatMissingData"></a>

- *Type:* str

Sets how this alarm is to handle missing data points. Valid values are breaching, notBreaching, ignore, and missing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#treat_missing_data CloudwatchLogAlarm#treat_missing_data}

---

##### `warm_up_configuration`<sup>Optional</sup> <a name="warm_up_configuration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.warmUpConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration">CloudwatchLogAlarmWarmUpConfiguration</a>

The warm-up configuration for the alarm.

During the warm-up period, the alarm stays in INSUFFICIENT_DATA and doesn't perform alarm actions. For more information, see Alarm warm-up periods in the Amazon CloudWatch User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#warm_up_configuration CloudwatchLogAlarm#warm_up_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putScheduledQueryConfiguration">put_scheduled_query_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putWarmUpConfiguration">put_warm_up_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetActionLogLineCount">reset_action_log_line_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetActionLogLineRoleArn">reset_action_log_line_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetActionsEnabled">reset_actions_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetAlarmActions">reset_alarm_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetAlarmDescription">reset_alarm_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetAlarmName">reset_alarm_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetInsufficientDataActions">reset_insufficient_data_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetOkActions">reset_ok_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetTreatMissingData">reset_treat_missing_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetWarmUpConfiguration">reset_warm_up_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_scheduled_query_configuration` <a name="put_scheduled_query_configuration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putScheduledQueryConfiguration"></a>

```python
def put_scheduled_query_configuration(
  aggregation_expression: str,
  query_string: str,
  schedule_configuration: CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration,
  scheduled_query_role_arn: str,
  log_group_identifiers: typing.List[str] = None,
  tags: IResolvable | typing.List[CloudwatchLogAlarmScheduledQueryConfigurationTags] = None
) -> None
```

###### `aggregation_expression`<sup>Required</sup> <a name="aggregation_expression" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putScheduledQueryConfiguration.parameter.aggregationExpression"></a>

- *Type:* str

The aggregation expression for the scheduled query, e.g. count(*) or avg(latency) by host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#aggregation_expression CloudwatchLogAlarm#aggregation_expression}

---

###### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putScheduledQueryConfiguration.parameter.queryString"></a>

- *Type:* str

The query string to execute against the specified log groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#query_string CloudwatchLogAlarm#query_string}

---

###### `schedule_configuration`<sup>Required</sup> <a name="schedule_configuration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putScheduledQueryConfiguration.parameter.scheduleConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a>

The schedule configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#schedule_configuration CloudwatchLogAlarm#schedule_configuration}

---

###### `scheduled_query_role_arn`<sup>Required</sup> <a name="scheduled_query_role_arn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putScheduledQueryConfiguration.parameter.scheduledQueryRoleArn"></a>

- *Type:* str

The ARN of the IAM role that grants permissions to execute the scheduled query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#scheduled_query_role_arn CloudwatchLogAlarm#scheduled_query_role_arn}

---

###### `log_group_identifiers`<sup>Optional</sup> <a name="log_group_identifiers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putScheduledQueryConfiguration.parameter.logGroupIdentifiers"></a>

- *Type:* typing.List[str]

The log groups to query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#log_group_identifiers CloudwatchLogAlarm#log_group_identifiers}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putScheduledQueryConfiguration.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>]

A list of key-value pairs to associate with the scheduled query that backs the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#tags CloudwatchLogAlarm#tags}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CloudwatchLogAlarmTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>]

---

##### `put_warm_up_configuration` <a name="put_warm_up_configuration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putWarmUpConfiguration"></a>

```python
def put_warm_up_configuration(
  only_start_evaluating_after_warm_up_period_ends: bool | IResolvable = None,
  warm_up_period_duration_in_minutes: typing.Union[int, float] = None
) -> None
```

###### `only_start_evaluating_after_warm_up_period_ends`<sup>Optional</sup> <a name="only_start_evaluating_after_warm_up_period_ends" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putWarmUpConfiguration.parameter.onlyStartEvaluatingAfterWarmUpPeriodEnds"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the alarm waits for the full warm-up period before it starts evaluating.

If true, the alarm waits the entire WarmUpPeriodDurationInMinutes before it starts evaluating, even if metric data arrives earlier. If false, the alarm ends the warm-up period early and starts evaluating as soon as it has enough metric data to fill its evaluation window. This is the default behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#only_start_evaluating_after_warm_up_period_ends CloudwatchLogAlarm#only_start_evaluating_after_warm_up_period_ends}

---

###### `warm_up_period_duration_in_minutes`<sup>Optional</sup> <a name="warm_up_period_duration_in_minutes" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putWarmUpConfiguration.parameter.warmUpPeriodDurationInMinutes"></a>

- *Type:* typing.Union[int, float]

The length of the warm-up period, in minutes.

For this duration after you create or update the alarm, the alarm stays in INSUFFICIENT_DATA and doesn't perform alarm actions. Valid values range from 1 to 2,880 minutes (2 days). You can change this value while the alarm is still in its warm-up period. Changes have no effect after the warm-up period ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#warm_up_period_duration_in_minutes CloudwatchLogAlarm#warm_up_period_duration_in_minutes}

---

##### `reset_action_log_line_count` <a name="reset_action_log_line_count" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetActionLogLineCount"></a>

```python
def reset_action_log_line_count() -> None
```

##### `reset_action_log_line_role_arn` <a name="reset_action_log_line_role_arn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetActionLogLineRoleArn"></a>

```python
def reset_action_log_line_role_arn() -> None
```

##### `reset_actions_enabled` <a name="reset_actions_enabled" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetActionsEnabled"></a>

```python
def reset_actions_enabled() -> None
```

##### `reset_alarm_actions` <a name="reset_alarm_actions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetAlarmActions"></a>

```python
def reset_alarm_actions() -> None
```

##### `reset_alarm_description` <a name="reset_alarm_description" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetAlarmDescription"></a>

```python
def reset_alarm_description() -> None
```

##### `reset_alarm_name` <a name="reset_alarm_name" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetAlarmName"></a>

```python
def reset_alarm_name() -> None
```

##### `reset_insufficient_data_actions` <a name="reset_insufficient_data_actions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetInsufficientDataActions"></a>

```python
def reset_insufficient_data_actions() -> None
```

##### `reset_ok_actions` <a name="reset_ok_actions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetOkActions"></a>

```python
def reset_ok_actions() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_treat_missing_data` <a name="reset_treat_missing_data" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetTreatMissingData"></a>

```python
def reset_treat_missing_data() -> None
```

##### `reset_warm_up_configuration` <a name="reset_warm_up_configuration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetWarmUpConfiguration"></a>

```python
def reset_warm_up_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudwatchLogAlarm resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isConstruct"></a>

```python
from cdktn_provider_awscc import cloudwatch_log_alarm

cloudwatchLogAlarm.CloudwatchLogAlarm.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cloudwatch_log_alarm

cloudwatchLogAlarm.CloudwatchLogAlarm.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cloudwatch_log_alarm

cloudwatchLogAlarm.CloudwatchLogAlarm.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cloudwatch_log_alarm

cloudwatchLogAlarm.CloudwatchLogAlarm.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudwatchLogAlarm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudwatchLogAlarm to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudwatchLogAlarm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchLogAlarm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.scheduledQueryConfiguration">scheduled_query_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference">CloudwatchLogAlarmScheduledQueryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList">CloudwatchLogAlarmTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.warmUpConfiguration">warm_up_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference">CloudwatchLogAlarmWarmUpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineCountInput">action_log_line_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineRoleArnInput">action_log_line_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionsEnabledInput">actions_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmActionsInput">alarm_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmDescriptionInput">alarm_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmNameInput">alarm_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.insufficientDataActionsInput">insufficient_data_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.okActionsInput">ok_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToAlarmInput">query_results_to_alarm_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToEvaluateInput">query_results_to_evaluate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.scheduledQueryConfigurationInput">scheduled_query_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.treatMissingDataInput">treat_missing_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.warmUpConfigurationInput">warm_up_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration">CloudwatchLogAlarmWarmUpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineCount">action_log_line_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineRoleArn">action_log_line_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionsEnabled">actions_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmActions">alarm_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmDescription">alarm_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmName">alarm_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.insufficientDataActions">insufficient_data_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.okActions">ok_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToAlarm">query_results_to_alarm</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToEvaluate">query_results_to_evaluate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.treatMissingData">treat_missing_data</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `scheduled_query_configuration`<sup>Required</sup> <a name="scheduled_query_configuration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.scheduledQueryConfiguration"></a>

```python
scheduled_query_configuration: CloudwatchLogAlarmScheduledQueryConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference">CloudwatchLogAlarmScheduledQueryConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.tags"></a>

```python
tags: CloudwatchLogAlarmTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList">CloudwatchLogAlarmTagsList</a>

---

##### `warm_up_configuration`<sup>Required</sup> <a name="warm_up_configuration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.warmUpConfiguration"></a>

```python
warm_up_configuration: CloudwatchLogAlarmWarmUpConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference">CloudwatchLogAlarmWarmUpConfigurationOutputReference</a>

---

##### `action_log_line_count_input`<sup>Optional</sup> <a name="action_log_line_count_input" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineCountInput"></a>

```python
action_log_line_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `action_log_line_role_arn_input`<sup>Optional</sup> <a name="action_log_line_role_arn_input" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineRoleArnInput"></a>

```python
action_log_line_role_arn_input: str
```

- *Type:* str

---

##### `actions_enabled_input`<sup>Optional</sup> <a name="actions_enabled_input" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionsEnabledInput"></a>

```python
actions_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `alarm_actions_input`<sup>Optional</sup> <a name="alarm_actions_input" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmActionsInput"></a>

```python
alarm_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alarm_description_input`<sup>Optional</sup> <a name="alarm_description_input" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmDescriptionInput"></a>

```python
alarm_description_input: str
```

- *Type:* str

---

##### `alarm_name_input`<sup>Optional</sup> <a name="alarm_name_input" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmNameInput"></a>

```python
alarm_name_input: str
```

- *Type:* str

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `insufficient_data_actions_input`<sup>Optional</sup> <a name="insufficient_data_actions_input" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.insufficientDataActionsInput"></a>

```python
insufficient_data_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ok_actions_input`<sup>Optional</sup> <a name="ok_actions_input" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.okActionsInput"></a>

```python
ok_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_results_to_alarm_input`<sup>Optional</sup> <a name="query_results_to_alarm_input" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToAlarmInput"></a>

```python
query_results_to_alarm_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `query_results_to_evaluate_input`<sup>Optional</sup> <a name="query_results_to_evaluate_input" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToEvaluateInput"></a>

```python
query_results_to_evaluate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scheduled_query_configuration_input`<sup>Optional</sup> <a name="scheduled_query_configuration_input" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.scheduledQueryConfigurationInput"></a>

```python
scheduled_query_configuration_input: IResolvable | CloudwatchLogAlarmScheduledQueryConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CloudwatchLogAlarmTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>]

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `treat_missing_data_input`<sup>Optional</sup> <a name="treat_missing_data_input" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.treatMissingDataInput"></a>

```python
treat_missing_data_input: str
```

- *Type:* str

---

##### `warm_up_configuration_input`<sup>Optional</sup> <a name="warm_up_configuration_input" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.warmUpConfigurationInput"></a>

```python
warm_up_configuration_input: IResolvable | CloudwatchLogAlarmWarmUpConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration">CloudwatchLogAlarmWarmUpConfiguration</a>

---

##### `action_log_line_count`<sup>Required</sup> <a name="action_log_line_count" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineCount"></a>

```python
action_log_line_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `action_log_line_role_arn`<sup>Required</sup> <a name="action_log_line_role_arn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineRoleArn"></a>

```python
action_log_line_role_arn: str
```

- *Type:* str

---

##### `actions_enabled`<sup>Required</sup> <a name="actions_enabled" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionsEnabled"></a>

```python
actions_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `alarm_actions`<sup>Required</sup> <a name="alarm_actions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmActions"></a>

```python
alarm_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alarm_description`<sup>Required</sup> <a name="alarm_description" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmDescription"></a>

```python
alarm_description: str
```

- *Type:* str

---

##### `alarm_name`<sup>Required</sup> <a name="alarm_name" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmName"></a>

```python
alarm_name: str
```

- *Type:* str

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `insufficient_data_actions`<sup>Required</sup> <a name="insufficient_data_actions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.insufficientDataActions"></a>

```python
insufficient_data_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ok_actions`<sup>Required</sup> <a name="ok_actions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.okActions"></a>

```python
ok_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_results_to_alarm`<sup>Required</sup> <a name="query_results_to_alarm" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToAlarm"></a>

```python
query_results_to_alarm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `query_results_to_evaluate`<sup>Required</sup> <a name="query_results_to_evaluate" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToEvaluate"></a>

```python
query_results_to_evaluate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `treat_missing_data`<sup>Required</sup> <a name="treat_missing_data" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.treatMissingData"></a>

```python
treat_missing_data: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchLogAlarmConfig <a name="CloudwatchLogAlarmConfig" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_log_alarm

cloudwatchLogAlarm.CloudwatchLogAlarmConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  comparison_operator: str,
  query_results_to_alarm: typing.Union[int, float],
  query_results_to_evaluate: typing.Union[int, float],
  scheduled_query_configuration: CloudwatchLogAlarmScheduledQueryConfiguration,
  threshold: typing.Union[int, float],
  action_log_line_count: typing.Union[int, float] = None,
  action_log_line_role_arn: str = None,
  actions_enabled: bool | IResolvable = None,
  alarm_actions: typing.List[str] = None,
  alarm_description: str = None,
  alarm_name: str = None,
  insufficient_data_actions: typing.List[str] = None,
  ok_actions: typing.List[str] = None,
  tags: IResolvable | typing.List[CloudwatchLogAlarmTags] = None,
  treat_missing_data: str = None,
  warm_up_configuration: CloudwatchLogAlarmWarmUpConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | The arithmetic operation to use when comparing the specified threshold and the query results. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.queryResultsToAlarm">query_results_to_alarm</a></code> | <code>typing.Union[int, float]</code> | The number of query results that must be breaching to trigger the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.queryResultsToEvaluate">query_results_to_evaluate</a></code> | <code>typing.Union[int, float]</code> | The number of query results over which data is compared to the specified threshold. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.scheduledQueryConfiguration">scheduled_query_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a></code> | The scheduled query configuration for the log alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | The value to compare against the results of the scheduled query evaluation. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.actionLogLineCount">action_log_line_count</a></code> | <code>typing.Union[int, float]</code> | The number of log lines to include in alarm notifications. Valid values are 0 to 50. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.actionLogLineRoleArn">action_log_line_role_arn</a></code> | <code>str</code> | The ARN of the IAM role that grants CloudWatch permissions to fetch log lines for alarm notifications. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.actionsEnabled">actions_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.alarmActions">alarm_actions</a></code> | <code>typing.List[str]</code> | The list of actions to execute when this alarm transitions into an ALARM state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.alarmDescription">alarm_description</a></code> | <code>str</code> | The description of the log alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.alarmName">alarm_name</a></code> | <code>str</code> | The name of the log alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.insufficientDataActions">insufficient_data_actions</a></code> | <code>typing.List[str]</code> | The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.okActions">ok_actions</a></code> | <code>typing.List[str]</code> | The actions to execute when this alarm transitions to the OK state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>]</code> | A list of key-value pairs to associate with the log alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.treatMissingData">treat_missing_data</a></code> | <code>str</code> | Sets how this alarm is to handle missing data points. Valid values are breaching, notBreaching, ignore, and missing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.warmUpConfiguration">warm_up_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration">CloudwatchLogAlarmWarmUpConfiguration</a></code> | The warm-up configuration for the alarm. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

The arithmetic operation to use when comparing the specified threshold and the query results.

Valid values are GreaterThanOrEqualToThreshold, GreaterThanThreshold, LessThanThreshold, and LessThanOrEqualToThreshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#comparison_operator CloudwatchLogAlarm#comparison_operator}

---

##### `query_results_to_alarm`<sup>Required</sup> <a name="query_results_to_alarm" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.queryResultsToAlarm"></a>

```python
query_results_to_alarm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of query results that must be breaching to trigger the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#query_results_to_alarm CloudwatchLogAlarm#query_results_to_alarm}

---

##### `query_results_to_evaluate`<sup>Required</sup> <a name="query_results_to_evaluate" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.queryResultsToEvaluate"></a>

```python
query_results_to_evaluate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of query results over which data is compared to the specified threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#query_results_to_evaluate CloudwatchLogAlarm#query_results_to_evaluate}

---

##### `scheduled_query_configuration`<sup>Required</sup> <a name="scheduled_query_configuration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.scheduledQueryConfiguration"></a>

```python
scheduled_query_configuration: CloudwatchLogAlarmScheduledQueryConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a>

The scheduled query configuration for the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#scheduled_query_configuration CloudwatchLogAlarm#scheduled_query_configuration}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value to compare against the results of the scheduled query evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#threshold CloudwatchLogAlarm#threshold}

---

##### `action_log_line_count`<sup>Optional</sup> <a name="action_log_line_count" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.actionLogLineCount"></a>

```python
action_log_line_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of log lines to include in alarm notifications. Valid values are 0 to 50.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#action_log_line_count CloudwatchLogAlarm#action_log_line_count}

---

##### `action_log_line_role_arn`<sup>Optional</sup> <a name="action_log_line_role_arn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.actionLogLineRoleArn"></a>

```python
action_log_line_role_arn: str
```

- *Type:* str

The ARN of the IAM role that grants CloudWatch permissions to fetch log lines for alarm notifications.

Required when ActionLogLineCount is greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#action_log_line_role_arn CloudwatchLogAlarm#action_log_line_role_arn}

---

##### `actions_enabled`<sup>Optional</sup> <a name="actions_enabled" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.actionsEnabled"></a>

```python
actions_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#actions_enabled CloudwatchLogAlarm#actions_enabled}

---

##### `alarm_actions`<sup>Optional</sup> <a name="alarm_actions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.alarmActions"></a>

```python
alarm_actions: typing.List[str]
```

- *Type:* typing.List[str]

The list of actions to execute when this alarm transitions into an ALARM state from any other state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#alarm_actions CloudwatchLogAlarm#alarm_actions}

---

##### `alarm_description`<sup>Optional</sup> <a name="alarm_description" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.alarmDescription"></a>

```python
alarm_description: str
```

- *Type:* str

The description of the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#alarm_description CloudwatchLogAlarm#alarm_description}

---

##### `alarm_name`<sup>Optional</sup> <a name="alarm_name" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.alarmName"></a>

```python
alarm_name: str
```

- *Type:* str

The name of the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#alarm_name CloudwatchLogAlarm#alarm_name}

---

##### `insufficient_data_actions`<sup>Optional</sup> <a name="insufficient_data_actions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.insufficientDataActions"></a>

```python
insufficient_data_actions: typing.List[str]
```

- *Type:* typing.List[str]

The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#insufficient_data_actions CloudwatchLogAlarm#insufficient_data_actions}

---

##### `ok_actions`<sup>Optional</sup> <a name="ok_actions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.okActions"></a>

```python
ok_actions: typing.List[str]
```

- *Type:* typing.List[str]

The actions to execute when this alarm transitions to the OK state from any other state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#ok_actions CloudwatchLogAlarm#ok_actions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CloudwatchLogAlarmTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>]

A list of key-value pairs to associate with the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#tags CloudwatchLogAlarm#tags}

---

##### `treat_missing_data`<sup>Optional</sup> <a name="treat_missing_data" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.treatMissingData"></a>

```python
treat_missing_data: str
```

- *Type:* str

Sets how this alarm is to handle missing data points. Valid values are breaching, notBreaching, ignore, and missing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#treat_missing_data CloudwatchLogAlarm#treat_missing_data}

---

##### `warm_up_configuration`<sup>Optional</sup> <a name="warm_up_configuration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.warmUpConfiguration"></a>

```python
warm_up_configuration: CloudwatchLogAlarmWarmUpConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration">CloudwatchLogAlarmWarmUpConfiguration</a>

The warm-up configuration for the alarm.

During the warm-up period, the alarm stays in INSUFFICIENT_DATA and doesn't perform alarm actions. For more information, see Alarm warm-up periods in the Amazon CloudWatch User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#warm_up_configuration CloudwatchLogAlarm#warm_up_configuration}

---

### CloudwatchLogAlarmScheduledQueryConfiguration <a name="CloudwatchLogAlarmScheduledQueryConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_log_alarm

cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration(
  aggregation_expression: str,
  query_string: str,
  schedule_configuration: CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration,
  scheduled_query_role_arn: str,
  log_group_identifiers: typing.List[str] = None,
  tags: IResolvable | typing.List[CloudwatchLogAlarmScheduledQueryConfigurationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.aggregationExpression">aggregation_expression</a></code> | <code>str</code> | The aggregation expression for the scheduled query, e.g. count(*) or avg(latency) by host. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.queryString">query_string</a></code> | <code>str</code> | The query string to execute against the specified log groups. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.scheduleConfiguration">schedule_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a></code> | The schedule configuration. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.scheduledQueryRoleArn">scheduled_query_role_arn</a></code> | <code>str</code> | The ARN of the IAM role that grants permissions to execute the scheduled query. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.logGroupIdentifiers">log_group_identifiers</a></code> | <code>typing.List[str]</code> | The log groups to query. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>]</code> | A list of key-value pairs to associate with the scheduled query that backs the log alarm. |

---

##### `aggregation_expression`<sup>Required</sup> <a name="aggregation_expression" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.aggregationExpression"></a>

```python
aggregation_expression: str
```

- *Type:* str

The aggregation expression for the scheduled query, e.g. count(*) or avg(latency) by host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#aggregation_expression CloudwatchLogAlarm#aggregation_expression}

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.queryString"></a>

```python
query_string: str
```

- *Type:* str

The query string to execute against the specified log groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#query_string CloudwatchLogAlarm#query_string}

---

##### `schedule_configuration`<sup>Required</sup> <a name="schedule_configuration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.scheduleConfiguration"></a>

```python
schedule_configuration: CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a>

The schedule configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#schedule_configuration CloudwatchLogAlarm#schedule_configuration}

---

##### `scheduled_query_role_arn`<sup>Required</sup> <a name="scheduled_query_role_arn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.scheduledQueryRoleArn"></a>

```python
scheduled_query_role_arn: str
```

- *Type:* str

The ARN of the IAM role that grants permissions to execute the scheduled query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#scheduled_query_role_arn CloudwatchLogAlarm#scheduled_query_role_arn}

---

##### `log_group_identifiers`<sup>Optional</sup> <a name="log_group_identifiers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.logGroupIdentifiers"></a>

```python
log_group_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

The log groups to query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#log_group_identifiers CloudwatchLogAlarm#log_group_identifiers}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.tags"></a>

```python
tags: IResolvable | typing.List[CloudwatchLogAlarmScheduledQueryConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>]

A list of key-value pairs to associate with the scheduled query that backs the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#tags CloudwatchLogAlarm#tags}

---

### CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration <a name="CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_log_alarm

cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration(
  schedule_expression: str,
  start_time_offset: typing.Union[int, float],
  end_time_offset: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | The expression that defines when the scheduled query runs, e.g. rate(1 minute). |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.property.startTimeOffset">start_time_offset</a></code> | <code>typing.Union[int, float]</code> | The number of seconds into the past to start the query window. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.property.endTimeOffset">end_time_offset</a></code> | <code>typing.Union[int, float]</code> | The number of seconds into the past to end the query window. |

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

The expression that defines when the scheduled query runs, e.g. rate(1 minute).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#schedule_expression CloudwatchLogAlarm#schedule_expression}

---

##### `start_time_offset`<sup>Required</sup> <a name="start_time_offset" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.property.startTimeOffset"></a>

```python
start_time_offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of seconds into the past to start the query window.

Must be a positive value and cannot exceed 2592000 seconds (30 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#start_time_offset CloudwatchLogAlarm#start_time_offset}

---

##### `end_time_offset`<sup>Optional</sup> <a name="end_time_offset" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.property.endTimeOffset"></a>

```python
end_time_offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of seconds into the past to end the query window.

Must be a non-negative value and cannot exceed 2592000 seconds (30 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#end_time_offset CloudwatchLogAlarm#end_time_offset}

---

### CloudwatchLogAlarmScheduledQueryConfigurationTags <a name="CloudwatchLogAlarmScheduledQueryConfigurationTags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_log_alarm

cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags.property.key">key</a></code> | <code>str</code> | A unique identifier for the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags.property.value">value</a></code> | <code>str</code> | The value for the specified tag key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags.property.key"></a>

```python
key: str
```

- *Type:* str

A unique identifier for the tag.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#key CloudwatchLogAlarm#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#value CloudwatchLogAlarm#value}

---

### CloudwatchLogAlarmTags <a name="CloudwatchLogAlarmTags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_log_alarm

cloudwatchLogAlarm.CloudwatchLogAlarmTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags.property.key">key</a></code> | <code>str</code> | A unique identifier for the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags.property.value">value</a></code> | <code>str</code> | The value for the specified tag key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags.property.key"></a>

```python
key: str
```

- *Type:* str

A unique identifier for the tag.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#key CloudwatchLogAlarm#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#value CloudwatchLogAlarm#value}

---

### CloudwatchLogAlarmWarmUpConfiguration <a name="CloudwatchLogAlarmWarmUpConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_log_alarm

cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration(
  only_start_evaluating_after_warm_up_period_ends: bool | IResolvable = None,
  warm_up_period_duration_in_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration.property.onlyStartEvaluatingAfterWarmUpPeriodEnds">only_start_evaluating_after_warm_up_period_ends</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the alarm waits for the full warm-up period before it starts evaluating. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration.property.warmUpPeriodDurationInMinutes">warm_up_period_duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | The length of the warm-up period, in minutes. |

---

##### `only_start_evaluating_after_warm_up_period_ends`<sup>Optional</sup> <a name="only_start_evaluating_after_warm_up_period_ends" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration.property.onlyStartEvaluatingAfterWarmUpPeriodEnds"></a>

```python
only_start_evaluating_after_warm_up_period_ends: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the alarm waits for the full warm-up period before it starts evaluating.

If true, the alarm waits the entire WarmUpPeriodDurationInMinutes before it starts evaluating, even if metric data arrives earlier. If false, the alarm ends the warm-up period early and starts evaluating as soon as it has enough metric data to fill its evaluation window. This is the default behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#only_start_evaluating_after_warm_up_period_ends CloudwatchLogAlarm#only_start_evaluating_after_warm_up_period_ends}

---

##### `warm_up_period_duration_in_minutes`<sup>Optional</sup> <a name="warm_up_period_duration_in_minutes" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration.property.warmUpPeriodDurationInMinutes"></a>

```python
warm_up_period_duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The length of the warm-up period, in minutes.

For this duration after you create or update the alarm, the alarm stays in INSUFFICIENT_DATA and doesn't perform alarm actions. Valid values range from 1 to 2,880 minutes (2 days). You can change this value while the alarm is still in its warm-up period. Changes have no effect after the warm-up period ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#warm_up_period_duration_in_minutes CloudwatchLogAlarm#warm_up_period_duration_in_minutes}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchLogAlarmScheduledQueryConfigurationOutputReference <a name="CloudwatchLogAlarmScheduledQueryConfigurationOutputReference" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_log_alarm

cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putScheduleConfiguration">put_schedule_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resetLogGroupIdentifiers">reset_log_group_identifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schedule_configuration` <a name="put_schedule_configuration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putScheduleConfiguration"></a>

```python
def put_schedule_configuration(
  schedule_expression: str,
  start_time_offset: typing.Union[int, float],
  end_time_offset: typing.Union[int, float] = None
) -> None
```

###### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putScheduleConfiguration.parameter.scheduleExpression"></a>

- *Type:* str

The expression that defines when the scheduled query runs, e.g. rate(1 minute).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#schedule_expression CloudwatchLogAlarm#schedule_expression}

---

###### `start_time_offset`<sup>Required</sup> <a name="start_time_offset" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putScheduleConfiguration.parameter.startTimeOffset"></a>

- *Type:* typing.Union[int, float]

The number of seconds into the past to start the query window.

Must be a positive value and cannot exceed 2592000 seconds (30 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#start_time_offset CloudwatchLogAlarm#start_time_offset}

---

###### `end_time_offset`<sup>Optional</sup> <a name="end_time_offset" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putScheduleConfiguration.parameter.endTimeOffset"></a>

- *Type:* typing.Union[int, float]

The number of seconds into the past to end the query window.

Must be a non-negative value and cannot exceed 2592000 seconds (30 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#end_time_offset CloudwatchLogAlarm#end_time_offset}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CloudwatchLogAlarmScheduledQueryConfigurationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>]

---

##### `reset_log_group_identifiers` <a name="reset_log_group_identifiers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resetLogGroupIdentifiers"></a>

```python
def reset_log_group_identifiers() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduleConfiguration">schedule_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList">CloudwatchLogAlarmScheduledQueryConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.aggregationExpressionInput">aggregation_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.logGroupIdentifiersInput">log_group_identifiers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.queryStringInput">query_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduleConfigurationInput">schedule_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduledQueryRoleArnInput">scheduled_query_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.aggregationExpression">aggregation_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.logGroupIdentifiers">log_group_identifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.queryString">query_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduledQueryRoleArn">scheduled_query_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule_configuration`<sup>Required</sup> <a name="schedule_configuration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduleConfiguration"></a>

```python
schedule_configuration: CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.tags"></a>

```python
tags: CloudwatchLogAlarmScheduledQueryConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList">CloudwatchLogAlarmScheduledQueryConfigurationTagsList</a>

---

##### `aggregation_expression_input`<sup>Optional</sup> <a name="aggregation_expression_input" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.aggregationExpressionInput"></a>

```python
aggregation_expression_input: str
```

- *Type:* str

---

##### `log_group_identifiers_input`<sup>Optional</sup> <a name="log_group_identifiers_input" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.logGroupIdentifiersInput"></a>

```python
log_group_identifiers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_string_input`<sup>Optional</sup> <a name="query_string_input" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.queryStringInput"></a>

```python
query_string_input: str
```

- *Type:* str

---

##### `schedule_configuration_input`<sup>Optional</sup> <a name="schedule_configuration_input" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduleConfigurationInput"></a>

```python
schedule_configuration_input: IResolvable | CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a>

---

##### `scheduled_query_role_arn_input`<sup>Optional</sup> <a name="scheduled_query_role_arn_input" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduledQueryRoleArnInput"></a>

```python
scheduled_query_role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CloudwatchLogAlarmScheduledQueryConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>]

---

##### `aggregation_expression`<sup>Required</sup> <a name="aggregation_expression" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.aggregationExpression"></a>

```python
aggregation_expression: str
```

- *Type:* str

---

##### `log_group_identifiers`<sup>Required</sup> <a name="log_group_identifiers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.logGroupIdentifiers"></a>

```python
log_group_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.queryString"></a>

```python
query_string: str
```

- *Type:* str

---

##### `scheduled_query_role_arn`<sup>Required</sup> <a name="scheduled_query_role_arn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduledQueryRoleArn"></a>

```python
scheduled_query_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchLogAlarmScheduledQueryConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a>

---


### CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference <a name="CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_log_alarm

cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.resetEndTimeOffset">reset_end_time_offset</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end_time_offset` <a name="reset_end_time_offset" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.resetEndTimeOffset"></a>

```python
def reset_end_time_offset() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.endTimeOffsetInput">end_time_offset_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.scheduleExpressionInput">schedule_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.startTimeOffsetInput">start_time_offset_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.endTimeOffset">end_time_offset</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.startTimeOffset">start_time_offset</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time_offset_input`<sup>Optional</sup> <a name="end_time_offset_input" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.endTimeOffsetInput"></a>

```python
end_time_offset_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schedule_expression_input`<sup>Optional</sup> <a name="schedule_expression_input" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.scheduleExpressionInput"></a>

```python
schedule_expression_input: str
```

- *Type:* str

---

##### `start_time_offset_input`<sup>Optional</sup> <a name="start_time_offset_input" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.startTimeOffsetInput"></a>

```python
start_time_offset_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_time_offset`<sup>Required</sup> <a name="end_time_offset" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.endTimeOffset"></a>

```python
end_time_offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

---

##### `start_time_offset`<sup>Required</sup> <a name="start_time_offset" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.startTimeOffset"></a>

```python
start_time_offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a>

---


### CloudwatchLogAlarmScheduledQueryConfigurationTagsList <a name="CloudwatchLogAlarmScheduledQueryConfigurationTagsList" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_log_alarm

cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchLogAlarmScheduledQueryConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>]

---


### CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference <a name="CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_log_alarm

cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchLogAlarmScheduledQueryConfigurationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>

---


### CloudwatchLogAlarmTagsList <a name="CloudwatchLogAlarmTagsList" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_log_alarm

cloudwatchLogAlarm.CloudwatchLogAlarmTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchLogAlarmTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchLogAlarmTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>]

---


### CloudwatchLogAlarmTagsOutputReference <a name="CloudwatchLogAlarmTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_log_alarm

cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchLogAlarmTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>

---


### CloudwatchLogAlarmWarmUpConfigurationOutputReference <a name="CloudwatchLogAlarmWarmUpConfigurationOutputReference" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_log_alarm

cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.resetOnlyStartEvaluatingAfterWarmUpPeriodEnds">reset_only_start_evaluating_after_warm_up_period_ends</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.resetWarmUpPeriodDurationInMinutes">reset_warm_up_period_duration_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_only_start_evaluating_after_warm_up_period_ends` <a name="reset_only_start_evaluating_after_warm_up_period_ends" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.resetOnlyStartEvaluatingAfterWarmUpPeriodEnds"></a>

```python
def reset_only_start_evaluating_after_warm_up_period_ends() -> None
```

##### `reset_warm_up_period_duration_in_minutes` <a name="reset_warm_up_period_duration_in_minutes" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.resetWarmUpPeriodDurationInMinutes"></a>

```python
def reset_warm_up_period_duration_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.onlyStartEvaluatingAfterWarmUpPeriodEndsInput">only_start_evaluating_after_warm_up_period_ends_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.warmUpPeriodDurationInMinutesInput">warm_up_period_duration_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.onlyStartEvaluatingAfterWarmUpPeriodEnds">only_start_evaluating_after_warm_up_period_ends</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.warmUpPeriodDurationInMinutes">warm_up_period_duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration">CloudwatchLogAlarmWarmUpConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `only_start_evaluating_after_warm_up_period_ends_input`<sup>Optional</sup> <a name="only_start_evaluating_after_warm_up_period_ends_input" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.onlyStartEvaluatingAfterWarmUpPeriodEndsInput"></a>

```python
only_start_evaluating_after_warm_up_period_ends_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `warm_up_period_duration_in_minutes_input`<sup>Optional</sup> <a name="warm_up_period_duration_in_minutes_input" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.warmUpPeriodDurationInMinutesInput"></a>

```python
warm_up_period_duration_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `only_start_evaluating_after_warm_up_period_ends`<sup>Required</sup> <a name="only_start_evaluating_after_warm_up_period_ends" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.onlyStartEvaluatingAfterWarmUpPeriodEnds"></a>

```python
only_start_evaluating_after_warm_up_period_ends: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `warm_up_period_duration_in_minutes`<sup>Required</sup> <a name="warm_up_period_duration_in_minutes" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.warmUpPeriodDurationInMinutes"></a>

```python
warm_up_period_duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchLogAlarmWarmUpConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration">CloudwatchLogAlarmWarmUpConfiguration</a>

---



