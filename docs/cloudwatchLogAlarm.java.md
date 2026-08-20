# `cloudwatchLogAlarm` Submodule <a name="`cloudwatchLogAlarm` Submodule" id="@cdktn/provider-awscc.cloudwatchLogAlarm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchLogAlarm <a name="CloudwatchLogAlarm" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm awscc_cloudwatch_log_alarm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_log_alarm.CloudwatchLogAlarm;

CloudwatchLogAlarm.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .comparisonOperator(java.lang.String)
    .queryResultsToAlarm(java.lang.Number)
    .queryResultsToEvaluate(java.lang.Number)
    .scheduledQueryConfiguration(CloudwatchLogAlarmScheduledQueryConfiguration)
    .threshold(java.lang.Number)
//  .actionLogLineCount(java.lang.Number)
//  .actionLogLineRoleArn(java.lang.String)
//  .actionsEnabled(java.lang.Boolean|IResolvable)
//  .alarmActions(java.util.List<java.lang.String>)
//  .alarmDescription(java.lang.String)
//  .alarmName(java.lang.String)
//  .insufficientDataActions(java.util.List<java.lang.String>)
//  .okActions(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<CloudwatchLogAlarmTags>)
//  .treatMissingData(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | The arithmetic operation to use when comparing the specified threshold and the query results. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.queryResultsToAlarm">queryResultsToAlarm</a></code> | <code>java.lang.Number</code> | The number of query results that must be breaching to trigger the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.queryResultsToEvaluate">queryResultsToEvaluate</a></code> | <code>java.lang.Number</code> | The number of query results over which data is compared to the specified threshold. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.scheduledQueryConfiguration">scheduledQueryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a></code> | The scheduled query configuration for the log alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.threshold">threshold</a></code> | <code>java.lang.Number</code> | The value to compare against the results of the scheduled query evaluation. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.actionLogLineCount">actionLogLineCount</a></code> | <code>java.lang.Number</code> | The number of log lines to include in alarm notifications. Valid values are 0 to 50. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.actionLogLineRoleArn">actionLogLineRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role that grants CloudWatch permissions to fetch log lines for alarm notifications. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.actionsEnabled">actionsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.alarmActions">alarmActions</a></code> | <code>java.util.List<java.lang.String></code> | The list of actions to execute when this alarm transitions into an ALARM state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.alarmDescription">alarmDescription</a></code> | <code>java.lang.String</code> | The description of the log alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.alarmName">alarmName</a></code> | <code>java.lang.String</code> | The name of the log alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.insufficientDataActions">insufficientDataActions</a></code> | <code>java.util.List<java.lang.String></code> | The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.okActions">okActions</a></code> | <code>java.util.List<java.lang.String></code> | The actions to execute when this alarm transitions to the OK state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>></code> | A list of key-value pairs to associate with the log alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.treatMissingData">treatMissingData</a></code> | <code>java.lang.String</code> | Sets how this alarm is to handle missing data points. Valid values are breaching, notBreaching, ignore, and missing. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.comparisonOperator"></a>

- *Type:* java.lang.String

The arithmetic operation to use when comparing the specified threshold and the query results.

Valid values are GreaterThanOrEqualToThreshold, GreaterThanThreshold, LessThanThreshold, and LessThanOrEqualToThreshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#comparison_operator CloudwatchLogAlarm#comparison_operator}

---

##### `queryResultsToAlarm`<sup>Required</sup> <a name="queryResultsToAlarm" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.queryResultsToAlarm"></a>

- *Type:* java.lang.Number

The number of query results that must be breaching to trigger the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#query_results_to_alarm CloudwatchLogAlarm#query_results_to_alarm}

---

##### `queryResultsToEvaluate`<sup>Required</sup> <a name="queryResultsToEvaluate" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.queryResultsToEvaluate"></a>

- *Type:* java.lang.Number

The number of query results over which data is compared to the specified threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#query_results_to_evaluate CloudwatchLogAlarm#query_results_to_evaluate}

---

##### `scheduledQueryConfiguration`<sup>Required</sup> <a name="scheduledQueryConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.scheduledQueryConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a>

The scheduled query configuration for the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#scheduled_query_configuration CloudwatchLogAlarm#scheduled_query_configuration}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.threshold"></a>

- *Type:* java.lang.Number

