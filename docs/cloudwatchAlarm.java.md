# `cloudwatchAlarm` Submodule <a name="`cloudwatchAlarm` Submodule" id="@cdktn/provider-awscc.cloudwatchAlarm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchAlarm <a name="CloudwatchAlarm" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm awscc_cloudwatch_alarm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarm;

CloudwatchAlarm.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .actionsEnabled(java.lang.Boolean|IResolvable)
//  .alarmActions(java.util.List<java.lang.String>)
//  .alarmDescription(java.lang.String)
//  .alarmName(java.lang.String)
//  .comparisonOperator(java.lang.String)
//  .datapointsToAlarm(java.lang.Number)
//  .dimensions(IResolvable|java.util.List<CloudwatchAlarmDimensions>)
//  .evaluateLowSampleCountPercentile(java.lang.String)
//  .evaluationCriteria(CloudwatchAlarmEvaluationCriteria)
//  .evaluationInterval(java.lang.Number)
//  .evaluationPeriods(java.lang.Number)
//  .evaluationWindow(CloudwatchAlarmEvaluationWindow)
//  .extendedStatistic(java.lang.String)
//  .insufficientDataActions(java.util.List<java.lang.String>)
//  .metricName(java.lang.String)
//  .metrics(IResolvable|java.util.List<CloudwatchAlarmMetrics>)
//  .namespace(java.lang.String)
//  .okActions(java.util.List<java.lang.String>)
//  .period(java.lang.Number)
//  .statistic(java.lang.String)
//  .tags(IResolvable|java.util.List<CloudwatchAlarmTags>)
//  .threshold(java.lang.Number)
//  .thresholdMetricId(java.lang.String)
//  .treatMissingData(java.lang.String)
//  .unit(java.lang.String)
//  .warmUpConfiguration(CloudwatchAlarmWarmUpConfiguration)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.actionsEnabled">actionsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.alarmActions">alarmActions</a></code> | <code>java.util.List<java.lang.String></code> | The list of actions to execute when this alarm transitions into an ALARM state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.alarmDescription">alarmDescription</a></code> | <code>java.lang.String</code> | The description of the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.alarmName">alarmName</a></code> | <code>java.lang.String</code> | The name of the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | The arithmetic operation to use when comparing the specified statistic and threshold. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.datapointsToAlarm">datapointsToAlarm</a></code> | <code>java.lang.Number</code> | The number of datapoints that must be breaching to trigger the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.dimensions">dimensions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions">CloudwatchAlarmDimensions</a>></code> | The dimensions for the metric associated with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.evaluateLowSampleCountPercentile">evaluateLowSampleCountPercentile</a></code> | <code>java.lang.String</code> | Used only for alarms based on percentiles. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.evaluationCriteria">evaluationCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria">CloudwatchAlarmEvaluationCriteria</a></code> | The evaluation criteria for the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.evaluationInterval">evaluationInterval</a></code> | <code>java.lang.Number</code> | The frequency, in seconds, at which the alarm is evaluated. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | The number of periods over which data is compared to the specified threshold. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.evaluationWindow">evaluationWindow</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow">CloudwatchAlarmEvaluationWindow</a></code> | The evaluation window that the alarm uses to select the range of metric data that it evaluates. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.extendedStatistic">extendedStatistic</a></code> | <code>java.lang.String</code> | The percentile statistic for the metric associated with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.insufficientDataActions">insufficientDataActions</a></code> | <code>java.util.List<java.lang.String></code> | The actions to execute when this alarm transitions to the ``INSUFFICIENT_DATA`` state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.metricName">metricName</a></code> | <code>java.lang.String</code> | The name of the metric associated with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.metrics">metrics</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics">CloudwatchAlarmMetrics</a>></code> | An array that enables you to create an alarm based on the result of a metric math expression. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace of the metric associated with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.okActions">okActions</a></code> | <code>java.util.List<java.lang.String></code> | The actions to execute when this alarm transitions to the ``OK`` state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.period">period</a></code> | <code>java.lang.Number</code> | The period, in seconds, over which the statistic is applied. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.statistic">statistic</a></code> | <code>java.lang.String</code> | The statistic for the metric associated with the alarm, other than percentile. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags">CloudwatchAlarmTags</a>></code> | A list of key-value pairs to associate with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.threshold">threshold</a></code> | <code>java.lang.Number</code> | The value to compare with the specified statistic. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.thresholdMetricId">thresholdMetricId</a></code> | <code>java.lang.String</code> | In an alarm based on an anomaly detection model, this is the ID of the ``ANOMALY_DETECTION_BAND`` function used as the threshold for the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.treatMissingData">treatMissingData</a></code> | <code>java.lang.String</code> | Sets how this alarm is to handle missing data points. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.unit">unit</a></code> | <code>java.lang.String</code> | The unit of the metric associated with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.warmUpConfiguration">warmUpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfiguration">CloudwatchAlarmWarmUpConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#warm_up_configuration CloudwatchAlarm#warm_up_configuration}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actionsEnabled`<sup>Optional</sup> <a name="actionsEnabled" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.actionsEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#actions_enabled CloudwatchAlarm#actions_enabled}

---

##### `alarmActions`<sup>Optional</sup> <a name="alarmActions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.alarmActions"></a>

- *Type:* java.util.List<java.lang.String>

The list of actions to execute when this alarm transitions into an ALARM state from any other state.

Specify each action as an Amazon Resource Name (ARN). For more information about creating alarms and the actions that you can specify, see [PutMetricAlarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricAlarm.html) in the *API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#alarm_actions CloudwatchAlarm#alarm_actions}

---

##### `alarmDescription`<sup>Optional</sup> <a name="alarmDescription" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.alarmDescription"></a>

- *Type:* java.lang.String

The description of the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#alarm_description CloudwatchAlarm#alarm_description}

---

##### `alarmName`<sup>Optional</sup> <a name="alarmName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.alarmName"></a>

- *Type:* java.lang.String

The name of the alarm.

If you don't specify a name, CFN generates a unique physical ID and uses that ID for the alarm name.
If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#alarm_name CloudwatchAlarm#alarm_name}

---

##### `comparisonOperator`<sup>Optional</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.comparisonOperator"></a>

- *Type:* java.lang.String

The arithmetic operation to use when comparing the specified statistic and threshold.

The specified statistic value is used as the first operand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#comparison_operator CloudwatchAlarm#comparison_operator}

---

##### `datapointsToAlarm`<sup>Optional</sup> <a name="datapointsToAlarm" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.datapointsToAlarm"></a>

- *Type:* java.lang.Number

The number of datapoints that must be breaching to trigger the alarm.

This is used only if you are setting an "M out of N" alarm. In that case, this value is the M, and the value that you set for `EvaluationPeriods` is the N value. For more information, see [Evaluating an Alarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation) in the *User Guide*.
If you omit this parameter, CW uses the same value here that you set for `EvaluationPeriods`, and the alarm goes to alarm state if that many consecutive periods are breaching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#datapoints_to_alarm CloudwatchAlarm#datapoints_to_alarm}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.dimensions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions">CloudwatchAlarmDimensions</a>>

The dimensions for the metric associated with the alarm.

For an alarm based on a math expression, you can't specify `Dimensions`. Instead, you use `Metrics`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#dimensions CloudwatchAlarm#dimensions}

---

##### `evaluateLowSampleCountPercentile`<sup>Optional</sup> <a name="evaluateLowSampleCountPercentile" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.evaluateLowSampleCountPercentile"></a>

- *Type:* java.lang.String

Used only for alarms based on percentiles.

If `ignore`, the alarm state does not change during periods with too few data points to be statistically significant. If `evaluate` or this parameter is not used, the alarm is always evaluated and possibly changes state no matter how many data points are available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#evaluate_low_sample_count_percentile CloudwatchAlarm#evaluate_low_sample_count_percentile}

---

##### `evaluationCriteria`<sup>Optional</sup> <a name="evaluationCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.evaluationCriteria"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria">CloudwatchAlarmEvaluationCriteria</a>

The evaluation criteria for the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#evaluation_criteria CloudwatchAlarm#evaluation_criteria}

---

##### `evaluationInterval`<sup>Optional</sup> <a name="evaluationInterval" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.evaluationInterval"></a>

- *Type:* java.lang.Number

The frequency, in seconds, at which the alarm is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#evaluation_interval CloudwatchAlarm#evaluation_interval}

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.evaluationPeriods"></a>

- *Type:* java.lang.Number

The number of periods over which data is compared to the specified threshold.

