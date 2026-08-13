# `cloudwatchAlarm` Submodule <a name="`cloudwatchAlarm` Submodule" id="@cdktn/provider-awscc.cloudwatchAlarm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchAlarm <a name="CloudwatchAlarm" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm awscc_cloudwatch_alarm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm

cloudwatchAlarm.CloudwatchAlarm(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  actions_enabled: bool | IResolvable = None,
  alarm_actions: typing.List[str] = None,
  alarm_description: str = None,
  alarm_name: str = None,
  comparison_operator: str = None,
  datapoints_to_alarm: typing.Union[int, float] = None,
  dimensions: IResolvable | typing.List[CloudwatchAlarmDimensions] = None,
  evaluate_low_sample_count_percentile: str = None,
  evaluation_criteria: CloudwatchAlarmEvaluationCriteria = None,
  evaluation_interval: typing.Union[int, float] = None,
  evaluation_periods: typing.Union[int, float] = None,
  evaluation_window: CloudwatchAlarmEvaluationWindow = None,
  extended_statistic: str = None,
  insufficient_data_actions: typing.List[str] = None,
  metric_name: str = None,
  metrics: IResolvable | typing.List[CloudwatchAlarmMetrics] = None,
  namespace: str = None,
  ok_actions: typing.List[str] = None,
  period: typing.Union[int, float] = None,
  statistic: str = None,
  tags: IResolvable | typing.List[CloudwatchAlarmTags] = None,
  threshold: typing.Union[int, float] = None,
  threshold_metric_id: str = None,
  treat_missing_data: str = None,
  unit: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.actionsEnabled">actions_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.alarmActions">alarm_actions</a></code> | <code>typing.List[str]</code> | The list of actions to execute when this alarm transitions into an ALARM state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.alarmDescription">alarm_description</a></code> | <code>str</code> | The description of the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.alarmName">alarm_name</a></code> | <code>str</code> | The name of the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.comparisonOperator">comparison_operator</a></code> | <code>str</code> | The arithmetic operation to use when comparing the specified statistic and threshold. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.datapointsToAlarm">datapoints_to_alarm</a></code> | <code>typing.Union[int, float]</code> | The number of datapoints that must be breaching to trigger the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.dimensions">dimensions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions">CloudwatchAlarmDimensions</a>]</code> | The dimensions for the metric associated with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.evaluateLowSampleCountPercentile">evaluate_low_sample_count_percentile</a></code> | <code>str</code> | Used only for alarms based on percentiles. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.evaluationCriteria">evaluation_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria">CloudwatchAlarmEvaluationCriteria</a></code> | The evaluation criteria for the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.evaluationInterval">evaluation_interval</a></code> | <code>typing.Union[int, float]</code> | The frequency, in seconds, at which the alarm is evaluated. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | The number of periods over which data is compared to the specified threshold. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.evaluationWindow">evaluation_window</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow">CloudwatchAlarmEvaluationWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#evaluation_window CloudwatchAlarm#evaluation_window}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.extendedStatistic">extended_statistic</a></code> | <code>str</code> | The percentile statistic for the metric associated with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.insufficientDataActions">insufficient_data_actions</a></code> | <code>typing.List[str]</code> | The actions to execute when this alarm transitions to the ``INSUFFICIENT_DATA`` state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.metricName">metric_name</a></code> | <code>str</code> | The name of the metric associated with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.metrics">metrics</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics">CloudwatchAlarmMetrics</a>]</code> | An array that enables you to create an alarm based on the result of a metric math expression. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | The namespace of the metric associated with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.okActions">ok_actions</a></code> | <code>typing.List[str]</code> | The actions to execute when this alarm transitions to the ``OK`` state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.period">period</a></code> | <code>typing.Union[int, float]</code> | The period, in seconds, over which the statistic is applied. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.statistic">statistic</a></code> | <code>str</code> | The statistic for the metric associated with the alarm, other than percentile. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags">CloudwatchAlarmTags</a>]</code> | A list of key-value pairs to associate with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | The value to compare with the specified statistic. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.thresholdMetricId">threshold_metric_id</a></code> | <code>str</code> | In an alarm based on an anomaly detection model, this is the ID of the ``ANOMALY_DETECTION_BAND`` function used as the threshold for the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.treatMissingData">treat_missing_data</a></code> | <code>str</code> | Sets how this alarm is to handle missing data points. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.unit">unit</a></code> | <code>str</code> | The unit of the metric associated with the alarm. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actions_enabled`<sup>Optional</sup> <a name="actions_enabled" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.actionsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#actions_enabled CloudwatchAlarm#actions_enabled}

---

##### `alarm_actions`<sup>Optional</sup> <a name="alarm_actions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.alarmActions"></a>

- *Type:* typing.List[str]

The list of actions to execute when this alarm transitions into an ALARM state from any other state.

Specify each action as an Amazon Resource Name (ARN). For more information about creating alarms and the actions that you can specify, see [PutMetricAlarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricAlarm.html) in the *API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#alarm_actions CloudwatchAlarm#alarm_actions}

---

##### `alarm_description`<sup>Optional</sup> <a name="alarm_description" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.alarmDescription"></a>

- *Type:* str

The description of the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#alarm_description CloudwatchAlarm#alarm_description}

---

##### `alarm_name`<sup>Optional</sup> <a name="alarm_name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.alarmName"></a>

- *Type:* str

The name of the alarm.

If you don't specify a name, CFN generates a unique physical ID and uses that ID for the alarm name.
If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#alarm_name CloudwatchAlarm#alarm_name}

---

##### `comparison_operator`<sup>Optional</sup> <a name="comparison_operator" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.comparisonOperator"></a>

- *Type:* str

The arithmetic operation to use when comparing the specified statistic and threshold.

The specified statistic value is used as the first operand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#comparison_operator CloudwatchAlarm#comparison_operator}

---

##### `datapoints_to_alarm`<sup>Optional</sup> <a name="datapoints_to_alarm" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.datapointsToAlarm"></a>

- *Type:* typing.Union[int, float]

The number of datapoints that must be breaching to trigger the alarm.

This is used only if you are setting an "M out of N" alarm. In that case, this value is the M, and the value that you set for `EvaluationPeriods` is the N value. For more information, see [Evaluating an Alarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation) in the *User Guide*.
If you omit this parameter, CW uses the same value here that you set for `EvaluationPeriods`, and the alarm goes to alarm state if that many consecutive periods are breaching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#datapoints_to_alarm CloudwatchAlarm#datapoints_to_alarm}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.dimensions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions">CloudwatchAlarmDimensions</a>]

The dimensions for the metric associated with the alarm.

For an alarm based on a math expression, you can't specify `Dimensions`. Instead, you use `Metrics`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#dimensions CloudwatchAlarm#dimensions}

---

##### `evaluate_low_sample_count_percentile`<sup>Optional</sup> <a name="evaluate_low_sample_count_percentile" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.evaluateLowSampleCountPercentile"></a>

- *Type:* str

Used only for alarms based on percentiles.

If `ignore`, the alarm state does not change during periods with too few data points to be statistically significant. If `evaluate` or this parameter is not used, the alarm is always evaluated and possibly changes state no matter how many data points are available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#evaluate_low_sample_count_percentile CloudwatchAlarm#evaluate_low_sample_count_percentile}

---

##### `evaluation_criteria`<sup>Optional</sup> <a name="evaluation_criteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.evaluationCriteria"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria">CloudwatchAlarmEvaluationCriteria</a>

The evaluation criteria for the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#evaluation_criteria CloudwatchAlarm#evaluation_criteria}

---

##### `evaluation_interval`<sup>Optional</sup> <a name="evaluation_interval" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.evaluationInterval"></a>

- *Type:* typing.Union[int, float]

The frequency, in seconds, at which the alarm is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#evaluation_interval CloudwatchAlarm#evaluation_interval}

---

##### `evaluation_periods`<sup>Optional</sup> <a name="evaluation_periods" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.evaluationPeriods"></a>

- *Type:* typing.Union[int, float]

The number of periods over which data is compared to the specified threshold.