The value to compare against the results of the scheduled query evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#threshold CloudwatchLogAlarm#threshold}

---

##### `actionLogLineCount`<sup>Optional</sup> <a name="actionLogLineCount" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.actionLogLineCount"></a>

- *Type:* java.lang.Number

The number of log lines to include in alarm notifications. Valid values are 0 to 50.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#action_log_line_count CloudwatchLogAlarm#action_log_line_count}

---

##### `actionLogLineRoleArn`<sup>Optional</sup> <a name="actionLogLineRoleArn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.actionLogLineRoleArn"></a>

- *Type:* java.lang.String

The ARN of the IAM role that grants CloudWatch permissions to fetch log lines for alarm notifications.

Required when ActionLogLineCount is greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#action_log_line_role_arn CloudwatchLogAlarm#action_log_line_role_arn}

---

##### `actionsEnabled`<sup>Optional</sup> <a name="actionsEnabled" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.actionsEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#actions_enabled CloudwatchLogAlarm#actions_enabled}

---

##### `alarmActions`<sup>Optional</sup> <a name="alarmActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.alarmActions"></a>

- *Type:* java.util.List<java.lang.String>

The list of actions to execute when this alarm transitions into an ALARM state from any other state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#alarm_actions CloudwatchLogAlarm#alarm_actions}

---

##### `alarmDescription`<sup>Optional</sup> <a name="alarmDescription" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.alarmDescription"></a>

- *Type:* java.lang.String

The description of the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#alarm_description CloudwatchLogAlarm#alarm_description}

---

##### `alarmName`<sup>Optional</sup> <a name="alarmName" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.alarmName"></a>

- *Type:* java.lang.String

The name of the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#alarm_name CloudwatchLogAlarm#alarm_name}

---

##### `insufficientDataActions`<sup>Optional</sup> <a name="insufficientDataActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.insufficientDataActions"></a>

- *Type:* java.util.List<java.lang.String>

The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#insufficient_data_actions CloudwatchLogAlarm#insufficient_data_actions}

---

##### `okActions`<sup>Optional</sup> <a name="okActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.okActions"></a>

- *Type:* java.util.List<java.lang.String>

The actions to execute when this alarm transitions to the OK state from any other state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#ok_actions CloudwatchLogAlarm#ok_actions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>>

A list of key-value pairs to associate with the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#tags CloudwatchLogAlarm#tags}

---

##### `treatMissingData`<sup>Optional</sup> <a name="treatMissingData" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.treatMissingData"></a>

- *Type:* java.lang.String

Sets how this alarm is to handle missing data points. Valid values are breaching, notBreaching, ignore, and missing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#treat_missing_data CloudwatchLogAlarm#treat_missing_data}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putScheduledQueryConfiguration">putScheduledQueryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetActionLogLineCount">resetActionLogLineCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetActionLogLineRoleArn">resetActionLogLineRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetActionsEnabled">resetActionsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetAlarmActions">resetAlarmActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetAlarmDescription">resetAlarmDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetAlarmName">resetAlarmName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetInsufficientDataActions">resetInsufficientDataActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetOkActions">resetOkActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetTreatMissingData">resetTreatMissingData</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putScheduledQueryConfiguration` <a name="putScheduledQueryConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putScheduledQueryConfiguration"></a>

```java
public void putScheduledQueryConfiguration(CloudwatchLogAlarmScheduledQueryConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putScheduledQueryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CloudwatchLogAlarmTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>>

---

##### `resetActionLogLineCount` <a name="resetActionLogLineCount" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetActionLogLineCount"></a>

```java
public void resetActionLogLineCount()
```

##### `resetActionLogLineRoleArn` <a name="resetActionLogLineRoleArn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetActionLogLineRoleArn"></a>

```java
public void resetActionLogLineRoleArn()
```

##### `resetActionsEnabled` <a name="resetActionsEnabled" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetActionsEnabled"></a>

```java
public void resetActionsEnabled()
```

##### `resetAlarmActions` <a name="resetAlarmActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetAlarmActions"></a>

```java
public void resetAlarmActions()
```

##### `resetAlarmDescription` <a name="resetAlarmDescription" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetAlarmDescription"></a>

```java
public void resetAlarmDescription()
```

##### `resetAlarmName` <a name="resetAlarmName" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetAlarmName"></a>

```java
public void resetAlarmName()
```

##### `resetInsufficientDataActions` <a name="resetInsufficientDataActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetInsufficientDataActions"></a>

```java
public void resetInsufficientDataActions()
```

##### `resetOkActions` <a name="resetOkActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetOkActions"></a>

```java
public void resetOkActions()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetTags"></a>