If you are setting an alarm that requires that a number of consecutive data points be breaching to trigger the alarm, this value specifies that number. If you are setting an "M out of N" alarm, this value is the N, and `DatapointsToAlarm` is the M.
For more information, see [Evaluating an Alarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#evaluation_periods CloudwatchAlarm#evaluation_periods}

---

##### `evaluationWindow`<sup>Optional</sup> <a name="evaluationWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.evaluationWindow"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow">CloudwatchAlarmEvaluationWindow</a>

The evaluation window that the alarm uses to select the range of metric data that it evaluates.

This is either a sliding window or a wall clock window. For more information, see [Alarm evaluation windows](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/alarm-evaluation-window.html) in the *CloudWatch User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#evaluation_window CloudwatchAlarm#evaluation_window}

---

##### `extendedStatistic`<sup>Optional</sup> <a name="extendedStatistic" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.extendedStatistic"></a>

- *Type:* java.lang.String

The percentile statistic for the metric associated with the alarm.

Specify a value between p0.0 and p100.
For an alarm based on a metric, you must specify either `Statistic` or `ExtendedStatistic` but not both.
For an alarm based on a math expression, you can't specify `ExtendedStatistic`. Instead, you use `Metrics`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#extended_statistic CloudwatchAlarm#extended_statistic}

---

##### `insufficientDataActions`<sup>Optional</sup> <a name="insufficientDataActions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.insufficientDataActions"></a>

- *Type:* java.util.List<java.lang.String>

The actions to execute when this alarm transitions to the ``INSUFFICIENT_DATA`` state from any other state.

Each action is specified as an Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#insufficient_data_actions CloudwatchAlarm#insufficient_data_actions}

---

##### `metricName`<sup>Optional</sup> <a name="metricName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.metricName"></a>

- *Type:* java.lang.String

The name of the metric associated with the alarm.

This is required for an alarm based on a metric. For an alarm based on a math expression, you use `Metrics` instead and you can't specify `MetricName`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#metric_name CloudwatchAlarm#metric_name}

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.metrics"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics">CloudwatchAlarmMetrics</a>>

An array that enables you to create an alarm based on the result of a metric math expression.

Each item in the array either retrieves a metric or performs a math expression.
If you specify the `Metrics` parameter, you cannot specify `MetricName`, `Dimensions`, `Period`, `Namespace`, `Statistic`, `ExtendedStatistic`, or `Unit`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#metrics CloudwatchAlarm#metrics}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

The namespace of the metric associated with the alarm.

This is required for an alarm based on a metric. For an alarm based on a math expression, you can't specify `Namespace` and you use `Metrics` instead.
For a list of namespaces for metrics from AWS services, see [Services That Publish Metrics.](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#namespace CloudwatchAlarm#namespace}

---

##### `okActions`<sup>Optional</sup> <a name="okActions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.okActions"></a>

- *Type:* java.util.List<java.lang.String>

The actions to execute when this alarm transitions to the ``OK`` state from any other state.

Each action is specified as an Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#ok_actions CloudwatchAlarm#ok_actions}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.period"></a>

- *Type:* java.lang.Number

The period, in seconds, over which the statistic is applied.

This is required for an alarm based on a metric. Valid values are 10, 20, 30, 60, and any multiple of 60.
For an alarm based on a math expression, you can't specify `Period`, and instead you use the `Metrics` parameter.
*Minimum:* 10

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#period CloudwatchAlarm#period}

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.statistic"></a>

- *Type:* java.lang.String

The statistic for the metric associated with the alarm, other than percentile.

For percentile statistics, use `ExtendedStatistic`.
For an alarm based on a metric, you must specify either `Statistic` or `ExtendedStatistic` but not both.
For an alarm based on a math expression, you can't specify `Statistic`. Instead, you use `Metrics`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#statistic CloudwatchAlarm#statistic}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags">CloudwatchAlarmTags</a>>

A list of key-value pairs to associate with the alarm.

You can associate as many as 50 tags with an alarm. To be able to associate tags with the alarm when you create the alarm, you must have the `cloudwatch:TagResource` permission.
Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#tags CloudwatchAlarm#tags}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.threshold"></a>

- *Type:* java.lang.Number

The value to compare with the specified statistic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#threshold CloudwatchAlarm#threshold}

---

##### `thresholdMetricId`<sup>Optional</sup> <a name="thresholdMetricId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.thresholdMetricId"></a>

- *Type:* java.lang.String

In an alarm based on an anomaly detection model, this is the ID of the ``ANOMALY_DETECTION_BAND`` function used as the threshold for the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#threshold_metric_id CloudwatchAlarm#threshold_metric_id}

---

##### `treatMissingData`<sup>Optional</sup> <a name="treatMissingData" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.treatMissingData"></a>

- *Type:* java.lang.String

Sets how this alarm is to handle missing data points.

Valid values are `breaching`, `notBreaching`, `ignore`, and `missing`. For more information, see [Configuring How Alarms Treat Missing Data](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-missing-data) in the *Amazon User Guide*.
If you omit this parameter, the default behavior of `missing` is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#treat_missing_data CloudwatchAlarm#treat_missing_data}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.unit"></a>

- *Type:* java.lang.String

The unit of the metric associated with the alarm.

Specify this only if you are creating an alarm based on a single metric. Do not specify this if you are specifying a `Metrics` array.
You can specify the following values: Seconds, Microseconds, Milliseconds, Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, Bits, Kilobits, Megabits, Gigabits, Terabits, Percent, Count, Bytes/Second, Kilobytes/Second, Megabytes/Second, Gigabytes/Second, Terabytes/Second, Bits/Second, Kilobits/Second, Megabits/Second, Gigabits/Second, Terabits/Second, Count/Second, or None.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#unit CloudwatchAlarm#unit}

---

##### `warmUpConfiguration`<sup>Optional</sup> <a name="warmUpConfiguration" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.Initializer.parameter.warmUpConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfiguration">CloudwatchAlarmWarmUpConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#warm_up_configuration CloudwatchAlarm#warm_up_configuration}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putDimensions">putDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putEvaluationCriteria">putEvaluationCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putEvaluationWindow">putEvaluationWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putMetrics">putMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putWarmUpConfiguration">putWarmUpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetActionsEnabled">resetActionsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetAlarmActions">resetAlarmActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetAlarmDescription">resetAlarmDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetAlarmName">resetAlarmName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetComparisonOperator">resetComparisonOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetDatapointsToAlarm">resetDatapointsToAlarm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluateLowSampleCountPercentile">resetEvaluateLowSampleCountPercentile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationCriteria">resetEvaluationCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationInterval">resetEvaluationInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationPeriods">resetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationWindow">resetEvaluationWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetExtendedStatistic">resetExtendedStatistic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetInsufficientDataActions">resetInsufficientDataActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetMetricName">resetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetMetrics">resetMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetOkActions">resetOkActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetStatistic">resetStatistic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetThreshold">resetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetThresholdMetricId">resetThresholdMetricId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetTreatMissingData">resetTreatMissingData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetUnit">resetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetWarmUpConfiguration">resetWarmUpConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDimensions` <a name="putDimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putDimensions"></a>

```java
public void putDimensions(IResolvable|java.util.List<CloudwatchAlarmDimensions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putDimensions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions">CloudwatchAlarmDimensions</a>>

---

##### `putEvaluationCriteria` <a name="putEvaluationCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putEvaluationCriteria"></a>

```java
public void putEvaluationCriteria(CloudwatchAlarmEvaluationCriteria value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putEvaluationCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria">CloudwatchAlarmEvaluationCriteria</a>

---

##### `putEvaluationWindow` <a name="putEvaluationWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putEvaluationWindow"></a>

```java
public void putEvaluationWindow(CloudwatchAlarmEvaluationWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putEvaluationWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow">CloudwatchAlarmEvaluationWindow</a>

---

##### `putMetrics` <a name="putMetrics" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putMetrics"></a>

```java
public void putMetrics(IResolvable|java.util.List<CloudwatchAlarmMetrics> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putMetrics.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics">CloudwatchAlarmMetrics</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CloudwatchAlarmTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags">CloudwatchAlarmTags</a>>

---

##### `putWarmUpConfiguration` <a name="putWarmUpConfiguration" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putWarmUpConfiguration"></a>

```java
public void putWarmUpConfiguration(CloudwatchAlarmWarmUpConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.putWarmUpConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfiguration">CloudwatchAlarmWarmUpConfiguration</a>

---

##### `resetActionsEnabled` <a name="resetActionsEnabled" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetActionsEnabled"></a>

```java
public void resetActionsEnabled()
```

##### `resetAlarmActions` <a name="resetAlarmActions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetAlarmActions"></a>

```java
public void resetAlarmActions()
```

##### `resetAlarmDescription` <a name="resetAlarmDescription" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetAlarmDescription"></a>

```java
public void resetAlarmDescription()
```

##### `resetAlarmName` <a name="resetAlarmName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetAlarmName"></a>

```java
public void resetAlarmName()
```

##### `resetComparisonOperator` <a name="resetComparisonOperator" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetComparisonOperator"></a>

```java
public void resetComparisonOperator()
```

##### `resetDatapointsToAlarm` <a name="resetDatapointsToAlarm" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetDatapointsToAlarm"></a>

```java
public void resetDatapointsToAlarm()
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetDimensions"></a>

```java
public void resetDimensions()
```

##### `resetEvaluateLowSampleCountPercentile` <a name="resetEvaluateLowSampleCountPercentile" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluateLowSampleCountPercentile"></a>

```java
public void resetEvaluateLowSampleCountPercentile()
```

##### `resetEvaluationCriteria` <a name="resetEvaluationCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationCriteria"></a>

```java
public void resetEvaluationCriteria()
```

##### `resetEvaluationInterval` <a name="resetEvaluationInterval" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationInterval"></a>

```java
public void resetEvaluationInterval()
```

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationPeriods"></a>

```java
public void resetEvaluationPeriods()
```

##### `resetEvaluationWindow` <a name="resetEvaluationWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetEvaluationWindow"></a>

```java
public void resetEvaluationWindow()
```

##### `resetExtendedStatistic` <a name="resetExtendedStatistic" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetExtendedStatistic"></a>

```java
public void resetExtendedStatistic()
```

##### `resetInsufficientDataActions` <a name="resetInsufficientDataActions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetInsufficientDataActions"></a>

```java
public void resetInsufficientDataActions()
```

##### `resetMetricName` <a name="resetMetricName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetMetricName"></a>

```java
public void resetMetricName()
```

##### `resetMetrics` <a name="resetMetrics" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetMetrics"></a>

```java
public void resetMetrics()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetOkActions` <a name="resetOkActions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetOkActions"></a>

```java
public void resetOkActions()
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetPeriod"></a>

```java
public void resetPeriod()
```

##### `resetStatistic` <a name="resetStatistic" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetStatistic"></a>

```java
public void resetStatistic()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetTags"></a>

```java
public void resetTags()
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetThreshold"></a>

```java
public void resetThreshold()
```

##### `resetThresholdMetricId` <a name="resetThresholdMetricId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetThresholdMetricId"></a>

```java
public void resetThresholdMetricId()
```

##### `resetTreatMissingData` <a name="resetTreatMissingData" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetTreatMissingData"></a>

```java
public void resetTreatMissingData()
```

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetUnit"></a>

```java
public void resetUnit()
```

##### `resetWarmUpConfiguration` <a name="resetWarmUpConfiguration" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.resetWarmUpConfiguration"></a>

```java
public void resetWarmUpConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchAlarm resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarm;

CloudwatchAlarm.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarm;

CloudwatchAlarm.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarm;

CloudwatchAlarm.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarm;

CloudwatchAlarm.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudwatchAlarm.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudwatchAlarm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudwatchAlarm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudwatchAlarm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchAlarm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList">CloudwatchAlarmDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationCriteria">evaluationCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference">CloudwatchAlarmEvaluationCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationWindow">evaluationWindow</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference">CloudwatchAlarmEvaluationWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metrics">metrics</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList">CloudwatchAlarmMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList">CloudwatchAlarmTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.warmUpConfiguration">warmUpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference">CloudwatchAlarmWarmUpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.actionsEnabledInput">actionsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmActionsInput">alarmActionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmDescriptionInput">alarmDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmNameInput">alarmNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.datapointsToAlarmInput">datapointsToAlarmInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.dimensionsInput">dimensionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions">CloudwatchAlarmDimensions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluateLowSampleCountPercentileInput">evaluateLowSampleCountPercentileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationCriteriaInput">evaluationCriteriaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria">CloudwatchAlarmEvaluationCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationIntervalInput">evaluationIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationWindowInput">evaluationWindowInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow">CloudwatchAlarmEvaluationWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.extendedStatisticInput">extendedStatisticInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.insufficientDataActionsInput">insufficientDataActionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metricsInput">metricsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics">CloudwatchAlarmMetrics</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.okActionsInput">okActionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.periodInput">periodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.statisticInput">statisticInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags">CloudwatchAlarmTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.thresholdMetricIdInput">thresholdMetricIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.treatMissingDataInput">treatMissingDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.warmUpConfigurationInput">warmUpConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfiguration">CloudwatchAlarmWarmUpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.actionsEnabled">actionsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmActions">alarmActions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmDescription">alarmDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmName">alarmName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.datapointsToAlarm">datapointsToAlarm</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluateLowSampleCountPercentile">evaluateLowSampleCountPercentile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationInterval">evaluationInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.extendedStatistic">extendedStatistic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.insufficientDataActions">insufficientDataActions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.okActions">okActions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.period">period</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.statistic">statistic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.thresholdMetricId">thresholdMetricId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.treatMissingData">treatMissingData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.dimensions"></a>

```java
public CloudwatchAlarmDimensionsList getDimensions();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList">CloudwatchAlarmDimensionsList</a>

---

##### `evaluationCriteria`<sup>Required</sup> <a name="evaluationCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationCriteria"></a>

```java
public CloudwatchAlarmEvaluationCriteriaOutputReference getEvaluationCriteria();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference">CloudwatchAlarmEvaluationCriteriaOutputReference</a>

---

##### `evaluationWindow`<sup>Required</sup> <a name="evaluationWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationWindow"></a>

```java
public CloudwatchAlarmEvaluationWindowOutputReference getEvaluationWindow();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference">CloudwatchAlarmEvaluationWindowOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metrics"></a>

```java
public CloudwatchAlarmMetricsList getMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList">CloudwatchAlarmMetricsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.tags"></a>

```java
public CloudwatchAlarmTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList">CloudwatchAlarmTagsList</a>

---

##### `warmUpConfiguration`<sup>Required</sup> <a name="warmUpConfiguration" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.warmUpConfiguration"></a>

```java
public CloudwatchAlarmWarmUpConfigurationOutputReference getWarmUpConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference">CloudwatchAlarmWarmUpConfigurationOutputReference</a>

---

##### `actionsEnabledInput`<sup>Optional</sup> <a name="actionsEnabledInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.actionsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getActionsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `alarmActionsInput`<sup>Optional</sup> <a name="alarmActionsInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmActionsInput"></a>

```java
public java.util.List<java.lang.String> getAlarmActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `alarmDescriptionInput`<sup>Optional</sup> <a name="alarmDescriptionInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmDescriptionInput"></a>

```java
public java.lang.String getAlarmDescriptionInput();
```

- *Type:* java.lang.String

---

##### `alarmNameInput`<sup>Optional</sup> <a name="alarmNameInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmNameInput"></a>

```java
public java.lang.String getAlarmNameInput();
```

- *Type:* java.lang.String

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `datapointsToAlarmInput`<sup>Optional</sup> <a name="datapointsToAlarmInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.datapointsToAlarmInput"></a>

```java
public java.lang.Number getDatapointsToAlarmInput();
```

- *Type:* java.lang.Number

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.dimensionsInput"></a>

```java
public IResolvable|java.util.List<CloudwatchAlarmDimensions> getDimensionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions">CloudwatchAlarmDimensions</a>>

---

##### `evaluateLowSampleCountPercentileInput`<sup>Optional</sup> <a name="evaluateLowSampleCountPercentileInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluateLowSampleCountPercentileInput"></a>

```java
public java.lang.String getEvaluateLowSampleCountPercentileInput();
```

- *Type:* java.lang.String

---

##### `evaluationCriteriaInput`<sup>Optional</sup> <a name="evaluationCriteriaInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationCriteriaInput"></a>

```java
public IResolvable|CloudwatchAlarmEvaluationCriteria getEvaluationCriteriaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria">CloudwatchAlarmEvaluationCriteria</a>

---

##### `evaluationIntervalInput`<sup>Optional</sup> <a name="evaluationIntervalInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationIntervalInput"></a>

```java
public java.lang.Number getEvaluationIntervalInput();
```

- *Type:* java.lang.Number

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationPeriodsInput"></a>

```java
public java.lang.Number getEvaluationPeriodsInput();
```

- *Type:* java.lang.Number

---

##### `evaluationWindowInput`<sup>Optional</sup> <a name="evaluationWindowInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationWindowInput"></a>

```java
public IResolvable|CloudwatchAlarmEvaluationWindow getEvaluationWindowInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow">CloudwatchAlarmEvaluationWindow</a>

---

##### `extendedStatisticInput`<sup>Optional</sup> <a name="extendedStatisticInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.extendedStatisticInput"></a>

```java
public java.lang.String getExtendedStatisticInput();
```

- *Type:* java.lang.String

---

##### `insufficientDataActionsInput`<sup>Optional</sup> <a name="insufficientDataActionsInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.insufficientDataActionsInput"></a>

```java
public java.util.List<java.lang.String> getInsufficientDataActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `metricsInput`<sup>Optional</sup> <a name="metricsInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metricsInput"></a>

```java
public IResolvable|java.util.List<CloudwatchAlarmMetrics> getMetricsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics">CloudwatchAlarmMetrics</a>>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `okActionsInput`<sup>Optional</sup> <a name="okActionsInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.okActionsInput"></a>

```java
public java.util.List<java.lang.String> getOkActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.periodInput"></a>

```java
public java.lang.Number getPeriodInput();
```

- *Type:* java.lang.Number

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.statisticInput"></a>

```java
public java.lang.String getStatisticInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CloudwatchAlarmTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags">CloudwatchAlarmTags</a>>

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `thresholdMetricIdInput`<sup>Optional</sup> <a name="thresholdMetricIdInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.thresholdMetricIdInput"></a>

```java
public java.lang.String getThresholdMetricIdInput();
```

- *Type:* java.lang.String

---

##### `treatMissingDataInput`<sup>Optional</sup> <a name="treatMissingDataInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.treatMissingDataInput"></a>

```java
public java.lang.String getTreatMissingDataInput();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `warmUpConfigurationInput`<sup>Optional</sup> <a name="warmUpConfigurationInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.warmUpConfigurationInput"></a>

```java
public IResolvable|CloudwatchAlarmWarmUpConfiguration getWarmUpConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfiguration">CloudwatchAlarmWarmUpConfiguration</a>

---

##### `actionsEnabled`<sup>Required</sup> <a name="actionsEnabled" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.actionsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getActionsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `alarmActions`<sup>Required</sup> <a name="alarmActions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmActions"></a>

```java
public java.util.List<java.lang.String> getAlarmActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `alarmDescription`<sup>Required</sup> <a name="alarmDescription" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmDescription"></a>

```java
public java.lang.String getAlarmDescription();
```

- *Type:* java.lang.String

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.alarmName"></a>

```java
public java.lang.String getAlarmName();
```

- *Type:* java.lang.String

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `datapointsToAlarm`<sup>Required</sup> <a name="datapointsToAlarm" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.datapointsToAlarm"></a>

```java
public java.lang.Number getDatapointsToAlarm();
```

- *Type:* java.lang.Number

---

##### `evaluateLowSampleCountPercentile`<sup>Required</sup> <a name="evaluateLowSampleCountPercentile" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluateLowSampleCountPercentile"></a>

```java
public java.lang.String getEvaluateLowSampleCountPercentile();
```

- *Type:* java.lang.String

---

##### `evaluationInterval`<sup>Required</sup> <a name="evaluationInterval" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationInterval"></a>

```java
public java.lang.Number getEvaluationInterval();
```

- *Type:* java.lang.Number

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

---

##### `extendedStatistic`<sup>Required</sup> <a name="extendedStatistic" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.extendedStatistic"></a>

```java
public java.lang.String getExtendedStatistic();
```

- *Type:* java.lang.String

---

##### `insufficientDataActions`<sup>Required</sup> <a name="insufficientDataActions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.insufficientDataActions"></a>

```java
public java.util.List<java.lang.String> getInsufficientDataActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `okActions`<sup>Required</sup> <a name="okActions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.okActions"></a>

```java
public java.util.List<java.lang.String> getOkActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `thresholdMetricId`<sup>Required</sup> <a name="thresholdMetricId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.thresholdMetricId"></a>

```java
public java.lang.String getThresholdMetricId();
```

- *Type:* java.lang.String

---

##### `treatMissingData`<sup>Required</sup> <a name="treatMissingData" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.treatMissingData"></a>

```java
public java.lang.String getTreatMissingData();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarm.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchAlarmConfig <a name="CloudwatchAlarmConfig" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarmConfig;

CloudwatchAlarmConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .actionsEnabled(java.lang.Boolean|IResolvable)
//  .alarmActions(java.util.List<java.lang.String>)
//  .alarmDescription(java.lang.String)
//  .alarmName(java.lang.String)
//  .comparisonOperator(java.lang.String)
//  .datapointsToAlarm(java.lang.Number)
//  .dimensions(IResolvable|java.util.List<CloudwatchAlarmDimensions>)
//  .evaluateLowSampleCountPercentile(java.lang.String)
//  .evaluationCriteria(CloudwatchAlarmEvaluationCriteria)
//  .evaluationInterval(java.lang.Number)
//  .evaluationPeriods(java.lang.Number)
//  .evaluationWindow(CloudwatchAlarmEvaluationWindow)
//  .extendedStatistic(java.lang.String)
//  .insufficientDataActions(java.util.List<java.lang.String>)
//  .metricName(java.lang.String)
//  .metrics(IResolvable|java.util.List<CloudwatchAlarmMetrics>)
//  .namespace(java.lang.String)
//  .okActions(java.util.List<java.lang.String>)
//  .period(java.lang.Number)
//  .statistic(java.lang.String)
//  .tags(IResolvable|java.util.List<CloudwatchAlarmTags>)
//  .threshold(java.lang.Number)
//  .thresholdMetricId(java.lang.String)
//  .treatMissingData(java.lang.String)
//  .unit(java.lang.String)
//  .warmUpConfiguration(CloudwatchAlarmWarmUpConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.actionsEnabled">actionsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.alarmActions">alarmActions</a></code> | <code>java.util.List<java.lang.String></code> | The list of actions to execute when this alarm transitions into an ALARM state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.alarmDescription">alarmDescription</a></code> | <code>java.lang.String</code> | The description of the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.alarmName">alarmName</a></code> | <code>java.lang.String</code> | The name of the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | The arithmetic operation to use when comparing the specified statistic and threshold. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.datapointsToAlarm">datapointsToAlarm</a></code> | <code>java.lang.Number</code> | The number of datapoints that must be breaching to trigger the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.dimensions">dimensions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions">CloudwatchAlarmDimensions</a>></code> | The dimensions for the metric associated with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluateLowSampleCountPercentile">evaluateLowSampleCountPercentile</a></code> | <code>java.lang.String</code> | Used only for alarms based on percentiles. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationCriteria">evaluationCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria">CloudwatchAlarmEvaluationCriteria</a></code> | The evaluation criteria for the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationInterval">evaluationInterval</a></code> | <code>java.lang.Number</code> | The frequency, in seconds, at which the alarm is evaluated. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | The number of periods over which data is compared to the specified threshold. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationWindow">evaluationWindow</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow">CloudwatchAlarmEvaluationWindow</a></code> | The evaluation window that the alarm uses to select the range of metric data that it evaluates. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.extendedStatistic">extendedStatistic</a></code> | <code>java.lang.String</code> | The percentile statistic for the metric associated with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.insufficientDataActions">insufficientDataActions</a></code> | <code>java.util.List<java.lang.String></code> | The actions to execute when this alarm transitions to the ``INSUFFICIENT_DATA`` state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.metricName">metricName</a></code> | <code>java.lang.String</code> | The name of the metric associated with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.metrics">metrics</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics">CloudwatchAlarmMetrics</a>></code> | An array that enables you to create an alarm based on the result of a metric math expression. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace of the metric associated with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.okActions">okActions</a></code> | <code>java.util.List<java.lang.String></code> | The actions to execute when this alarm transitions to the ``OK`` state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.period">period</a></code> | <code>java.lang.Number</code> | The period, in seconds, over which the statistic is applied. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.statistic">statistic</a></code> | <code>java.lang.String</code> | The statistic for the metric associated with the alarm, other than percentile. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags">CloudwatchAlarmTags</a>></code> | A list of key-value pairs to associate with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | The value to compare with the specified statistic. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.thresholdMetricId">thresholdMetricId</a></code> | <code>java.lang.String</code> | In an alarm based on an anomaly detection model, this is the ID of the ``ANOMALY_DETECTION_BAND`` function used as the threshold for the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.treatMissingData">treatMissingData</a></code> | <code>java.lang.String</code> | Sets how this alarm is to handle missing data points. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.unit">unit</a></code> | <code>java.lang.String</code> | The unit of the metric associated with the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.warmUpConfiguration">warmUpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfiguration">CloudwatchAlarmWarmUpConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#warm_up_configuration CloudwatchAlarm#warm_up_configuration}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actionsEnabled`<sup>Optional</sup> <a name="actionsEnabled" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.actionsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getActionsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#actions_enabled CloudwatchAlarm#actions_enabled}

---

##### `alarmActions`<sup>Optional</sup> <a name="alarmActions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.alarmActions"></a>

```java
public java.util.List<java.lang.String> getAlarmActions();
```

- *Type:* java.util.List<java.lang.String>

The list of actions to execute when this alarm transitions into an ALARM state from any other state.

Specify each action as an Amazon Resource Name (ARN). For more information about creating alarms and the actions that you can specify, see [PutMetricAlarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricAlarm.html) in the *API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#alarm_actions CloudwatchAlarm#alarm_actions}

---

##### `alarmDescription`<sup>Optional</sup> <a name="alarmDescription" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.alarmDescription"></a>

```java
public java.lang.String getAlarmDescription();
```

- *Type:* java.lang.String

The description of the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#alarm_description CloudwatchAlarm#alarm_description}

---

##### `alarmName`<sup>Optional</sup> <a name="alarmName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.alarmName"></a>

```java
public java.lang.String getAlarmName();
```

- *Type:* java.lang.String

The name of the alarm.

If you don't specify a name, CFN generates a unique physical ID and uses that ID for the alarm name.
If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#alarm_name CloudwatchAlarm#alarm_name}

---

##### `comparisonOperator`<sup>Optional</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

The arithmetic operation to use when comparing the specified statistic and threshold.

The specified statistic value is used as the first operand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#comparison_operator CloudwatchAlarm#comparison_operator}

---

##### `datapointsToAlarm`<sup>Optional</sup> <a name="datapointsToAlarm" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.datapointsToAlarm"></a>

```java
public java.lang.Number getDatapointsToAlarm();
```

- *Type:* java.lang.Number

The number of datapoints that must be breaching to trigger the alarm.

This is used only if you are setting an "M out of N" alarm. In that case, this value is the M, and the value that you set for `EvaluationPeriods` is the N value. For more information, see [Evaluating an Alarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation) in the *User Guide*.
If you omit this parameter, CW uses the same value here that you set for `EvaluationPeriods`, and the alarm goes to alarm state if that many consecutive periods are breaching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#datapoints_to_alarm CloudwatchAlarm#datapoints_to_alarm}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.dimensions"></a>

```java
public IResolvable|java.util.List<CloudwatchAlarmDimensions> getDimensions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions">CloudwatchAlarmDimensions</a>>

The dimensions for the metric associated with the alarm.

For an alarm based on a math expression, you can't specify `Dimensions`. Instead, you use `Metrics`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#dimensions CloudwatchAlarm#dimensions}

---

##### `evaluateLowSampleCountPercentile`<sup>Optional</sup> <a name="evaluateLowSampleCountPercentile" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluateLowSampleCountPercentile"></a>

```java
public java.lang.String getEvaluateLowSampleCountPercentile();
```

- *Type:* java.lang.String

Used only for alarms based on percentiles.

If `ignore`, the alarm state does not change during periods with too few data points to be statistically significant. If `evaluate` or this parameter is not used, the alarm is always evaluated and possibly changes state no matter how many data points are available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#evaluate_low_sample_count_percentile CloudwatchAlarm#evaluate_low_sample_count_percentile}

---

##### `evaluationCriteria`<sup>Optional</sup> <a name="evaluationCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationCriteria"></a>

```java
public CloudwatchAlarmEvaluationCriteria getEvaluationCriteria();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria">CloudwatchAlarmEvaluationCriteria</a>

The evaluation criteria for the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#evaluation_criteria CloudwatchAlarm#evaluation_criteria}

---

##### `evaluationInterval`<sup>Optional</sup> <a name="evaluationInterval" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationInterval"></a>

```java
public java.lang.Number getEvaluationInterval();
```

- *Type:* java.lang.Number

The frequency, in seconds, at which the alarm is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#evaluation_interval CloudwatchAlarm#evaluation_interval}

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

The number of periods over which data is compared to the specified threshold.

If you are setting an alarm that requires that a number of consecutive data points be breaching to trigger the alarm, this value specifies that number. If you are setting an "M out of N" alarm, this value is the N, and `DatapointsToAlarm` is the M.
For more information, see [Evaluating an Alarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#evaluation_periods CloudwatchAlarm#evaluation_periods}

---

##### `evaluationWindow`<sup>Optional</sup> <a name="evaluationWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.evaluationWindow"></a>

```java
public CloudwatchAlarmEvaluationWindow getEvaluationWindow();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow">CloudwatchAlarmEvaluationWindow</a>

The evaluation window that the alarm uses to select the range of metric data that it evaluates.

This is either a sliding window or a wall clock window. For more information, see [Alarm evaluation windows](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/alarm-evaluation-window.html) in the *CloudWatch User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#evaluation_window CloudwatchAlarm#evaluation_window}

---

##### `extendedStatistic`<sup>Optional</sup> <a name="extendedStatistic" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.extendedStatistic"></a>

```java
public java.lang.String getExtendedStatistic();
```

- *Type:* java.lang.String

The percentile statistic for the metric associated with the alarm.

Specify a value between p0.0 and p100.
For an alarm based on a metric, you must specify either `Statistic` or `ExtendedStatistic` but not both.
For an alarm based on a math expression, you can't specify `ExtendedStatistic`. Instead, you use `Metrics`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#extended_statistic CloudwatchAlarm#extended_statistic}

---

##### `insufficientDataActions`<sup>Optional</sup> <a name="insufficientDataActions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.insufficientDataActions"></a>

```java
public java.util.List<java.lang.String> getInsufficientDataActions();
```

- *Type:* java.util.List<java.lang.String>

The actions to execute when this alarm transitions to the ``INSUFFICIENT_DATA`` state from any other state.

Each action is specified as an Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#insufficient_data_actions CloudwatchAlarm#insufficient_data_actions}

---

##### `metricName`<sup>Optional</sup> <a name="metricName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

The name of the metric associated with the alarm.

This is required for an alarm based on a metric. For an alarm based on a math expression, you use `Metrics` instead and you can't specify `MetricName`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#metric_name CloudwatchAlarm#metric_name}

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.metrics"></a>

```java
public IResolvable|java.util.List<CloudwatchAlarmMetrics> getMetrics();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics">CloudwatchAlarmMetrics</a>>

An array that enables you to create an alarm based on the result of a metric math expression.

Each item in the array either retrieves a metric or performs a math expression.
If you specify the `Metrics` parameter, you cannot specify `MetricName`, `Dimensions`, `Period`, `Namespace`, `Statistic`, `ExtendedStatistic`, or `Unit`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#metrics CloudwatchAlarm#metrics}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The namespace of the metric associated with the alarm.

This is required for an alarm based on a metric. For an alarm based on a math expression, you can't specify `Namespace` and you use `Metrics` instead.
For a list of namespaces for metrics from AWS services, see [Services That Publish Metrics.](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#namespace CloudwatchAlarm#namespace}

---

##### `okActions`<sup>Optional</sup> <a name="okActions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.okActions"></a>

```java
public java.util.List<java.lang.String> getOkActions();
```

- *Type:* java.util.List<java.lang.String>

The actions to execute when this alarm transitions to the ``OK`` state from any other state.

Each action is specified as an Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#ok_actions CloudwatchAlarm#ok_actions}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

The period, in seconds, over which the statistic is applied.

This is required for an alarm based on a metric. Valid values are 10, 20, 30, 60, and any multiple of 60.
For an alarm based on a math expression, you can't specify `Period`, and instead you use the `Metrics` parameter.
*Minimum:* 10

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#period CloudwatchAlarm#period}

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

The statistic for the metric associated with the alarm, other than percentile.

For percentile statistics, use `ExtendedStatistic`.
For an alarm based on a metric, you must specify either `Statistic` or `ExtendedStatistic` but not both.
For an alarm based on a math expression, you can't specify `Statistic`. Instead, you use `Metrics`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#statistic CloudwatchAlarm#statistic}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CloudwatchAlarmTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags">CloudwatchAlarmTags</a>>

A list of key-value pairs to associate with the alarm.

You can associate as many as 50 tags with an alarm. To be able to associate tags with the alarm when you create the alarm, you must have the `cloudwatch:TagResource` permission.
Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#tags CloudwatchAlarm#tags}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

The value to compare with the specified statistic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#threshold CloudwatchAlarm#threshold}

---

##### `thresholdMetricId`<sup>Optional</sup> <a name="thresholdMetricId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.thresholdMetricId"></a>

```java
public java.lang.String getThresholdMetricId();
```

- *Type:* java.lang.String

In an alarm based on an anomaly detection model, this is the ID of the ``ANOMALY_DETECTION_BAND`` function used as the threshold for the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#threshold_metric_id CloudwatchAlarm#threshold_metric_id}

---

##### `treatMissingData`<sup>Optional</sup> <a name="treatMissingData" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.treatMissingData"></a>

```java
public java.lang.String getTreatMissingData();
```

- *Type:* java.lang.String

Sets how this alarm is to handle missing data points.

Valid values are `breaching`, `notBreaching`, `ignore`, and `missing`. For more information, see [Configuring How Alarms Treat Missing Data](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-missing-data) in the *Amazon User Guide*.
If you omit this parameter, the default behavior of `missing` is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#treat_missing_data CloudwatchAlarm#treat_missing_data}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

The unit of the metric associated with the alarm.

Specify this only if you are creating an alarm based on a single metric. Do not specify this if you are specifying a `Metrics` array.
You can specify the following values: Seconds, Microseconds, Milliseconds, Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, Bits, Kilobits, Megabits, Gigabits, Terabits, Percent, Count, Bytes/Second, Kilobytes/Second, Megabytes/Second, Gigabytes/Second, Terabytes/Second, Bits/Second, Kilobits/Second, Megabits/Second, Gigabits/Second, Terabits/Second, Count/Second, or None.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#unit CloudwatchAlarm#unit}

---

##### `warmUpConfiguration`<sup>Optional</sup> <a name="warmUpConfiguration" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmConfig.property.warmUpConfiguration"></a>

```java
public CloudwatchAlarmWarmUpConfiguration getWarmUpConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfiguration">CloudwatchAlarmWarmUpConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#warm_up_configuration CloudwatchAlarm#warm_up_configuration}.

---

### CloudwatchAlarmDimensions <a name="CloudwatchAlarmDimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarmDimensions;

CloudwatchAlarmDimensions.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions.property.name">name</a></code> | <code>java.lang.String</code> | The name of the dimension, from 1–255 characters in length. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions.property.value">value</a></code> | <code>java.lang.String</code> | The value for the dimension, from 1–255 characters in length. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the dimension, from 1–255 characters in length.

This dimension name must have been included when the metric was published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#name CloudwatchAlarm#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the dimension, from 1–255 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#value CloudwatchAlarm#value}

---

### CloudwatchAlarmEvaluationCriteria <a name="CloudwatchAlarmEvaluationCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarmEvaluationCriteria;

CloudwatchAlarmEvaluationCriteria.builder()
//  .promQlCriteria(CloudwatchAlarmEvaluationCriteriaPromQlCriteria)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria.property.promQlCriteria">promQlCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria">CloudwatchAlarmEvaluationCriteriaPromQlCriteria</a></code> | The PromQL criteria for the alarm evaluation. |

---

##### `promQlCriteria`<sup>Optional</sup> <a name="promQlCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria.property.promQlCriteria"></a>

```java
public CloudwatchAlarmEvaluationCriteriaPromQlCriteria getPromQlCriteria();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria">CloudwatchAlarmEvaluationCriteriaPromQlCriteria</a>

The PromQL criteria for the alarm evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#prom_ql_criteria CloudwatchAlarm#prom_ql_criteria}

---

### CloudwatchAlarmEvaluationCriteriaPromQlCriteria <a name="CloudwatchAlarmEvaluationCriteriaPromQlCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria;

CloudwatchAlarmEvaluationCriteriaPromQlCriteria.builder()
//  .pendingPeriod(java.lang.Number)
//  .query(java.lang.String)
//  .recoveryPeriod(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria.property.pendingPeriod">pendingPeriod</a></code> | <code>java.lang.Number</code> | The duration, in seconds, that a contributor must be continuously breaching before it transitions to the ``ALARM`` state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria.property.query">query</a></code> | <code>java.lang.String</code> | The PromQL query that the alarm evaluates. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria.property.recoveryPeriod">recoveryPeriod</a></code> | <code>java.lang.Number</code> | The duration, in seconds, that a contributor must continuously not be breaching before it transitions back to the ``OK`` state. |

---

##### `pendingPeriod`<sup>Optional</sup> <a name="pendingPeriod" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria.property.pendingPeriod"></a>

```java
public java.lang.Number getPendingPeriod();
```

- *Type:* java.lang.Number

The duration, in seconds, that a contributor must be continuously breaching before it transitions to the ``ALARM`` state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#pending_period CloudwatchAlarm#pending_period}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

The PromQL query that the alarm evaluates.

The query must return a result of vector type. Each entry in the vector result represents an alarm contributor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#query CloudwatchAlarm#query}

---

##### `recoveryPeriod`<sup>Optional</sup> <a name="recoveryPeriod" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria.property.recoveryPeriod"></a>

```java
public java.lang.Number getRecoveryPeriod();
```

- *Type:* java.lang.Number

The duration, in seconds, that a contributor must continuously not be breaching before it transitions back to the ``OK`` state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#recovery_period CloudwatchAlarm#recovery_period}

---

### CloudwatchAlarmEvaluationWindow <a name="CloudwatchAlarmEvaluationWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarmEvaluationWindow;

CloudwatchAlarmEvaluationWindow.builder()
//  .slidingWindow(java.lang.String)
//  .wallClockWindow(CloudwatchAlarmEvaluationWindowWallClockWindow)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow.property.slidingWindow">slidingWindow</a></code> | <code>java.lang.String</code> | A sliding window, which advances each time the alarm is evaluated, forming a rolling time window. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow.property.wallClockWindow">wallClockWindow</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow">CloudwatchAlarmEvaluationWindowWallClockWindow</a></code> | A wall clock window, which aligns the evaluated range to fixed clock boundaries that match the alarm's period, such as the top of the hour, midnight, or the start of the calendar week. |

---

##### `slidingWindow`<sup>Optional</sup> <a name="slidingWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow.property.slidingWindow"></a>

```java
public java.lang.String getSlidingWindow();
```

- *Type:* java.lang.String

A sliding window, which advances each time the alarm is evaluated, forming a rolling time window.

This is the default evaluation window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#sliding_window CloudwatchAlarm#sliding_window}

---

##### `wallClockWindow`<sup>Optional</sup> <a name="wallClockWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow.property.wallClockWindow"></a>

```java
public CloudwatchAlarmEvaluationWindowWallClockWindow getWallClockWindow();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow">CloudwatchAlarmEvaluationWindowWallClockWindow</a>

A wall clock window, which aligns the evaluated range to fixed clock boundaries that match the alarm's period, such as the top of the hour, midnight, or the start of the calendar week.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#wall_clock_window CloudwatchAlarm#wall_clock_window}

---

### CloudwatchAlarmEvaluationWindowWallClockWindow <a name="CloudwatchAlarmEvaluationWindowWallClockWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarmEvaluationWindowWallClockWindow;

CloudwatchAlarmEvaluationWindowWallClockWindow.builder()
//  .timezone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow.property.timezone">timezone</a></code> | <code>java.lang.String</code> | The time zone to use when the alarm aligns the evaluation window to clock boundaries. |

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

The time zone to use when the alarm aligns the evaluation window to clock boundaries.

You can specify an IANA time zone name (for example, `America/New_York`), a fixed UTC offset (for example, `+05:30`), or an offset-prefixed identifier (for example, `UTC+05:30`). The offset must be aligned to a multiple of 5 minutes. If you don't specify a time zone, CloudWatch uses `UTC`.
The time zone affects window alignment for all periods, including periods of one hour or shorter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#timezone CloudwatchAlarm#timezone}

---

### CloudwatchAlarmMetrics <a name="CloudwatchAlarmMetrics" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarmMetrics;

CloudwatchAlarmMetrics.builder()
//  .accountId(java.lang.String)
//  .expression(java.lang.String)
//  .id(java.lang.String)
//  .label(java.lang.String)
//  .metricStat(CloudwatchAlarmMetricsMetricStat)
//  .period(java.lang.Number)
//  .returnData(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The ID of the account where the metrics are located, if this is a cross-account alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.expression">expression</a></code> | <code>java.lang.String</code> | The math expression to be performed on the returned data, if this object is performing a math expression. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.id">id</a></code> | <code>java.lang.String</code> | A short name used to tie this object to the results in the response. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.label">label</a></code> | <code>java.lang.String</code> | A human-readable label for this metric or expression. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.metricStat">metricStat</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat">CloudwatchAlarmMetricsMetricStat</a></code> | The metric to be returned, along with statistics, period, and units. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.period">period</a></code> | <code>java.lang.Number</code> | The granularity, in seconds, of the returned data points. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.returnData">returnData</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | This option indicates whether to return the timestamps and raw data values of this metric. |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The ID of the account where the metrics are located, if this is a cross-account alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#account_id CloudwatchAlarm#account_id}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

The math expression to be performed on the returned data, if this object is performing a math expression.

This expression can use the `Id` of the other metrics to refer to those metrics, and can also use the `Id` of other expressions to use the result of those expressions. For more information about metric math expressions, see [Metric Math Syntax and Functions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax) in the *User Guide*.
Within each MetricDataQuery object, you must specify either `Expression` or `MetricStat` but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#expression CloudwatchAlarm#expression}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

A short name used to tie this object to the results in the response.

This name must be unique within a single call to `GetMetricData`. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscore. The first character must be a lowercase letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#id CloudwatchAlarm#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

A human-readable label for this metric or expression.

This is especially useful if this is an expression, so that you know what the value represents. If the metric or expression is shown in a CW dashboard widget, the label is shown. If `Label` is omitted, CW generates a default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#label CloudwatchAlarm#label}

---

##### `metricStat`<sup>Optional</sup> <a name="metricStat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.metricStat"></a>

```java
public CloudwatchAlarmMetricsMetricStat getMetricStat();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat">CloudwatchAlarmMetricsMetricStat</a>

The metric to be returned, along with statistics, period, and units.

Use this parameter only if this object is retrieving a metric and not performing a math expression on returned data.
Within one MetricDataQuery object, you must specify either `Expression` or `MetricStat` but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#metric_stat CloudwatchAlarm#metric_stat}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

The granularity, in seconds, of the returned data points.

For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 20, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a `PutMetricData` operation that includes a `StorageResolution of 1 second`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#period CloudwatchAlarm#period}

---

##### `returnData`<sup>Optional</sup> <a name="returnData" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics.property.returnData"></a>

```java
public java.lang.Boolean|IResolvable getReturnData();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

This option indicates whether to return the timestamps and raw data values of this metric.

When you create an alarm based on a metric math expression, specify `True` for this value for only the one math expression that the alarm is based on. You must specify `False` for `ReturnData` for all the other metrics and expressions used in the alarm.
This field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#return_data CloudwatchAlarm#return_data}

---

### CloudwatchAlarmMetricsMetricStat <a name="CloudwatchAlarmMetricsMetricStat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarmMetricsMetricStat;

CloudwatchAlarmMetricsMetricStat.builder()
//  .metric(CloudwatchAlarmMetricsMetricStatMetric)
//  .period(java.lang.Number)
//  .stat(java.lang.String)
//  .unit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.metric">metric</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric">CloudwatchAlarmMetricsMetricStatMetric</a></code> | The metric to return, including the metric name, namespace, and dimensions. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.period">period</a></code> | <code>java.lang.Number</code> | The granularity, in seconds, of the returned data points. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.stat">stat</a></code> | <code>java.lang.String</code> | The statistic to return. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.unit">unit</a></code> | <code>java.lang.String</code> | The unit to use for the returned data points. |

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.metric"></a>

```java
public CloudwatchAlarmMetricsMetricStatMetric getMetric();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric">CloudwatchAlarmMetricsMetricStatMetric</a>

The metric to return, including the metric name, namespace, and dimensions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#metric CloudwatchAlarm#metric}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

The granularity, in seconds, of the returned data points.

For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 20, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a `PutMetricData` call that includes a `StorageResolution` of 1 second.
If the `StartTime` parameter specifies a time stamp that is greater than 3 hours ago, you must specify the period as follows or no data points in that time range is returned:

* Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).
* Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).
* Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#period CloudwatchAlarm#period}

---

##### `stat`<sup>Optional</sup> <a name="stat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.stat"></a>

```java
public java.lang.String getStat();
```

- *Type:* java.lang.String

The statistic to return.

It can include any CW statistic or extended statistic. For a list of valid values, see the table in [Statistics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#stat CloudwatchAlarm#stat}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

The unit to use for the returned data points.

Valid values are: Seconds, Microseconds, Milliseconds, Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, Bits, Kilobits, Megabits, Gigabits, Terabits, Percent, Count, Bytes/Second, Kilobytes/Second, Megabytes/Second, Gigabytes/Second, Terabytes/Second, Bits/Second, Kilobits/Second, Megabits/Second, Gigabits/Second, Terabits/Second, Count/Second, or None.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#unit CloudwatchAlarm#unit}

---

### CloudwatchAlarmMetricsMetricStatMetric <a name="CloudwatchAlarmMetricsMetricStatMetric" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarmMetricsMetricStatMetric;

CloudwatchAlarmMetricsMetricStatMetric.builder()
//  .dimensions(IResolvable|java.util.List<CloudwatchAlarmMetricsMetricStatMetricDimensions>)
//  .metricName(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric.property.dimensions">dimensions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions">CloudwatchAlarmMetricsMetricStatMetricDimensions</a>></code> | The metric dimensions that you want to be used for the metric that the alarm will watch. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric.property.metricName">metricName</a></code> | <code>java.lang.String</code> | The name of the metric that you want the alarm to watch. This is a required field. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace of the metric that the alarm will watch. |

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric.property.dimensions"></a>

```java
public IResolvable|java.util.List<CloudwatchAlarmMetricsMetricStatMetricDimensions> getDimensions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions">CloudwatchAlarmMetricsMetricStatMetricDimensions</a>>

The metric dimensions that you want to be used for the metric that the alarm will watch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#dimensions CloudwatchAlarm#dimensions}

---

##### `metricName`<sup>Optional</sup> <a name="metricName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

The name of the metric that you want the alarm to watch. This is a required field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#metric_name CloudwatchAlarm#metric_name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The namespace of the metric that the alarm will watch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#namespace CloudwatchAlarm#namespace}

---

### CloudwatchAlarmMetricsMetricStatMetricDimensions <a name="CloudwatchAlarmMetricsMetricStatMetricDimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarmMetricsMetricStatMetricDimensions;

CloudwatchAlarmMetricsMetricStatMetricDimensions.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions.property.name">name</a></code> | <code>java.lang.String</code> | The name of the dimension, from 1–255 characters in length. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions.property.value">value</a></code> | <code>java.lang.String</code> | The value for the dimension, from 1–255 characters in length. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the dimension, from 1–255 characters in length.

This dimension name must have been included when the metric was published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#name CloudwatchAlarm#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the dimension, from 1–255 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#value CloudwatchAlarm#value}

---

### CloudwatchAlarmTags <a name="CloudwatchAlarmTags" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarmTags;

CloudwatchAlarmTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags.property.key">key</a></code> | <code>java.lang.String</code> | A string that you can use to assign a value. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the specified tag key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A string that you can use to assign a value.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#key CloudwatchAlarm#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#value CloudwatchAlarm#value}

---

### CloudwatchAlarmWarmUpConfiguration <a name="CloudwatchAlarmWarmUpConfiguration" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarmWarmUpConfiguration;

CloudwatchAlarmWarmUpConfiguration.builder()
//  .onlyStartEvaluatingAfterWarmUpPeriodEnds(java.lang.Boolean|IResolvable)
//  .warmUpPeriodDurationInMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfiguration.property.onlyStartEvaluatingAfterWarmUpPeriodEnds">onlyStartEvaluatingAfterWarmUpPeriodEnds</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the alarm waits for the full warm-up period before it starts evaluating. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfiguration.property.warmUpPeriodDurationInMinutes">warmUpPeriodDurationInMinutes</a></code> | <code>java.lang.Number</code> | The length of the warm-up period, in minutes. |

---

##### `onlyStartEvaluatingAfterWarmUpPeriodEnds`<sup>Optional</sup> <a name="onlyStartEvaluatingAfterWarmUpPeriodEnds" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfiguration.property.onlyStartEvaluatingAfterWarmUpPeriodEnds"></a>

```java
public java.lang.Boolean|IResolvable getOnlyStartEvaluatingAfterWarmUpPeriodEnds();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the alarm waits for the full warm-up period before it starts evaluating.

If true, the alarm waits the entire WarmUpPeriodDurationInMinutes before it starts evaluating, even if metric data arrives earlier. If false, the alarm ends the warm-up period early and starts evaluating as soon as it has enough metric data to fill its evaluation window. This is the default behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#only_start_evaluating_after_warm_up_period_ends CloudwatchAlarm#only_start_evaluating_after_warm_up_period_ends}

---

##### `warmUpPeriodDurationInMinutes`<sup>Optional</sup> <a name="warmUpPeriodDurationInMinutes" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfiguration.property.warmUpPeriodDurationInMinutes"></a>

```java
public java.lang.Number getWarmUpPeriodDurationInMinutes();
```

- *Type:* java.lang.Number

The length of the warm-up period, in minutes.

For this duration after you create or update the alarm, the alarm stays in INSUFFICIENT_DATA and doesn't perform alarm actions. Valid values range from 1 to 2880 minutes (2 days). You can change this value while the alarm is still in its warm-up period. Changes have no effect after the warm-up period ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm#warm_up_period_duration_in_minutes CloudwatchAlarm#warm_up_period_duration_in_minutes}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchAlarmDimensionsList <a name="CloudwatchAlarmDimensionsList" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarmDimensionsList;

new CloudwatchAlarmDimensionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.get"></a>

```java
public CloudwatchAlarmDimensionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions">CloudwatchAlarmDimensions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudwatchAlarmDimensions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions">CloudwatchAlarmDimensions</a>>

---


### CloudwatchAlarmDimensionsOutputReference <a name="CloudwatchAlarmDimensionsOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarmDimensionsOutputReference;

new CloudwatchAlarmDimensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions">CloudwatchAlarmDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensionsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchAlarmDimensions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmDimensions">CloudwatchAlarmDimensions</a>

---


### CloudwatchAlarmEvaluationCriteriaOutputReference <a name="CloudwatchAlarmEvaluationCriteriaOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarmEvaluationCriteriaOutputReference;

new CloudwatchAlarmEvaluationCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.putPromQlCriteria">putPromQlCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.resetPromQlCriteria">resetPromQlCriteria</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPromQlCriteria` <a name="putPromQlCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.putPromQlCriteria"></a>

```java
public void putPromQlCriteria(CloudwatchAlarmEvaluationCriteriaPromQlCriteria value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.putPromQlCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria">CloudwatchAlarmEvaluationCriteriaPromQlCriteria</a>

---

##### `resetPromQlCriteria` <a name="resetPromQlCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.resetPromQlCriteria"></a>

```java
public void resetPromQlCriteria()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.promQlCriteria">promQlCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference">CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.promQlCriteriaInput">promQlCriteriaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria">CloudwatchAlarmEvaluationCriteriaPromQlCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria">CloudwatchAlarmEvaluationCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `promQlCriteria`<sup>Required</sup> <a name="promQlCriteria" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.promQlCriteria"></a>

```java
public CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference getPromQlCriteria();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference">CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference</a>

---

##### `promQlCriteriaInput`<sup>Optional</sup> <a name="promQlCriteriaInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.promQlCriteriaInput"></a>

```java
public IResolvable|CloudwatchAlarmEvaluationCriteriaPromQlCriteria getPromQlCriteriaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria">CloudwatchAlarmEvaluationCriteriaPromQlCriteria</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchAlarmEvaluationCriteria getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteria">CloudwatchAlarmEvaluationCriteria</a>

---


### CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference <a name="CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference;

new CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resetPendingPeriod">resetPendingPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resetRecoveryPeriod">resetRecoveryPeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPendingPeriod` <a name="resetPendingPeriod" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resetPendingPeriod"></a>

```java
public void resetPendingPeriod()
```

##### `resetQuery` <a name="resetQuery" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resetQuery"></a>

```java
public void resetQuery()
```

##### `resetRecoveryPeriod` <a name="resetRecoveryPeriod" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.resetRecoveryPeriod"></a>

```java
public void resetRecoveryPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.pendingPeriodInput">pendingPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.recoveryPeriodInput">recoveryPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.pendingPeriod">pendingPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.recoveryPeriod">recoveryPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria">CloudwatchAlarmEvaluationCriteriaPromQlCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pendingPeriodInput`<sup>Optional</sup> <a name="pendingPeriodInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.pendingPeriodInput"></a>

```java
public java.lang.Number getPendingPeriodInput();
```

- *Type:* java.lang.Number

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `recoveryPeriodInput`<sup>Optional</sup> <a name="recoveryPeriodInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.recoveryPeriodInput"></a>

```java
public java.lang.Number getRecoveryPeriodInput();
```

- *Type:* java.lang.Number

---

##### `pendingPeriod`<sup>Required</sup> <a name="pendingPeriod" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.pendingPeriod"></a>

```java
public java.lang.Number getPendingPeriod();
```

- *Type:* java.lang.Number

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `recoveryPeriod`<sup>Required</sup> <a name="recoveryPeriod" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.recoveryPeriod"></a>

```java
public java.lang.Number getRecoveryPeriod();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchAlarmEvaluationCriteriaPromQlCriteria getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationCriteriaPromQlCriteria">CloudwatchAlarmEvaluationCriteriaPromQlCriteria</a>

---


### CloudwatchAlarmEvaluationWindowOutputReference <a name="CloudwatchAlarmEvaluationWindowOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarmEvaluationWindowOutputReference;

new CloudwatchAlarmEvaluationWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.putWallClockWindow">putWallClockWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.resetSlidingWindow">resetSlidingWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.resetWallClockWindow">resetWallClockWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWallClockWindow` <a name="putWallClockWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.putWallClockWindow"></a>

```java
public void putWallClockWindow(CloudwatchAlarmEvaluationWindowWallClockWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.putWallClockWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow">CloudwatchAlarmEvaluationWindowWallClockWindow</a>

---

##### `resetSlidingWindow` <a name="resetSlidingWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.resetSlidingWindow"></a>

```java
public void resetSlidingWindow()
```

##### `resetWallClockWindow` <a name="resetWallClockWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.resetWallClockWindow"></a>

```java
public void resetWallClockWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.wallClockWindow">wallClockWindow</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference">CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.slidingWindowInput">slidingWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.wallClockWindowInput">wallClockWindowInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow">CloudwatchAlarmEvaluationWindowWallClockWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.slidingWindow">slidingWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow">CloudwatchAlarmEvaluationWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `wallClockWindow`<sup>Required</sup> <a name="wallClockWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.wallClockWindow"></a>

```java
public CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference getWallClockWindow();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference">CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference</a>

---

##### `slidingWindowInput`<sup>Optional</sup> <a name="slidingWindowInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.slidingWindowInput"></a>

```java
public java.lang.String getSlidingWindowInput();
```

- *Type:* java.lang.String

---

##### `wallClockWindowInput`<sup>Optional</sup> <a name="wallClockWindowInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.wallClockWindowInput"></a>

```java
public IResolvable|CloudwatchAlarmEvaluationWindowWallClockWindow getWallClockWindowInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow">CloudwatchAlarmEvaluationWindowWallClockWindow</a>

---

##### `slidingWindow`<sup>Required</sup> <a name="slidingWindow" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.slidingWindow"></a>

```java
public java.lang.String getSlidingWindow();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchAlarmEvaluationWindow getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindow">CloudwatchAlarmEvaluationWindow</a>

---


### CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference <a name="CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference;

new CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.resetTimezone">resetTimezone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimezone` <a name="resetTimezone" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.resetTimezone"></a>

```java
public void resetTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow">CloudwatchAlarmEvaluationWindowWallClockWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindowOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchAlarmEvaluationWindowWallClockWindow getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmEvaluationWindowWallClockWindow">CloudwatchAlarmEvaluationWindowWallClockWindow</a>

---


### CloudwatchAlarmMetricsList <a name="CloudwatchAlarmMetricsList" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarmMetricsList;

new CloudwatchAlarmMetricsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.get"></a>

```java
public CloudwatchAlarmMetricsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics">CloudwatchAlarmMetrics</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudwatchAlarmMetrics> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics">CloudwatchAlarmMetrics</a>>

---


### CloudwatchAlarmMetricsMetricStatMetricDimensionsList <a name="CloudwatchAlarmMetricsMetricStatMetricDimensionsList" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList;

new CloudwatchAlarmMetricsMetricStatMetricDimensionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.get"></a>

```java
public CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions">CloudwatchAlarmMetricsMetricStatMetricDimensions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudwatchAlarmMetricsMetricStatMetricDimensions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions">CloudwatchAlarmMetricsMetricStatMetricDimensions</a>>

---


### CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference <a name="CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference;

new CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions">CloudwatchAlarmMetricsMetricStatMetricDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchAlarmMetricsMetricStatMetricDimensions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions">CloudwatchAlarmMetricsMetricStatMetricDimensions</a>

---


### CloudwatchAlarmMetricsMetricStatMetricOutputReference <a name="CloudwatchAlarmMetricsMetricStatMetricOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference;

new CloudwatchAlarmMetricsMetricStatMetricOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.putDimensions">putDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resetMetricName">resetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensions` <a name="putDimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.putDimensions"></a>

```java
public void putDimensions(IResolvable|java.util.List<CloudwatchAlarmMetricsMetricStatMetricDimensions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.putDimensions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions">CloudwatchAlarmMetricsMetricStatMetricDimensions</a>>

---

##### `resetDimensions` <a name="resetDimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resetDimensions"></a>

```java
public void resetDimensions()
```

##### `resetMetricName` <a name="resetMetricName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resetMetricName"></a>

```java
public void resetMetricName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList">CloudwatchAlarmMetricsMetricStatMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions">CloudwatchAlarmMetricsMetricStatMetricDimensions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric">CloudwatchAlarmMetricsMetricStatMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.dimensions"></a>

```java
public CloudwatchAlarmMetricsMetricStatMetricDimensionsList getDimensions();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensionsList">CloudwatchAlarmMetricsMetricStatMetricDimensionsList</a>

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.dimensionsInput"></a>

```java
public IResolvable|java.util.List<CloudwatchAlarmMetricsMetricStatMetricDimensions> getDimensionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricDimensions">CloudwatchAlarmMetricsMetricStatMetricDimensions</a>>

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchAlarmMetricsMetricStatMetric getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric">CloudwatchAlarmMetricsMetricStatMetric</a>

---


### CloudwatchAlarmMetricsMetricStatOutputReference <a name="CloudwatchAlarmMetricsMetricStatOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarmMetricsMetricStatOutputReference;

new CloudwatchAlarmMetricsMetricStatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.putMetric">putMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetStat">resetStat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetric` <a name="putMetric" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.putMetric"></a>

```java
public void putMetric(CloudwatchAlarmMetricsMetricStatMetric value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric">CloudwatchAlarmMetricsMetricStatMetric</a>

---

##### `resetMetric` <a name="resetMetric" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetMetric"></a>

```java
public void resetMetric()
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetPeriod"></a>

```java
public void resetPeriod()
```

##### `resetStat` <a name="resetStat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetStat"></a>

```java
public void resetStat()
```

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.resetUnit"></a>

```java
public void resetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference">CloudwatchAlarmMetricsMetricStatMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.metricInput">metricInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric">CloudwatchAlarmMetricsMetricStatMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.periodInput">periodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.statInput">statInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.period">period</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.stat">stat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat">CloudwatchAlarmMetricsMetricStat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.metric"></a>

```java
public CloudwatchAlarmMetricsMetricStatMetricOutputReference getMetric();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetricOutputReference">CloudwatchAlarmMetricsMetricStatMetricOutputReference</a>

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.metricInput"></a>

```java
public IResolvable|CloudwatchAlarmMetricsMetricStatMetric getMetricInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatMetric">CloudwatchAlarmMetricsMetricStatMetric</a>

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.periodInput"></a>

```java
public java.lang.Number getPeriodInput();
```

- *Type:* java.lang.Number

---

##### `statInput`<sup>Optional</sup> <a name="statInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.statInput"></a>

```java
public java.lang.String getStatInput();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

---

##### `stat`<sup>Required</sup> <a name="stat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.stat"></a>

```java
public java.lang.String getStat();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchAlarmMetricsMetricStat getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat">CloudwatchAlarmMetricsMetricStat</a>

---


### CloudwatchAlarmMetricsOutputReference <a name="CloudwatchAlarmMetricsOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarmMetricsOutputReference;

new CloudwatchAlarmMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.putMetricStat">putMetricStat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetMetricStat">resetMetricStat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetReturnData">resetReturnData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetricStat` <a name="putMetricStat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.putMetricStat"></a>

```java
public void putMetricStat(CloudwatchAlarmMetricsMetricStat value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.putMetricStat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat">CloudwatchAlarmMetricsMetricStat</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetExpression` <a name="resetExpression" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetExpression"></a>

```java
public void resetExpression()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetLabel` <a name="resetLabel" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetLabel"></a>

```java
public void resetLabel()
```

##### `resetMetricStat` <a name="resetMetricStat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetMetricStat"></a>

```java
public void resetMetricStat()
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetPeriod"></a>

```java
public void resetPeriod()
```

##### `resetReturnData` <a name="resetReturnData" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.resetReturnData"></a>

```java
public void resetReturnData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.metricStat">metricStat</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference">CloudwatchAlarmMetricsMetricStatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.metricStatInput">metricStatInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat">CloudwatchAlarmMetricsMetricStat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.periodInput">periodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.returnDataInput">returnDataInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.period">period</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.returnData">returnData</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics">CloudwatchAlarmMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricStat`<sup>Required</sup> <a name="metricStat" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.metricStat"></a>

```java
public CloudwatchAlarmMetricsMetricStatOutputReference getMetricStat();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStatOutputReference">CloudwatchAlarmMetricsMetricStatOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `metricStatInput`<sup>Optional</sup> <a name="metricStatInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.metricStatInput"></a>

```java
public IResolvable|CloudwatchAlarmMetricsMetricStat getMetricStatInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsMetricStat">CloudwatchAlarmMetricsMetricStat</a>

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.periodInput"></a>

```java
public java.lang.Number getPeriodInput();
```

- *Type:* java.lang.Number

---

##### `returnDataInput`<sup>Optional</sup> <a name="returnDataInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.returnDataInput"></a>

```java
public java.lang.Boolean|IResolvable getReturnDataInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

---

##### `returnData`<sup>Required</sup> <a name="returnData" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.returnData"></a>

```java
public java.lang.Boolean|IResolvable getReturnData();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetricsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchAlarmMetrics getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmMetrics">CloudwatchAlarmMetrics</a>

---


### CloudwatchAlarmTagsList <a name="CloudwatchAlarmTagsList" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarmTagsList;

new CloudwatchAlarmTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.get"></a>

```java
public CloudwatchAlarmTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags">CloudwatchAlarmTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudwatchAlarmTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags">CloudwatchAlarmTags</a>>

---


### CloudwatchAlarmTagsOutputReference <a name="CloudwatchAlarmTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarmTagsOutputReference;

new CloudwatchAlarmTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags">CloudwatchAlarmTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchAlarmTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmTags">CloudwatchAlarmTags</a>

---


### CloudwatchAlarmWarmUpConfigurationOutputReference <a name="CloudwatchAlarmWarmUpConfigurationOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_alarm.CloudwatchAlarmWarmUpConfigurationOutputReference;

new CloudwatchAlarmWarmUpConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.resetOnlyStartEvaluatingAfterWarmUpPeriodEnds">resetOnlyStartEvaluatingAfterWarmUpPeriodEnds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.resetWarmUpPeriodDurationInMinutes">resetWarmUpPeriodDurationInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOnlyStartEvaluatingAfterWarmUpPeriodEnds` <a name="resetOnlyStartEvaluatingAfterWarmUpPeriodEnds" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.resetOnlyStartEvaluatingAfterWarmUpPeriodEnds"></a>

```java
public void resetOnlyStartEvaluatingAfterWarmUpPeriodEnds()
```

##### `resetWarmUpPeriodDurationInMinutes` <a name="resetWarmUpPeriodDurationInMinutes" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.resetWarmUpPeriodDurationInMinutes"></a>

```java
public void resetWarmUpPeriodDurationInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.property.onlyStartEvaluatingAfterWarmUpPeriodEndsInput">onlyStartEvaluatingAfterWarmUpPeriodEndsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.property.warmUpPeriodDurationInMinutesInput">warmUpPeriodDurationInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.property.onlyStartEvaluatingAfterWarmUpPeriodEnds">onlyStartEvaluatingAfterWarmUpPeriodEnds</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.property.warmUpPeriodDurationInMinutes">warmUpPeriodDurationInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfiguration">CloudwatchAlarmWarmUpConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `onlyStartEvaluatingAfterWarmUpPeriodEndsInput`<sup>Optional</sup> <a name="onlyStartEvaluatingAfterWarmUpPeriodEndsInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.property.onlyStartEvaluatingAfterWarmUpPeriodEndsInput"></a>

```java
public java.lang.Boolean|IResolvable getOnlyStartEvaluatingAfterWarmUpPeriodEndsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `warmUpPeriodDurationInMinutesInput`<sup>Optional</sup> <a name="warmUpPeriodDurationInMinutesInput" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.property.warmUpPeriodDurationInMinutesInput"></a>

```java
public java.lang.Number getWarmUpPeriodDurationInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `onlyStartEvaluatingAfterWarmUpPeriodEnds`<sup>Required</sup> <a name="onlyStartEvaluatingAfterWarmUpPeriodEnds" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.property.onlyStartEvaluatingAfterWarmUpPeriodEnds"></a>

```java
public java.lang.Boolean|IResolvable getOnlyStartEvaluatingAfterWarmUpPeriodEnds();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `warmUpPeriodDurationInMinutes`<sup>Required</sup> <a name="warmUpPeriodDurationInMinutes" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.property.warmUpPeriodDurationInMinutes"></a>

```java
public java.lang.Number getWarmUpPeriodDurationInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchAlarmWarmUpConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchAlarm.CloudwatchAlarmWarmUpConfiguration">CloudwatchAlarmWarmUpConfiguration</a>

---



