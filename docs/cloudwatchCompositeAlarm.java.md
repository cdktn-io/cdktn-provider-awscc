# `cloudwatchCompositeAlarm` Submodule <a name="`cloudwatchCompositeAlarm` Submodule" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchCompositeAlarm <a name="CloudwatchCompositeAlarm" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm awscc_cloudwatch_composite_alarm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_composite_alarm.CloudwatchCompositeAlarm;

CloudwatchCompositeAlarm.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .alarmRule(java.lang.String)
//  .actionsEnabled(java.lang.Boolean|IResolvable)
//  .actionsSuppressor(java.lang.String)
//  .actionsSuppressorExtensionPeriod(java.lang.Number)
//  .actionsSuppressorWaitPeriod(java.lang.Number)
//  .alarmActions(java.util.List<java.lang.String>)
//  .alarmDescription(java.lang.String)
//  .alarmName(java.lang.String)
//  .insufficientDataActions(java.util.List<java.lang.String>)
//  .okActions(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<CloudwatchCompositeAlarmTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.alarmRule">alarmRule</a></code> | <code>java.lang.String</code> | Expression which aggregates the state of other Alarms (Metric or Composite Alarms). |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.actionsEnabled">actionsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.actionsSuppressor">actionsSuppressor</a></code> | <code>java.lang.String</code> | Actions will be suppressed if the suppressor alarm is in the ALARM state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.actionsSuppressorExtensionPeriod">actionsSuppressorExtensionPeriod</a></code> | <code>java.lang.Number</code> | Actions will be suppressed if WaitPeriod is active. The length of time that actions are suppressed is in seconds. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.actionsSuppressorWaitPeriod">actionsSuppressorWaitPeriod</a></code> | <code>java.lang.Number</code> | Actions will be suppressed if ExtensionPeriod is active. The length of time that actions are suppressed is in seconds. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.alarmActions">alarmActions</a></code> | <code>java.util.List<java.lang.String></code> | The list of actions to execute when this alarm transitions into an ALARM state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.alarmDescription">alarmDescription</a></code> | <code>java.lang.String</code> | The description of the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.alarmName">alarmName</a></code> | <code>java.lang.String</code> | The name of the Composite Alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.insufficientDataActions">insufficientDataActions</a></code> | <code>java.util.List<java.lang.String></code> | The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.okActions">okActions</a></code> | <code>java.util.List<java.lang.String></code> | The actions to execute when this alarm transitions to the OK state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags">CloudwatchCompositeAlarmTags</a>></code> | A list of key-value pairs to associate with the composite alarm. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `alarmRule`<sup>Required</sup> <a name="alarmRule" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.alarmRule"></a>

- *Type:* java.lang.String