```java
public void resetTags()
```

##### `resetTreatMissingData` <a name="resetTreatMissingData" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetTreatMissingData"></a>

```java
public void resetTreatMissingData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchLogAlarm resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_log_alarm.CloudwatchLogAlarm;

CloudwatchLogAlarm.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_log_alarm.CloudwatchLogAlarm;

CloudwatchLogAlarm.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_log_alarm.CloudwatchLogAlarm;

CloudwatchLogAlarm.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_log_alarm.CloudwatchLogAlarm;

CloudwatchLogAlarm.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudwatchLogAlarm.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudwatchLogAlarm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudwatchLogAlarm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudwatchLogAlarm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchLogAlarm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.scheduledQueryConfiguration">scheduledQueryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference">CloudwatchLogAlarmScheduledQueryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList">CloudwatchLogAlarmTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineCountInput">actionLogLineCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineRoleArnInput">actionLogLineRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionsEnabledInput">actionsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmActionsInput">alarmActionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmDescriptionInput">alarmDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmNameInput">alarmNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.insufficientDataActionsInput">insufficientDataActionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.okActionsInput">okActionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToAlarmInput">queryResultsToAlarmInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToEvaluateInput">queryResultsToEvaluateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.scheduledQueryConfigurationInput">scheduledQueryConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.treatMissingDataInput">treatMissingDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineCount">actionLogLineCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineRoleArn">actionLogLineRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionsEnabled">actionsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmActions">alarmActions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmDescription">alarmDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmName">alarmName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.insufficientDataActions">insufficientDataActions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.okActions">okActions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToAlarm">queryResultsToAlarm</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToEvaluate">queryResultsToEvaluate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.treatMissingData">treatMissingData</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `scheduledQueryConfiguration`<sup>Required</sup> <a name="scheduledQueryConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.scheduledQueryConfiguration"></a>

```java
public CloudwatchLogAlarmScheduledQueryConfigurationOutputReference getScheduledQueryConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference">CloudwatchLogAlarmScheduledQueryConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.tags"></a>

```java
public CloudwatchLogAlarmTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList">CloudwatchLogAlarmTagsList</a>

---

##### `actionLogLineCountInput`<sup>Optional</sup> <a name="actionLogLineCountInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineCountInput"></a>

```java
public java.lang.Number getActionLogLineCountInput();
```

- *Type:* java.lang.Number

---

##### `actionLogLineRoleArnInput`<sup>Optional</sup> <a name="actionLogLineRoleArnInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineRoleArnInput"></a>

```java
public java.lang.String getActionLogLineRoleArnInput();
```

- *Type:* java.lang.String

---

##### `actionsEnabledInput`<sup>Optional</sup> <a name="actionsEnabledInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getActionsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `alarmActionsInput`<sup>Optional</sup> <a name="alarmActionsInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmActionsInput"></a>

```java
public java.util.List<java.lang.String> getAlarmActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `alarmDescriptionInput`<sup>Optional</sup> <a name="alarmDescriptionInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmDescriptionInput"></a>

```java
public java.lang.String getAlarmDescriptionInput();
```

- *Type:* java.lang.String

---

##### `alarmNameInput`<sup>Optional</sup> <a name="alarmNameInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmNameInput"></a>

```java
public java.lang.String getAlarmNameInput();
```

- *Type:* java.lang.String

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `insufficientDataActionsInput`<sup>Optional</sup> <a name="insufficientDataActionsInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.insufficientDataActionsInput"></a>