If you are setting an alarm that requires that a number of consecutive data points be breaching to trigger the alarm, this value specifies that number. If you are setting an "M out of N" alarm, this value is the N, and `DatapointsToAlarm` is the M.
For more information, see [Evaluating an Alarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#evaluation_periods CloudwatchAlarm#evaluation_periods}

---

##### `evaluation_window`<sup>Optional</sup> <a name="evaluation_window" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.evaluationWindow"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow">CloudwatchAlarmEvaluationWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#evaluation_window CloudwatchAlarm#evaluation_window}.

---

##### `extended_statistic`<sup>Optional</sup> <a name="extended_statistic" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.extendedStatistic"></a>

- *Type:* str

The percentile statistic for the metric associated with the alarm.

Specify a value between p0.0 and p100.
For an alarm based on a metric, you must specify either `Statistic` or `ExtendedStatistic` but not both.
For an alarm based on a math expression, you can't specify `ExtendedStatistic`. Instead, you use `Metrics`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#extended_statistic CloudwatchAlarm#extended_statistic}

---

##### `insufficient_data_actions`<sup>Optional</sup> <a name="insufficient_data_actions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.insufficientDataActions"></a>

- *Type:* typing.List[str]

The actions to execute when this alarm transitions to the ``INSUFFICIENT_DATA`` state from any other state.

Each action is specified as an Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#insufficient_data_actions CloudwatchAlarm#insufficient_data_actions}

---

##### `metric_name`<sup>Optional</sup> <a name="metric_name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.metricName"></a>

- *Type:* str

The name of the metric associated with the alarm.

This is required for an alarm based on a metric. For an alarm based on a math expression, you use `Metrics` instead and you can't specify `MetricName`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#metric_name CloudwatchAlarm#metric_name}

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.metrics"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics">CloudwatchAlarmMetrics</a>]

An array that enables you to create an alarm based on the result of a metric math expression.

Each item in the array either retrieves a metric or performs a math expression.
If you specify the `Metrics` parameter, you cannot specify `MetricName`, `Dimensions`, `Period`, `Namespace`, `Statistic`, `ExtendedStatistic`, or `Unit`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#metrics CloudwatchAlarm#metrics}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.namespace"></a>

- *Type:* str

The namespace of the metric associated with the alarm.