Expression which aggregates the state of other Alarms (Metric or Composite Alarms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#alarm_rule CloudwatchCompositeAlarm#alarm_rule}

---

##### `actionsEnabled`<sup>Optional</sup> <a name="actionsEnabled" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.actionsEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#actions_enabled CloudwatchCompositeAlarm#actions_enabled}

---

##### `actionsSuppressor`<sup>Optional</sup> <a name="actionsSuppressor" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.actionsSuppressor"></a>

- *Type:* java.lang.String

Actions will be suppressed if the suppressor alarm is in the ALARM state.

ActionsSuppressor can be an AlarmName or an Amazon Resource Name (ARN) from an existing alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#actions_suppressor CloudwatchCompositeAlarm#actions_suppressor}

---

##### `actionsSuppressorExtensionPeriod`<sup>Optional</sup> <a name="actionsSuppressorExtensionPeriod" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.actionsSuppressorExtensionPeriod"></a>

- *Type:* java.lang.Number

Actions will be suppressed if WaitPeriod is active. The length of time that actions are suppressed is in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#actions_suppressor_extension_period CloudwatchCompositeAlarm#actions_suppressor_extension_period}

---

##### `actionsSuppressorWaitPeriod`<sup>Optional</sup> <a name="actionsSuppressorWaitPeriod" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.actionsSuppressorWaitPeriod"></a>

- *Type:* java.lang.Number

Actions will be suppressed if ExtensionPeriod is active. The length of time that actions are suppressed is in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#actions_suppressor_wait_period CloudwatchCompositeAlarm#actions_suppressor_wait_period}

---

##### `alarmActions`<sup>Optional</sup> <a name="alarmActions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.alarmActions"></a>

- *Type:* java.util.List<java.lang.String>

The list of actions to execute when this alarm transitions into an ALARM state from any other state.

Specify each action as an Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#alarm_actions CloudwatchCompositeAlarm#alarm_actions}

---

##### `alarmDescription`<sup>Optional</sup> <a name="alarmDescription" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.alarmDescription"></a>

- *Type:* java.lang.String

The description of the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#alarm_description CloudwatchCompositeAlarm#alarm_description}

---

##### `alarmName`<sup>Optional</sup> <a name="alarmName" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.alarmName"></a>

- *Type:* java.lang.String

The name of the Composite Alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#alarm_name CloudwatchCompositeAlarm#alarm_name}

---

##### `insufficientDataActions`<sup>Optional</sup> <a name="insufficientDataActions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.insufficientDataActions"></a>

- *Type:* java.util.List<java.lang.String>

The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state.

Each action is specified as an Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#insufficient_data_actions CloudwatchCompositeAlarm#insufficient_data_actions}

---

##### `okActions`<sup>Optional</sup> <a name="okActions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.okActions"></a>

- *Type:* java.util.List<java.lang.String>

The actions to execute when this alarm transitions to the OK state from any other state.

Each action is specified as an Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#ok_actions CloudwatchCompositeAlarm#ok_actions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags">CloudwatchCompositeAlarmTags</a>>

A list of key-value pairs to associate with the composite alarm.

You can associate as many as 50 tags with an alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#tags CloudwatchCompositeAlarm#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetActionsEnabled">resetActionsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetActionsSuppressor">resetActionsSuppressor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetActionsSuppressorExtensionPeriod">resetActionsSuppressorExtensionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetActionsSuppressorWaitPeriod">resetActionsSuppressorWaitPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetAlarmActions">resetAlarmActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetAlarmDescription">resetAlarmDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetAlarmName">resetAlarmName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetInsufficientDataActions">resetInsufficientDataActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetOkActions">resetOkActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CloudwatchCompositeAlarmTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags">CloudwatchCompositeAlarmTags</a>>

---

##### `resetActionsEnabled` <a name="resetActionsEnabled" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetActionsEnabled"></a>

```java
public void resetActionsEnabled()
```

##### `resetActionsSuppressor` <a name="resetActionsSuppressor" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetActionsSuppressor"></a>

```java
public void resetActionsSuppressor()
```

##### `resetActionsSuppressorExtensionPeriod` <a name="resetActionsSuppressorExtensionPeriod" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetActionsSuppressorExtensionPeriod"></a>

```java
public void resetActionsSuppressorExtensionPeriod()
```

##### `resetActionsSuppressorWaitPeriod` <a name="resetActionsSuppressorWaitPeriod" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetActionsSuppressorWaitPeriod"></a>

```java
public void resetActionsSuppressorWaitPeriod()
```

##### `resetAlarmActions` <a name="resetAlarmActions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetAlarmActions"></a>

```java
public void resetAlarmActions()
```

##### `resetAlarmDescription` <a name="resetAlarmDescription" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetAlarmDescription"></a>

```java
public void resetAlarmDescription()
```

##### `resetAlarmName` <a name="resetAlarmName" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetAlarmName"></a>

```java
public void resetAlarmName()
```

##### `resetInsufficientDataActions` <a name="resetInsufficientDataActions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetInsufficientDataActions"></a>

```java
public void resetInsufficientDataActions()
```

##### `resetOkActions` <a name="resetOkActions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetOkActions"></a>

```java
public void resetOkActions()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchCompositeAlarm resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_composite_alarm.CloudwatchCompositeAlarm;

CloudwatchCompositeAlarm.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_composite_alarm.CloudwatchCompositeAlarm;

CloudwatchCompositeAlarm.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_composite_alarm.CloudwatchCompositeAlarm;

CloudwatchCompositeAlarm.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_composite_alarm.CloudwatchCompositeAlarm;

CloudwatchCompositeAlarm.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudwatchCompositeAlarm.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudwatchCompositeAlarm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudwatchCompositeAlarm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudwatchCompositeAlarm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchCompositeAlarm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList">CloudwatchCompositeAlarmTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsEnabledInput">actionsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorExtensionPeriodInput">actionsSuppressorExtensionPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorInput">actionsSuppressorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorWaitPeriodInput">actionsSuppressorWaitPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmActionsInput">alarmActionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmDescriptionInput">alarmDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmNameInput">alarmNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmRuleInput">alarmRuleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.insufficientDataActionsInput">insufficientDataActionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.okActionsInput">okActionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags">CloudwatchCompositeAlarmTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsEnabled">actionsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressor">actionsSuppressor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorExtensionPeriod">actionsSuppressorExtensionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorWaitPeriod">actionsSuppressorWaitPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmActions">alarmActions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmDescription">alarmDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmName">alarmName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmRule">alarmRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.insufficientDataActions">insufficientDataActions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.okActions">okActions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tags"></a>

```java
public CloudwatchCompositeAlarmTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList">CloudwatchCompositeAlarmTagsList</a>

---

##### `actionsEnabledInput`<sup>Optional</sup> <a name="actionsEnabledInput" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getActionsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `actionsSuppressorExtensionPeriodInput`<sup>Optional</sup> <a name="actionsSuppressorExtensionPeriodInput" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorExtensionPeriodInput"></a>

```java
public java.lang.Number getActionsSuppressorExtensionPeriodInput();
```

- *Type:* java.lang.Number

---

##### `actionsSuppressorInput`<sup>Optional</sup> <a name="actionsSuppressorInput" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorInput"></a>

```java
public java.lang.String getActionsSuppressorInput();
```

- *Type:* java.lang.String

---

##### `actionsSuppressorWaitPeriodInput`<sup>Optional</sup> <a name="actionsSuppressorWaitPeriodInput" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorWaitPeriodInput"></a>

```java
public java.lang.Number getActionsSuppressorWaitPeriodInput();
```

- *Type:* java.lang.Number

---

##### `alarmActionsInput`<sup>Optional</sup> <a name="alarmActionsInput" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmActionsInput"></a>

```java
public java.util.List<java.lang.String> getAlarmActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `alarmDescriptionInput`<sup>Optional</sup> <a name="alarmDescriptionInput" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmDescriptionInput"></a>

```java
public java.lang.String getAlarmDescriptionInput();
```

- *Type:* java.lang.String

---

##### `alarmNameInput`<sup>Optional</sup> <a name="alarmNameInput" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmNameInput"></a>

```java
public java.lang.String getAlarmNameInput();
```

- *Type:* java.lang.String

---

##### `alarmRuleInput`<sup>Optional</sup> <a name="alarmRuleInput" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmRuleInput"></a>

```java
public java.lang.String getAlarmRuleInput();
```

- *Type:* java.lang.String

---

##### `insufficientDataActionsInput`<sup>Optional</sup> <a name="insufficientDataActionsInput" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.insufficientDataActionsInput"></a>

```java
public java.util.List<java.lang.String> getInsufficientDataActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `okActionsInput`<sup>Optional</sup> <a name="okActionsInput" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.okActionsInput"></a>

```java
public java.util.List<java.lang.String> getOkActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CloudwatchCompositeAlarmTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags">CloudwatchCompositeAlarmTags</a>>

---

##### `actionsEnabled`<sup>Required</sup> <a name="actionsEnabled" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getActionsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `actionsSuppressor`<sup>Required</sup> <a name="actionsSuppressor" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressor"></a>

```java
public java.lang.String getActionsSuppressor();
```

- *Type:* java.lang.String

---

##### `actionsSuppressorExtensionPeriod`<sup>Required</sup> <a name="actionsSuppressorExtensionPeriod" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorExtensionPeriod"></a>

```java
public java.lang.Number getActionsSuppressorExtensionPeriod();
```

- *Type:* java.lang.Number

---

##### `actionsSuppressorWaitPeriod`<sup>Required</sup> <a name="actionsSuppressorWaitPeriod" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.actionsSuppressorWaitPeriod"></a>

```java
public java.lang.Number getActionsSuppressorWaitPeriod();
```

- *Type:* java.lang.Number

---

##### `alarmActions`<sup>Required</sup> <a name="alarmActions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmActions"></a>

```java
public java.util.List<java.lang.String> getAlarmActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `alarmDescription`<sup>Required</sup> <a name="alarmDescription" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmDescription"></a>

```java
public java.lang.String getAlarmDescription();
```

- *Type:* java.lang.String

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmName"></a>

```java
public java.lang.String getAlarmName();
```

- *Type:* java.lang.String

---

##### `alarmRule`<sup>Required</sup> <a name="alarmRule" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.alarmRule"></a>

```java
public java.lang.String getAlarmRule();
```

- *Type:* java.lang.String

---

##### `insufficientDataActions`<sup>Required</sup> <a name="insufficientDataActions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.insufficientDataActions"></a>

```java
public java.util.List<java.lang.String> getInsufficientDataActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `okActions`<sup>Required</sup> <a name="okActions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.okActions"></a>

```java
public java.util.List<java.lang.String> getOkActions();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarm.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchCompositeAlarmConfig <a name="CloudwatchCompositeAlarmConfig" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_composite_alarm.CloudwatchCompositeAlarmConfig;

CloudwatchCompositeAlarmConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .alarmRule(java.lang.String)
//  .actionsEnabled(java.lang.Boolean|IResolvable)
//  .actionsSuppressor(java.lang.String)
//  .actionsSuppressorExtensionPeriod(java.lang.Number)
//  .actionsSuppressorWaitPeriod(java.lang.Number)
//  .alarmActions(java.util.List<java.lang.String>)
//  .alarmDescription(java.lang.String)
//  .alarmName(java.lang.String)
//  .insufficientDataActions(java.util.List<java.lang.String>)
//  .okActions(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<CloudwatchCompositeAlarmTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmRule">alarmRule</a></code> | <code>java.lang.String</code> | Expression which aggregates the state of other Alarms (Metric or Composite Alarms). |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.actionsEnabled">actionsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.actionsSuppressor">actionsSuppressor</a></code> | <code>java.lang.String</code> | Actions will be suppressed if the suppressor alarm is in the ALARM state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.actionsSuppressorExtensionPeriod">actionsSuppressorExtensionPeriod</a></code> | <code>java.lang.Number</code> | Actions will be suppressed if WaitPeriod is active. The length of time that actions are suppressed is in seconds. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.actionsSuppressorWaitPeriod">actionsSuppressorWaitPeriod</a></code> | <code>java.lang.Number</code> | Actions will be suppressed if ExtensionPeriod is active. The length of time that actions are suppressed is in seconds. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmActions">alarmActions</a></code> | <code>java.util.List<java.lang.String></code> | The list of actions to execute when this alarm transitions into an ALARM state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmDescription">alarmDescription</a></code> | <code>java.lang.String</code> | The description of the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmName">alarmName</a></code> | <code>java.lang.String</code> | The name of the Composite Alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.insufficientDataActions">insufficientDataActions</a></code> | <code>java.util.List<java.lang.String></code> | The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.okActions">okActions</a></code> | <code>java.util.List<java.lang.String></code> | The actions to execute when this alarm transitions to the OK state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags">CloudwatchCompositeAlarmTags</a>></code> | A list of key-value pairs to associate with the composite alarm. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `alarmRule`<sup>Required</sup> <a name="alarmRule" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmRule"></a>

```java
public java.lang.String getAlarmRule();
```

- *Type:* java.lang.String

Expression which aggregates the state of other Alarms (Metric or Composite Alarms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#alarm_rule CloudwatchCompositeAlarm#alarm_rule}

---

##### `actionsEnabled`<sup>Optional</sup> <a name="actionsEnabled" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.actionsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getActionsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#actions_enabled CloudwatchCompositeAlarm#actions_enabled}

---

##### `actionsSuppressor`<sup>Optional</sup> <a name="actionsSuppressor" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.actionsSuppressor"></a>

```java
public java.lang.String getActionsSuppressor();
```

- *Type:* java.lang.String

Actions will be suppressed if the suppressor alarm is in the ALARM state.

ActionsSuppressor can be an AlarmName or an Amazon Resource Name (ARN) from an existing alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#actions_suppressor CloudwatchCompositeAlarm#actions_suppressor}

---

##### `actionsSuppressorExtensionPeriod`<sup>Optional</sup> <a name="actionsSuppressorExtensionPeriod" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.actionsSuppressorExtensionPeriod"></a>

```java
public java.lang.Number getActionsSuppressorExtensionPeriod();
```

- *Type:* java.lang.Number

Actions will be suppressed if WaitPeriod is active. The length of time that actions are suppressed is in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#actions_suppressor_extension_period CloudwatchCompositeAlarm#actions_suppressor_extension_period}

---

##### `actionsSuppressorWaitPeriod`<sup>Optional</sup> <a name="actionsSuppressorWaitPeriod" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.actionsSuppressorWaitPeriod"></a>

```java
public java.lang.Number getActionsSuppressorWaitPeriod();
```

- *Type:* java.lang.Number

Actions will be suppressed if ExtensionPeriod is active. The length of time that actions are suppressed is in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#actions_suppressor_wait_period CloudwatchCompositeAlarm#actions_suppressor_wait_period}

---

##### `alarmActions`<sup>Optional</sup> <a name="alarmActions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmActions"></a>

```java
public java.util.List<java.lang.String> getAlarmActions();
```

- *Type:* java.util.List<java.lang.String>

The list of actions to execute when this alarm transitions into an ALARM state from any other state.

Specify each action as an Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#alarm_actions CloudwatchCompositeAlarm#alarm_actions}

---

##### `alarmDescription`<sup>Optional</sup> <a name="alarmDescription" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmDescription"></a>

```java
public java.lang.String getAlarmDescription();
```

- *Type:* java.lang.String

The description of the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#alarm_description CloudwatchCompositeAlarm#alarm_description}

---

##### `alarmName`<sup>Optional</sup> <a name="alarmName" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.alarmName"></a>

```java
public java.lang.String getAlarmName();
```

- *Type:* java.lang.String

The name of the Composite Alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#alarm_name CloudwatchCompositeAlarm#alarm_name}

---

##### `insufficientDataActions`<sup>Optional</sup> <a name="insufficientDataActions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.insufficientDataActions"></a>

```java
public java.util.List<java.lang.String> getInsufficientDataActions();
```

- *Type:* java.util.List<java.lang.String>

The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state.

Each action is specified as an Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#insufficient_data_actions CloudwatchCompositeAlarm#insufficient_data_actions}

---

##### `okActions`<sup>Optional</sup> <a name="okActions" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.okActions"></a>

```java
public java.util.List<java.lang.String> getOkActions();
```

- *Type:* java.util.List<java.lang.String>

The actions to execute when this alarm transitions to the OK state from any other state.

Each action is specified as an Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#ok_actions CloudwatchCompositeAlarm#ok_actions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CloudwatchCompositeAlarmTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags">CloudwatchCompositeAlarmTags</a>>

A list of key-value pairs to associate with the composite alarm.

You can associate as many as 50 tags with an alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#tags CloudwatchCompositeAlarm#tags}

---

### CloudwatchCompositeAlarmTags <a name="CloudwatchCompositeAlarmTags" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_composite_alarm.CloudwatchCompositeAlarmTags;

CloudwatchCompositeAlarmTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags.property.key">key</a></code> | <code>java.lang.String</code> | A unique identifier for the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the specified tag key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A unique identifier for the tag.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#key CloudwatchCompositeAlarm#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#value CloudwatchCompositeAlarm#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchCompositeAlarmTagsList <a name="CloudwatchCompositeAlarmTagsList" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_composite_alarm.CloudwatchCompositeAlarmTagsList;

new CloudwatchCompositeAlarmTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.get"></a>

```java
public CloudwatchCompositeAlarmTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags">CloudwatchCompositeAlarmTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudwatchCompositeAlarmTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags">CloudwatchCompositeAlarmTags</a>>

---


### CloudwatchCompositeAlarmTagsOutputReference <a name="CloudwatchCompositeAlarmTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudwatch_composite_alarm.CloudwatchCompositeAlarmTagsOutputReference;

new CloudwatchCompositeAlarmTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags">CloudwatchCompositeAlarmTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchCompositeAlarmTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudwatchCompositeAlarm.CloudwatchCompositeAlarmTags">CloudwatchCompositeAlarmTags</a>

---