```java
public java.util.List<java.lang.String> getInsufficientDataActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `okActionsInput`<sup>Optional</sup> <a name="okActionsInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.okActionsInput"></a>

```java
public java.util.List<java.lang.String> getOkActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryResultsToAlarmInput`<sup>Optional</sup> <a name="queryResultsToAlarmInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToAlarmInput"></a>

```java
public java.lang.Number getQueryResultsToAlarmInput();
```

- *Type:* java.lang.Number

---

##### `queryResultsToEvaluateInput`<sup>Optional</sup> <a name="queryResultsToEvaluateInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToEvaluateInput"></a>

```java
public java.lang.Number getQueryResultsToEvaluateInput();
```

- *Type:* java.lang.Number

---

##### `scheduledQueryConfigurationInput`<sup>Optional</sup> <a name="scheduledQueryConfigurationInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.scheduledQueryConfigurationInput"></a>

```java
public IResolvable|CloudwatchLogAlarmScheduledQueryConfiguration getScheduledQueryConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CloudwatchLogAlarmTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>>

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `treatMissingDataInput`<sup>Optional</sup> <a name="treatMissingDataInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.treatMissingDataInput"></a>

```java
public java.lang.String getTreatMissingDataInput();
```

- *Type:* java.lang.String

---

##### `actionLogLineCount`<sup>Required</sup> <a name="actionLogLineCount" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineCount"></a>

```java
public java.lang.Number getActionLogLineCount();
```

- *Type:* java.lang.Number

---

##### `actionLogLineRoleArn`<sup>Required</sup> <a name="actionLogLineRoleArn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineRoleArn"></a>

```java
public java.lang.String getActionLogLineRoleArn();
```

- *Type:* java.lang.String

---

##### `actionsEnabled`<sup>Required</sup> <a name="actionsEnabled" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getActionsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `alarmActions`<sup>Required</sup> <a name="alarmActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmActions"></a>

```java
public java.util.List<java.lang.String> getAlarmActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `alarmDescription`<sup>Required</sup> <a name="alarmDescription" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmDescription"></a>

```java
public java.lang.String getAlarmDescription();
```

- *Type:* java.lang.String

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmName"></a>

```java
public java.lang.String getAlarmName();
```

- *Type:* java.lang.String

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `insufficientDataActions`<sup>Required</sup> <a name="insufficientDataActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.insufficientDataActions"></a>

```java
public java.util.List<java.lang.String> getInsufficientDataActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `okActions`<sup>Required</sup> <a name="okActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.okActions"></a>

```java
public java.util.List<java.lang.String> getOkActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryResultsToAlarm`<sup>Required</sup> <a name="queryResultsToAlarm" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToAlarm"></a>

```java
public java.lang.Number getQueryResultsToAlarm();
```

- *Type:* java.lang.Number

---

##### `queryResultsToEvaluate`<sup>Required</sup> <a name="queryResultsToEvaluate" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToEvaluate"></a>

```java
public java.lang.Number getQueryResultsToEvaluate();
```

- *Type:* java.lang.Number

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `treatMissingData`<sup>Required</sup> <a name="treatMissingData" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.treatMissingData"></a>