This is required for an alarm based on a metric. For an alarm based on a math expression, you can't specify `Namespace` and you use `Metrics` instead.
For a list of namespaces for metrics from AWS services, see [Services That Publish Metrics.](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#namespace CloudwatchAlarm#namespace}

---

##### `ok_actions`<sup>Optional</sup> <a name="ok_actions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.okActions"></a>

- *Type:* typing.List[str]

The actions to execute when this alarm transitions to the ``OK`` state from any other state.

Each action is specified as an Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#ok_actions CloudwatchAlarm#ok_actions}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.period"></a>

- *Type:* typing.Union[int, float]

The period, in seconds, over which the statistic is applied.

This is required for an alarm based on a metric. Valid values are 10, 20, 30, 60, and any multiple of 60.
For an alarm based on a math expression, you can't specify `Period`, and instead you use the `Metrics` parameter.
*Minimum:* 10

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#period CloudwatchAlarm#period}

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.statistic"></a>

- *Type:* str

The statistic for the metric associated with the alarm, other than percentile.

For percentile statistics, use `ExtendedStatistic`.
For an alarm based on a metric, you must specify either `Statistic` or `ExtendedStatistic` but not both.
For an alarm based on a math expression, you can't specify `Statistic`. Instead, you use `Metrics`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#statistic CloudwatchAlarm#statistic}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags">CloudwatchAlarmTags</a>]

A list of key-value pairs to associate with the alarm.

You can associate as many as 50 tags with an alarm. To be able to associate tags with the alarm when you create the alarm, you must have the `cloudwatch:TagResource` permission.
Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#tags CloudwatchAlarm#tags}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.threshold"></a>

- *Type:* typing.Union[int, float]

The value to compare with the specified statistic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#threshold CloudwatchAlarm#threshold}

---

##### `threshold_metric_id`<sup>Optional</sup> <a name="threshold_metric_id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.thresholdMetricId"></a>

- *Type:* str

In an alarm based on an anomaly detection model, this is the ID of the ``ANOMALY_DETECTION_BAND`` function used as the threshold for the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#threshold_metric_id CloudwatchAlarm#threshold_metric_id}

---

##### `treat_missing_data`<sup>Optional</sup> <a name="treat_missing_data" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.treatMissingData"></a>

- *Type:* str

Sets how this alarm is to handle missing data points.

Valid values are `breaching`, `notBreaching`, `ignore`, and `missing`. For more information, see [Configuring How Alarms Treat Missing Data](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-missing-data) in the *Amazon User Guide*.
If you omit this parameter, the default behavior of `missing` is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#treat_missing_data CloudwatchAlarm#treat_missing_data}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.unit"></a>

- *Type:* str

The unit of the metric associated with the alarm.

Specify this only if you are creating an alarm based on a single metric. Do not specify this if you are specifying a `Metrics` array.
You can specify the following values: Seconds, Microseconds, Milliseconds, Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, Bits, Kilobits, Megabits, Gigabits, Terabits, Percent, Count, Bytes/Second, Kilobytes/Second, Megabytes/Second, Gigabytes/Second, Terabytes/Second, Bits/Second, Kilobits/Second, Megabits/Second, Gigabits/Second, Terabits/Second, Count/Second, or None.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#unit CloudwatchAlarm#unit}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putDimensions">put_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putEvaluationCriteria">put_evaluation_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putEvaluationWindow">put_evaluation_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putMetrics">put_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetActionsEnabled">reset_actions_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetAlarmActions">reset_alarm_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetAlarmDescription">reset_alarm_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetAlarmName">reset_alarm_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetComparisonOperator">reset_comparison_operator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetDatapointsToAlarm">reset_datapoints_to_alarm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluateLowSampleCountPercentile">reset_evaluate_low_sample_count_percentile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationCriteria">reset_evaluation_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationInterval">reset_evaluation_interval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationPeriods">reset_evaluation_periods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationWindow">reset_evaluation_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetExtendedStatistic">reset_extended_statistic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetInsufficientDataActions">reset_insufficient_data_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetMetricName">reset_metric_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetMetrics">reset_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetOkActions">reset_ok_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetStatistic">reset_statistic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetThreshold">reset_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetThresholdMetricId">reset_threshold_metric_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetTreatMissingData">reset_treat_missing_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetUnit">reset_unit</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_dimensions` <a name="put_dimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putDimensions"></a>

```python
def put_dimensions(
  value: IResolvable | typing.List[CloudwatchAlarmDimensions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putDimensions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions">CloudwatchAlarmDimensions</a>]

---

##### `put_evaluation_criteria` <a name="put_evaluation_criteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putEvaluationCriteria"></a>

```python
def put_evaluation_criteria(
  prom_ql_criteria: CloudwatchAlarmEvaluationCriteriaPromQlCriteria = None
) -> None
```

###### `prom_ql_criteria`<sup>Optional</sup> <a name="prom_ql_criteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putEvaluationCriteria.parameter.promQlCriteria"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria">CloudwatchAlarmEvaluationCriteriaPromQlCriteria</a>

The PromQL criteria for the alarm evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#prom_ql_criteria CloudwatchAlarm#prom_ql_criteria}

---

##### `put_evaluation_window` <a name="put_evaluation_window" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putEvaluationWindow"></a>

```python
def put_evaluation_window(
  sliding_window: str = None,
  wall_clock_window: CloudwatchAlarmEvaluationWindowWallClockWindow = None
) -> None
```

###### `sliding_window`<sup>Optional</sup> <a name="sliding_window" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putEvaluationWindow.parameter.slidingWindow"></a>

- *Type:* str

Configuration for sliding evaluation window (default behavior).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#sliding_window CloudwatchAlarm#sliding_window}

---

###### `wall_clock_window`<sup>Optional</sup> <a name="wall_clock_window" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putEvaluationWindow.parameter.wallClockWindow"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow">CloudwatchAlarmEvaluationWindowWallClockWindow</a>

Configuration for wall clock based evaluation window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#wall_clock_window CloudwatchAlarm#wall_clock_window}

---

##### `put_metrics` <a name="put_metrics" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putMetrics"></a>

```python
def put_metrics(
  value: IResolvable | typing.List[CloudwatchAlarmMetrics]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putMetrics.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics">CloudwatchAlarmMetrics</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CloudwatchAlarmTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags">CloudwatchAlarmTags</a>]

---

##### `reset_actions_enabled` <a name="reset_actions_enabled" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetActionsEnabled"></a>

```python
def reset_actions_enabled() -> None
```

##### `reset_alarm_actions` <a name="reset_alarm_actions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetAlarmActions"></a>

```python
def reset_alarm_actions() -> None
```

##### `reset_alarm_description` <a name="reset_alarm_description" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetAlarmDescription"></a>

```python
def reset_alarm_description() -> None
```

##### `reset_alarm_name` <a name="reset_alarm_name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetAlarmName"></a>

```python
def reset_alarm_name() -> None
```

##### `reset_comparison_operator` <a name="reset_comparison_operator" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetComparisonOperator"></a>

```python
def reset_comparison_operator() -> None
```

##### `reset_datapoints_to_alarm` <a name="reset_datapoints_to_alarm" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetDatapointsToAlarm"></a>

```python
def reset_datapoints_to_alarm() -> None
```

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_evaluate_low_sample_count_percentile` <a name="reset_evaluate_low_sample_count_percentile" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluateLowSampleCountPercentile"></a>

```python
def reset_evaluate_low_sample_count_percentile() -> None
```

##### `reset_evaluation_criteria` <a name="reset_evaluation_criteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationCriteria"></a>

```python
def reset_evaluation_criteria() -> None
```

##### `reset_evaluation_interval` <a name="reset_evaluation_interval" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationInterval"></a>

```python
def reset_evaluation_interval() -> None
```

##### `reset_evaluation_periods` <a name="reset_evaluation_periods" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationPeriods"></a>

```python
def reset_evaluation_periods() -> None
```

##### `reset_evaluation_window` <a name="reset_evaluation_window" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationWindow"></a>

```python
def reset_evaluation_window() -> None
```

##### `reset_extended_statistic` <a name="reset_extended_statistic" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetExtendedStatistic"></a>

```python
def reset_extended_statistic() -> None
```

##### `reset_insufficient_data_actions` <a name="reset_insufficient_data_actions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetInsufficientDataActions"></a>

```python
def reset_insufficient_data_actions() -> None
```

##### `reset_metric_name` <a name="reset_metric_name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetMetricName"></a>

```python
def reset_metric_name() -> None
```

##### `reset_metrics` <a name="reset_metrics" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetMetrics"></a>

```python
def reset_metrics() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_ok_actions` <a name="reset_ok_actions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetOkActions"></a>

```python
def reset_ok_actions() -> None
```

##### `reset_period` <a name="reset_period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_statistic` <a name="reset_statistic" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetStatistic"></a>

```python
def reset_statistic() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetThreshold"></a>

```python
def reset_threshold() -> None
```

##### `reset_threshold_metric_id` <a name="reset_threshold_metric_id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetThresholdMetricId"></a>

```python
def reset_threshold_metric_id() -> None
```

##### `reset_treat_missing_data` <a name="reset_treat_missing_data" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetTreatMissingData"></a>

```python
def reset_treat_missing_data() -> None
```

##### `reset_unit` <a name="reset_unit" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetUnit"></a>

```python
def reset_unit() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudwatchAlarm resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isConstruct"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm

cloudwatchAlarm.CloudwatchAlarm.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm

cloudwatchAlarm.CloudwatchAlarm.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm

cloudwatchAlarm.CloudwatchAlarm.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm

cloudwatchAlarm.CloudwatchAlarm.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudwatchAlarm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudwatchAlarm to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudwatchAlarm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchAlarm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList">CloudwatchAlarmDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationCriteria">evaluation_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference">CloudwatchAlarmEvaluationCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationWindow">evaluation_window</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference">CloudwatchAlarmEvaluationWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metrics">metrics</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList">CloudwatchAlarmMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList">CloudwatchAlarmTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.actionsEnabledInput">actions_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmActionsInput">alarm_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmDescriptionInput">alarm_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmNameInput">alarm_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.datapointsToAlarmInput">datapoints_to_alarm_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.dimensionsInput">dimensions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions">CloudwatchAlarmDimensions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluateLowSampleCountPercentileInput">evaluate_low_sample_count_percentile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationCriteriaInput">evaluation_criteria_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria">CloudwatchAlarmEvaluationCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationIntervalInput">evaluation_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationPeriodsInput">evaluation_periods_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationWindowInput">evaluation_window_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow">CloudwatchAlarmEvaluationWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.extendedStatisticInput">extended_statistic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.insufficientDataActionsInput">insufficient_data_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metricsInput">metrics_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics">CloudwatchAlarmMetrics</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.okActionsInput">ok_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.statisticInput">statistic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags">CloudwatchAlarmTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.thresholdMetricIdInput">threshold_metric_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.treatMissingDataInput">treat_missing_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.actionsEnabled">actions_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmActions">alarm_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmDescription">alarm_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmName">alarm_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.datapointsToAlarm">datapoints_to_alarm</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluateLowSampleCountPercentile">evaluate_low_sample_count_percentile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationInterval">evaluation_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.extendedStatistic">extended_statistic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.insufficientDataActions">insufficient_data_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.okActions">ok_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.statistic">statistic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.thresholdMetricId">threshold_metric_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.treatMissingData">treat_missing_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.unit">unit</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.dimensions"></a>

```python
dimensions: CloudwatchAlarmDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList">CloudwatchAlarmDimensionsList</a>

---

##### `evaluation_criteria`<sup>Required</sup> <a name="evaluation_criteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationCriteria"></a>

```python
evaluation_criteria: CloudwatchAlarmEvaluationCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference">CloudwatchAlarmEvaluationCriteriaOutputReference</a>

---

##### `evaluation_window`<sup>Required</sup> <a name="evaluation_window" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationWindow"></a>

```python
evaluation_window: CloudwatchAlarmEvaluationWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference">CloudwatchAlarmEvaluationWindowOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metrics"></a>

```python
metrics: CloudwatchAlarmMetricsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList">CloudwatchAlarmMetricsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.tags"></a>

```python
tags: CloudwatchAlarmTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList">CloudwatchAlarmTagsList</a>

---

##### `actions_enabled_input`<sup>Optional</sup> <a name="actions_enabled_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.actionsEnabledInput"></a>

```python
actions_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `alarm_actions_input`<sup>Optional</sup> <a name="alarm_actions_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmActionsInput"></a>

```python
alarm_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alarm_description_input`<sup>Optional</sup> <a name="alarm_description_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmDescriptionInput"></a>

```python
alarm_description_input: str
```

- *Type:* str

---

##### `alarm_name_input`<sup>Optional</sup> <a name="alarm_name_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmNameInput"></a>

```python
alarm_name_input: str
```

- *Type:* str

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `datapoints_to_alarm_input`<sup>Optional</sup> <a name="datapoints_to_alarm_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.datapointsToAlarmInput"></a>

```python
datapoints_to_alarm_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.dimensionsInput"></a>

```python
dimensions_input: IResolvable | typing.List[CloudwatchAlarmDimensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions">CloudwatchAlarmDimensions</a>]

---

##### `evaluate_low_sample_count_percentile_input`<sup>Optional</sup> <a name="evaluate_low_sample_count_percentile_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluateLowSampleCountPercentileInput"></a>

```python
evaluate_low_sample_count_percentile_input: str
```

- *Type:* str

---

##### `evaluation_criteria_input`<sup>Optional</sup> <a name="evaluation_criteria_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationCriteriaInput"></a>

```python
evaluation_criteria_input: IResolvable | CloudwatchAlarmEvaluationCriteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria">CloudwatchAlarmEvaluationCriteria</a>

---

##### `evaluation_interval_input`<sup>Optional</sup> <a name="evaluation_interval_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationIntervalInput"></a>

```python
evaluation_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `evaluation_periods_input`<sup>Optional</sup> <a name="evaluation_periods_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationPeriodsInput"></a>

```python
evaluation_periods_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `evaluation_window_input`<sup>Optional</sup> <a name="evaluation_window_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationWindowInput"></a>

```python
evaluation_window_input: IResolvable | CloudwatchAlarmEvaluationWindow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow">CloudwatchAlarmEvaluationWindow</a>

---

##### `extended_statistic_input`<sup>Optional</sup> <a name="extended_statistic_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.extendedStatisticInput"></a>

```python
extended_statistic_input: str
```

- *Type:* str

---

##### `insufficient_data_actions_input`<sup>Optional</sup> <a name="insufficient_data_actions_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.insufficientDataActionsInput"></a>

```python
insufficient_data_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `metrics_input`<sup>Optional</sup> <a name="metrics_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metricsInput"></a>

```python
metrics_input: IResolvable | typing.List[CloudwatchAlarmMetrics]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics">CloudwatchAlarmMetrics</a>]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `ok_actions_input`<sup>Optional</sup> <a name="ok_actions_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.okActionsInput"></a>

```python
ok_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `statistic_input`<sup>Optional</sup> <a name="statistic_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.statisticInput"></a>

```python
statistic_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CloudwatchAlarmTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags">CloudwatchAlarmTags</a>]

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_metric_id_input`<sup>Optional</sup> <a name="threshold_metric_id_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.thresholdMetricIdInput"></a>

```python
threshold_metric_id_input: str
```

- *Type:* str

---

##### `treat_missing_data_input`<sup>Optional</sup> <a name="treat_missing_data_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.treatMissingDataInput"></a>

```python
treat_missing_data_input: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `actions_enabled`<sup>Required</sup> <a name="actions_enabled" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.actionsEnabled"></a>

```python
actions_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `alarm_actions`<sup>Required</sup> <a name="alarm_actions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmActions"></a>

```python
alarm_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alarm_description`<sup>Required</sup> <a name="alarm_description" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmDescription"></a>

```python
alarm_description: str
```

- *Type:* str

---

##### `alarm_name`<sup>Required</sup> <a name="alarm_name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmName"></a>

```python
alarm_name: str
```

- *Type:* str

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `datapoints_to_alarm`<sup>Required</sup> <a name="datapoints_to_alarm" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.datapointsToAlarm"></a>

```python
datapoints_to_alarm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `evaluate_low_sample_count_percentile`<sup>Required</sup> <a name="evaluate_low_sample_count_percentile" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluateLowSampleCountPercentile"></a>

```python
evaluate_low_sample_count_percentile: str
```

- *Type:* str

---

##### `evaluation_interval`<sup>Required</sup> <a name="evaluation_interval" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationInterval"></a>

```python
evaluation_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `evaluation_periods`<sup>Required</sup> <a name="evaluation_periods" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extended_statistic`<sup>Required</sup> <a name="extended_statistic" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.extendedStatistic"></a>

```python
extended_statistic: str
```

- *Type:* str

---

##### `insufficient_data_actions`<sup>Required</sup> <a name="insufficient_data_actions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.insufficientDataActions"></a>

```python
insufficient_data_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `ok_actions`<sup>Required</sup> <a name="ok_actions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.okActions"></a>

```python
ok_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_metric_id`<sup>Required</sup> <a name="threshold_metric_id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.thresholdMetricId"></a>

```python
threshold_metric_id: str
```

- *Type:* str

---

##### `treat_missing_data`<sup>Required</sup> <a name="treat_missing_data" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.treatMissingData"></a>

```python
treat_missing_data: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchAlarmConfig <a name="CloudwatchAlarmConfig" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm

cloudwatchAlarm.CloudwatchAlarmConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  actions_enabled: bool | IResolvable = None,
  alarm_actions: typing.List[str] = None,
  alarm_description: str = None,
  alarm_name: str = None,
  comparison_operator: str = None,
  datapoints_to_alarm: typing.Union[int, float] = None,
  dimensions: IResolvable | typing.List[CloudwatchAlarmDimensions] = None,
  evaluate_low_sample_count_percentile: str = None,
  evaluation_criteria: CloudwatchAlarmEvaluationCriteria = None,
  evaluation_interval: typing.Union[int, float] = None,
  evaluation_periods: typing.Union[int, float] = None,
  evaluation_window: CloudwatchAlarmEvaluationWindow = None,
  extended_statistic: str = None,
  insufficient_data_actions: typing.List[str] = None,
  metric_name: str = None,
  metrics: IResolvable | typing.List[CloudwatchAlarmMetrics] = None,
  namespace: str = None,
  ok_actions: typing.List[str] = None,
  period: typing.Union[int, float] = None,
  statistic: str = None,
  tags: IResolvable | typing.List[CloudwatchAlarmTags] = None,
  threshold: typing.Union[int, float] = None,
  threshold_metric_id: str = None,
  treat_missing_data: str = None,
  unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.actionsEnabled">actions_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.alarmActions">alarm_actions</a></code> | <code>typing.List[str]</code> | The list of actions to execute when this alarm transitions into an ALARM state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.alarmDescription">alarm_description</a></code> | <code>str</code> | The description of the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.alarmName">alarm_name</a></code> | <code>str</code> | The name of the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | The arithmetic operation to use when comparing the specified statistic and threshold. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.datapointsToAlarm">datapoints_to_alarm</a></code> | <code>typing.Union[int, float]</code> | The number of datapoints that must be breaching to trigger the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.dimensions">dimensions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions">CloudwatchAlarmDimensions</a>]</code> | The dimensions for the metric associated with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluateLowSampleCountPercentile">evaluate_low_sample_count_percentile</a></code> | <code>str</code> | Used only for alarms based on percentiles. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationCriteria">evaluation_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria">CloudwatchAlarmEvaluationCriteria</a></code> | The evaluation criteria for the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationInterval">evaluation_interval</a></code> | <code>typing.Union[int, float]</code> | The frequency, in seconds, at which the alarm is evaluated. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | The number of periods over which data is compared to the specified threshold. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationWindow">evaluation_window</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow">CloudwatchAlarmEvaluationWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#evaluation_window CloudwatchAlarm#evaluation_window}. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.extendedStatistic">extended_statistic</a></code> | <code>str</code> | The percentile statistic for the metric associated with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.insufficientDataActions">insufficient_data_actions</a></code> | <code>typing.List[str]</code> | The actions to execute when this alarm transitions to the ``INSUFFICIENT_DATA`` state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.metricName">metric_name</a></code> | <code>str</code> | The name of the metric associated with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.metrics">metrics</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics">CloudwatchAlarmMetrics</a>]</code> | An array that enables you to create an alarm based on the result of a metric math expression. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.namespace">namespace</a></code> | <code>str</code> | The namespace of the metric associated with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.okActions">ok_actions</a></code> | <code>typing.List[str]</code> | The actions to execute when this alarm transitions to the ``OK`` state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.period">period</a></code> | <code>typing.Union[int, float]</code> | The period, in seconds, over which the statistic is applied. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.statistic">statistic</a></code> | <code>str</code> | The statistic for the metric associated with the alarm, other than percentile. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags">CloudwatchAlarmTags</a>]</code> | A list of key-value pairs to associate with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | The value to compare with the specified statistic. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.thresholdMetricId">threshold_metric_id</a></code> | <code>str</code> | In an alarm based on an anomaly detection model, this is the ID of the ``ANOMALY_DETECTION_BAND`` function used as the threshold for the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.treatMissingData">treat_missing_data</a></code> | <code>str</code> | Sets how this alarm is to handle missing data points. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.unit">unit</a></code> | <code>str</code> | The unit of the metric associated with the alarm. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actions_enabled`<sup>Optional</sup> <a name="actions_enabled" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.actionsEnabled"></a>

```python
actions_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#actions_enabled CloudwatchAlarm#actions_enabled}

---

##### `alarm_actions`<sup>Optional</sup> <a name="alarm_actions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.alarmActions"></a>

```python
alarm_actions: typing.List[str]
```

- *Type:* typing.List[str]

The list of actions to execute when this alarm transitions into an ALARM state from any other state.

Specify each action as an Amazon Resource Name (ARN). For more information about creating alarms and the actions that you can specify, see [PutMetricAlarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricAlarm.html) in the *API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#alarm_actions CloudwatchAlarm#alarm_actions}

---

##### `alarm_description`<sup>Optional</sup> <a name="alarm_description" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.alarmDescription"></a>

```python
alarm_description: str
```

- *Type:* str

The description of the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#alarm_description CloudwatchAlarm#alarm_description}

---

##### `alarm_name`<sup>Optional</sup> <a name="alarm_name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.alarmName"></a>

```python
alarm_name: str
```

- *Type:* str

The name of the alarm.

If you don't specify a name, CFN generates a unique physical ID and uses that ID for the alarm name.
If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#alarm_name CloudwatchAlarm#alarm_name}

---

##### `comparison_operator`<sup>Optional</sup> <a name="comparison_operator" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

The arithmetic operation to use when comparing the specified statistic and threshold.

The specified statistic value is used as the first operand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#comparison_operator CloudwatchAlarm#comparison_operator}

---

##### `datapoints_to_alarm`<sup>Optional</sup> <a name="datapoints_to_alarm" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.datapointsToAlarm"></a>

```python
datapoints_to_alarm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of datapoints that must be breaching to trigger the alarm.

This is used only if you are setting an "M out of N" alarm. In that case, this value is the M, and the value that you set for `EvaluationPeriods` is the N value. For more information, see [Evaluating an Alarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation) in the *User Guide*.
If you omit this parameter, CW uses the same value here that you set for `EvaluationPeriods`, and the alarm goes to alarm state if that many consecutive periods are breaching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#datapoints_to_alarm CloudwatchAlarm#datapoints_to_alarm}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.dimensions"></a>

```python
dimensions: IResolvable | typing.List[CloudwatchAlarmDimensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions">CloudwatchAlarmDimensions</a>]

The dimensions for the metric associated with the alarm.

For an alarm based on a math expression, you can't specify `Dimensions`. Instead, you use `Metrics`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#dimensions CloudwatchAlarm#dimensions}

---

##### `evaluate_low_sample_count_percentile`<sup>Optional</sup> <a name="evaluate_low_sample_count_percentile" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluateLowSampleCountPercentile"></a>

```python
evaluate_low_sample_count_percentile: str
```

- *Type:* str

Used only for alarms based on percentiles.

If `ignore`, the alarm state does not change during periods with too few data points to be statistically significant. If `evaluate` or this parameter is not used, the alarm is always evaluated and possibly changes state no matter how many data points are available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#evaluate_low_sample_count_percentile CloudwatchAlarm#evaluate_low_sample_count_percentile}

---

##### `evaluation_criteria`<sup>Optional</sup> <a name="evaluation_criteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationCriteria"></a>

```python
evaluation_criteria: CloudwatchAlarmEvaluationCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria">CloudwatchAlarmEvaluationCriteria</a>

The evaluation criteria for the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#evaluation_criteria CloudwatchAlarm#evaluation_criteria}

---

##### `evaluation_interval`<sup>Optional</sup> <a name="evaluation_interval" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationInterval"></a>

```python
evaluation_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The frequency, in seconds, at which the alarm is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#evaluation_interval CloudwatchAlarm#evaluation_interval}

---

##### `evaluation_periods`<sup>Optional</sup> <a name="evaluation_periods" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of periods over which data is compared to the specified threshold.

If you are setting an alarm that requires that a number of consecutive data points be breaching to trigger the alarm, this value specifies that number. If you are setting an "M out of N" alarm, this value is the N, and `DatapointsToAlarm` is the M.
For more information, see [Evaluating an Alarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#evaluation_periods CloudwatchAlarm#evaluation_periods}

---

##### `evaluation_window`<sup>Optional</sup> <a name="evaluation_window" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationWindow"></a>

```python
evaluation_window: CloudwatchAlarmEvaluationWindow
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow">CloudwatchAlarmEvaluationWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#evaluation_window CloudwatchAlarm#evaluation_window}.

---

##### `extended_statistic`<sup>Optional</sup> <a name="extended_statistic" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.extendedStatistic"></a>

```python
extended_statistic: str
```

- *Type:* str

The percentile statistic for the metric associated with the alarm.

Specify a value between p0.0 and p100.
For an alarm based on a metric, you must specify either `Statistic` or `ExtendedStatistic` but not both.
For an alarm based on a math expression, you can't specify `ExtendedStatistic`. Instead, you use `Metrics`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#extended_statistic CloudwatchAlarm#extended_statistic}

---

##### `insufficient_data_actions`<sup>Optional</sup> <a name="insufficient_data_actions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.insufficientDataActions"></a>

```python
insufficient_data_actions: typing.List[str]
```

- *Type:* typing.List[str]

The actions to execute when this alarm transitions to the ``INSUFFICIENT_DATA`` state from any other state.

Each action is specified as an Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#insufficient_data_actions CloudwatchAlarm#insufficient_data_actions}

---

##### `metric_name`<sup>Optional</sup> <a name="metric_name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

The name of the metric associated with the alarm.

This is required for an alarm based on a metric. For an alarm based on a math expression, you use `Metrics` instead and you can't specify `MetricName`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#metric_name CloudwatchAlarm#metric_name}

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.metrics"></a>

```python
metrics: IResolvable | typing.List[CloudwatchAlarmMetrics]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics">CloudwatchAlarmMetrics</a>]

An array that enables you to create an alarm based on the result of a metric math expression.

Each item in the array either retrieves a metric or performs a math expression.
If you specify the `Metrics` parameter, you cannot specify `MetricName`, `Dimensions`, `Period`, `Namespace`, `Statistic`, `ExtendedStatistic`, or `Unit`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#metrics CloudwatchAlarm#metrics}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The namespace of the metric associated with the alarm.

This is required for an alarm based on a metric. For an alarm based on a math expression, you can't specify `Namespace` and you use `Metrics` instead.
For a list of namespaces for metrics from AWS services, see [Services That Publish Metrics.](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#namespace CloudwatchAlarm#namespace}

---

##### `ok_actions`<sup>Optional</sup> <a name="ok_actions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.okActions"></a>

```python
ok_actions: typing.List[str]
```

- *Type:* typing.List[str]

The actions to execute when this alarm transitions to the ``OK`` state from any other state.

Each action is specified as an Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#ok_actions CloudwatchAlarm#ok_actions}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The period, in seconds, over which the statistic is applied.

This is required for an alarm based on a metric. Valid values are 10, 20, 30, 60, and any multiple of 60.
For an alarm based on a math expression, you can't specify `Period`, and instead you use the `Metrics` parameter.
*Minimum:* 10

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#period CloudwatchAlarm#period}

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

The statistic for the metric associated with the alarm, other than percentile.

For percentile statistics, use `ExtendedStatistic`.
For an alarm based on a metric, you must specify either `Statistic` or `ExtendedStatistic` but not both.
For an alarm based on a math expression, you can't specify `Statistic`. Instead, you use `Metrics`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#statistic CloudwatchAlarm#statistic}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CloudwatchAlarmTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags">CloudwatchAlarmTags</a>]

A list of key-value pairs to associate with the alarm.

You can associate as many as 50 tags with an alarm. To be able to associate tags with the alarm when you create the alarm, you must have the `cloudwatch:TagResource` permission.
Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#tags CloudwatchAlarm#tags}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value to compare with the specified statistic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#threshold CloudwatchAlarm#threshold}

---

##### `threshold_metric_id`<sup>Optional</sup> <a name="threshold_metric_id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.thresholdMetricId"></a>

```python
threshold_metric_id: str
```

- *Type:* str

In an alarm based on an anomaly detection model, this is the ID of the ``ANOMALY_DETECTION_BAND`` function used as the threshold for the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#threshold_metric_id CloudwatchAlarm#threshold_metric_id}

---

##### `treat_missing_data`<sup>Optional</sup> <a name="treat_missing_data" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.treatMissingData"></a>

```python
treat_missing_data: str
```

- *Type:* str

Sets how this alarm is to handle missing data points.

Valid values are `breaching`, `notBreaching`, `ignore`, and `missing`. For more information, see [Configuring How Alarms Treat Missing Data](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-missing-data) in the *Amazon User Guide*.
If you omit this parameter, the default behavior of `missing` is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#treat_missing_data CloudwatchAlarm#treat_missing_data}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.unit"></a>

```python
unit: str
```

- *Type:* str

The unit of the metric associated with the alarm.

Specify this only if you are creating an alarm based on a single metric. Do not specify this if you are specifying a `Metrics` array.
You can specify the following values: Seconds, Microseconds, Milliseconds, Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, Bits, Kilobits, Megabits, Gigabits, Terabits, Percent, Count, Bytes/Second, Kilobytes/Second, Megabytes/Second, Gigabytes/Second, Terabytes/Second, Bits/Second, Kilobits/Second, Megabits/Second, Gigabits/Second, Terabits/Second, Count/Second, or None.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#unit CloudwatchAlarm#unit}

---

### CloudwatchAlarmDimensions <a name="CloudwatchAlarmDimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm

cloudwatchAlarm.CloudwatchAlarmDimensions(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions.property.name">name</a></code> | <code>str</code> | The name of the dimension, from 1–255 characters in length. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions.property.value">value</a></code> | <code>str</code> | The value for the dimension, from 1–255 characters in length. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the dimension, from 1–255 characters in length.

This dimension name must have been included when the metric was published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#name CloudwatchAlarm#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the dimension, from 1–255 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#value CloudwatchAlarm#value}

---

### CloudwatchAlarmEvaluationCriteria <a name="CloudwatchAlarmEvaluationCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm

cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria(
  prom_ql_criteria: CloudwatchAlarmEvaluationCriteriaPromQlCriteria = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria.property.promQlCriteria">prom_ql_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria">CloudwatchAlarmEvaluationCriteriaPromQlCriteria</a></code> | The PromQL criteria for the alarm evaluation. |

---

##### `prom_ql_criteria`<sup>Optional</sup> <a name="prom_ql_criteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria.property.promQlCriteria"></a>

```python
prom_ql_criteria: CloudwatchAlarmEvaluationCriteriaPromQlCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria">CloudwatchAlarmEvaluationCriteriaPromQlCriteria</a>

The PromQL criteria for the alarm evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#prom_ql_criteria CloudwatchAlarm#prom_ql_criteria}

---

### CloudwatchAlarmEvaluationCriteriaPromQlCriteria <a name="CloudwatchAlarmEvaluationCriteriaPromQlCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm

cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria(
  pending_period: typing.Union[int, float] = None,
  query: str = None,
  recovery_period: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria.property.pendingPeriod">pending_period</a></code> | <code>typing.Union[int, float]</code> | The duration, in seconds, that a contributor must be continuously breaching before it transitions to the ``ALARM`` state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria.property.query">query</a></code> | <code>str</code> | The PromQL query that the alarm evaluates. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria.property.recoveryPeriod">recovery_period</a></code> | <code>typing.Union[int, float]</code> | The duration, in seconds, that a contributor must continuously not be breaching before it transitions back to the ``OK`` state. |

---

##### `pending_period`<sup>Optional</sup> <a name="pending_period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria.property.pendingPeriod"></a>

```python
pending_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration, in seconds, that a contributor must be continuously breaching before it transitions to the ``ALARM`` state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#pending_period CloudwatchAlarm#pending_period}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria.property.query"></a>

```python
query: str
```

- *Type:* str

The PromQL query that the alarm evaluates.

The query must return a result of vector type. Each entry in the vector result represents an alarm contributor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#query CloudwatchAlarm#query}

---

##### `recovery_period`<sup>Optional</sup> <a name="recovery_period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria.property.recoveryPeriod"></a>

```python
recovery_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration, in seconds, that a contributor must continuously not be breaching before it transitions back to the ``OK`` state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#recovery_period CloudwatchAlarm#recovery_period}

---

### CloudwatchAlarmEvaluationWindow <a name="CloudwatchAlarmEvaluationWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm

cloudwatchAlarm.CloudwatchAlarmEvaluationWindow(
  sliding_window: str = None,
  wall_clock_window: CloudwatchAlarmEvaluationWindowWallClockWindow = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow.property.slidingWindow">sliding_window</a></code> | <code>str</code> | Configuration for sliding evaluation window (default behavior). |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow.property.wallClockWindow">wall_clock_window</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow">CloudwatchAlarmEvaluationWindowWallClockWindow</a></code> | Configuration for wall clock based evaluation window. |

---

##### `sliding_window`<sup>Optional</sup> <a name="sliding_window" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow.property.slidingWindow"></a>

```python
sliding_window: str
```

- *Type:* str

Configuration for sliding evaluation window (default behavior).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#sliding_window CloudwatchAlarm#sliding_window}

---

##### `wall_clock_window`<sup>Optional</sup> <a name="wall_clock_window" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow.property.wallClockWindow"></a>

```python
wall_clock_window: CloudwatchAlarmEvaluationWindowWallClockWindow
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow">CloudwatchAlarmEvaluationWindowWallClockWindow</a>

Configuration for wall clock based evaluation window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#wall_clock_window CloudwatchAlarm#wall_clock_window}

---

### CloudwatchAlarmEvaluationWindowWallClockWindow <a name="CloudwatchAlarmEvaluationWindowWallClockWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm

cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow(
  timezone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow.property.timezone">timezone</a></code> | <code>str</code> | The timezone for wall clock evaluation, in IANA time zone format (e.g., America/New_York, UTC). |

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

The timezone for wall clock evaluation, in IANA time zone format (e.g., America/New_York, UTC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#timezone CloudwatchAlarm#timezone}

---

### CloudwatchAlarmMetrics <a name="CloudwatchAlarmMetrics" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm

cloudwatchAlarm.CloudwatchAlarmMetrics(
  account_id: str = None,
  expression: str = None,
  id: str = None,
  label: str = None,
  metric_stat: CloudwatchAlarmMetricsMetricStat = None,
  period: typing.Union[int, float] = None,
  return_data: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.accountId">account_id</a></code> | <code>str</code> | The ID of the account where the metrics are located, if this is a cross-account alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.expression">expression</a></code> | <code>str</code> | The math expression to be performed on the returned data, if this object is performing a math expression. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.id">id</a></code> | <code>str</code> | A short name used to tie this object to the results in the response. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.label">label</a></code> | <code>str</code> | A human-readable label for this metric or expression. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.metricStat">metric_stat</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat">CloudwatchAlarmMetricsMetricStat</a></code> | The metric to be returned, along with statistics, period, and units. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.period">period</a></code> | <code>typing.Union[int, float]</code> | The granularity, in seconds, of the returned data points. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.returnData">return_data</a></code> | <code>bool \| cdktn.IResolvable</code> | This option indicates whether to return the timestamps and raw data values of this metric. |

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The ID of the account where the metrics are located, if this is a cross-account alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#account_id CloudwatchAlarm#account_id}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.expression"></a>

```python
expression: str
```

- *Type:* str

The math expression to be performed on the returned data, if this object is performing a math expression.

This expression can use the `Id` of the other metrics to refer to those metrics, and can also use the `Id` of other expressions to use the result of those expressions. For more information about metric math expressions, see [Metric Math Syntax and Functions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax) in the *User Guide*.
Within each MetricDataQuery object, you must specify either `Expression` or `MetricStat` but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#expression CloudwatchAlarm#expression}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.id"></a>

```python
id: str
```

- *Type:* str

A short name used to tie this object to the results in the response.

This name must be unique within a single call to `GetMetricData`. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscore. The first character must be a lowercase letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#id CloudwatchAlarm#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.label"></a>

```python
label: str
```

- *Type:* str

A human-readable label for this metric or expression.

This is especially useful if this is an expression, so that you know what the value represents. If the metric or expression is shown in a CW dashboard widget, the label is shown. If `Label` is omitted, CW generates a default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#label CloudwatchAlarm#label}

---

##### `metric_stat`<sup>Optional</sup> <a name="metric_stat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.metricStat"></a>

```python
metric_stat: CloudwatchAlarmMetricsMetricStat
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat">CloudwatchAlarmMetricsMetricStat</a>

The metric to be returned, along with statistics, period, and units.

Use this parameter only if this object is retrieving a metric and not performing a math expression on returned data.
Within one MetricDataQuery object, you must specify either `Expression` or `MetricStat` but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#metric_stat CloudwatchAlarm#metric_stat}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The granularity, in seconds, of the returned data points.

For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 20, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a `PutMetricData` operation that includes a `StorageResolution of 1 second`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#period CloudwatchAlarm#period}

---

##### `return_data`<sup>Optional</sup> <a name="return_data" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.returnData"></a>

```python
return_data: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

This option indicates whether to return the timestamps and raw data values of this metric.

When you create an alarm based on a metric math expression, specify `True` for this value for only the one math expression that the alarm is based on. You must specify `False` for `ReturnData` for all the other metrics and expressions used in the alarm.
This field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#return_data CloudwatchAlarm#return_data}

---

### CloudwatchAlarmMetricsMetricStat <a name="CloudwatchAlarmMetricsMetricStat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm

cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat(
  metric: CloudwatchAlarmMetricsMetricStatMetric = None,
  period: typing.Union[int, float] = None,
  stat: str = None,
  unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.metric">metric</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric">CloudwatchAlarmMetricsMetricStatMetric</a></code> | The metric to return, including the metric name, namespace, and dimensions. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.period">period</a></code> | <code>typing.Union[int, float]</code> | The granularity, in seconds, of the returned data points. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.stat">stat</a></code> | <code>str</code> | The statistic to return. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.unit">unit</a></code> | <code>str</code> | The unit to use for the returned data points. |

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.metric"></a>

```python
metric: CloudwatchAlarmMetricsMetricStatMetric
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric">CloudwatchAlarmMetricsMetricStatMetric</a>

The metric to return, including the metric name, namespace, and dimensions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#metric CloudwatchAlarm#metric}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The granularity, in seconds, of the returned data points.

For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 20, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a `PutMetricData` call that includes a `StorageResolution` of 1 second.
If the `StartTime` parameter specifies a time stamp that is greater than 3 hours ago, you must specify the period as follows or no data points in that time range is returned:

* Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).
* Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).
* Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#period CloudwatchAlarm#period}

---

##### `stat`<sup>Optional</sup> <a name="stat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.stat"></a>

```python
stat: str
```

- *Type:* str

The statistic to return.

It can include any CW statistic or extended statistic. For a list of valid values, see the table in [Statistics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#stat CloudwatchAlarm#stat}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.unit"></a>

```python
unit: str
```

- *Type:* str

The unit to use for the returned data points.

Valid values are: Seconds, Microseconds, Milliseconds, Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, Bits, Kilobits, Megabits, Gigabits, Terabits, Percent, Count, Bytes/Second, Kilobytes/Second, Megabytes/Second, Gigabytes/Second, Terabytes/Second, Bits/Second, Kilobits/Second, Megabits/Second, Gigabits/Second, Terabits/Second, Count/Second, or None.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#unit CloudwatchAlarm#unit}

---

### CloudwatchAlarmMetricsMetricStatMetric <a name="CloudwatchAlarmMetricsMetricStatMetric" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm

cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric(
  dimensions: IResolvable | typing.List[CloudwatchAlarmMetricsMetricStatMetricDimensions] = None,
  metric_name: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric.property.dimensions">dimensions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions">CloudwatchAlarmMetricsMetricStatMetricDimensions</a>]</code> | The metric dimensions that you want to be used for the metric that the alarm will watch. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric.property.metricName">metric_name</a></code> | <code>str</code> | The name of the metric that you want the alarm to watch. This is a required field. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric.property.namespace">namespace</a></code> | <code>str</code> | The namespace of the metric that the alarm will watch. |

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric.property.dimensions"></a>

```python
dimensions: IResolvable | typing.List[CloudwatchAlarmMetricsMetricStatMetricDimensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions">CloudwatchAlarmMetricsMetricStatMetricDimensions</a>]

The metric dimensions that you want to be used for the metric that the alarm will watch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#dimensions CloudwatchAlarm#dimensions}

---

##### `metric_name`<sup>Optional</sup> <a name="metric_name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

The name of the metric that you want the alarm to watch. This is a required field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#metric_name CloudwatchAlarm#metric_name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The namespace of the metric that the alarm will watch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#namespace CloudwatchAlarm#namespace}

---

### CloudwatchAlarmMetricsMetricStatMetricDimensions <a name="CloudwatchAlarmMetricsMetricStatMetricDimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm

cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions.property.name">name</a></code> | <code>str</code> | The name of the dimension, from 1–255 characters in length. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions.property.value">value</a></code> | <code>str</code> | The value for the dimension, from 1–255 characters in length. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the dimension, from 1–255 characters in length.

This dimension name must have been included when the metric was published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#name CloudwatchAlarm#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the dimension, from 1–255 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#value CloudwatchAlarm#value}

---

### CloudwatchAlarmTags <a name="CloudwatchAlarmTags" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm

cloudwatchAlarm.CloudwatchAlarmTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags.property.key">key</a></code> | <code>str</code> | A string that you can use to assign a value. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags.property.value">value</a></code> | <code>str</code> | The value for the specified tag key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags.property.key"></a>

```python
key: str
```

- *Type:* str

A string that you can use to assign a value.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#key CloudwatchAlarm#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#value CloudwatchAlarm#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchAlarmDimensionsList <a name="CloudwatchAlarmDimensionsList" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm

cloudwatchAlarm.CloudwatchAlarmDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchAlarmDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions">CloudwatchAlarmDimensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchAlarmDimensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions">CloudwatchAlarmDimensions</a>]

---


### CloudwatchAlarmDimensionsOutputReference <a name="CloudwatchAlarmDimensionsOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm

cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions">CloudwatchAlarmDimensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAlarmDimensions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions">CloudwatchAlarmDimensions</a>

---


### CloudwatchAlarmEvaluationCriteriaOutputReference <a name="CloudwatchAlarmEvaluationCriteriaOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm

cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.putPromQlCriteria">put_prom_ql_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.resetPromQlCriteria">reset_prom_ql_criteria</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_prom_ql_criteria` <a name="put_prom_ql_criteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.putPromQlCriteria"></a>

```python
def put_prom_ql_criteria(
  pending_period: typing.Union[int, float] = None,
  query: str = None,
  recovery_period: typing.Union[int, float] = None
) -> None
```

###### `pending_period`<sup>Optional</sup> <a name="pending_period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.putPromQlCriteria.parameter.pendingPeriod"></a>

- *Type:* typing.Union[int, float]

The duration, in seconds, that a contributor must be continuously breaching before it transitions to the ``ALARM`` state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#pending_period CloudwatchAlarm#pending_period}

---

###### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.putPromQlCriteria.parameter.query"></a>

- *Type:* str

The PromQL query that the alarm evaluates.

The query must return a result of vector type. Each entry in the vector result represents an alarm contributor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#query CloudwatchAlarm#query}

---

###### `recovery_period`<sup>Optional</sup> <a name="recovery_period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.putPromQlCriteria.parameter.recoveryPeriod"></a>

- *Type:* typing.Union[int, float]

The duration, in seconds, that a contributor must continuously not be breaching before it transitions back to the ``OK`` state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#recovery_period CloudwatchAlarm#recovery_period}

---

##### `reset_prom_ql_criteria` <a name="reset_prom_ql_criteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.resetPromQlCriteria"></a>

```python
def reset_prom_ql_criteria() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.promQlCriteria">prom_ql_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference">CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.promQlCriteriaInput">prom_ql_criteria_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria">CloudwatchAlarmEvaluationCriteriaPromQlCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria">CloudwatchAlarmEvaluationCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prom_ql_criteria`<sup>Required</sup> <a name="prom_ql_criteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.promQlCriteria"></a>

```python
prom_ql_criteria: CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference">CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference</a>

---

##### `prom_ql_criteria_input`<sup>Optional</sup> <a name="prom_ql_criteria_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.promQlCriteriaInput"></a>

```python
prom_ql_criteria_input: IResolvable | CloudwatchAlarmEvaluationCriteriaPromQlCriteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria">CloudwatchAlarmEvaluationCriteriaPromQlCriteria</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAlarmEvaluationCriteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria">CloudwatchAlarmEvaluationCriteria</a>

---


### CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference <a name="CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm

cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resetPendingPeriod">reset_pending_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resetQuery">reset_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resetRecoveryPeriod">reset_recovery_period</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_pending_period` <a name="reset_pending_period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resetPendingPeriod"></a>

```python
def reset_pending_period() -> None
```

##### `reset_query` <a name="reset_query" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resetQuery"></a>

```python
def reset_query() -> None
```

##### `reset_recovery_period` <a name="reset_recovery_period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resetRecoveryPeriod"></a>

```python
def reset_recovery_period() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.pendingPeriodInput">pending_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.recoveryPeriodInput">recovery_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.pendingPeriod">pending_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.recoveryPeriod">recovery_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria">CloudwatchAlarmEvaluationCriteriaPromQlCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pending_period_input`<sup>Optional</sup> <a name="pending_period_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.pendingPeriodInput"></a>

```python
pending_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `recovery_period_input`<sup>Optional</sup> <a name="recovery_period_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.recoveryPeriodInput"></a>

```python
recovery_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pending_period`<sup>Required</sup> <a name="pending_period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.pendingPeriod"></a>

```python
pending_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `recovery_period`<sup>Required</sup> <a name="recovery_period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.recoveryPeriod"></a>

```python
recovery_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAlarmEvaluationCriteriaPromQlCriteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria">CloudwatchAlarmEvaluationCriteriaPromQlCriteria</a>

---


### CloudwatchAlarmEvaluationWindowOutputReference <a name="CloudwatchAlarmEvaluationWindowOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm

cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.putWallClockWindow">put_wall_clock_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.resetSlidingWindow">reset_sliding_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.resetWallClockWindow">reset_wall_clock_window</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_wall_clock_window` <a name="put_wall_clock_window" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.putWallClockWindow"></a>

```python
def put_wall_clock_window(
  timezone: str = None
) -> None
```

###### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.putWallClockWindow.parameter.timezone"></a>

- *Type:* str

The timezone for wall clock evaluation, in IANA time zone format (e.g., America/New_York, UTC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#timezone CloudwatchAlarm#timezone}

---

##### `reset_sliding_window` <a name="reset_sliding_window" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.resetSlidingWindow"></a>

```python
def reset_sliding_window() -> None
```

##### `reset_wall_clock_window` <a name="reset_wall_clock_window" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.resetWallClockWindow"></a>

```python
def reset_wall_clock_window() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.wallClockWindow">wall_clock_window</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference">CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.slidingWindowInput">sliding_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.wallClockWindowInput">wall_clock_window_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow">CloudwatchAlarmEvaluationWindowWallClockWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.slidingWindow">sliding_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow">CloudwatchAlarmEvaluationWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `wall_clock_window`<sup>Required</sup> <a name="wall_clock_window" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.wallClockWindow"></a>

```python
wall_clock_window: CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference">CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference</a>

---

##### `sliding_window_input`<sup>Optional</sup> <a name="sliding_window_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.slidingWindowInput"></a>

```python
sliding_window_input: str
```

- *Type:* str

---

##### `wall_clock_window_input`<sup>Optional</sup> <a name="wall_clock_window_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.wallClockWindowInput"></a>

```python
wall_clock_window_input: IResolvable | CloudwatchAlarmEvaluationWindowWallClockWindow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow">CloudwatchAlarmEvaluationWindowWallClockWindow</a>

---

##### `sliding_window`<sup>Required</sup> <a name="sliding_window" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.slidingWindow"></a>

```python
sliding_window: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAlarmEvaluationWindow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow">CloudwatchAlarmEvaluationWindow</a>

---


### CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference <a name="CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm

cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.resetTimezone">reset_timezone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_timezone` <a name="reset_timezone" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.resetTimezone"></a>

```python
def reset_timezone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow">CloudwatchAlarmEvaluationWindowWallClockWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAlarmEvaluationWindowWallClockWindow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow">CloudwatchAlarmEvaluationWindowWallClockWindow</a>

---


### CloudwatchAlarmMetricsList <a name="CloudwatchAlarmMetricsList" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm

cloudwatchAlarm.CloudwatchAlarmMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchAlarmMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics">CloudwatchAlarmMetrics</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchAlarmMetrics]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics">CloudwatchAlarmMetrics</a>]

---


### CloudwatchAlarmMetricsMetricStatMetricDimensionsList <a name="CloudwatchAlarmMetricsMetricStatMetricDimensionsList" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm

cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions">CloudwatchAlarmMetricsMetricStatMetricDimensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchAlarmMetricsMetricStatMetricDimensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions">CloudwatchAlarmMetricsMetricStatMetricDimensions</a>]

---


### CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference <a name="CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm

cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions">CloudwatchAlarmMetricsMetricStatMetricDimensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAlarmMetricsMetricStatMetricDimensions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions">CloudwatchAlarmMetricsMetricStatMetricDimensions</a>

---


### CloudwatchAlarmMetricsMetricStatMetricOutputReference <a name="CloudwatchAlarmMetricsMetricStatMetricOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm

cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.putDimensions">put_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resetMetricName">reset_metric_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dimensions` <a name="put_dimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.putDimensions"></a>

```python
def put_dimensions(
  value: IResolvable | typing.List[CloudwatchAlarmMetricsMetricStatMetricDimensions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.putDimensions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions">CloudwatchAlarmMetricsMetricStatMetricDimensions</a>]

---

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_metric_name` <a name="reset_metric_name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resetMetricName"></a>

```python
def reset_metric_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList">CloudwatchAlarmMetricsMetricStatMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions">CloudwatchAlarmMetricsMetricStatMetricDimensions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric">CloudwatchAlarmMetricsMetricStatMetric</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.dimensions"></a>

```python
dimensions: CloudwatchAlarmMetricsMetricStatMetricDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList">CloudwatchAlarmMetricsMetricStatMetricDimensionsList</a>

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: IResolvable | typing.List[CloudwatchAlarmMetricsMetricStatMetricDimensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions">CloudwatchAlarmMetricsMetricStatMetricDimensions</a>]

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAlarmMetricsMetricStatMetric
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric">CloudwatchAlarmMetricsMetricStatMetric</a>

---


### CloudwatchAlarmMetricsMetricStatOutputReference <a name="CloudwatchAlarmMetricsMetricStatOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm

cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.putMetric">put_metric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetMetric">reset_metric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetStat">reset_stat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetUnit">reset_unit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metric` <a name="put_metric" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.putMetric"></a>

```python
def put_metric(
  dimensions: IResolvable | typing.List[CloudwatchAlarmMetricsMetricStatMetricDimensions] = None,
  metric_name: str = None,
  namespace: str = None
) -> None
```

###### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.putMetric.parameter.dimensions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions">CloudwatchAlarmMetricsMetricStatMetricDimensions</a>]

The metric dimensions that you want to be used for the metric that the alarm will watch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#dimensions CloudwatchAlarm#dimensions}

---

###### `metric_name`<sup>Optional</sup> <a name="metric_name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.putMetric.parameter.metricName"></a>

- *Type:* str

The name of the metric that you want the alarm to watch. This is a required field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#metric_name CloudwatchAlarm#metric_name}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.putMetric.parameter.namespace"></a>

- *Type:* str

The namespace of the metric that the alarm will watch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#namespace CloudwatchAlarm#namespace}

---

##### `reset_metric` <a name="reset_metric" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetMetric"></a>

```python
def reset_metric() -> None
```

##### `reset_period` <a name="reset_period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_stat` <a name="reset_stat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetStat"></a>

```python
def reset_stat() -> None
```

##### `reset_unit` <a name="reset_unit" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetUnit"></a>

```python
def reset_unit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference">CloudwatchAlarmMetricsMetricStatMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.metricInput">metric_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric">CloudwatchAlarmMetricsMetricStatMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.statInput">stat_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.stat">stat</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat">CloudwatchAlarmMetricsMetricStat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.metric"></a>

```python
metric: CloudwatchAlarmMetricsMetricStatMetricOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference">CloudwatchAlarmMetricsMetricStatMetricOutputReference</a>

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.metricInput"></a>

```python
metric_input: IResolvable | CloudwatchAlarmMetricsMetricStatMetric
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric">CloudwatchAlarmMetricsMetricStatMetric</a>

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stat_input`<sup>Optional</sup> <a name="stat_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.statInput"></a>

```python
stat_input: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stat`<sup>Required</sup> <a name="stat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.stat"></a>

```python
stat: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAlarmMetricsMetricStat
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat">CloudwatchAlarmMetricsMetricStat</a>

---


### CloudwatchAlarmMetricsOutputReference <a name="CloudwatchAlarmMetricsOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm

cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.putMetricStat">put_metric_stat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetLabel">reset_label</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetMetricStat">reset_metric_stat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetReturnData">reset_return_data</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metric_stat` <a name="put_metric_stat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.putMetricStat"></a>

```python
def put_metric_stat(
  metric: CloudwatchAlarmMetricsMetricStatMetric = None,
  period: typing.Union[int, float] = None,
  stat: str = None,
  unit: str = None
) -> None
```

###### `metric`<sup>Optional</sup> <a name="metric" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.putMetricStat.parameter.metric"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric">CloudwatchAlarmMetricsMetricStatMetric</a>

The metric to return, including the metric name, namespace, and dimensions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#metric CloudwatchAlarm#metric}

---

###### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.putMetricStat.parameter.period"></a>

- *Type:* typing.Union[int, float]

The granularity, in seconds, of the returned data points.

For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 20, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a `PutMetricData` call that includes a `StorageResolution` of 1 second.
If the `StartTime` parameter specifies a time stamp that is greater than 3 hours ago, you must specify the period as follows or no data points in that time range is returned:

* Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).
* Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).
* Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#period CloudwatchAlarm#period}

---

###### `stat`<sup>Optional</sup> <a name="stat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.putMetricStat.parameter.stat"></a>

- *Type:* str

The statistic to return.

It can include any CW statistic or extended statistic. For a list of valid values, see the table in [Statistics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#stat CloudwatchAlarm#stat}

---

###### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.putMetricStat.parameter.unit"></a>

- *Type:* str

The unit to use for the returned data points.

Valid values are: Seconds, Microseconds, Milliseconds, Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, Bits, Kilobits, Megabits, Gigabits, Terabits, Percent, Count, Bytes/Second, Kilobytes/Second, Megabytes/Second, Gigabytes/Second, Terabytes/Second, Bits/Second, Kilobits/Second, Megabits/Second, Gigabits/Second, Terabits/Second, Count/Second, or None.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudwatch_alarm#unit CloudwatchAlarm#unit}

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_expression` <a name="reset_expression" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_label` <a name="reset_label" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetLabel"></a>

```python
def reset_label() -> None
```

##### `reset_metric_stat` <a name="reset_metric_stat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetMetricStat"></a>

```python
def reset_metric_stat() -> None
```

##### `reset_period` <a name="reset_period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_return_data` <a name="reset_return_data" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetReturnData"></a>

```python
def reset_return_data() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.metricStat">metric_stat</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference">CloudwatchAlarmMetricsMetricStatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.metricStatInput">metric_stat_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat">CloudwatchAlarmMetricsMetricStat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.returnDataInput">return_data_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.returnData">return_data</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics">CloudwatchAlarmMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_stat`<sup>Required</sup> <a name="metric_stat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.metricStat"></a>

```python
metric_stat: CloudwatchAlarmMetricsMetricStatOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference">CloudwatchAlarmMetricsMetricStatOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `metric_stat_input`<sup>Optional</sup> <a name="metric_stat_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.metricStatInput"></a>

```python
metric_stat_input: IResolvable | CloudwatchAlarmMetricsMetricStat
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat">CloudwatchAlarmMetricsMetricStat</a>

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `return_data_input`<sup>Optional</sup> <a name="return_data_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.returnDataInput"></a>

```python
return_data_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `return_data`<sup>Required</sup> <a name="return_data" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.returnData"></a>

```python
return_data: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAlarmMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics">CloudwatchAlarmMetrics</a>

---


### CloudwatchAlarmTagsList <a name="CloudwatchAlarmTagsList" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm

cloudwatchAlarm.CloudwatchAlarmTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchAlarmTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags">CloudwatchAlarmTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchAlarmTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags">CloudwatchAlarmTags</a>]

---


### CloudwatchAlarmTagsOutputReference <a name="CloudwatchAlarmTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm

cloudwatchAlarm.CloudwatchAlarmTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags">CloudwatchAlarmTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAlarmTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags">CloudwatchAlarmTags</a>

---