```java
public java.lang.String getTreatMissingData();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchLogAlarmConfig <a name="CloudwatchLogAlarmConfig" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_log_alarm.CloudwatchLogAlarmConfig;

CloudwatchLogAlarmConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .comparisonOperator(java.lang.String)
    .queryResultsToAlarm(java.lang.Number)
    .queryResultsToEvaluate(java.lang.Number)
    .scheduledQueryConfiguration(CloudwatchLogAlarmScheduledQueryConfiguration)
    .threshold(java.lang.Number)
//  .actionLogLineCount(java.lang.Number)
//  .actionLogLineRoleArn(java.lang.String)
//  .actionsEnabled(java.lang.Boolean|IResolvable)
//  .alarmActions(java.util.List<java.lang.String>)
//  .alarmDescription(java.lang.String)
//  .alarmName(java.lang.String)
//  .insufficientDataActions(java.util.List<java.lang.String>)
//  .okActions(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<CloudwatchLogAlarmTags>)
//  .treatMissingData(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | The arithmetic operation to use when comparing the specified threshold and the query results. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.queryResultsToAlarm">queryResultsToAlarm</a></code> | <code>java.lang.Number</code> | The number of query results that must be breaching to trigger the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.queryResultsToEvaluate">queryResultsToEvaluate</a></code> | <code>java.lang.Number</code> | The number of query results over which data is compared to the specified threshold. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.scheduledQueryConfiguration">scheduledQueryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a></code> | The scheduled query configuration for the log alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | The value to compare against the results of the scheduled query evaluation. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.actionLogLineCount">actionLogLineCount</a></code> | <code>java.lang.Number</code> | The number of log lines to include in alarm notifications. Valid values are 0 to 50. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.actionLogLineRoleArn">actionLogLineRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role that grants CloudWatch permissions to fetch log lines for alarm notifications. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.actionsEnabled">actionsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.alarmActions">alarmActions</a></code> | <code>java.util.List<java.lang.String></code> | The list of actions to execute when this alarm transitions into an ALARM state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.alarmDescription">alarmDescription</a></code> | <code>java.lang.String</code> | The description of the log alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.alarmName">alarmName</a></code> | <code>java.lang.String</code> | The name of the log alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.insufficientDataActions">insufficientDataActions</a></code> | <code>java.util.List<java.lang.String></code> | The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.okActions">okActions</a></code> | <code>java.util.List<java.lang.String></code> | The actions to execute when this alarm transitions to the OK state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>></code> | A list of key-value pairs to associate with the log alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.treatMissingData">treatMissingData</a></code> | <code>java.lang.String</code> | Sets how this alarm is to handle missing data points. Valid values are breaching, notBreaching, ignore, and missing. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

The arithmetic operation to use when comparing the specified threshold and the query results.

Valid values are GreaterThanOrEqualToThreshold, GreaterThanThreshold, LessThanThreshold, and LessThanOrEqualToThreshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#comparison_operator CloudwatchLogAlarm#comparison_operator}

---

##### `queryResultsToAlarm`<sup>Required</sup> <a name="queryResultsToAlarm" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.queryResultsToAlarm"></a>

```java
public java.lang.Number getQueryResultsToAlarm();
```

- *Type:* java.lang.Number

The number of query results that must be breaching to trigger the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#query_results_to_alarm CloudwatchLogAlarm#query_results_to_alarm}

---

##### `queryResultsToEvaluate`<sup>Required</sup> <a name="queryResultsToEvaluate" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.queryResultsToEvaluate"></a>

```java
public java.lang.Number getQueryResultsToEvaluate();
```

- *Type:* java.lang.Number

The number of query results over which data is compared to the specified threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#query_results_to_evaluate CloudwatchLogAlarm#query_results_to_evaluate}

---

##### `scheduledQueryConfiguration`<sup>Required</sup> <a name="scheduledQueryConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.scheduledQueryConfiguration"></a>

```java
public CloudwatchLogAlarmScheduledQueryConfiguration getScheduledQueryConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a>

The scheduled query configuration for the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#scheduled_query_configuration CloudwatchLogAlarm#scheduled_query_configuration}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

The value to compare against the results of the scheduled query evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#threshold CloudwatchLogAlarm#threshold}

---

##### `actionLogLineCount`<sup>Optional</sup> <a name="actionLogLineCount" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.actionLogLineCount"></a>

```java
public java.lang.Number getActionLogLineCount();
```

- *Type:* java.lang.Number

The number of log lines to include in alarm notifications. Valid values are 0 to 50.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#action_log_line_count CloudwatchLogAlarm#action_log_line_count}

---

##### `actionLogLineRoleArn`<sup>Optional</sup> <a name="actionLogLineRoleArn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.actionLogLineRoleArn"></a>

```java
public java.lang.String getActionLogLineRoleArn();
```

- *Type:* java.lang.String

The ARN of the IAM role that grants CloudWatch permissions to fetch log lines for alarm notifications.

Required when ActionLogLineCount is greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#action_log_line_role_arn CloudwatchLogAlarm#action_log_line_role_arn}

---

##### `actionsEnabled`<sup>Optional</sup> <a name="actionsEnabled" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.actionsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getActionsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#actions_enabled CloudwatchLogAlarm#actions_enabled}

---

##### `alarmActions`<sup>Optional</sup> <a name="alarmActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.alarmActions"></a>

```java
public java.util.List<java.lang.String> getAlarmActions();
```

- *Type:* java.util.List<java.lang.String>

The list of actions to execute when this alarm transitions into an ALARM state from any other state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#alarm_actions CloudwatchLogAlarm#alarm_actions}

---

##### `alarmDescription`<sup>Optional</sup> <a name="alarmDescription" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.alarmDescription"></a>

```java
public java.lang.String getAlarmDescription();
```

- *Type:* java.lang.String

The description of the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#alarm_description CloudwatchLogAlarm#alarm_description}

---

##### `alarmName`<sup>Optional</sup> <a name="alarmName" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.alarmName"></a>

```java
public java.lang.String getAlarmName();
```

- *Type:* java.lang.String

The name of the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#alarm_name CloudwatchLogAlarm#alarm_name}

---

##### `insufficientDataActions`<sup>Optional</sup> <a name="insufficientDataActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.insufficientDataActions"></a>

```java
public java.util.List<java.lang.String> getInsufficientDataActions();
```

- *Type:* java.util.List<java.lang.String>

The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#insufficient_data_actions CloudwatchLogAlarm#insufficient_data_actions}

---

##### `okActions`<sup>Optional</sup> <a name="okActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.okActions"></a>

```java
public java.util.List<java.lang.String> getOkActions();
```

- *Type:* java.util.List<java.lang.String>

The actions to execute when this alarm transitions to the OK state from any other state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#ok_actions CloudwatchLogAlarm#ok_actions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CloudwatchLogAlarmTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>>

A list of key-value pairs to associate with the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#tags CloudwatchLogAlarm#tags}

---

##### `treatMissingData`<sup>Optional</sup> <a name="treatMissingData" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.treatMissingData"></a>

```java
public java.lang.String getTreatMissingData();
```

- *Type:* java.lang.String

Sets how this alarm is to handle missing data points. Valid values are breaching, notBreaching, ignore, and missing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#treat_missing_data CloudwatchLogAlarm#treat_missing_data}

---

### CloudwatchLogAlarmScheduledQueryConfiguration <a name="CloudwatchLogAlarmScheduledQueryConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_log_alarm.CloudwatchLogAlarmScheduledQueryConfiguration;

CloudwatchLogAlarmScheduledQueryConfiguration.builder()
    .aggregationExpression(java.lang.String)
    .queryString(java.lang.String)
    .scheduleConfiguration(CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration)
    .scheduledQueryRoleArn(java.lang.String)
//  .logGroupIdentifiers(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<CloudwatchLogAlarmScheduledQueryConfigurationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.aggregationExpression">aggregationExpression</a></code> | <code>java.lang.String</code> | The aggregation expression for the scheduled query, e.g. count(*) or avg(latency) by host. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.queryString">queryString</a></code> | <code>java.lang.String</code> | The query string to execute against the specified log groups. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.scheduleConfiguration">scheduleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a></code> | The schedule configuration. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.scheduledQueryRoleArn">scheduledQueryRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role that grants permissions to execute the scheduled query. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.logGroupIdentifiers">logGroupIdentifiers</a></code> | <code>java.util.List<java.lang.String></code> | The log groups to query. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>></code> | A list of key-value pairs to associate with the scheduled query that backs the log alarm. |

---

##### `aggregationExpression`<sup>Required</sup> <a name="aggregationExpression" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.aggregationExpression"></a>

```java
public java.lang.String getAggregationExpression();
```

- *Type:* java.lang.String

The aggregation expression for the scheduled query, e.g. count(*) or avg(latency) by host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#aggregation_expression CloudwatchLogAlarm#aggregation_expression}

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.queryString"></a>

```java
public java.lang.String getQueryString();
```

- *Type:* java.lang.String

The query string to execute against the specified log groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#query_string CloudwatchLogAlarm#query_string}

---

##### `scheduleConfiguration`<sup>Required</sup> <a name="scheduleConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.scheduleConfiguration"></a>

```java
public CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration getScheduleConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a>

The schedule configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#schedule_configuration CloudwatchLogAlarm#schedule_configuration}

---

##### `scheduledQueryRoleArn`<sup>Required</sup> <a name="scheduledQueryRoleArn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.scheduledQueryRoleArn"></a>

```java
public java.lang.String getScheduledQueryRoleArn();
```

- *Type:* java.lang.String

The ARN of the IAM role that grants permissions to execute the scheduled query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#scheduled_query_role_arn CloudwatchLogAlarm#scheduled_query_role_arn}

---

##### `logGroupIdentifiers`<sup>Optional</sup> <a name="logGroupIdentifiers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.logGroupIdentifiers"></a>

```java
public java.util.List<java.lang.String> getLogGroupIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

The log groups to query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#log_group_identifiers CloudwatchLogAlarm#log_group_identifiers}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.tags"></a>

```java
public IResolvable|java.util.List<CloudwatchLogAlarmScheduledQueryConfigurationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>>

A list of key-value pairs to associate with the scheduled query that backs the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#tags CloudwatchLogAlarm#tags}

---

### CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration <a name="CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_log_alarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration;

CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.builder()
    .scheduleExpression(java.lang.String)
    .startTimeOffset(java.lang.Number)
//  .endTimeOffset(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | The expression that defines when the scheduled query runs, e.g. rate(1 minute). |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.property.startTimeOffset">startTimeOffset</a></code> | <code>java.lang.Number</code> | The number of seconds into the past to start the query window. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.property.endTimeOffset">endTimeOffset</a></code> | <code>java.lang.Number</code> | The number of seconds into the past to end the query window. |

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

The expression that defines when the scheduled query runs, e.g. rate(1 minute).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#schedule_expression CloudwatchLogAlarm#schedule_expression}

---

##### `startTimeOffset`<sup>Required</sup> <a name="startTimeOffset" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.property.startTimeOffset"></a>

```java
public java.lang.Number getStartTimeOffset();
```

- *Type:* java.lang.Number

The number of seconds into the past to start the query window.

Must be a positive value and cannot exceed 2592000 seconds (30 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#start_time_offset CloudwatchLogAlarm#start_time_offset}

---

##### `endTimeOffset`<sup>Optional</sup> <a name="endTimeOffset" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.property.endTimeOffset"></a>

```java
public java.lang.Number getEndTimeOffset();
```

- *Type:* java.lang.Number

The number of seconds into the past to end the query window.

Must be a non-negative value and cannot exceed 2592000 seconds (30 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#end_time_offset CloudwatchLogAlarm#end_time_offset}

---

### CloudwatchLogAlarmScheduledQueryConfigurationTags <a name="CloudwatchLogAlarmScheduledQueryConfigurationTags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_log_alarm.CloudwatchLogAlarmScheduledQueryConfigurationTags;

CloudwatchLogAlarmScheduledQueryConfigurationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags.property.key">key</a></code> | <code>java.lang.String</code> | A unique identifier for the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the specified tag key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A unique identifier for the tag.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#key CloudwatchLogAlarm#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#value CloudwatchLogAlarm#value}

---

### CloudwatchLogAlarmTags <a name="CloudwatchLogAlarmTags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_log_alarm.CloudwatchLogAlarmTags;

CloudwatchLogAlarmTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags.property.key">key</a></code> | <code>java.lang.String</code> | A unique identifier for the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the specified tag key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A unique identifier for the tag.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#key CloudwatchLogAlarm#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudwatch_log_alarm#value CloudwatchLogAlarm#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchLogAlarmScheduledQueryConfigurationOutputReference <a name="CloudwatchLogAlarmScheduledQueryConfigurationOutputReference" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_log_alarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference;

new CloudwatchLogAlarmScheduledQueryConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putScheduleConfiguration">putScheduleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resetLogGroupIdentifiers">resetLogGroupIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScheduleConfiguration` <a name="putScheduleConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putScheduleConfiguration"></a>

```java
public void putScheduleConfiguration(CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putScheduleConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CloudwatchLogAlarmScheduledQueryConfigurationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>>

---

##### `resetLogGroupIdentifiers` <a name="resetLogGroupIdentifiers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resetLogGroupIdentifiers"></a>

```java
public void resetLogGroupIdentifiers()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduleConfiguration">scheduleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList">CloudwatchLogAlarmScheduledQueryConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.aggregationExpressionInput">aggregationExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.logGroupIdentifiersInput">logGroupIdentifiersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.queryStringInput">queryStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduleConfigurationInput">scheduleConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduledQueryRoleArnInput">scheduledQueryRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.aggregationExpression">aggregationExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.logGroupIdentifiers">logGroupIdentifiers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.queryString">queryString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduledQueryRoleArn">scheduledQueryRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scheduleConfiguration`<sup>Required</sup> <a name="scheduleConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduleConfiguration"></a>

```java
public CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference getScheduleConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.tags"></a>

```java
public CloudwatchLogAlarmScheduledQueryConfigurationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList">CloudwatchLogAlarmScheduledQueryConfigurationTagsList</a>

---

##### `aggregationExpressionInput`<sup>Optional</sup> <a name="aggregationExpressionInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.aggregationExpressionInput"></a>

```java
public java.lang.String getAggregationExpressionInput();
```

- *Type:* java.lang.String

---

##### `logGroupIdentifiersInput`<sup>Optional</sup> <a name="logGroupIdentifiersInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.logGroupIdentifiersInput"></a>

```java
public java.util.List<java.lang.String> getLogGroupIdentifiersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.queryStringInput"></a>

```java
public java.lang.String getQueryStringInput();
```

- *Type:* java.lang.String

---

##### `scheduleConfigurationInput`<sup>Optional</sup> <a name="scheduleConfigurationInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduleConfigurationInput"></a>

```java
public IResolvable|CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration getScheduleConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a>

---

##### `scheduledQueryRoleArnInput`<sup>Optional</sup> <a name="scheduledQueryRoleArnInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduledQueryRoleArnInput"></a>

```java
public java.lang.String getScheduledQueryRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CloudwatchLogAlarmScheduledQueryConfigurationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>>

---

##### `aggregationExpression`<sup>Required</sup> <a name="aggregationExpression" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.aggregationExpression"></a>

```java
public java.lang.String getAggregationExpression();
```

- *Type:* java.lang.String

---

##### `logGroupIdentifiers`<sup>Required</sup> <a name="logGroupIdentifiers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.logGroupIdentifiers"></a>

```java
public java.util.List<java.lang.String> getLogGroupIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.queryString"></a>

```java
public java.lang.String getQueryString();
```

- *Type:* java.lang.String

---

##### `scheduledQueryRoleArn`<sup>Required</sup> <a name="scheduledQueryRoleArn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduledQueryRoleArn"></a>

```java
public java.lang.String getScheduledQueryRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchLogAlarmScheduledQueryConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a>

---


### CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference <a name="CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_log_alarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference;

new CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.resetEndTimeOffset">resetEndTimeOffset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTimeOffset` <a name="resetEndTimeOffset" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.resetEndTimeOffset"></a>

```java
public void resetEndTimeOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.endTimeOffsetInput">endTimeOffsetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.scheduleExpressionInput">scheduleExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.startTimeOffsetInput">startTimeOffsetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.endTimeOffset">endTimeOffset</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.startTimeOffset">startTimeOffset</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTimeOffsetInput`<sup>Optional</sup> <a name="endTimeOffsetInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.endTimeOffsetInput"></a>

```java
public java.lang.Number getEndTimeOffsetInput();
```

- *Type:* java.lang.Number

---

##### `scheduleExpressionInput`<sup>Optional</sup> <a name="scheduleExpressionInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.scheduleExpressionInput"></a>

```java
public java.lang.String getScheduleExpressionInput();
```

- *Type:* java.lang.String

---

##### `startTimeOffsetInput`<sup>Optional</sup> <a name="startTimeOffsetInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.startTimeOffsetInput"></a>

```java
public java.lang.Number getStartTimeOffsetInput();
```

- *Type:* java.lang.Number

---

##### `endTimeOffset`<sup>Required</sup> <a name="endTimeOffset" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.endTimeOffset"></a>

```java
public java.lang.Number getEndTimeOffset();
```

- *Type:* java.lang.Number

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

---

##### `startTimeOffset`<sup>Required</sup> <a name="startTimeOffset" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.startTimeOffset"></a>

```java
public java.lang.Number getStartTimeOffset();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a>

---


### CloudwatchLogAlarmScheduledQueryConfigurationTagsList <a name="CloudwatchLogAlarmScheduledQueryConfigurationTagsList" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_log_alarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList;

new CloudwatchLogAlarmScheduledQueryConfigurationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.get"></a>

```java
public CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudwatchLogAlarmScheduledQueryConfigurationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>>

---


### CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference <a name="CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_log_alarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference;

new CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchLogAlarmScheduledQueryConfigurationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>

---


### CloudwatchLogAlarmTagsList <a name="CloudwatchLogAlarmTagsList" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_log_alarm.CloudwatchLogAlarmTagsList;

new CloudwatchLogAlarmTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.get"></a>

```java
public CloudwatchLogAlarmTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudwatchLogAlarmTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>>

---


### CloudwatchLogAlarmTagsOutputReference <a name="CloudwatchLogAlarmTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_log_alarm.CloudwatchLogAlarmTagsOutputReference;

new CloudwatchLogAlarmTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchLogAlarmTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>

---



